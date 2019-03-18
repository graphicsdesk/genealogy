import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  mask: {
    fill: '#000',
    fillOpacity: 0.35,
  },
};

const ImageMasks = ({ classes, imgDims }) => {
  const { leftX, y, width, height } = imgDims;
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

export default injectSheet(styles)(ImageMasks);
