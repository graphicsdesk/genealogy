import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  mask: {
    fill: '#000',
    fillOpacity: 0.35,
  },
};

const ImageVeil = ({ classes, dims }) => {
  const { leftX, y, width, height } = dims;
  return (
    <rect
      className={classes.mask}
      x={leftX}
      y={y}
      width={2 * width}
      height={height}
    />
  );
};

export default injectSheet(styles)(ImageVeil);
