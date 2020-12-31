import React from 'react';

import { ProviderProps } from './interface';
import Theme from '../theme';

/**
 * 统一的配置
 * 将来 Portal 准备统一的入口，https://github.com/callstack/react-native-paper/blob/master/src/components/Portal/Portal.tsx
 */
const Provider: React.FC<ProviderProps> = ({ children, theme, dark }) => {
  return (
    <Theme theme={theme} dark={dark}>
      {children}
    </Theme>
  );
};

export default Provider;
