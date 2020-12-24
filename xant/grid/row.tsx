import React, { memo } from 'react';
import { View, ViewStyle } from 'react-native';

import { RowProps } from './interface';
import RowContext from './context';
import Styles from './style';

const Row: React.FC<RowProps> = ({ children, gutter = 0, style }) => {
  const rowStyles: (ViewStyle | undefined)[] = [
    Styles.row,
    {
      marginHorizontal: -(+gutter / 2),
    },
    style,
    // to test ui
    // {
    //   backgroundColor: '#666',
    // },
  ];

  // console.log(-(+gutter / 2));

  return (
    <RowContext.Provider value={{ gutter }}>
      <View style={rowStyles}>{children}</View>
    </RowContext.Provider>
  );
};

export default memo<typeof Row>(Row);
