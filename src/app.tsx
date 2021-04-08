import 'react-native-gesture-handler';

import React from 'react';
import Provider from 'components/provider';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Provider fullScreen>
      <Routes />
    </Provider>
  );
};

export default App;
