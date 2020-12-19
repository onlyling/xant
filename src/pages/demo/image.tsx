import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import Layout from '@~/layouts/layout';
import Image from '@~/xant-ui/image';

import CStyles from './style';

const Styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 150,
  },
});

const ImageView: React.FC = () => {
  return (
    <Layout.Page title="Image" style={Styles.page}>
      <ScrollView>
        <View style={CStyles.padding}>
          <View>
            <Text>基础用法</Text>
          </View>

          <Image
            source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }}
            onPress={() => {
              console.log('??');
            }}
          />

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>圆形图片</Text>
          </View>

          <Image
            source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }}
            radius={20}
            duration={2000}
          />

          <View style={CStyles.ctxSplit} />

          <Image
            source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }}
            round
            radius={20}
          />

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>不需要过度动画</Text>
          </View>

          <Image
            source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }}
            round
            radius={20}
            animated={false}
          />

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>加载失败提示</Text>
          </View>

          <Image
            source={{ uri: 'https://img.yzcdn.cn/vant/cat1.jpeg' }}
            wrapperStyle={Styles.image}
          />

          <View style={CStyles.ctxSplit} />

          <Image
            source={{ uri: 'https://img.yzcdn.cn/vant/cat1.jpeg' }}
            wrapperStyle={Styles.image}
            alt="错误提示，说明是什么图片，文字多了"
          />

          <View style={CStyles.ctxSplit} />
        </View>
      </ScrollView>
    </Layout.Page>
  );
};

export default ImageView;
