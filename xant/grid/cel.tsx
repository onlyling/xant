import React, { useContext, memo } from 'react';
import { View, ViewStyle } from 'react-native';

import { CelProps } from './interface';
import RowContext from './context';

const BASE_SPAN_WIDTH = 100 / 24;

const Cel: React.FC<CelProps> = ({ children, style, span, offset = 0 }) => {
  const { gutter = 0 } = useContext(RowContext);
  const width = `${+span * BASE_SPAN_WIDTH}%`;
  const left = `${+offset * BASE_SPAN_WIDTH}%`;

  const celStyles: (ViewStyle | undefined)[] = [
    {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: width,
      paddingHorizontal: +gutter / 2,
      marginLeft: left,
    },
    style,
    // to test ui
    // {
    //   backgroundColor: '#000',
    // },
  ];

  return <View style={celStyles}>{children}</View>;
};

export default memo<typeof Cel>(Cel);
