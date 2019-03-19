import React, { Fragment } from 'react';
import injectSheet from 'react-jss';
import animate from './animate';

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

const Label = ({
  classes,
  text,
  dims: { width, height, ...dims },
  transform,
}) => (
  <Fragment>
    <text className={classes.backText} {...dims}>
      {text}
    </text>
    <text className={classes.frontText} {...dims}>
      {text}
    </text>
  </Fragment>
);
const AnimatedLabel = animate(injectSheet(styles)(Label));

const ClipLabel = ({ classes, clipDims, text }) => {
  const { x, y, height } = clipDims;
  const dims = { x, y };
  if (y > 12) {
    dims.y -= 10;
  } else {
    dims.y += height + 6;
  }

  return <AnimatedLabel dims={dims} text={text} />;
};

export default ClipLabel;
