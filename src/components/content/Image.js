import React from 'react';
import injectSheet from 'react-jss';
import getImage from './getImage';

const styles = {
  leftContainer: {
    width: '35vw !important',
    margin: '0 1.3rem 0.5rem 10vw !important',
    float: 'left !important',
    maxWidth: '600px !important',
  },
  rightContainer: {
    width: '35vw !important',
    margin: '0 10vw 0.5rem 1.3rem !important',
    float: 'right !important',
    maxWidth: '600px !important',
  },
  centerContainer: {
    width: '70vw !important',
    margin: '0 auto 1.3rem auto !important',
    maxWidth: '900px !important',
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
    leftContainer: {
      width: '45vw !important',
      marginLeft: '1.3rem !important',
    },
    rightContainer: {
      width: '45vw !important',
      marginRight: '1.3rem !important',
    },
    centerContainer: {
      width: '80vw !important',
    },
  },
  '@media (max-width: 726px)': {
    leftContainer: { marginLeft: '0 !important' },
    rightContainer: { marginRight: '0 !important' },
  },
  '@media (max-width: 680px)': {
    centerContainer: {
      width: 'auto !important',
    },
  },
  '@media (max-width: 575px)': {
    leftContainer: {
      width: 'auto !important',
      marginRight: '0 !important',
    },
    rightContainer: {
      width: 'auto !important',
      marginLeft: '0 !important',
    },
  },
};

const Image = ({ classes, source, caption, align }) => {
  // align mmust be left, right, or center
  const containerClass = classes[align + 'Container'];
  return (
    <div className={containerClass}>
      <img className={classes.image} src={getImage(source)} alt={caption} />
      {caption && <p className={classes.caption}>{caption}</p>}
    </div>
  );
};

export default injectSheet(styles)(Image);
