import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import Layout from '@~/layouts/layout';
import Cell, { CellGroup } from 'xant/cell';
import Dialog from 'xant/dialog';
import Notify from 'xant/notify';

import CStyles from './style';

const NotifyView: React.FC = () => {
  const [state, setState] = useState({
    cNotify1: {
      show: false,
    },
  });

  return (
    <Layout.Page title="Notify">
      <ScrollView>
        <View style={CStyles.padding}>
          <CellGroup title="基础用法" border={false}>
            <Cell
              title="提示弹窗"
              isLink
              onPress={() => {
                Dialog({
                  title: '这里是标题',
                  message: '提示弹窗',
                  width: 200,
                }).then(() => {
                  console.log('提示弹窗');
                });
              }}
            />
            <Cell
              title="提示弹窗（无标题）"
              isLink
              onPress={() => {
                Dialog({
                  message: '提示弹窗（无标题）',
                }).then(() => {
                  console.log('提示弹窗（无标题）');
                });
              }}
            />
            <Cell
              title="确认弹窗"
              isLink
              border={false}
              onPress={() => {
                Dialog.confirm({
                  message: '确认弹窗',
                  onCloseed: () => {
                    console.log('onCloseedonCloseedonCloseedonCloseed');
                  },
                  beforeClose: (action) =>
                    new Promise((resolve) => {
                      setTimeout(() => {
                        if (action === 'cancel') {
                          resolve(false);
                        } else {
                          resolve(true);
                        }
                      }, 3000);
                    }),
                })
                  .then(() => {
                    console.log('确认弹窗->确定');
                  })
                  .catch(() => {
                    console.log('确认弹窗->取消');
                  });
              }}
            />
          </CellGroup>

          <View style={CStyles.ctxSplit} />

          <CellGroup title="圆角按钮样式" border={false}>
            <Cell
              title="提示弹窗"
              isLink
              onPress={() => {
                Dialog({
                  title: '这里是标题',
                  message: '提示弹窗',
                  width: 200,
                  theme: 'round-button',
                }).then(() => {
                  console.log('提示弹窗');
                });
              }}
            />
            <Cell
              title="提示弹窗（无标题）"
              isLink
              border={false}
              onPress={() => {
                Dialog({
                  message: '提示弹窗（无标题）',
                  theme: 'round-button',
                  showCancelButton: true,
                })
                  .then(() => {
                    console.log('提示弹窗（无标题）');
                  })
                  .catch(() => {
                    console.log('提示弹窗（无标题）->取消');
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
                console.log('组件调用');
                setState((s) => ({
                  ...s,
                  cNotify1: {
                    ...s.cNotify1,
                    show: true,
                  },
                }));
              }}
            />
          </CellGroup>

          <Notify.Component
            show={state.cNotify1.show}
            message="哈哈哈哈哈哈哈嗝"
          />

          <View style={CStyles.ctxSplit} />
        </View>
      </ScrollView>
    </Layout.Page>
  );
};

export default NotifyView;
