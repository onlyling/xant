import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Layout from '@~/layouts/layout';
import {
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
} from '_components/action-bar';
import Toast from '_components/toast';

import CStyles from './style';

const onPressIcon = () => {
  Toast({ message: '点击了 icon', forbidPress: true });
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
              iconRender={({ size, color }) => (
                <Icon name="laptop" size={size} color={color} />
              )}
              onPress={onPressIcon}
            />
            <ActionBarButton isFirst isLast text="立即购买" type="danger" />
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
              iconRender={({ size, color }) => (
                <Icon name="laptop" size={size} color={color} />
              )}
              badge="9"
              onPress={onPressIcon}
            />

            <ActionBarButton isFirst text="立即购买" type="warning" />
            <ActionBarButton isLast text="立即购买" type="danger" />
          </ActionBar>

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>自定义图标颜色</Text>
          </View>

          <View style={CStyles.ctxSplit} />

          <ActionBar>
            <ActionBarIcon
              text="客服"
              icon={<Icon name="customerservice" size={18} />}
              color="#f30"
              dot
              onPress={onPressIcon}
            />
            <ActionBarIcon
              text="客服2"
              icon={<Icon name="creditcard" size={18} />}
              badge="1234"
              color="#f30"
              onPress={onPressIcon}
            />
            <ActionBarIcon
              text="客服2"
              color="#f30"
              badge="9"
              iconRender={({ size, color }) => (
                <Icon name="laptop" size={size} color={color} />
              )}
              onPress={onPressIcon}
            />
            <ActionBarButton
              isFirst
              text="立即购买"
              type="warning"
              color="#be99ff"
            />
            <ActionBarButton
              isLast
              text="立即购买"
              type="danger"
              color="#7232dd"
            />
          </ActionBar>

          <View style={CStyles.ctxSplit} />
        </View>
      </ScrollView>
    </Layout.Page>
  );
};

export default ActionBarView;
