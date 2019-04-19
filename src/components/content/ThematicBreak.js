import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  break: {
    display: 'block',
    height: '0.6px',
    border: 0,
    borderTop: '1px solid #ccc',
    margin: '0 auto',
    marginBottom: '1.7rem',
    padding: 0,
    width: '40vw',
    maxWidth: '350px',
  },
};

const ThematicBreak = ({ classes, copy }) => <hr className={classes.break} />;

export default injectSheet(styles)(ThematicBreak);
