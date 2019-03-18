import React from 'react';
import injectSheet from 'react-jss';
import { clipId } from '../../constants';

const CORNER_RADIUS = 3;

const styles = {
  rect: {
    transitionDuration: '0.3s',
  },
};

const ClipPath = ({ classes, dims }) => {
  return (
    <clipPath id={clipId}>
      <rect
        className={classes.rect}
        {...dims}
        rx={CORNER_RADIUS}
        ry={CORNER_RADIUS}
      />
    </clipPath>
  );
};

export default injectSheet(styles)(ClipPath);
