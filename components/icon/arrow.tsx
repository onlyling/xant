import React, { memo } from 'react';
import Svg, { Polyline } from 'react-native-svg';

import type { IconCommonOutlineProps } from './interface';

type Direction = 'left' | 'up' | 'right' | 'down';

interface IconArrowOutlineProps extends IconCommonOutlineProps {
  direction?: 'left' | 'up' | 'right' | 'down';
}

const PointsMap: Record<Direction, string> = {
  right: '8,4 16,12 8,20',
  left: '16,4 8,12 16,20',
  up: '4,16 12,8 20,16',
  down: '4,8 12,16 20,8',
};

const IconArrowOutline: React.FC<IconArrowOutlineProps> = ({
  size,
  color,
  strokeWidth = 2,
  direction = 'right',
}) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24">
      <Polyline
        points={PointsMap[direction]}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

export default memo(IconArrowOutline);
