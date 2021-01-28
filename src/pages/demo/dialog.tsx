import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import Layout from '@~/layouts/layout';
import Cell, { CellGroup } from 'xant/cell';
import Dialog from 'xant/dialog';
import Image from 'xant/image';

import CStyles from './style';

const DialogView: React.FC = () => {
  const [state, setState] = useState({
    cDialog1: {
      show: false,
      cancel: false,
      confirm: false,
    },
  });

  return (
    <Layout.Page title="Dialog">
      <ScrollView>
        <View style={CStyles.padding}>
          <CellGroup title="基础用法" border={false}>
            <Cell title="提示弹窗" isLink />
            <Cell title="提示弹窗（无标题）" isLink />
            <Cell title="确认弹窗" isLink border={false} />
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
                  cDialog1: {
                    ...s.cDialog1,
                    show: true,
                  },
                }));
              }}
            />
          </CellGroup>

          <Dialog.Component
            showCancelButton
            title="这里应该有一个标题"
            show={state.cDialog1.show}
            confirmButtonLoading={state.cDialog1.confirm}
            cancelButtonLoading={state.cDialog1.cancel}
            onPressCancel={() => {
              console.log('onPressCancel');
              setState((s) => ({
                ...s,
                cDialog1: {
                  ...s.cDialog1,
                  cancel: true,
                },
              }));
            }}
            onPressConfirm={() => {
              console.log('onPressConfirm');
              setState((s) => ({
                ...s,
                cDialog1: {
                  ...s.cDialog1,
                  confirm: true,
                },
              }));

              setTimeout(() => {
                setState((s) => ({
                  ...s,
                  cDialog1: {
                    cancel: false,
                    confirm: false,
                    show: false,
                  },
                }));
              }, 1000);
            }}
            message="哈哈哈哈哈哈哈嗝"
          >
            <Image
              source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }}
              onPress={() => {
                console.log('?? img');
              }}
            />
          </Dialog.Component>

          <View style={CStyles.ctxSplit} />
        </View>
      </ScrollView>
    </Layout.Page>
  );
};

export default DialogView;
