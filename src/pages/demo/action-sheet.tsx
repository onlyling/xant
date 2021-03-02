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
            <Cell
              title="提示弹窗"
              isLink
              onPress={() => {
                ActionSheet({
                  actions: ['选项一', '选项二'],
                })
                  .then(({ item, index }) => {
                    console.log('提示弹窗 -> 选项');
                    console.log(item);
                    console.log(index);
                  })
                  .catch((e) => {
                    console.log('提示弹窗 -> 关闭');
                    console.log(e);
                  });
              }}
            />
            <Cell
              title="展示取消按钮"
              isLink
              onPress={() => {
                ActionSheet({
                  actions: ['选项一', '选项二'],
                  cancelText: '取消了',
                })
                  .then(({ item, index }) => {
                    console.log('展示取消按钮 -> 选项');
                    console.log(item);
                    console.log(index);
                  })
                  .catch((e) => {
                    console.log('展示取消按钮 -> 关闭');
                    console.log(e);
                  });
              }}
            />
            <Cell
              title="展示描述信息"
              isLink
              border={false}
              onPress={() => {
                ActionSheet({
                  actions: ['选项一', '选项二'],
                  cancelText: '取消了',
                  description: '这是一段描述信息',
                  beforeClose: (action, _, index) => {
                    if (action === 'item') {
                      return new Promise((resolve) => {
                        setTimeout(() => {
                          resolve(index === 0);
                        }, 3000);
                      });
                    }

                    return true;
                  },
                })
                  .then(({ item, index }) => {
                    console.log('展示描述信息 -> 选项');
                    console.log(item);
                    console.log(index);
                  })
                  .catch((e) => {
                    console.log('展示描述信息 -> 关闭');
                    console.log(e);
                  });
              }}
            />
          </CellGroup>

          <View style={CStyles.ctxSplit} />

          <CellGroup title="选项状态" border={false}>
            <Cell
              title="选项状态"
              isLink
              border={false}
              onPress={() => {
                ActionSheet({
                  actions: [
                    { name: '着色选项', subname: '东方闪电', color: '#f30' },
                    { name: 'loading', loading: true },
                    { name: '禁用选项', disabled: true },
                  ],
                  cancelText: '取消了',
                  closeOnPressOverlay: false,
                })
                  .then(({ item, index }) => {
                    console.log('选项状态 -> 选项');
                    console.log(item);
                    console.log(index);
                  })
                  .catch((e) => {
                    console.log('选项状态 -> 关闭');
                    console.log(e);
                  });
              }}
            />
          </CellGroup>

          <View style={CStyles.ctxSplit} />

          <CellGroup title="组件调用" border={false}>
            <Cell
              title="组件调用"
              isLink
              border={false}
              onPress={() => {
                console.log('组件调用 -> show');
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
              { name: '选项2', subname: '东方闪电', color: '#f30' },
              { name: 'loading', loading: true },
              { name: 'disabled', disabled: true },
              { name: '选项3' },
            ]}
            onPressOverlay={() => {
              console.log('组件调用 -> onPressOverlay');
              setState((s) => ({
                ...s,
                cActionSheet1: {
                  ...s.cActionSheet1,
                  show: false,
                },
              }));
            }}
            onCancel={() => {
              console.log('组件调用 -> onCancel');
              setState((s) => ({
                ...s,
                cActionSheet1: {
                  ...s.cActionSheet1,
                  show: false,
                },
              }));
            }}
            onSelect={(action, index) => {
              console.log(action);
              console.log(index);
              console.log('组件调用 -> onSelect');
              setState((s) => ({
                ...s,
                cActionSheet1: {
                  ...s.cActionSheet1,
                  show: false,
                },
              }));
            }}
          />

          <View style={CStyles.ctxSplit} />
        </View>
      </ScrollView>
    </Layout.Page>
  );
};

export default ActionSheetView;