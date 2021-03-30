import 'react-native';
import React from 'react';
// import { TouchableHighlight } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';

import Button from '../index';
import Theme from '../../theme';

// https://stackoverflow.com/questions/59587799/how-to-resolve-animated-usenativedriver-is-not-supported-because-the-native
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Button', () => {
  test('Button UI', () => {
    const testRenderer = render(
      <Theme>
        <Button testID="Test" text="Test" type="primary" plain hairline />
      </Theme>,
    );

    const testElements = testRenderer.getAllByTestId('Test');

    expect(testElements.length).toBe(1);
    expect(testRenderer.getAllByText('Test')).toHaveLength(1);
  });

  test('Button UI.text', () => {
    const testRenderer = render(
      <Theme>
        <Button testID="Test" text="Test" />
      </Theme>,
    );

    const testElement = testRenderer.getByTestId('Test');
    const textElement = testElement.props.children[0].props.children[1];

    expect(textElement.props.children).toBe('Test');
  });

  test('Button UI.square', () => {
    const testRenderer = render(
      <Theme>
        <Button testID="Test" text="Test" type="primary" size="mini" square />
      </Theme>,
    );

    const testElements = testRenderer.getAllByTestId('Test');

    expect(testElements.length).toBe(1);
    expect(testRenderer.getAllByText('Test')).toHaveLength(1);
  });

  test('Button UI.round', () => {
    const testRenderer = render(
      <Theme>
        <Button testID="Test" text="Test" type="primary" round />
      </Theme>,
    );

    const testElements = testRenderer.getAllByTestId('Test');

    expect(testElements.length).toBe(1);
    expect(testRenderer.getAllByText('Test')).toHaveLength(1);
  });

  test('Button UI.color', () => {
    const testRenderer = render(
      <Theme>
        <Button testID="Test" text="Test" color="#f30" plain />
      </Theme>,
    );

    const testElements = testRenderer.getAllByTestId('Test');

    // console.log(testElements[0]);

    expect(testElements.length).toBe(1);
    expect(testRenderer.getAllByText('Test')).toHaveLength(1);
  });

  test('Button event.press', () => {
    const onPressMock = jest.fn();
    const testRenderer = render(
      <Theme>
        <Button testID="Test" text="Test" onPress={onPressMock} />
      </Theme>,
    );

    fireEvent.press(testRenderer.getByText('Test'));

    expect(onPressMock).toHaveBeenCalled();
  });

  test('Button event.press disabled', () => {
    const onPressMock = jest.fn();
    const testRenderer = render(
      <Theme>
        <Button testID="Test" text="Test" onPress={onPressMock} disabled />
      </Theme>,
    );

    fireEvent.press(testRenderer.getByText('Test'));

    expect(onPressMock).not.toBeCalled();
  });

  test('Button event.press loading', () => {
    const onPressMock = jest.fn();
    const testRenderer = render(
      <Theme>
        <Button testID="Test" text="Test" onPress={onPressMock} loading />
      </Theme>,
    );

    fireEvent.press(testRenderer.getByTestId('Test'));
    expect(onPressMock).not.toBeCalled();
  });
});
