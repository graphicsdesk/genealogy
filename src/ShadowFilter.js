import React from 'react';
import { shadowId } from './constants';

// Adapted from https://stackoverflow.com/questions/6088409/svg-drop-shadow-using-css3
const ShadowFilter = () => (
  <filter id={shadowId} height="130%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="7" />
    <feOffset dx="1" dy="8" result="offsetblur" />
    <feComponentTransfer>
      <feFuncA type="linear" slope="0.5" />
    </feComponentTransfer>
    <feMerge>
      <feMergeNode />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
);

export default ShadowFilter;
