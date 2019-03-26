import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  text: {
    backgroundColor: '#fff !important',
    boxShadow: '0 5px 15px 0 rgba(0,0,0,0.41) !important',
    maxWidth: '510px !important',
    textAlign: 'center !important',
    color: '#222 !important',
    padding: '1.1rem !important',
    fontSize: '1.1rem !important',
    fontFamily: 'Merriweather !important',
    fontWeight: '400 !important',
    lineHeight: '1.9rem !important',
  },
};

const TextBlock = ({ classes, text }) => {
  return (
    <p className={classes.text} dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export default injectSheet(styles)(TextBlock);
