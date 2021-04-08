import React from 'react';

import type { ProviderProps } from './interface';
import Theme from '../theme';
import Portal from '../portal';

/**
 * 统一的配置
 * 将来 Portal 准备统一的入口，https://github.com/callstack/react-native-paper/blob/master/src/components/Portal/Portal.tsx
 */
const Provider: React.FC<ProviderProps> = ({
  children,
  theme,
  dark,
  fullScreen,
}) => {
  return (
    <Theme theme={theme} dark={dark} fullScreen={fullScreen}>
      <Portal.Host>{children}</Portal.Host>
    </Theme>
  );
};

export default Provider;
