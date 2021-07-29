import React from 'react';

import Basic from './basic';
import Doc from '../../__fixtures__/doc';

const BasicLoadingDoc: React.FC = () => {
  return (
    <Doc>
      <Basic />
    </Doc>
  );
};

export default BasicLoadingDoc;
