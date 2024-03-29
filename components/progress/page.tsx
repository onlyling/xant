import React, { useState, useCallback, useEffect, memo } from 'react';
import type { ViewStyle } from 'react-native';
import { View } from 'react-native';

import type { ProgressPageProps } from './interface';
import Progress from './progress';
import { useTheme } from '../theme';
import { getDefaultValue } from '../helpers';

const ProgressPage: React.FC<ProgressPageProps> = ({ children, loading: loadingOut, backgroundColor }) => {
  const { themeVar } = useTheme();

  backgroundColor = getDefaultValue(backgroundColor, themeVar.progress_page_background_color);

  const [state, setState] = useState({
    loading: loadingOut,
    percentage: 0,
    duration: 0,
  });

  const onAnimationEnd = useCallback(() => {
    if (state.percentage === 100) {
      setState((s) => ({
        ...s,
        loading: false,
      }));
    }
  }, [state.percentage]);

  useEffect(() => {
    setState((s) => ({
      ...s,
      percentage: loadingOut ? 90 : 100,
      duration: loadingOut ? 1000 : 100,
    }));
  }, [loadingOut]);

  const wrapperStyle: ViewStyle = {
    flex: 1,
    backgroundColor: backgroundColor,
  };

  if (state.loading) {
    return (
      <View style={wrapperStyle}>
        <Progress square percentage={state.percentage} showPivot={false} animated animationDuration={state.duration} onAnimationEnd={onAnimationEnd} />
      </View>
    );
  }

  return <>{children}</>;
};

export default memo<typeof ProgressPage>(ProgressPage);
