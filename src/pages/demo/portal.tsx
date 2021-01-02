import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import Layout from '@~/layouts/layout';
import Button from 'xant/button';
import Portal from 'xant/portal';

import CStyles from './style';

const Styles = StyleSheet.create({
  mask: {
    // position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'none',
    zIndex: 99,
  },
});

const PortalView: React.FC = () => {
  const [state, setState] = useState<Record<'global' | 'local', boolean>>({
    global: false,
    local: false,
  });

  return (
    <Layout.Page title="Portal">
      <ScrollView>
        <View style={CStyles.padding}>
          <View>
            <Text>组件用法</Text>
          </View>

          <Button
            type="primary"
            text="显示一个全局的层"
            onPress={() => {
              setState((s) => ({
                ...s,
                global: true,
              }));
            }}
          />

          <Portal>
            <View
              style={[
                Styles.mask,
                state.global ? { display: 'flex', position: 'absolute' } : null,
              ]}
            >
              <Button
                type="warning"
                text="关闭"
                style={{ marginTop: 30 }}
                onPress={() => {
                  setState((s) => ({
                    ...s,
                    global: false,
                  }));
                }}
              />
            </View>
          </Portal>

          <View style={CStyles.ctxSplit} />

          <Button
            type="primary"
            text="显示一个本地的层"
            onPress={() => {
              setState((s) => ({
                ...s,
                local: true,
              }));
            }}
          />

          <View
            style={[
              Styles.mask,
              state.local ? { display: 'flex', position: 'absolute' } : null,
            ]}
          >
            <Button
              type="warning"
              text="关闭"
              onPress={() => {
                setState((s) => ({
                  ...s,
                  local: false,
                }));
              }}
            />
          </View>

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>函数调用</Text>
          </View>

          <Button
            type="primary"
            text="显示一个全局的层"
            onPress={() => {
              const key = Portal.add(
                <View
                  style={[
                    Styles.mask,
                    { display: 'flex', position: 'absolute' },
                  ]}
                >
                  <Button
                    type="danger"
                    text="关闭"
                    style={{ marginTop: 30 }}
                    onPress={() => {
                      console.log('-- Portal key --', key);
                      Portal.remove(key);
                    }}
                  />
                </View>,
              );
            }}
          />

          <View style={CStyles.ctxSplit} />
        </View>
      </ScrollView>
    </Layout.Page>
  );
};

export default PortalView;
