import React from 'react';
import { View, ScrollView } from 'react-native';

import { Picker, PickerObjectOption } from 'xant';

const columns1 = new Array(10).fill(0).map((_, index) => ({
  label: `选项${index}`,
  value: `${index}`,
  // disabled: true,
}));

const columns2 = [columns1, columns1, columns1, columns1];

const columns3 = [
  {
    options: columns1,
    defaultValue: '4',
  },
  {
    options: columns1,
    defaultValue: '2',
  },
  {
    options: columns1,
    defaultValue: '6',
  },
];

const buildChildren = (num: number, valuePrefix: string, labelPrefix: string, insertChildren?: (value: string, label: string) => PickerObjectOption[]) => {
  return new Array(num).fill(0).map((_, index) => ({
    label: `${labelPrefix}_${index}`,
    value: `${valuePrefix}_${index}`,
    children: insertChildren ? insertChildren(`${valuePrefix}_${index}`, `${labelPrefix}_${index}`) : null,
  }));
};

const columns4 = buildChildren(8, 'sj', '省级', (sjValue, sjLabel) =>
  buildChildren(6, sjValue.replace('sj', 'sq'), sjLabel.replace('省级', '市区'), (sqValue, sqLabel) =>
    buildChildren(4, sqValue.replace('sq', 'qx'), sqLabel.replace('市区', '区县')),
  ),
);

const BasicPicker: React.FC = () => {
  return (
    <ScrollView>
      <View
        style={{
          padding: 20,
        }}
      >
        <Picker columns={columns1} title="单列" />
      </View>

      <View
        style={{
          padding: 20,
        }}
      >
        <Picker columns={columns2} title="多列" />
      </View>

      <View
        style={{
          padding: 20,
        }}
      >
        <Picker columns={columns3} title="多列带默认值" />
      </View>

      <View
        style={{
          padding: 20,
        }}
      >
        <Picker columns={columns4} title="级联选择" />
      </View>

      <View
        style={{
          padding: 20,
        }}
      >
        <Picker columns={columns1} title="啊哈" loading />
      </View>
    </ScrollView>
  );
};

export default BasicPicker;
