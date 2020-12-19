import 'react-native-gesture-handler';

import React from 'react';
import Theme from 'xant/theme';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Theme>
      <Routes />
    </Theme>
  );
};

export default App;
