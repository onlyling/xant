import React from 'react';
import { StatusBar, StatusBarProps } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { Theme } from 'xant/theme';

const FocusAwareStatusBar: React.FC<StatusBarProps> = (props) => {
  const isFocused = useIsFocused();
  const { themeVar } = Theme.useContainer();

  return isFocused ? (
    <StatusBar backgroundColor={themeVar.primary} {...props} />
  ) : null;
};

export default FocusAwareStatusBar;
