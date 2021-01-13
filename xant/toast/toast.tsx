import React, { useEffect, useState, memo } from 'react';
import { Text, View } from 'react-native';

import { ToastProps } from './interface';
import { createStyles } from './style';
import { Theme } from '../theme';
import Popup from '../popup/popup';
import Circular from '../loading/circular';
import Spinner from '../loading/spinner';

const Toast: React.FC<ToastProps> = ({
  type,
  position,
  message,
  forbidClick,
  closeOnClick,
  closeOnClickOverlay,
  loadingType,
  duration,
  hook,
  ...reset
}) => {
  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar, { position });

  const [show, setShow] = useState(false);

  /**
   * 点击遮罩层
   */
  const onPressOverlay = () => {
    if (closeOnClickOverlay) {
      setShow(false);
    }
  };

  useEffect(() => {
    setShow(true);

    hook &&
      hook({
        close: () => {
          setShow(false);
        },
      });

    let timer: number;

    if (duration !== 0) {
      console.log(duration);
      timer = setTimeout(() => {
        // 隐藏弹窗
        setShow(false);
      }, duration);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [duration, hook]);

  return (
    <Popup {...reset} show={show} onPressOverlay={onPressOverlay}>
      <View
        style={Styles.toast}
        pointerEvents={forbidClick ? undefined : 'box-none'}
        collapsable={false}
      >
        <View style={[Styles.inner, type === 'text' ? Styles.innerText : null]}>
          {type === 'loading' ? (
            <View style={Styles.loading}>
              {loadingType === 'circular' ? (
                <Circular color={themeVar.toast_loading_icon_color} />
              ) : (
                <Spinner color={themeVar.toast_loading_icon_color} />
              )}
            </View>
          ) : null}

          <Text
            style={[Styles.text, type === 'text' ? Styles.textTop0 : null]}
            numberOfLines={1}
          >
            {message}
          </Text>
        </View>
      </View>
    </Popup>
  );
};

export default memo(Toast);
