import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

import Layout from '@~/layouts/layout';
import Button from 'xant/button';
import Overlay from 'xant/overlay';

import CStyles from './style';

const Styles = StyleSheet.create({
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: 200,
    height: 300,
    zIndex: 4,
    borderRadius: 4,
  },
});

const OverlayView: React.FC = () => {
  const [state, setState] = useState<Record<'normal' | 'inset', boolean>>({
    normal: false,
    inset: false,
  });

  return (
    <Layout.Page title="Overlay">
      <ScrollView>
        <View style={CStyles.padding}>
          <View>
            <Text>基础用法</Text>
          </View>

          <Button
            type="primary"
            text="显示遮罩层"
            onPress={() => {
              setState((s) => ({
                ...s,
                normal: true,
              }));
            }}
          />

          <Overlay
            show={state.normal}
            onPress={() => {
              setState((s) => ({
                ...s,
                normal: false,
              }));
            }}
          />

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>嵌入内容</Text>
          </View>

          <Button
            type="primary"
            text="嵌入内容"
            onPress={() => {
              setState((s) => ({
                ...s,
                inset: true,
              }));
            }}
          />

          <Overlay
            show={state.inset}
            style={Styles.overlay}
            onPress={() => {
              setState((s) => ({
                ...s,
                inset: false,
              }));
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => {
                console.log('????');
              }}
            >
              <View style={Styles.card} />
            </TouchableWithoutFeedback>
          </Overlay>

          <View style={CStyles.ctxSplit} />
        </View>
      </ScrollView>
    </Layout.Page>
  );
};

export default OverlayView;
