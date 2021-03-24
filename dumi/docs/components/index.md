---
title: 使用方式
order: 0
---

下载代码，导入项目，在项目根组件中引入。

```tsx | pure
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
```
