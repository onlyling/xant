import 'react-native-gesture-handler';

import React from 'react';
import Provider from 'xant/provider';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
};

export default App;
