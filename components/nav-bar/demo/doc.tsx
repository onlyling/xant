import React from 'react';

import { Provider } from 'xant';
import Basic from './basic';

const BasicNavBarDoc: React.FC = () => {
  return (
    <Provider>
      <Basic />
    </Provider>
  );
};

export default BasicNavBarDoc;
