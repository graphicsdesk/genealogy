import React from 'react';
import injectSheet from 'react-jss';
import { clipId } from './constants';

const styles = {
  rect: {
    transitionDuration: '0.3s',
  },
};

const ClipPath = ({ classes, imgDims, fracs }) => {
  const { x: imgX, y: imgY, width, height } = imgDims;
  const { x, y, w, h } = fracs;

  return (
    <clipPath id={clipId}>
      <rect
        className={classes.rect}
        x={imgX + x * width}
        y={imgY + y * height}
        width={width * w}
        height={height * h}
        rx={3}
        ry={3}
      />
    </clipPath>
  );
};

export default injectSheet(styles)(ClipPath);
