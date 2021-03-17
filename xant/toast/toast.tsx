import React, { useEffect, useState, memo } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

import type { ToastProps } from './interface';
import { createStyles } from './style';
import { Theme } from '../theme';
import Popup from '../popup/popup';
import Circular from '../loading/circular';
import Spinner from '../loading/spinner';

const Toast: React.FC<ToastProps> = ({
  type,
  position = 'middle',
  message,
  overlay = false,
  forbidPress = false,
  closeOnPress = false,
  closeOnPressOverlay = false,
  loadingType = 'circular',
  duration = 2000,
  hook,
  ...reset
}) => {
  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar, { position });

  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState(message);

  // 修正数据
  if (closeOnPress) {
    // 是否在点击后关闭
    // 是否禁止背景点击
    // 可以触发点击的地方正好被背景 View 挡住
    forbidPress = false;
  }

  /**
   * 点击遮罩层
   */
  const onPressOverlay = () => {
    // 是否在点击遮罩层后关闭
    if (closeOnPressOverlay) {
      setShow(false);
    }
  };

  /**
   * 点击内容
   */
  const onPressContent = () => {
    // 是否在点击后关闭
    if (closeOnPress) {
      setShow(false);
    }
  };

  useEffect(() => {
    setShow(true);

    // 在使用 Toast('test') 的时候如果会直接删了就没得过渡动画
    // 暂时用这个方式
    hook &&
      hook({
        close: () => {
          setShow(false);
        },
        setMessage: (s) => {
          setMsg(s);
        },
      });

    let timer: ReturnType<typeof setTimeout>;

    if (duration !== 0) {
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
    <Popup
      {...reset}
      show={show}
      overlay={overlay}
      onPressOverlay={onPressOverlay}
    >
      <TouchableWithoutFeedback onPress={onPressContent}>
        <View
          style={Styles.toast}
          pointerEvents={forbidPress ? undefined : 'box-none'}
          collapsable={false}
        >
          <View
            style={[Styles.inner, type === 'text' ? Styles.innerText : null]}
          >
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
            >
              {msg}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Popup>
  );
};

export default memo(Toast);
