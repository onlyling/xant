import React from 'react';

import Basic from './basic';
import Doc from '../../__fixtures__/doc';

const BasicOverlayDoc: React.FC = () => {
  return (
    <Doc>
      <Basic />
    </Doc>
  );
};

export default BasicOverlayDoc;
