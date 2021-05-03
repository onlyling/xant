import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Cell, CellGroup, Icon } from 'xant';

const BasicCell: React.FC = () => {
  return (
    <ScrollView>
      <View>
        <Text>基础用法</Text>
      </View>

      <View style={{ height: 20 }} />

      <Cell
        title={<Text style={{ color: '#f30' }}>单元格</Text>}
        value="内容"
      />

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

      <View style={{ height: 20 }} />

      <View>
        <Text>单元格大小</Text>
      </View>

      <View style={{ height: 20 }} />

      <Cell title="单元格" value="内容" label="一些简单的描述" />

      <Cell
        required
        title="单元格"
        value="large"
        label="一些简单的描述"
        size="large"
      />

      <View style={{ height: 20 }} />

      <View>
        <Text>展示图标</Text>
      </View>

      <View style={{ height: 20 }} />

      <Cell
        title="单元格"
        value="内容"
        label="一些简单的描述"
        icon={<Icon.IconArrowOutline />}
      />

      <View style={{ height: 20 }} />

      <View>
        <Text>只设置 value</Text>
      </View>

      <View style={{ height: 20 }} />

      <Cell value="内容" />

      <View style={{ height: 20 }} />

      <View>
        <Text>展示箭头</Text>
      </View>

      <View style={{ height: 20 }} />

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

      <View style={{ height: 20 }} />

      <View>
        <Text>垂直居中</Text>
      </View>

      <View style={{ height: 20 }} />

      <Cell title="单元格" value="内容" label="一些简单的描述" isLink center />

      <View style={{ height: 20 }} />

      <View>
        <Text>分组</Text>
      </View>

      <CellGroup title="分组头">
        <Cell
          title="单元格"
          value="内容"
          label="一些简单的描述"
          isLink
          center
        />

        <Cell
          title="单元格"
          value="内容"
          label="一些简单的描述"
          border={false}
          isLink
          center
        />
      </CellGroup>

      <View style={{ height: 20 }} />

      <CellGroup title={<Text style={{ color: '#690' }}>分组头</Text>}>
        <Cell
          title="单元格"
          value="内容"
          label="一些简单的描述"
          isLink
          center
        />

        <Cell
          title="单元格"
          value="内容"
          label="一些简单的描述"
          border={false}
          isLink
          center
        />
      </CellGroup>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
};

export default BasicCell;
