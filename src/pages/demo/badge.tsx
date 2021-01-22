import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import Layout from '@~/layouts/layout';
import Badge from 'xant/badge';

import CStyles from './style';

const Styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
  },

  demoWrapper: {
    flexDirection: 'row',
  },

  demoItemWrapper: {
    marginRight: 16,
  },

  demoItem: {
    width: 40,
    height: 40,
    backgroundColor: '#f2f3f5',
    borderRadius: 4,
  },
});

const BadgeView: React.FC = () => {
  return (
    <Layout.Page title="Badge">
      <ScrollView style={Styles.page}>
        <View style={CStyles.padding}>
          <View>
            <Text>基础用法</Text>
          </View>

          <View style={CStyles.ctxSplit} />

          <View style={Styles.demoWrapper}>
            <View style={Styles.demoItemWrapper}>
              <Badge content="999">
                <View style={Styles.demoItem} />
              </Badge>
            </View>

            <View style={Styles.demoItemWrapper}>
              <Badge dot>
                <View style={Styles.demoItem} />
              </Badge>
            </View>
          </View>

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>最大值</Text>
          </View>

          <View style={CStyles.ctxSplit} />

          <View style={Styles.demoWrapper}>
            <View style={Styles.demoItemWrapper}>
              <Badge content={999} max="9">
                <View style={Styles.demoItem} />
              </Badge>
            </View>

            <View style={Styles.demoItemWrapper}>
              <Badge content={9} max="99">
                <View style={Styles.demoItem} />
              </Badge>
            </View>
          </View>

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>自定义颜色</Text>
          </View>

          <View style={CStyles.ctxSplit} />

          <View style={Styles.demoWrapper}>
            <View style={Styles.demoItemWrapper}>
              <Badge content={999} max="9" color="#1989fa">
                <View style={Styles.demoItem} />
              </Badge>
            </View>

            <View style={Styles.demoItemWrapper}>
              <Badge dot color="#1989fa">
                <View style={Styles.demoItem} />
              </Badge>
            </View>
          </View>

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>独立展示</Text>
          </View>

          <View style={CStyles.ctxSplit} />

          <View style={Styles.demoWrapper}>
            <Badge content="999" />
            <Badge content={999} max="9" />
            <Badge content="1" />
            <Badge dot />
          </View>

          <View style={CStyles.ctxSplit} />
        </View>
      </ScrollView>
    </Layout.Page>
  );
};

export default BadgeView;
