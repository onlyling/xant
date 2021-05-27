import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import type { FieldProps } from './interface';
import { createStyles } from './style';
import { useTheme } from '../theme';
import Cell from '../cell';
import TextInput from '../text-input';
import * as TypeofHelpers from '../helpers/typeof';

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
  ...resetProps
}) => {
  const { themeVar } = useTheme();
  const Styles = createStyles(themeVar);

  const cellProps = {
    innerStyle,
    title: TypeofHelpers.isDef(label) && !React.isValidElement(label) ? `${label}${colon ? colonLabel : ''}` : label,
    titleStyle: labelStyle,
    titleTextStyle: StyleSheet.flatten([
      Styles.label,
      {
        textAlign: labelAlign,
      },
      labelTextStyle,
    ]),
    valueStyle,
    size,
    required,
    border,
    center,
  };

  return <Cell {...cellProps} leftWrapperStyle={Styles.leftWrapper} value={<TextInput {...resetProps} />} />;
};

export default memo(Field);
