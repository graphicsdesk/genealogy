import React, { Fragment } from 'react';
import injectSheet from 'react-jss';

const font = '500 1rem "Atlas Grotesk"';
const styles = {
  frontText: {
    font,
    fill: '#fff',
    transitionDuration: '0.3s',
  },
  backText: {
    font,
    stroke: '#333',
    strokeWidth: 2,
    opacity: 0.8,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
  },
};

const ClipLabel = ({ classes, dims: clipDims, text }) => {
  const { x, y, height } = clipDims;
  const dims = { x, y };
  if (y > 12) {
    dims.y -= 10;
  } else {
    dims.y += height + 6;
  }

  return (
    <Fragment>
      <text className={classes.backText} {...dims}>
        {text}
      </text>
      <text className={classes.frontText} {...dims}>
        {text}
      </text>
    </Fragment>
  );
};

export default injectSheet(styles)(ClipLabel);
