import React, { memo } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { CellProps } from './interface';
import { createStyles } from './style.cell';
import { Theme } from '../theme';

/**
 * 单元格
 */
const Cell: React.FC<CellProps> = ({
  wrapperStyle,
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
  clickable = false,
  underlayColor = '#f2f3f5',
  activeOpacity = 1,
  style,
  ...otherProps
}) => {
  if (isLink) {
    clickable = true;
  }

  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar, { size, title, label, border, center });
  const isValueAlone = !title && !label;

  const wrapperTouchableThemeStyles = [Styles.wrapperTouchable, style];
  const wrapperStyles = [Styles.wrapper, wrapperStyle];
  const titleStyles = [Styles.title, titleStyle];
  const titleTextStyles = [Styles.titleText, titleTextStyle];
  const valueStyles = [Styles.value, valueStyle];
  const valueTextStyles = [Styles.valueText, valueTextStyle];
  const labelTextStyles = [Styles.labelText, labelTextStyle];
  const iconLeftStyles = [Styles.iconLeft];
  const arrowStyles = [Styles.arrow];
  const requiredStyles = [Styles.required];

  /** 左侧标题 可能是自定义 JSX */
  const TitleJSX = title ? (
    React.isValidElement(title) ? (
      title
    ) : (
      <Text style={titleTextStyles}>{title}</Text>
    )
  ) : null;

  /** 右侧文案 可能是自定义 JSX */
  const ValueJSX = value ? (
    React.isValidElement(value) ? (
      value
    ) : (
      <Text style={valueTextStyles}>{value}</Text>
    )
  ) : null;

  /** 下方文案 可能是自定义 JSX */
  const LabelJSX = label ? (
    React.isValidElement(label) ? (
      label
    ) : (
      <Text style={labelTextStyles}>{label}</Text>
    )
  ) : null;

  /** 箭头 */
  const ArrowJSX = isLink ? (
    <Icon name={arrowDirection} />
  ) : rightIcon ? (
    rightIcon
  ) : null;

  /** 必填、红点 */
  const RequiredJSX = required ? <Text style={requiredStyles}>*</Text> : null;

  return (
    <TouchableHighlight
      underlayColor={clickable ? underlayColor : 'transparent'}
      activeOpacity={activeOpacity}
      {...otherProps}
      style={wrapperTouchableThemeStyles}
    >
      <View style={wrapperStyles}>
        {RequiredJSX}

        {icon ? <Text style={iconLeftStyles}>{icon}</Text> : null}

        {isValueAlone ? null : (
          <View style={titleStyles}>
            <View>{TitleJSX}</View>
            <View>{LabelJSX}</View>
          </View>
        )}

        <View style={valueStyles}>{ValueJSX}</View>

        {ArrowJSX ? <Text style={arrowStyles}>{ArrowJSX}</Text> : null}
      </View>
    </TouchableHighlight>
  );
};

export default memo(Cell);
