import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Switch } from 'xant';

const BasicSwitch: React.FC = () => {
  const [state, setState] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView>
      <View>
        <Text>基础用法</Text>
      </View>

      <Switch
        value={state}
        onChange={(p) => {
          console.log(p);
          setState(p);
        }}
        onPress={() => {
          console.log('基础用法');
        }}
      />

      <View style={{ height: 20 }} />

      <View>
        <Text>禁用状态</Text>
      </View>

      <Switch disabled value={state} />

      <View style={{ height: 20 }} />

      <View>
        <Text>加载状态</Text>
      </View>

      <Switch loading value={state} />

      <View style={{ height: 20 }} />

      <View>
        <Text>自定义大小</Text>
      </View>

      <Switch
        value={state}
        onChange={setState}
        size={50}
        onPress={() => {
          console.log('自定义大小');
        }}
      />

      <View style={{ height: 20 }} />

      <View>
        <Text>自定义颜色</Text>
      </View>

      <Switch
        value={state}
        onChange={setState}
        activeColor="#f30"
        inactiveColor="#ddd"
        onPress={() => {
          console.log('自定义颜色');
        }}
      />

      <View style={{ height: 20 }} />

      <View>
        <Text>异步控制</Text>
      </View>

      <Switch
        loading={loading}
        value={state}
        onChange={setState}
        beforeChange={() =>
          new Promise((resolve) => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              resolve(true);
            }, 2000);
          })
        }
      />

      <View style={{ height: 20 }} />
    </ScrollView>
  );
};

export default BasicSwitch;
