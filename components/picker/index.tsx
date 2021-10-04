import React, { memo } from 'react';
import type { ViewStyle } from 'react-native';
import { View, StyleSheet } from 'react-native';

import type { PickerProps } from './interface';
import PickerColumn from './column';

const mockData = [
  {
    label: '11111111',
    value: 1,
    disabled: true,
  },
  {
    label: '2111',
    value: 2,
  },
  {
    label: '3111111',
    value: 3,
    disabled: true,
  },
  {
    label: '411111',
    value: 4,
  },
  {
    label: '511111',
    value: 5,
  },
  {
    label: '611111',
    value: 6,
  },
  {
    label: '711111',
    value: 7,
  },
  {
    label: '811111',
    value: 8,
  },
  {
    label: '911111',
    value: 9,
    disabled: true,
  },
];

/**
 * 自定义输入项
 */
const Picker: React.FC<PickerProps> = ({ visibleItemCount = 6, itemHeight = 44 }) => {
  const columnsHeight = visibleItemCount * itemHeight;

  const columnsStyles = StyleSheet.flatten<ViewStyle>([
    {
      height: columnsHeight,
      backgroundColor: '#fff',
      flexDirection: 'row',
      overflow: 'hidden',
    },
  ]);

  return (
    <View>
      <View style={columnsStyles}>
        <PickerColumn
          itemHeight={itemHeight}
          options={mockData}
          visibleItemCount={visibleItemCount}
          defaultValue={1}
          onChangeValue={(v) => {
            console.log(v);
          }}
        />
        <PickerColumn
          itemHeight={itemHeight}
          options={mockData}
          visibleItemCount={visibleItemCount}
          onChangeValue={(v) => {
            console.log(v);
          }}
        />
        <PickerColumn
          itemHeight={itemHeight}
          options={mockData}
          visibleItemCount={visibleItemCount}
          onChangeValue={(v) => {
            console.log(v);
          }}
        />
      </View>
    </View>
  );
};

export default memo(Picker);
