import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  text: {
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px 0 rgba(0,0,0,0.41)',
    maxWidth: '510px',
    textAlign: 'center',
    color: '#222',
    padding: '1.1rem',
    fontSize: '1.1rem',
    fontFamily: 'Merriweather',
    fontWeight: 400,
    lineHeight: '1.9rem',
    '& em': {
      color: '#1875E5',
      fontWeight: 700,
      fontStyle: 'normal',
    },
  },
};

const TextBlock = ({ classes, text }) => {
  return (
    <p className={classes.text} dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export default injectSheet(styles)(TextBlock);
