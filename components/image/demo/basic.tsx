import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import { Image } from 'xant';

const Styles = StyleSheet.create({
  image: {
    width: 200,
    height: 150,
  },
});

const BasicImage: React.FC = () => {
  return (
    <ScrollView>
      <View>
        <Text>基础用法</Text>
      </View>

      <Image
        source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }}
        onPress={() => {
          console.log('??');
        }}
      />

      <View style={{ height: 20 }} />

      <View>
        <Text>圆形图片</Text>
      </View>

      <Image
        source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }}
        radius={10}
        duration={2000}
      />

      <View style={{ height: 20 }} />

      <Image
        source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }}
        round
        radius={20}
      />

      <View style={{ height: 20 }} />

      <View>
        <Text>不需要过度动画</Text>
      </View>

      <Image
        source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }}
        round
        radius={20}
        animated={false}
      />

      <View style={{ height: 20 }} />

      <View>
        <Text>加载失败提示</Text>
      </View>

      <Image
        source={{ uri: 'https://img.yzcdn.cn/vant/cat1.jpeg' }}
        wrapperStyle={Styles.image}
      />

      <View style={{ height: 20 }} />

      <Image
        source={{ uri: 'https://img.yzcdn.cn/vant/cat1.jpeg' }}
        wrapperStyle={Styles.image}
        alt="错误提示，说明是什么图片，文字多了"
      />

      <View style={{ height: 20 }} />
    </ScrollView>
  );
};

export default BasicImage;
