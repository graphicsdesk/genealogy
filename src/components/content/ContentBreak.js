import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  break: {
    display: 'block',
    height: '1px',
    border: 0,
    borderTop: '1px solid #ddd',
    margin: '0 auto',
    marginBottom: '1.7rem',
    padding: 0,
    width: '40vw',
    maxWidth: '350px',
  },
};

const ContentBreak = ({ classes, copy }) => <hr className={classes.break} />;

export default injectSheet(styles)(ContentBreak);
