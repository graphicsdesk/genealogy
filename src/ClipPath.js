import React from 'react';
import injectSheet from 'react-jss';
import { clipId } from './constants';

const CORNER_RADIUS = 3;

const styles = {
  rect: {
    transitionDuration: '0.3s',
  },
};

const ClipPath = ({ classes, imgDims, fracs }) => {
  const { leftX: rectX, y: rectY, width, height } = imgDims;
  const { x, y, w, h } = fracs;

  return (
    <clipPath id={clipId}>
      <rect
        className={classes.rect}
        x={rectX + x * width}
        y={rectY + y * height}
        width={w * width}
        height={h * height}
        rx={CORNER_RADIUS}
        ry={CORNER_RADIUS}
      />
    </clipPath>
  );
};

export default injectSheet(styles)(ClipPath);
