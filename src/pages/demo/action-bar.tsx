import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Layout from '@~/layouts/layout';
import { ActionBar, ActionBarIcon } from 'xant/action-bar';
import Toast from 'xant/toast';

import CStyles from './style';

const onPressIcon = () => {
  Toast({ message: '点击了 icon', forbidClick: true });
};

const ActionBarView: React.FC = () => {
  return (
    <Layout.Page title="ActionBar">
      <ScrollView>
        <View style={CStyles.padding}>
          <View>
            <Text>基础用法</Text>
          </View>

          <View style={CStyles.ctxSplit} />

          <ActionBar>
            <ActionBarIcon
              text="客服"
              icon={<Icon name="customerservice" size={18} />}
              onPress={onPressIcon}
            />
            <ActionBarIcon
              text="客服2"
              icon={<Icon name="creditcard" size={18} />}
              onPress={onPressIcon}
            />
            <ActionBarIcon
              text="客服2"
              icon={<Icon name="laptop" size={18} />}
              onPress={onPressIcon}
            />
          </ActionBar>

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>徽标提示</Text>
          </View>

          <View style={CStyles.ctxSplit} />

          <ActionBar>
            <ActionBarIcon
              text="客服"
              icon={<Icon name="customerservice" size={18} />}
              dot
              onPress={onPressIcon}
            />
            <ActionBarIcon
              text="客服2"
              icon={<Icon name="creditcard" size={18} />}
              badge="1234"
              onPress={onPressIcon}
            />
            <ActionBarIcon
              text="客服2"
              icon={<Icon name="laptop" size={18} />}
              badge="9"
              onPress={onPressIcon}
            />
          </ActionBar>

          <View style={CStyles.ctxSplit} />
        </View>
      </ScrollView>
    </Layout.Page>
  );
};

export default ActionBarView;
