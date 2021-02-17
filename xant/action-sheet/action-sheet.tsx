import React, { memo } from 'react';
import { Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';

import { ActionSheetProps } from './interface';
import { createStyles } from './style';
import { Theme } from '../theme';
import Popup from '../popup/popup';

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
        {actions.map((item) => {
          return (
            <TouchableWithoutFeedback key={`${item.name}_${item.subname}`}>
              <View style={Styles.btn}>
                <Text style={Styles.item}>{item.name}</Text>
                {item.subname ? (
                  <Text style={[Styles.item, Styles.subname]}>
                    {item.subname}
                  </Text>
                ) : null}
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>

      {CancelTextJSX ? (
        <>
          <View style={Styles.gap} />
          {CancelTextJSX}
        </>
      ) : null}
    </Popup>
  );
};

export default memo(ActionSheet);
