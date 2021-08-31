import React from 'react';
import { Text, ScrollView } from 'react-native';

import { Cell, CellGroup, Icon, useTheme } from 'xant';

const BasicCell: React.FC = () => {
  const { themeVar } = useTheme();

  return (
    <ScrollView>
      <CellGroup title="基础用法">
        <Cell title={<Text style={{ color: '#f30', lineHeight: themeVar.cell_line_height }}>单元格</Text>} value="内容" />

        <Cell title="单元格" value="内容" label="一些简单的描述" />

        <Cell required title="单元格" />

        <Cell
          title="单元格"
          value="内容"
          onPress={() => {
            console.log('?0.0');
          }}
        />

        <Cell
          title="单元格"
          value="内容"
          onPress={() => {
            console.log('!0.0');
          }}
        />
      </CellGroup>

      <CellGroup title="单元格大小">
        <Cell title="单元格" value="内容" label="一些简单的描述" />

        <Cell required title="单元格" value="large" label="一些简单的描述" size="large" />
      </CellGroup>

      <CellGroup title="展示图标">
        <Cell title="单元格" value="内容" label="一些简单的描述" icon={<Icon.IconArrowOutline />} />
      </CellGroup>

      <CellGroup title="只设置 value">
        <Cell value="内容" />
      </CellGroup>

      <CellGroup title="展示箭头">
        <Cell
          title="单元格"
          value="内容"
          label="一些简单的描述"
          isLink
          onPress={() => {
            console.log('单元格');
          }}
        />

        <Cell title="单元格" value="内容" isLink arrowDirection="left" />

        <Cell title="单元格" value="内容" isLink arrowDirection="up" />

        <Cell title="单元格" value="内容" isLink arrowDirection="down" />

        <Cell title="单元格" value="内容" rightIcon={<Icon.IconArrowOutline />} />
      </CellGroup>

      <CellGroup title="垂直居中">
        <Cell title="单元格" value="内容" label="一些简单的描述" isLink center />
      </CellGroup>

      <CellGroup title="分组头">
        <Cell title="单元格" value="内容" label="一些简单的描述" isLink center />

        <Cell title="单元格" value="内容" label="一些简单的描述" border={false} isLink center />
      </CellGroup>

      <CellGroup title={<Text style={{ color: '#690' }}>分组头</Text>}>
        <Cell title="单元格" value="内容" label="一些简单的描述" isLink center />

        <Cell title="单元格" value="内容" label="一些简单的描述" border={false} isLink center />
      </CellGroup>
    </ScrollView>
  );
};

export default BasicCell;
