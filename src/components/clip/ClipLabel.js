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

const ClipLabel = ({ classes, clipDims, text }) => {
  let { x, y, height } = clipDims;
  if (y > 12) {
    y -= 10;
  } else {
    y += height + 6;
  }

  return (
    <Fragment>
      <text className={classes.backText} x={x} y={y}>
        {text}
      </text>
      <text className={classes.frontText} x={x} y={y}>
        {text}
      </text>
    </Fragment>
  );
};

export default injectSheet(styles)(ClipLabel);
