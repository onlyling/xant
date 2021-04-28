/**
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 *
 * copy from https://www.jianshu.com/p/a0a2c9f55fb6
 */

/*
 设备的像素密度，例如：
 PixelRatio.get() === 1          mdpi Android 设备 (160 dpi)
 PixelRatio.get() === 1.5        hdpi Android 设备 (240 dpi)
 PixelRatio.get() === 2          iPhone 4, 4S,iPhone 5, 5c, 5s,iPhone 6,xhdpi Android 设备 (320 dpi)
 PixelRatio.get() === 3          iPhone 6 plus , xxhdpi Android 设备 (480 dpi)
 PixelRatio.get() === 3.5        Nexus 6       */

import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width; //设备的宽度
const deviceHeight = Dimensions.get('window').height; //设备的高度
const defaultPixel = 2; //iphone6的像素密度
//px转换成dp
const w2 = 750 / defaultPixel;
const h2 = 1334 / defaultPixel;
const scale = Math.min(deviceHeight / h2, deviceWidth / w2); //获取缩放比例

/**
 * 元素尺寸适配屏幕
 * @param size 设计稿上的尺寸
 * @returns 适配当前设备的尺寸
 */
const scaleSize = (size: number) => {
  size = Math.round(size * scale - 0.5);
  return size / defaultPixel;
};

/** 计算缓存 */
const cache: Record<any, number> = {};

/**
 * 元素尺寸适配屏幕
 * @param size 设计稿上的尺寸
 */
const getScaleSize = (size: number) => {
  if (!cache[size]) {
    cache[size] = scaleSize(size);
  }

  return cache[size];
};

export default getScaleSize;
