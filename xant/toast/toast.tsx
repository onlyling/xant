import React, { useEffect, useState, memo } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

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
  const [msg, setMsg] = useState(message);

  // 修正数据
  if (closeOnClick) {
    // 是否在点击后关闭
    // 是否禁止背景点击
    // 可以触发点击的地方正好被背景 View 挡住
    forbidClick = false;
  }

  /**
   * 点击遮罩层
   */
  const onPressOverlay = () => {
    // 是否在点击遮罩层后关闭
    if (closeOnClickOverlay) {
      setShow(false);
    }
  };

  /**
   * 点击内容
   */
  const onPressContent = () => {
    // 是否在点击后关闭
    if (closeOnClick) {
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

    let timer: number;

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
    <Popup {...reset} show={show} onPressOverlay={onPressOverlay}>
      <TouchableWithoutFeedback onPress={onPressContent}>
        <View
          style={Styles.toast}
          pointerEvents={forbidClick ? undefined : 'box-none'}
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
