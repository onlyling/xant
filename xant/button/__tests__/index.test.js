import 'react-native';
import React from 'react';
// import { TouchableHighlight } from 'react-native';
import { render } from '@testing-library/react-native';

import Button from '../index';
import Theme from '../../theme';

test('Button', async () => {
  const testRenderer = render(
    <Theme>
      <Button testID="Test" text="Test" />
    </Theme>,
  );

  const testElements = testRenderer.getAllByTestId('Test');

  expect(testElements.length).toBe(1);
  expect(testRenderer.getAllByText('Test')).toHaveLength(1);
});
