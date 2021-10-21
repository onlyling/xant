import React, { useMemo, useEffect, useState, memo, isValidElement } from 'react';
import type { ViewStyle } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

import PickerColumn from './column';
import { useTheme } from '../theme';
import Loading from '../loading';
import { isDef, isObject, isArray } from '../helpers/typeof';
import type { PickerProps, PickerObjectOption, PickerObjectColumn, PickerValue } from './interface';
import { createStyles } from './style';

const findNextAllColumns = (column: PickerObjectOption[]) => {
  const options: PickerObjectOption[][] = [];
  const values: PickerValue[] = [];

  const findNext = (c: PickerObjectOption[]) => {
    if (c.length) {
      options.push(c);
      values.push(c[0].value);

      const cc = c[0].children || [];

      if (cc.length) {
        findNext(cc);
      }
    }
  };

  findNext(column);

  return {
    options,
    values,
  };
};

const findAllColumnsByValues = (column: PickerObjectOption[], values: PickerValue[]) => {
  const options: PickerObjectOption[][] = [];

  let currentColumn = column;

  values.forEach((value) => {
    options.push(currentColumn);

    const nextIndex = currentColumn.findIndex((item) => item.value === value);

    currentColumn = currentColumn[nextIndex]?.children || [];
  });

  return options;
};

/**
 * 自定义输入项
 */
const Picker: React.FC<PickerProps> = ({
  visibleItemCount = 6,
  itemHeight = 40,
  cancelButtonText = '取消',
  confirmButtonText = '确定',
  title,
  showToolbar = true,
  toolbarPosition = 'top',
  loading = false,
  columns,
  defaultValue,
  value,
}) => {
  const columnsHeight = visibleItemCount * itemHeight;
  const markMargin = itemHeight / 2;
  const { themeVar } = useTheme();
  const Styles = createStyles(themeVar);
  const dataType = useMemo(() => {
    const firstColumn = columns[0];
    if (isObject(firstColumn)) {
      if ('children' in firstColumn) {
        return 'cascade';
      }
      if ('options' in firstColumn) {
        return 'object';
      }
    }

    if (isArray(firstColumn as PickerObjectOption[])) {
      return 'array';
    }

    return 'plain';
  }, [columns]);

  const [state, setState] = useState<{ options: PickerObjectOption[][]; values: PickerValue[] }>({
    options: [],
    values: isDef(defaultValue) ? (dataType === 'plain' ? [defaultValue as PickerValue] : (defaultValue as PickerValue[])) : [],
  });

  useEffect(() => {
    // 初始化数据
    switch (dataType) {
      case 'cascade':
        setState((v) => {
          if (!v.values.length) {
            return {
              ...v,
              ...findNextAllColumns(columns as PickerObjectOption[]),
            };
          }

          return {
            ...v,
            options: findAllColumnsByValues(columns as PickerObjectOption[], v.values),
          };
        });

        break;

      case 'object':
        setState((v) => {
          const options: PickerObjectOption[][] = [];
          const values: PickerValue[] = [];

          (columns as PickerObjectColumn[]).forEach((item) => {
            options.push(item.options);
            const valueIndex = item.options.findIndex((p) => p.value === item.defaultValue);

            values.push(valueIndex > -1 ? item.options[valueIndex].value : item.options[0].value);
          });

          return {
            ...v,
            options,
            values: v.values.length ? v.values : values,
          };
        });

        break;

      case 'array':
        setState((v) => ({
          ...v,
          options: columns as PickerObjectOption[][],
          values: v.values.length ? v.values : (columns as PickerObjectOption[][]).map((c) => c[0].value),
        }));
        break;

      default:
        const firstColumn = columns[0] as PickerObjectOption;
        setState((v) => ({
          options: [columns as PickerObjectOption[]],
          values: v.values.length ? v.values : [firstColumn.value],
        }));
        break;
    }
  }, [columns, dataType]);

  // 同步 value
  useEffect(() => {
    if (isDef(value)) {
      setState((s) => ({
        ...s,
        values: dataType === 'plain' ? [value as PickerValue] : (value as PickerValue[]),
      }));
    }
  }, [value, dataType]);

  const onPressBtn = () => {
    const selectedColumns = state.values.map((v, index) => {
      const vIndex = state.options[index].findIndex((o) => o.value === v);

      return state.options[index][vIndex];
    });

    console.log('values  ->  ', state.values);
    console.log('selectedColumns  ->  ', selectedColumns);
  };

  const bodyStyles: ViewStyle = {
    height: columnsHeight,
    backgroundColor: '#fff',
    flexDirection: 'row',
    overflow: 'hidden',
    marginHorizontal: themeVar.padding_md,
  };
  const maskTopStyleSummary = StyleSheet.flatten<ViewStyle>([
    Styles.mask,
    {
      top: 0,
      bottom: '50%',
      borderBottomWidth: StyleSheet.hairlineWidth,
      transform: [
        {
          translateY: -markMargin,
        },
      ],
    },
  ]);
  const maskBottomStyleSummary = StyleSheet.flatten<ViewStyle>([
    Styles.mask,
    {
      top: '50%',
      bottom: 0,
      borderTopWidth: StyleSheet.hairlineWidth,
      transform: [
        {
          translateY: markMargin,
        },
      ],
    },
  ]);

  const titleJSX = isDef(title) ? isValidElement(title) ? title : <Text style={Styles.titleText}>{title}</Text> : null;

  const headerTitleJSX = (
    <View style={Styles.header}>
      <Text style={Styles.cancelText} onPress={onPressBtn}>
        {cancelButtonText}
      </Text>
      {titleJSX}
      <Text style={Styles.confirmText} onPress={onPressBtn}>
        {confirmButtonText}
      </Text>
    </View>
  );

  return (
    <View style={Styles.picker}>
      {loading ? <Loading style={Styles.loading} /> : null}

      {showToolbar && toolbarPosition === 'top' ? headerTitleJSX : null}

      <View style={bodyStyles}>
        <View style={maskTopStyleSummary} pointerEvents="none" />

        <View style={maskBottomStyleSummary} pointerEvents="none" />

        {state.options.map((item, index) => {
          return (
            <PickerColumn
              key={index}
              itemHeight={itemHeight}
              visibleItemCount={visibleItemCount}
              options={item}
              defaultValue={state.values?.[index]}
              onChangeValue={(column) => {
                // 如果是 cascade 需要重置选项
                switch (dataType) {
                  case 'cascade':
                    const nextAll = findNextAllColumns(column?.children || []);

                    setState((v) => {
                      const options = v.options.slice(0, index + 1).concat(nextAll.options);
                      const values = v.values.slice(0, index).concat(column?.value).concat(nextAll.values);

                      return {
                        ...v,
                        options,
                        values,
                      };
                    });

                    break;

                  default:
                    setState((v) => {
                      return {
                        ...v,
                        values: v.values.map((vValue, vIndex) => {
                          if (index === vIndex) {
                            return column?.value;
                          }
                          return vValue;
                        }),
                      };
                    });
                    break;
                }
              }}
            />
          );
        })}
      </View>

      {showToolbar && toolbarPosition === 'bottom' ? headerTitleJSX : null}
    </View>
  );
};

export default memo(Picker);
