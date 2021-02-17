import React, { useState, memo } from 'react';
import { View, ScrollView } from 'react-native';

import Layout from '@~/layouts/layout';
import Cell, { CellGroup } from 'xant/cell';
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
              title="基础用法"
              isLink
              border={false}
              onPress={() => {
                Notify('基础用法');
              }}
            />
          </CellGroup>

          <View style={CStyles.ctxSplit} />

          <CellGroup title="通知类型" border={false}>
            <Cell
              title="主要通知"
              isLink
              onPress={() => {
                Notify({
                  type: 'primary',
                  message: '主要通知',
                });
              }}
            />
            <Cell
              title="成功通知"
              isLink
              onPress={() => {
                Notify({
                  type: 'success',
                  message: '成功通知',
                });
              }}
            />
            <Cell
              title="危险通知"
              isLink
              onPress={() => {
                Notify({
                  type: 'danger',
                  message: '危险通知',
                });
              }}
            />
            <Cell
              title="警告通知"
              isLink
              border={false}
              onPress={() => {
                Notify({
                  type: 'warning',
                  message: '警告通知',
                });
              }}
            />
          </CellGroup>

          <View style={CStyles.ctxSplit} />

          <CellGroup title="自定义配置" border={false}>
            <Cell
              title="自定义颜色"
              isLink
              onPress={() => {
                Notify({
                  message: '自定义颜色',
                  backgroundColor: '#fff',
                  color: '#f30',
                });
              }}
            />
            <Cell
              title="自定义时长"
              isLink
              border={false}
              onPress={() => {
                Notify({
                  message: '自定义时长',
                  duration: 5000,
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

                setTimeout(() => {
                  setState((s) => ({
                    ...s,
                    cNotify1: {
                      ...s.cNotify1,
                      show: false,
                    },
                  }));
                }, 3000);
              }}
            />
          </CellGroup>

          <Notify.Component
            show={state.cNotify1.show}
            message="哈哈哈哈哈哈哈嗝"
            type="danger"
            onPress={() => {
              console.log('点击了「哈哈哈哈哈哈哈嗝」');
            }}
          />

          <View style={CStyles.ctxSplit} />
        </View>
      </ScrollView>
    </Layout.Page>
  );
};

export default memo(NotifyView);
