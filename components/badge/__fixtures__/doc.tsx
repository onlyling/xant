import React from 'react';

import Basic from './basic';
import Doc from '../../__fixtures__/doc';

const BasicBadgeDoc: React.FC = () => {
  return (
    <Doc>
      <Basic />
    </Doc>
  );
};

export default BasicBadgeDoc;
