import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Layout from '@~/layouts/layout';
import Cell, { CellGroup } from '_components/cell';

import CStyles from './style';

const Styles = StyleSheet.create({
  text: {
    color: '#f30',
  },
});

const Demo: React.FC = () => {
  return (
    <Layout.Page title="Cell">
      <ScrollView>
        <View>
          <Text>基础用法</Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <Cell title={<Text style={Styles.text}>单元格</Text>} value="内容" />

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

        <View style={CStyles.ctxSplit} />

        <View>
          <Text>单元格大小</Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <Cell title="单元格" value="内容" label="一些简单的描述" />

        <Cell
          required
          title="单元格"
          value="large"
          label="一些简单的描述"
          size="large"
        />

        <View style={CStyles.ctxSplit} />

        <View>
          <Text>展示图标</Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <Cell
          title="单元格"
          value="内容"
          label="一些简单的描述"
          icon={<Icon name="clockcircleo" />}
        />

        <View style={CStyles.ctxSplit} />

        <View>
          <Text>只设置 value</Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <Cell value="内容" />

        <View style={CStyles.ctxSplit} />

        <View>
          <Text>展示箭头</Text>
        </View>

        <View style={CStyles.ctxSplit} />

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

        <Cell
          title="单元格"
          value="内容"
          rightIcon={<Icon name="clockcircleo" />}
        />

        <View style={CStyles.ctxSplit} />

        <View>
          <Text>垂直居中</Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <Cell
          title="单元格"
          value="内容"
          label="一些简单的描述"
          isLink
          center
        />

        <View style={CStyles.ctxSplit} />

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

        <View style={CStyles.ctxSplit} />

        <CellGroup title={<Text style={Styles.text}>分组头</Text>}>
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

        <View style={CStyles.ctxSplit} />
      </ScrollView>
    </Layout.Page>
  );
};

export default Demo;
