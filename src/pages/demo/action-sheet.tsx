import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import Layout from '@~/layouts/layout';
import Cell, { CellGroup } from 'xant/cell';
import ActionSheet from 'xant/action-sheet';

import CStyles from './style';

const ActionSheetView: React.FC = () => {
  const [state, setState] = useState({
    cActionSheet1: {
      show: false,
    },
  });

  return (
    <Layout.Page title="ActionSheet">
      <ScrollView>
        <View style={CStyles.padding}>
          <CellGroup title="基础用法" border={false}>
            <Cell title="提示弹窗" isLink onPress={() => {}} />
            <Cell title="提示弹窗（无标题）" isLink onPress={() => {}} />
            <Cell title="确认弹窗" isLink border={false} onPress={() => {}} />
          </CellGroup>

          <View style={CStyles.ctxSplit} />

          <CellGroup title="圆角按钮样式" border={false}>
            <Cell title="提示弹窗" isLink onPress={() => {}} />
            <Cell
              title="提示弹窗（无标题）"
              isLink
              border={false}
              onPress={() => {}}
            />
          </CellGroup>

          <View style={CStyles.ctxSplit} />

          <CellGroup title="组件调用" border={false}>
            <Cell
              title="组件调用"
              isLink
              border={false}
              onPress={() => {
                console.log('组件调用');
                setState((s) => ({
                  ...s,
                  cActionSheet1: {
                    ...s.cActionSheet1,
                    show: true,
                  },
                }));
              }}
            />
          </CellGroup>

          <ActionSheet.Component
            title="这里应该有一个标题"
            description="这是一段描述信息"
            cancelText="取消"
            show={state.cActionSheet1.show}
            actions={[
              { name: '选项1' },
              { name: '选项2', subname: '东方闪电' },
              { name: '选项3' },
            ]}
          />

          <View style={CStyles.ctxSplit} />
        </View>
      </ScrollView>
    </Layout.Page>
  );
};

export default ActionSheetView;
