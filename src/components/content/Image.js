import React from 'react';
import injectSheet from 'react-jss';

const getImage = name => {
  switch (name) {
    case 'PortraitOfYuanTungLi.jpg':
      return require('./images/PortraitOfYuanTungLi.jpg');
    case 'FairbankLetter.jpg':
      return require('./images/FairbankLetter.jpg');
    default:
      console.error(`Could not get image with name ${name} in getImage().`);
      return null;
  }
};

const styles = {
  leftContainer: {
    width: '35vw',
    margin: '0 1.3rem 0.5rem 10vw',
    float: 'left',
  },
  rightContainer: {
    width: '35vw',
    margin: '0 10vw 1.3rem 0.5rem',
    float: 'right',
  },
  image: {
    width: '100%',
    marginBottom: '10px',
  },
  caption: {
    fontFamily: 'Atlas Grotesk',
    fontSize: '0.95rem',
    color: '#999',
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
  },
  '@media (max-width: 726px)': {
    leftContainer: { marginLeft: 0 },
    rightContainer: { marginRight: 0 },
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
  return (
    <div
      className={
        align === 'left' ? classes.leftContainer : classes.rightContainer
      }
    >
      <img className={classes.image} src={getImage(source)} alt={caption} />
      {caption && <p className={classes.caption}>{caption}</p>}
    </div>
  );
};

export default injectSheet(styles)(Image);
