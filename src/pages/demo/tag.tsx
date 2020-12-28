import React from 'react';
import { View, ScrollView } from 'react-native';

import Layout from '@~/layouts/layout';
import Tag from 'xant/tag';
import Cell, { CellGroup } from 'xant/cell';

import CStyles from './style';

const TagView: React.FC = () => {
  return (
    <Layout.Page title="Tag">
      <ScrollView>
        <View style={CStyles.padding}>
          <CellGroup title="基础用法" border={false}>
            <Cell label="defalt 类型" value={<Tag>标签</Tag>} />
            <Cell
              label="primary 类型"
              value={
                <>
                  <Tag type="primary">标签</Tag>
                  <Tag type="primary">标签</Tag>
                </>
              }
            />
            <Cell label="success 类型" value={<Tag type="success">标签</Tag>} />
            <Cell label="danger 类型" value={<Tag type="danger">标签</Tag>} />
            <Cell
              label="warning 类型"
              value={<Tag type="warning">标签</Tag>}
              border={false}
            />
          </CellGroup>

          <View style={CStyles.ctxSplit} />

          <CellGroup title="样式风格" border={false}>
            <Cell
              label="空心样式"
              value={
                <Tag type="primary" plain>
                  标签
                </Tag>
              }
            />
            <Cell
              label="空心样式"
              value={
                <Tag type="primary" plain hairline>
                  标签
                </Tag>
              }
            />
            <Cell
              label="圆角样式"
              value={
                <Tag type="primary" round>
                  标签
                </Tag>
              }
            />
            <Cell
              label="标记样式"
              value={
                <Tag type="success" mark>
                  标签
                </Tag>
              }
            />
            <Cell
              label="可关闭标签"
              value={
                <Tag
                  type="danger"
                  closeable
                  onPressClose={() => {
                    console.log('onPressClose');
                  }}
                >
                  标签
                </Tag>
              }
              border={false}
            />
          </CellGroup>

          <View style={CStyles.ctxSplit} />

          <CellGroup title="标签大小" border={false}>
            <Cell label="小号标签" value={<Tag type="primary">标签</Tag>} />
            <Cell
              label="中号标签"
              value={
                <Tag type="primary" size="medium">
                  标签
                </Tag>
              }
            />
            <Cell
              label="大号标签"
              value={
                <Tag type="success" size="large">
                  标签
                </Tag>
              }
              border={false}
            />
          </CellGroup>

          <View style={CStyles.ctxSplit} />

          <CellGroup title="自定义颜色" border={false}>
            <Cell label="背景颜色" value={<Tag color="#7232dd">标签</Tag>} />
            <Cell
              label="文字颜色"
              value={
                <Tag color="#ffe1e1" textColor="#ad0000">
                  标签
                </Tag>
              }
            />
            <Cell
              label="空心颜色"
              value={
                <Tag color="#7232dd" plain>
                  标签
                </Tag>
              }
              border={false}
            />
          </CellGroup>

          <View style={CStyles.ctxSplit} />
        </View>
      </ScrollView>
    </Layout.Page>
  );
};

export default TagView;