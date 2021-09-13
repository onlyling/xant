import React, { useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Collapse } from 'xant';

const CollapseBadge: React.FC = () => {
  return (
    <ScrollView>
      <View>
        <Text>基础用法</Text>
      </View>

      <View style={{ height: 20 }} />

      <Collapse
        title={
          <View>
            <Text style={{ marginRight: 8 }}>测试案例</Text>
            <Text>测试案例2</Text>
          </View>
        }
      >
        <Text style={{ lineHeight: 20 }}>文案</Text>
        <View style={{ height: 20 }} />
        <Text style={{ lineHeight: 20 }}>文案</Text>
      </Collapse>
      <Collapse
        title="title文案"
        renderTitle={useCallback((v: boolean) => {
          return `不要这样写 useCallback：${v ? '好的' : '不好'}`;
        }, [])}
        renderBody={useCallback((v: boolean) => {
          return (
            <>
              <Text style={{ lineHeight: 20 }}>文案：{v ? '展开' : ''}</Text>
              {v ? <View style={{ height: 800 }} /> : null}
              <Text style={{ lineHeight: 20 }}>文案</Text>
            </>
          );
        }, [])}
      />
      <Collapse title="title文案">
        <Text style={{ lineHeight: 20 }}>文案</Text>
        <View style={{ height: 20 }} />
        <Text style={{ lineHeight: 20 }}>文案</Text>
      </Collapse>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
};

export default CollapseBadge;
