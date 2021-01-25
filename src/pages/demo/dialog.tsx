import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import Layout from '@~/layouts/layout';
import Cell, { CellGroup } from 'xant/cell';
import Dialog from 'xant/dialog';
import Image from 'xant/image';

import CStyles from './style';

const DialogView: React.FC = () => {
  const [state, setState] = useState({
    show: false,
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
                setState((s) => ({
                  ...s,
                  show: true,
                }));
              }}
            />
          </CellGroup>

          <Dialog.Component show={state.show}>
            <Image
              source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }}
              onPress={() => {
                console.log('??');
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
