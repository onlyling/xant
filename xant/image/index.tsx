import React, { useState, useRef, memo } from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  NativeSyntheticEvent,
  ImageLoadEventData,
  ImageErrorEventData,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ImageProps } from './interface';
import { createStyles } from './style';
import { Theme } from '../theme';

/**
 * 图片、图片预览
 * 参考代码：https://github.com/HandlebarLabs/react-native-examples-and-tutorials/blob/master/tutorials/progressive-image-loading/ProgressiveImage.js
 */
const Image: React.FC<ImageProps> = (props) => {
  const {
    wrapperStyle,
    style,
    onLoad,
    onError,
    onPress,
    alt,
    radius = 0,
    round,
    showError = true,
    showLoading = true,
    animated = true,
    duration = 200,
    ...resetProps
  } = props;
  const [state, setState] = useState<{ loaded: boolean; error: boolean }>({
    loaded: false,
    error: false,
  });
  const ImageAnimated = useRef(new Animated.Value(0));

  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar, {
    round,
    radius,
  });

  /**
   * 图片加载好了
   */
  const onLoadImage = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
    setState((s) => ({ ...s, loaded: true }));

    Animated.timing(ImageAnimated.current, {
      toValue: 1,
      duration: animated ? duration : 0,
      useNativeDriver: true,
    }).start();

    onLoad && onLoad(event);
  };

  /**
   * 图片加载失败
   */
  const onErrorImage = (event: NativeSyntheticEvent<ImageErrorEventData>) => {
    setState({ loaded: true, error: true });
    onError && onError(event);
  };

  const wrapperStyles = [Styles.wrapper, wrapperStyle];
  const imageStyles = [Styles.image, { opacity: ImageAnimated.current }, style];

  return (
    <TouchableOpacity
      style={wrapperStyles}
      activeOpacity={themeVar.active_opacity}
      onPress={onPress}
    >
      <Animated.Image
        {...resetProps}
        style={imageStyles}
        onLoad={onLoadImage}
        onError={onErrorImage}
      />

      {!state.loaded && showLoading ? (
        <View style={Styles.hintWrapper}>
          <Icon style={Styles.loadingIcon} name="image" />
        </View>
      ) : null}

      {state.error && !alt && showError ? (
        <View style={Styles.hintWrapper}>
          <Icon style={Styles.errorIcon} name="image-broken" />
        </View>
      ) : null}

      {state.error && alt && showError ? (
        <View style={Styles.hintWrapper}>
          <Text style={Styles.hintText}>{alt}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default memo(Image);
