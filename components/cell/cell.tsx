import React, { memo } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

import type { CellProps } from './interface';
import { createStyles } from './style.cell';
import { useTheme } from '../theme';
import ArrowIcon from '../icon/arrow';

/**
 * Cell 单元格
 * @description 单元格为列表中的单个展示项。
 */
const Cell: React.FC<CellProps> = ({
  innerStyle,
  leftWrapperStyle,
  titleStyle,
  titleTextStyle,
  valueStyle,
  valueTextStyle,
  labelTextStyle,
  title,
  value,
  label,
  size,
  border = true,
  center = false,
  icon,
  isLink = false,
  arrowDirection = 'right',
  rightIcon,
  required = false,
  underlayColor,
  style,
  ...otherProps
}) => {
  const { themeVar } = useTheme();
  const Styles = createStyles(themeVar, { size, title, label, border, center });
  const isValueAlone = !title && !label;

  const cellStyleSummary: ViewStyle = StyleSheet.flatten([Styles.cell, style]);
  const innerStyleSummary: ViewStyle = StyleSheet.flatten([Styles.wrapper, innerStyle]);
  const leftWrapperStyleSummary: ViewStyle = StyleSheet.flatten([Styles.leftWrapper, leftWrapperStyle]);
  const titleStyleSummary: ViewStyle = StyleSheet.flatten([Styles.title, titleStyle]);
  const titleTextStyleSummary: TextStyle = StyleSheet.flatten([Styles.titleText, titleTextStyle]);
  const valueStyleSummary: ViewStyle = StyleSheet.flatten([Styles.value, valueStyle]);
  const valueTextStyleSummary: TextStyle = StyleSheet.flatten([Styles.valueText, valueTextStyle]);
  const labelTextStyleSummary: TextStyle = StyleSheet.flatten([Styles.labelText, labelTextStyle]);

  /** 左侧标题 可能是自定义 JSX */
  const titleJSX = title ? React.isValidElement(title) ? title : <Text style={titleTextStyleSummary}>{title}</Text> : null;

  /** 右侧文案 可能是自定义 JSX */
  const valueJSX = value ? React.isValidElement(value) ? value : <Text style={valueTextStyleSummary}>{value}</Text> : null;

  /** 下方文案 可能是自定义 JSX */
  const labelJSX = label ? React.isValidElement(label) ? label : <Text style={labelTextStyleSummary}>{label}</Text> : null;

  /** 箭头 */
  const arrowJSX = isLink ? <ArrowIcon direction={arrowDirection} size={themeVar.cell_icon_size} color={themeVar.cell_right_icon_color} /> : rightIcon ? rightIcon : null;

  /** 必填、红点 */
  const requiredJSX = required ? (
    <View style={Styles.required}>
      <Text style={Styles.requiredText}>*</Text>
    </View>
  ) : null;

  return (
    <TouchableHighlight
      underlayColor={
        // 一定要绑定 Press 事件才有这个效果
        underlayColor || themeVar.cell_active_color
      }
      {...otherProps}
      style={cellStyleSummary}
    >
      <View style={innerStyleSummary}>
        {requiredJSX || icon || !isValueAlone ? (
          <View style={leftWrapperStyleSummary}>
            {requiredJSX}

            {icon ? <View style={Styles.iconLeft}>{icon}</View> : null}

            {isValueAlone ? null : (
              <View style={titleStyleSummary}>
                <View>{titleJSX}</View>
                <View>{labelJSX}</View>
              </View>
            )}
          </View>
        ) : null}

        {valueJSX ? <View style={valueStyleSummary}>{valueJSX}</View> : null}

        {arrowJSX ? <View style={Styles.iconRight}>{arrowJSX}</View> : null}
      </View>
    </TouchableHighlight>
  );
};

export default memo(Cell);
