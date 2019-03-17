import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  mask: {
    fill: '#000',
    fillOpacity: 0.35,
  },
};

const ImageMask = ({ classes, imgDims }) => (
  <rect {...imgDims} className={classes.mask} />
);

export default injectSheet(styles)(ImageMask);
