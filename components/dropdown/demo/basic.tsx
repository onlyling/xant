import React, { useState } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CellGroup, DropdownMenu, DropdownItem } from 'xant';

const itemOptions = [
  { text: '全部商品', value: '' },
  { text: '商品分类1', value: 1 },
  { text: '商品分类2', value: 2 },
  { text: '商品分类3', value: 3 },
];

const BasicDropdown: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [upTop, setUpTop] = useState(0);
  const [values, setValues] = useState({
    v1: itemOptions[0].value,
    v2: itemOptions[0].value,
    v3: itemOptions[0].value,
    v4: itemOptions[0].value,
  });

  return (
    <>
      <CellGroup title="基础用法">
        <DropdownMenu top={32 + 46 + insets.top}>
          <DropdownItem
            options={itemOptions}
            value={values.v1}
            onChange={(v) => {
              setValues((s) => ({
                ...s,
                v1: v,
              }));
            }}
          />
          <DropdownItem
            disabled
            options={itemOptions}
            value={values.v2}
            onChange={(v) => {
              setValues((s) => ({
                ...s,
                v2: v,
              }));
            }}
          />
        </DropdownMenu>

        <View
          style={{ height: 200 }}
          onLayout={(e) => {
            console.log();
            setUpTop(32 + 46 + e.nativeEvent.layout.y + 200 + insets.top);
          }}
        />

        <DropdownMenu top={upTop} direction="up" activeColor="#f30">
          <DropdownItem
            options={itemOptions}
            value={values.v3}
            onChange={(v) => {
              setValues((s) => ({
                ...s,
                v3: v,
              }));
            }}
          />
          <DropdownItem
            options={itemOptions}
            value={values.v4}
            onChange={(v) => {
              setValues((s) => ({
                ...s,
                v4: v,
              }));
            }}
          />
        </DropdownMenu>
      </CellGroup>
    </>
  );
};

export default BasicDropdown;
