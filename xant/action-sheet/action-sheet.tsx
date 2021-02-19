import React, { memo } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TextStyle,
} from 'react-native';

import { ActionSheetProps } from './interface';
import { createStyles } from './style';
import { Theme } from '../theme';
import Popup from '../popup/popup';
import Loading from '../loading/circular';

/**
 * ActionSheet 动作面板
 * @description 底部弹起的模态面板，包含与当前情境相关的多个选项。
 */
const ActionSheet: React.FC<ActionSheetProps> = ({
  actions,
  title,
  cancelText,
  description,
  round = true,
  onCancel,
  onSelect,
  ...restProps
}) => {
  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar);

  /** 标题部分 纯文字或自定义 JSX */
  const TitleJSX = title ? (
    React.isValidElement(title) ? (
      title
    ) : (
      <Text style={Styles.title}>{title}</Text>
    )
  ) : null;

  /** 取消文案 纯文字或自定义 JSX */
  const CancelTextJSX = cancelText ? (
    React.isValidElement(cancelText) ? (
      cancelText
    ) : (
      <Text style={[Styles.btn, Styles.cancel]}>{cancelText}</Text>
    )
  ) : null;

  /** 描述文案 纯文字或自定义 JSX */
  const DescriptionJSX = description ? (
    React.isValidElement(description) ? (
      description
    ) : (
      <Text style={Styles.description}>{description}</Text>
    )
  ) : null;

  return (
    <Popup {...restProps} position="bottom" round={round}>
      {TitleJSX}
      {DescriptionJSX}

      <ScrollView style={Styles.content}>
        {actions.map((item, index) => {
          /** 选项的自定义颜色/配置 */
          const customTextStyle: TextStyle = {};

          if (item.color) {
            customTextStyle.color = item.color;
          }

          if (item.disabled) {
            customTextStyle.color =
              themeVar.action_sheet_item_disabled_text_color;
          }

          return (
            <TouchableHighlight
              key={`${item.name}_${item.subname}_${index}`}
              activeOpacity={1}
              underlayColor={
                item.disabled || item.loading
                  ? themeVar.action_sheet_item_background
                  : themeVar.active_color
              }
              onPress={() => {
                if (!item.disabled && !item.loading) {
                  onSelect && onSelect(item, index);
                }
              }}
            >
              <View style={Styles.btn}>
                {item.loading ? (
                  <Loading
                    size={themeVar.action_sheet_loading_icon_size}
                    color={themeVar.action_sheet_item_disabled_text_color}
                  />
                ) : (
                  <>
                    <Text style={[Styles.item, customTextStyle]}>
                      {item.name}
                    </Text>
                    {item.subname ? (
                      <Text style={[Styles.item, Styles.subname]}>
                        {item.subname}
                      </Text>
                    ) : null}
                  </>
                )}
              </View>
            </TouchableHighlight>
          );
        })}
      </ScrollView>

      {CancelTextJSX ? (
        <>
          <View style={Styles.gap} />
          <TouchableHighlight
            activeOpacity={1}
            underlayColor={themeVar.active_color}
            onPress={onCancel}
          >
            {CancelTextJSX}
          </TouchableHighlight>
        </>
      ) : null}
    </Popup>
  );
};

export default memo(ActionSheet);
