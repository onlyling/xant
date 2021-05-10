import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Button, Icon } from 'xant';

const BasicButton: React.FC = () => {
  return (
    <ScrollView>
      <View>
        <Text>按钮类型</Text>
      </View>

      <View>
        <View style={{ height: 20 }} />

        <Button text="default" />

        <View style={{ height: 20 }} />

        <Button type="primary" text="primary" />

        <View style={{ height: 20 }} />

        <Button type="success" text="success" />

        <View style={{ height: 20 }} />

        <Button type="warning" text="warning" />

        <View style={{ height: 20 }} />

        <Button type="danger" icon={<Icon.IconArrowOutline color="#fff" />} text="danger" />
      </View>

      <View style={{ height: 20 }} />

      <View>
        <Text>朴素按钮</Text>
      </View>

      <View>
        <View style={{ height: 20 }} />

        <Button type="primary" plain text="primary" />

        <View style={{ height: 20 }} />

        <Button type="success" plain text="success" />

        <View style={{ height: 20 }} />
      </View>

      <View>
        <Text>细边框</Text>
      </View>

      <View>
        <View style={{ height: 20 }} />

        <Button type="primary" plain hairline text="primary" />

        <View style={{ height: 20 }} />

        <Button type="success" plain text="success" />

        <View style={{ height: 20 }} />
      </View>

      <View>
        <Text>禁用</Text>
      </View>

      <View>
        <View style={{ height: 20 }} />

        <Button type="primary" disabled text="primary" />

        <View style={{ height: 20 }} />

        <Button type="primary" disabled text="success" />

        <View style={{ height: 20 }} />
      </View>

      <View>
        <Text>加载状态</Text>
      </View>

      <View>
        <View style={{ height: 20 }} />

        <Button loading type="primary" loadingText="嘿嘿，加油哟~" text="primary" />

        <View style={{ height: 20 }} />

        <Button type="primary" disabled loading text="success" />

        <View style={{ height: 20 }} />
      </View>

      <View>
        <Text>按钮形状</Text>
      </View>

      <View>
        <View style={{ height: 20 }} />

        <Button type="primary" square text="square" />

        <View style={{ height: 20 }} />

        <Button type="primary" round text="round" />

        <View style={{ height: 20 }} />
      </View>

      <View>
        <Text>图标按钮</Text>
      </View>

      <View>
        <View style={{ height: 20 }} />

        <Button type="primary" icon={<Icon.IconArrowOutline />} text="square" />

        <View style={{ height: 20 }} />

        <Button type="primary" icon={<Icon.IconArrowOutline />} text="round" />

        <View style={{ height: 20 }} />
      </View>

      <View>
        <Text>按钮大小</Text>
      </View>

      <View>
        <View style={{ height: 20 }} />

        <Button type="primary" size="large" text="large" />

        <View style={{ height: 20 }} />

        <Button type="primary" size="mini" text="mini" />

        <View style={{ height: 20 }} />

        <Button type="primary" size="normal" text="normal" />

        <View style={{ height: 20 }} />

        <Button type="primary" size="small" text="small" />

        <View style={{ height: 20 }} />
      </View>

      <View>
        <Text>自定义颜色</Text>
      </View>

      <View style={{ height: 20 }} />

      <Button color="#960" text="default" />

      <View style={{ height: 20 }} />

      <Button color="#0c6" plain text="default" />

      <View style={{ height: 20 }} />
    </ScrollView>
  );
};

export default BasicButton;
