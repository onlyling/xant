import React, { useRef, useEffect, useMemo, memo } from 'react';
import type { TextStyle } from 'react-native';
import { View, Text, PanResponder, Animated } from 'react-native';

import type { PickerColumnProps, PickerObjectOption } from './interface';
import { isDef } from '../helpers/typeof';
import usePersistFn from '../hooks/use-persist-fn';

const textStyle: TextStyle = {
  textAlign: 'center',
  height: 44,
  lineHeight: 44,
  fontSize: 16,
};

const findOptionIndex = (options: PickerObjectOption[], start: number, end: number) => {
  const isNext = end - start >= 0;

  for (let iii = start; isNext ? iii <= end : iii >= end; iii += isNext ? 1 : -1) {
    const item = options[iii];
    if (!item.disabled) {
      return iii;
    }
  }

  return -1;
};

const findUsableOptionIndex = (options: PickerObjectOption[], next: boolean, index: number, reverse = true) => {
  const maxIndex = options.length - 1;
  // 两端的情况不能反转查找
  if (reverse && (index === 0 || index === maxIndex)) {
    reverse = false;
  }

  // 顶端不能继续向上找
  if (index === 0 && !next) {
    next = true;
  }

  // 末端补鞥呢继续乡下找
  if (index === maxIndex && next) {
    next = false;
  }

  const getStart = (cNext: boolean) => {
    return index + (cNext ? 1 : -1);
  };

  const getEnd = (cNext: boolean) => {
    return cNext ? maxIndex : 0;
  };

  let nIndex = findOptionIndex(options, getStart(next), getEnd(next));

  if (nIndex === -1 && reverse) {
    nIndex = findOptionIndex(options, getStart(!next), getEnd(!next));
  }

  return nIndex;
};

/**
 * 自定义输入项
 */
const PickerColumn: React.FC<PickerColumnProps> = ({ itemHeight, visibleItemCount, options, defaultValue, onChangeValue }) => {
  /** 刻度偏移量，中间一个选项的高度，各自偏移半个高度 */
  const markMargin = itemHeight / 2;
  const PanAnimated = useRef(new Animated.Value(0));
  /** 上次的位置，用于滚动中计算 */
  const lastTop = useRef(0);
  /** 滚动范围 最大最小值 */
  const scopeTop = useRef({ start: 0, end: 0 });
  const onChangeValuePersistFn = usePersistFn(onChangeValue);

  const panResponder = useMemo(() => {
    return PanResponder.create({
      // 必要的回调
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // 过程中不处理边界问题
        const currentTop = lastTop.current + gestureState.dy;
        PanAnimated.current.setValue(currentTop);
      },
      onPanResponderRelease: (_, gestureState) => {
        const currentTop = lastTop.current + gestureState.dy;
        const { start, end } = scopeTop.current;
        /** 想选下面的数据 */
        const isToNext = gestureState.dy <= 0;

        /** 当前完整的情况是第 N 索引值 */
        let endIndex = -1;

        if (currentTop < start && currentTop > end) {
          /** 相对第一个选项 top 的偏移值，取正 */
          const absStartTopDeviant = Math.abs(currentTop - start);
          /** 偏移值 */
          const remainder = absStartTopDeviant % itemHeight;

          endIndex = Math.floor(absStartTopDeviant / itemHeight);

          if (isToNext && remainder >= markMargin) {
            endIndex += 1;
          } else if (!isToNext && remainder >= markMargin) {
            endIndex += 1;
          }

          // 是否
          if (endIndex > -1 && options[endIndex].disabled) {
            endIndex = findUsableOptionIndex(options, isToNext, endIndex);
          }
        } else {
          if (currentTop >= start) {
            endIndex = findUsableOptionIndex(options, true, 0, false);
          }

          if (currentTop <= end) {
            endIndex = findUsableOptionIndex(options, false, options.length - 1, false);
          }
        }

        // 计算正确的位置
        // 反方向偏移，所以减去第 N 索引值的高度
        lastTop.current = start - endIndex * itemHeight;

        // 判断当前应该滚动到哪个
        Animated.timing(PanAnimated.current, {
          toValue: lastTop.current, // 设置动画的属性值
          useNativeDriver: true,
          duration: 50,
        }).start(({ finished }) => {
          if (finished) {
            onChangeValuePersistFn(options[endIndex] || null);
          }
        });
      },
    });
  }, [itemHeight, markMargin, onChangeValuePersistFn, options]);

  // 监听数据变化，重新初始化值
  useEffect(() => {
    // 计算初始值
    const startTop = (itemHeight * visibleItemCount) / 2 - itemHeight / 2;
    let endIndex = 0;

    if (isDef(defaultValue)) {
      endIndex = options.findIndex((item) => item.value === defaultValue);
    }

    if (options[endIndex].disabled) {
      endIndex = findUsableOptionIndex(options, true, endIndex);
    }

    const currentTop = startTop - endIndex * itemHeight;

    PanAnimated.current.setValue(currentTop);
    lastTop.current = currentTop;
    scopeTop.current = {
      start: startTop,
      end: startTop - itemHeight * (options.length - 1),
    };
  }, [itemHeight, visibleItemCount, options, defaultValue]);

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 12,
        position: 'relative',
      }}
    >
      <View
        {...panResponder.panHandlers}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 4,
        }}
      />

      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: '50%',
          zIndex: 3,
          backgroundColor: 'rgba(255,255,255,0.5)',
          borderBottomColor: '#ebedf0',
          borderBottomWidth: 1,
          transform: [
            {
              translateY: -markMargin,
            },
          ],
        }}
      />

      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '50%',
          bottom: 0,
          zIndex: 3,
          backgroundColor: 'rgba(255,255,255,0.5)',
          borderTopColor: '#ebedf0',
          borderTopWidth: 1,
          transform: [
            {
              translateY: markMargin,
            },
          ],
        }}
      />
      <Animated.View
        style={{
          position: 'relative',
          transform: [
            {
              translateY: PanAnimated.current,
            },
          ],
        }}
      >
        {options.map((item) => {
          return (
            <Text
              key={item.value}
              style={[
                textStyle,
                item.disabled
                  ? {
                      color: '#999',
                    }
                  : null,
              ]}
            >
              {item.label}
            </Text>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default memo(PickerColumn);
