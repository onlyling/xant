import React, { useRef, memo } from 'react';
import type { NativeSyntheticEvent, ImageLoadEventData, ImageErrorEventData, ViewStyle, ImageStyle } from 'react-native';
import { View, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native';

import type { ImageProps } from './interface';
import { createStyles } from './style';
import { useTheme } from '../theme';
import IconPhotoFailFill from '../icon/photo-fail.fill';
import IconPhotoFill from '../icon/photo.fill';
import useState from '../hooks/use-state-update';

/**
 * Image 图片
 * 参考代码：https://github.com/HandlebarLabs/react-native-examples-and-tutorials/blob/master/tutorials/progressive-image-loading/ProgressiveImage.js
 * @description 增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。
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
    fadeDuration = 0,
    ...resetProps
  } = props;
  const [state, setState] = useState<{ loaded: boolean; error: boolean }>({
    loaded: false,
    error: false,
  });
  const ImageAnimated = useRef(new Animated.Value(0));

  const { themeVar } = useTheme();
  const Styles = createStyles(themeVar, {
    round,
    radius,
  });

  /**
   * 图片加载好了
   */
  const onLoadImage = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
    setState({ loaded: true });

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

  const wrapperStyleSummary: ViewStyle = StyleSheet.flatten([Styles.wrapper, wrapperStyle]);
  const imageStyleSummary: ImageStyle = StyleSheet.flatten([Styles.image, { opacity: (ImageAnimated.current as unknown) as number }, style]);

  return (
    <TouchableOpacity style={wrapperStyleSummary} activeOpacity={themeVar.active_opacity} onPress={onPress}>
      <Animated.Image {...resetProps} style={imageStyleSummary} fadeDuration={fadeDuration} onLoad={onLoadImage} onError={onErrorImage} />

      {!state.loaded && showLoading ? (
        <View style={Styles.hintWrapper}>
          <IconPhotoFill size={themeVar.image_loading_icon_size} color={themeVar.image_loading_icon_color} />
        </View>
      ) : null}

      {state.error && !alt && showError ? (
        <View style={Styles.hintWrapper}>
          <IconPhotoFailFill size={themeVar.image_error_icon_size} color={themeVar.image_error_icon_color} />
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
