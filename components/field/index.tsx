import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import type { FieldProps } from './interface';
import { createStyles } from './style';
import { useTheme } from '../theme';
import Cell from '../cell/cell';
import TextInput from '../text-input';
import { isDef } from '../helpers/typeof';

/**
 * 自定义输入项
 */
const Field: React.FC<FieldProps> = ({
  innerStyle,
  label,
  labelStyle,
  labelTextStyle,
  valueStyle,
  size,
  required,
  border,
  center,
  labelAlign = 'left',
  colon = false,
  colonLabel = '：',

  // TextInput 的属性
  ...resetProps
}) => {
  const { themeVar } = useTheme();
  const Styles = createStyles(themeVar);
  const isTextArea = resetProps.type === 'textarea';

  if (isTextArea && !isDef(resetProps.showBorder)) {
    resetProps.showBorder = true;
  }

  const cellProps = {
    innerStyle,
    title: isDef(label) && !React.isValidElement(label) ? `${label}${colon ? colonLabel : ''}` : label,
    titleStyle: labelStyle,
    titleTextStyle: StyleSheet.flatten([
      Styles.label,
      {
        textAlign: labelAlign,
      },
      labelTextStyle,
    ]),
    valueStyle: [
      valueStyle,
      isTextArea
        ? null
        : {
            marginVertical: -themeVar.cell_vertical_padding,
          },
    ],
    size,
    required,
    border,
    center,
  };

  return <Cell {...cellProps} leftWrapperStyle={Styles.leftWrapper} value={<TextInput {...resetProps} />} />;
};

export default memo(Field);
