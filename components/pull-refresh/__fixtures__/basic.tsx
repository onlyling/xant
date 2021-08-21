import React, { useState, useCallback } from 'react';
import { View } from 'react-native';

import { PullRefresh } from 'xant';

function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

const BasicOverlay: React.FC = () => {
  const [colors, setColors] = useState<string[]>([getRandomColor(), getRandomColor(), getRandomColor()]);
  const onRefresh = useCallback(() => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setColors([getRandomColor(), getRandomColor(), getRandomColor()]);
        resolve();
      }, 500);
    });
  }, []);

  return (
    <PullRefresh onRefresh={onRefresh}>
      {colors.map((color) => {
        return <View key={color} style={{ height: 400, backgroundColor: color }} />;
      })}
      <View style={{ height: 400, backgroundColor: '#930' }} />
    </PullRefresh>
  );
};

export default BasicOverlay;
