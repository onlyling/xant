import React, { useEffect, useMemo, memo } from 'react';
import type { ViewStyle } from 'react-native';
import { View, Keyboard } from 'react-native';

import type { DialogInputProps, DialogAction, DialogInputState } from './interface';
import Dialog from './dialog';
import TextInput from '../text-input';
import { useTheme } from '../theme';
import useState from '../hooks/use-state-update';
import usePersistFn from '../hooks/use-persist-fn';
import { isDef, isPromise } from '../helpers/typeof';

/**
 * Dialog 弹出框
 * @description 配合函数的使用
 */
const DialogInput: React.FC<DialogInputProps> = ({
  showCancelButton = true,

  beforeClose,
  onPressCancel,
  onPressConfirm,

  defaultValue,
  placeholder,
  type,
  textInput: { value, onChangeText, autoFocus = true, ...resetTextInputProps } = {},

  ...restProps
}) => {
  const { themeVar } = useTheme();
  const [state, setState] = useState<DialogInputState>({
    show: false,
    value: defaultValue,
    cancel: false,
    confirm: false,
    overlay: false,
  });
  const boxStyle = useMemo<ViewStyle>(
    () => ({
      marginHorizontal: themeVar.padding_md,
      marginVertical: themeVar.padding_md,
      borderRadius: themeVar.border_radius_md,
      padding: themeVar.padding_xs,
      overflow: 'hidden',
      backgroundColor: themeVar.background_color,
    }),
    [themeVar.background_color, themeVar.border_radius_md, themeVar.padding_md, themeVar.padding_xs],
  );

  const onChangeTextPersistFn = usePersistFn((t: string) => {
    setState({
      value: t,
    });
    onChangeText && onChangeText(t);
  });

  const genOnPressBtn = (action: Exclude<DialogAction, 'overlay'>) => () => {
    Keyboard.dismiss();

    const doOkCallback = (v: boolean, okCallback: () => void) => {
      setState({
        [action]: false,
      });
      if (v) {
        okCallback();
      }
    };
    const doCallback = (returnVal: boolean | Promise<boolean>, okCallback: () => void) => {
      if (isPromise(returnVal)) {
        setState({
          [action]: true,
        });

        returnVal.then((v) => {
          doOkCallback(v, okCallback);
        });
      } else {
        doOkCallback(returnVal, okCallback);
      }
    };
    const doOnPressCallback = () => {
      const actionCallback = action === 'confirm' ? onPressConfirm : onPressCancel;
      const returnVal = actionCallback ? actionCallback(state.value) : true;
      doCallback(returnVal, () => {
        setState({
          show: false,
        });
      });
    };

    if (beforeClose) {
      doCallback(beforeClose(action, state.value), () => {
        doOnPressCallback();
      });
    } else {
      doOnPressCallback();
    }
  };

  useEffect(() => {
    setState({
      show: true,
    });
  }, []);

  useEffect(() => {
    if (isDef(value)) {
      setState({
        value,
      });
    }
  }, [value]);

  return (
    <Dialog
      {...restProps}
      showCancelButton={showCancelButton}
      closeOnPressOverlay={false}
      show={state.show}
      onPressConfirm={genOnPressBtn('confirm')}
      onPressCancel={genOnPressBtn('cancel')}
      cancelButtonLoading={state.cancel}
      confirmButtonLoading={state.confirm}
    >
      <View style={boxStyle}>
        <TextInput {...resetTextInputProps} type={type} placeholder={placeholder} value={state.value} onChangeText={onChangeTextPersistFn} autoFocus={autoFocus} />
      </View>
    </Dialog>
  );
};

export default memo(DialogInput);
