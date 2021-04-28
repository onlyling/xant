import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import Layout from '@~/layouts/layout';
import { Row, Col } from '_components/grid';

import CStyles from './style';

const Styles = StyleSheet.create({
  page: {
    backgroundColor: '#999',
  },

  card: {
    backgroundColor: '#f30',
  },

  card2: {
    backgroundColor: '#680',
  },
});

const GridView: React.FC = () => {
  return (
    <Layout.Page title="Grid">
      <ScrollView>
        <View style={CStyles.padding}>
          <View style={Styles.page}>
            <View>
              <Text>基础用法</Text>
            </View>

            <Row>
              <Col span="8">
                <View style={Styles.card}>
                  <Text>fsd</Text>
                </View>
              </Col>
              <Col span="8">
                <Text>fsd</Text>
              </Col>
              <Col span="8">
                <View style={Styles.card}>
                  <Text>fsd</Text>
                </View>
              </Col>
              <Col span="8">
                <Text>fsd</Text>
              </Col>
              <Col span="8">
                <Text>fsd</Text>
              </Col>
            </Row>

            <View style={CStyles.ctxSplit} />

            <View>
              <Text>在列元素之间增加间距</Text>
            </View>

            <Row gutter="10">
              <Col span="8">
                <View style={Styles.card}>
                  <Text>fsd</Text>
                </View>
              </Col>
              <Col span="8">
                <View style={Styles.card2}>
                  <Text>fsd</Text>
                </View>
              </Col>
              <Col span="8">
                <View style={Styles.card}>
                  <Text>fsd</Text>
                </View>
              </Col>
              <Col span="18" offset="2">
                <View style={Styles.card}>
                  <Text>span="18" offset="2"</Text>
                </View>
              </Col>
              <Col span="4">
                <View style={Styles.card}>
                  <Text>4</Text>
                </View>
              </Col>
            </Row>

            <View style={CStyles.ctxSplit} />
          </View>
        </View>
      </ScrollView>
    </Layout.Page>
  );
};

export default GridView;
