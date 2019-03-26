import React from 'react';
import injectSheet from 'react-jss';
import getImage from './getImage';

const styles = {
  leftContainer: {
    width: '35vw',
    margin: '0 1.3rem 0.5rem 10vw',
    float: 'left',
    maxWidth: '600px',
  },
  rightContainer: {
    width: '35vw',
    margin: '0 10vw 0.5rem 1.3rem',
    float: 'right',
    maxWidth: '600px',
  },
  centerContainer: {
    width: '70vw',
    margin: '0 auto 1.3rem auto',
    maxWidth: '900px',
  },
  image: {
    width: '100%',
    marginBottom: '10px',
  },
  caption: {
    fontFamily: 'Atlas Grotesk',
    fontWeight: 400,
    fontSize: '0.95rem',
    color: '#888',
    margin: 0,
  },
  '@media (max-width: 991px)': {
    leftContainer: {
      width: '45vw',
      marginLeft: '1.3rem',
    },
    rightContainer: {
      width: '45vw',
      marginRight: '1.3rem',
    },
    centerContainer: {
      width: '80vw',
    },
  },
  '@media (max-width: 726px)': {
    leftContainer: { marginLeft: 0 },
    rightContainer: { marginRight: 0 },
  },
  '@media (max-width: 680px)': {
    centerContainer: {
      width: 'auto',
    },
  },
  '@media (max-width: 575px)': {
    leftContainer: {
      width: 'auto',
      marginRight: 0,
    },
    rightContainer: {
      width: 'auto',
      marginLeft: 0,
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
