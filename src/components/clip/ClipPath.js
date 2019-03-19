import React from 'react';
import animate from './animate';
import { clipId } from '../../constants';

const CORNER_RADIUS = 3;

const ClipPath = ({ graphicId, dims }) => (
  <clipPath id={clipId(graphicId)}>
    <rect {...dims} rx={CORNER_RADIUS} ry={CORNER_RADIUS} />
  </clipPath>
);

export default animate(ClipPath);
