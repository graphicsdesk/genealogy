import React from 'react';
import animate from './animate';
import { clipId } from '../../constants';

const CORNER_RADIUS = 3;

const ClipPath = ({ graphicId, dims, style }) => (
  <clipPath id={clipId(graphicId)}>
    <rect
      {...dims}
      style={style}
      rx={CORNER_RADIUS}
      ry={CORNER_RADIUS}
    />
  </clipPath>
);

export default animate(ClipPath);
