/**
 * 16 进制颜色转 rgba
 * @param color 16 进制颜色
 * @param transparency 透明度 0~1
 */
export default (color: string, transparency = 0.8) => {
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  let sColor = color.toLowerCase();

  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var i = 1; i < 7; i += 2) {
      // eslint-disable-next-line radix
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
    }

    return `rgba(${sColorChange.join(',')},${transparency})`;
  }

  return sColor;
};
