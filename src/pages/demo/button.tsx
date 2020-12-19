import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Layout from '@~/layouts/layout';
import Button from '@~/xant-ui/button';

import CStyles from './style';

const ButtonView: React.FC = () => {
  const [btnLoading, setBtnLoading] = useState(true);

  return (
    <Layout.Page title="Button">
      <ScrollView>
        <View style={CStyles.padding}>
          <View>
            <Text>按钮类型</Text>
          </View>

          <View>
            <Button text="default" />

            <View style={CStyles.ctxSplit} />

            <Button type="primary" text="primary" />

            <View style={CStyles.ctxSplit} />

            <Button type="success" text="success" />

            <View style={CStyles.ctxSplit} />

            <Button type="warning" text="warning" />

            <View style={CStyles.ctxSplit} />

            <Button type="error" text="error" />
          </View>

          <View>
            <Text>朴素按钮</Text>
          </View>

          <View>
            <Button type="primary" plain text="primary" />

            <View style={CStyles.ctxSplit} />

            <Button type="success" plain text="success" />
          </View>

          <View>
            <Text>细边框</Text>
          </View>

          <View>
            <Button type="primary" plain hairline text="primary" />

            <View style={CStyles.ctxSplit} />

            <Button type="primary" plain text="success" />
          </View>

          <View>
            <Text>禁用</Text>
          </View>

          <View>
            <Button type="primary" disabled text="primary" />

            <View style={CStyles.ctxSplit} />

            <Button type="primary" disabled text="success" />
          </View>

          <View>
            <Text>加载状态</Text>
          </View>

          <View>
            <Button
              type="primary"
              loading={btnLoading}
              loadingText="嘿嘿，加油哟~"
              onPress={() => {
                setBtnLoading((l) => !l);
              }}
              text="primary"
            />

            <View style={CStyles.ctxSplit} />

            <Button type="primary" disabled loading text="success" />
          </View>

          <View>
            <Text>按钮形状</Text>
          </View>

          <View>
            <Button type="primary" square text="square" />
            <View style={CStyles.ctxSplit} />

            <Button type="primary" round text="round" />
          </View>

          <View>
            <Text>图标按钮</Text>
          </View>

          <View>
            <Button
              type="primary"
              icon={<Icon name="upload" />}
              text="square"
            />

            <View style={CStyles.ctxSplit} />

            <Button type="primary" icon={<Icon name="meho" />} text="round" />
          </View>

          <View>
            <Text>按钮大小</Text>
          </View>

          <View>
            <Button type="primary" size="large" text="large" />

            <View style={CStyles.ctxSplit} />

            <Button type="primary" size="mini" text="mini" />

            <View style={CStyles.ctxSplit} />

            <Button type="primary" size="normal" text="normal" />

            <View style={CStyles.ctxSplit} />

            <Button type="primary" size="small" text="small" />
          </View>

          <View>
            <Text>自定义颜色</Text>
          </View>

          <Button color="#960" text="default" />

          <View style={CStyles.ctxSplit} />

          <Button color="#0c6" plain text="default" />

          <View style={CStyles.ctxSplit} />
        </View>
      </ScrollView>
    </Layout.Page>
  );
};

export default ButtonView;
