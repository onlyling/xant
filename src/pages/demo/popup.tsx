import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import Layout from '@~/layouts/layout';
import Button from 'xant/button';
import Popup from 'xant/popup';
import { PopupPosition } from 'xant/popup/interface';

import CStyles from './style';

const Styles = StyleSheet.create({
  hint: {
    fontSize: 12,
    color: '#666',
  },
  card: {
    height: 140,
    width: 140,
    backgroundColor: '#f30',
  },
});

const PopupView: React.FC = () => {
  const [state, setState] = useState<{
    show: boolean;
    position: PopupPosition;
  }>({
    show: false,
    position: 'left',
  });

  return (
    <Layout.Page title="Popup">
      <ScrollView>
        <View style={CStyles.padding}>
          <View>
            <Text>基础用法</Text>
          </View>

          <Button
            type="primary"
            text="展示弹出层"
            onPress={() => {
              setState((s) => ({
                ...s,
                show: true,
                position: 'center',
              }));
            }}
          />

          <View>
            <Text>
              弹出位置
              <Text style={Styles.hint}>共用一个弹层，切换不同位置会闪烁</Text>
            </Text>
          </View>

          <View style={CStyles.ctxSplit} />

          <Button
            type="primary"
            text="顶部弹出"
            onPress={() => {
              setState((s) => ({
                ...s,
                show: true,
                position: 'top',
              }));
            }}
          />

          <View style={CStyles.ctxSplit} />

          <Button
            type="primary"
            text="底部弹出"
            onPress={() => {
              setState((s) => ({
                ...s,
                show: true,
                position: 'bottom',
              }));
            }}
          />

          <View style={CStyles.ctxSplit} />

          <Button
            type="primary"
            text="左侧弹出"
            onPress={() => {
              setState((s) => ({
                ...s,
                show: true,
                position: 'left',
              }));
            }}
          />

          <View style={CStyles.ctxSplit} />

          <Button
            type="primary"
            text="右侧弹出"
            onPress={() => {
              setState((s) => ({
                ...s,
                show: true,
                position: 'right',
              }));
            }}
          />
        </View>

        <Popup
          show={state.show}
          position={state.position}
          onPressOverlay={() => {
            setState((s) => ({
              ...s,
              show: false,
            }));
          }}
          onRequestClose={() => {
            setState((s) => ({
              ...s,
              show: false,
            }));
            return true;
          }}
          round
        >
          <View style={Styles.card}>
            <Text>内容</Text>
            <Button
              type="success"
              text="关闭弹出"
              onPress={() => {
                setState((s) => ({
                  ...s,
                  show: false,
                }));
              }}
            />
          </View>
        </Popup>
      </ScrollView>
    </Layout.Page>
  );
};

export default PopupView;
