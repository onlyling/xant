import React from 'react';
import { View, Text } from 'react-native';

import { ActionBar, ActionBarIcon, ActionBarButton, Icon } from 'xant';

const BasicActionBar: React.FC = () => {
  const onPressIcon = () => {
    // Toast({ message: '点击了 icon', forbidPress: true });
    console.log('点击了 icon');
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View>
          <Text>基础用法</Text>
        </View>

        <View style={{ height: 20 }} />

        <ActionBar>
          <ActionBarIcon
            text="客服"
            icon={<Icon.IconArrowOutline />}
            onPress={onPressIcon}
          />
          <ActionBarIcon
            text="客服2"
            icon={<Icon.IconArrowOutline />}
            onPress={onPressIcon}
          />
          <ActionBarIcon
            text="客服2"
            iconRender={({ size, color }) => (
              <Icon.IconArrowOutline size={size} color={color} />
            )}
            onPress={onPressIcon}
          />
          <ActionBarButton isFirst isLast text="立即购买" type="danger" />
        </ActionBar>

        <View style={{ height: 20 }} />

        <View>
          <Text>徽标提示</Text>
        </View>

        <View style={{ height: 20 }} />

        <ActionBar>
          <ActionBarIcon
            text="客服"
            icon={<Icon.IconArrowOutline />}
            dot
            onPress={onPressIcon}
          />
          <ActionBarIcon
            text="客服2"
            icon={<Icon.IconArrowOutline />}
            badge="1234"
            onPress={onPressIcon}
          />
          <ActionBarIcon
            text="客服2"
            iconRender={({ size, color }) => (
              <Icon.IconArrowOutline size={size} color={color} />
            )}
            badge="9"
            onPress={onPressIcon}
          />

          <ActionBarButton isFirst text="立即购买" type="warning" />
          <ActionBarButton isLast text="立即购买" type="danger" />
        </ActionBar>

        <View style={{ height: 20 }} />

        <View>
          <Text>自定义图标颜色</Text>
        </View>

        <View style={{ height: 20 }} />

        <ActionBar>
          <ActionBarIcon
            text="客服"
            icon={<Icon.IconArrowOutline />}
            color="#f30"
            dot
            onPress={onPressIcon}
          />
          <ActionBarIcon
            text="客服2"
            icon={<Icon.IconArrowOutline />}
            badge="1234"
            color="#f30"
            onPress={onPressIcon}
          />
          <ActionBarIcon
            text="客服2"
            color="#f30"
            badge="9"
            iconRender={({ size, color }) => (
              <Icon.IconArrowOutline size={size} color={color} />
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

        <View style={{ height: 20 }} />
      </View>

      <ActionBar safeAreaInsetBottom>
        <ActionBarIcon
          text="客服"
          icon={<Icon.IconArrowOutline />}
          onPress={onPressIcon}
        />
        <ActionBarIcon
          text="客服2"
          icon={<Icon.IconArrowOutline />}
          onPress={onPressIcon}
        />
        <ActionBarIcon
          text="客服2"
          iconRender={({ size, color }) => (
            <Icon.IconArrowOutline size={size} color={color} />
          )}
          onPress={onPressIcon}
        />
        <ActionBarButton isFirst isLast text="立即购买" type="danger" />
      </ActionBar>
    </View>
  );
};

export default BasicActionBar;
