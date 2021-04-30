import React from 'react';
import { View } from 'react-native';
import { Provider } from 'xant';

const Doc: React.FC = ({ children }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <Provider>{children}</Provider>
    </View>
  );
};

export default Doc;
