import React from 'react';
import injectSheet from 'react-jss';
import getImage from './getImage';

const styles = {
  container: {
    width: '75vw !important',
    maxWidth: '900px !important',
    margin: '0 auto 2rem auto !important',
  },
  image: {
    width: '100% !important',
    marginBottom: '10px !important',
  },
  caption: {
    fontFamily: 'Atlas Grotesk !important',
    fontWeight: '400 !important',
    fontSize: '0.95rem !important',
    color: '#888 !important',
    margin: '0 !important',
  },
  '@media (max-width: 991px)': {
    container: {
      width: '80vw !important',
    },
  },
  '@media (max-width: 680px)': {
    container: {
      width: 'auto !important',
    },
  },
};

const CoverPhoto = ({ classes, source }) => (
  <div className={classes.container}>
    <img className={classes.image} src={getImage(source)} alt={source} />
  </div>
);

export default injectSheet(styles)(CoverPhoto);
