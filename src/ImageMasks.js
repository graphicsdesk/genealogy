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
      x={leftX}
      y={y}
      width={width * 2}
      height={height}
      className={classes.mask}
    />
  );
};

export default injectSheet(styles)(ImageMasks);
