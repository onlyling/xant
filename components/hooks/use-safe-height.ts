import { useState, useLayoutEffect } from 'react';
import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface UseSafeHeightParams {
  top?: boolean;
  bottom?: boolean;
}

const useSafeHeight = ({ top = true, bottom = true }: UseSafeHeightParams = {}) => {
  const insets = useSafeAreaInsets();
  const insetTop = top ? insets.top : 0;
  const insetBottom = bottom ? insets.bottom : 0;
  const dwindow = Dimensions.get('window');
  const [height, setHeight] = useState(dwindow.height - insetTop - insetBottom);

  useLayoutEffect(() => {
    setHeight(dwindow.height - insetTop - insetBottom);
  }, [dwindow.height, insetTop, insetBottom]);

  return height;
};

export default useSafeHeight;
