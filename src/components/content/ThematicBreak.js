import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  break: {
    display: 'block !important',
    height: '0.6px !important',
    border: '0 !important',
    borderTop: '1px solid #ccc !important',
    margin: '0 auto !important',
    marginBottom: '1.7rem !important',
    padding: '0 !important',
    width: '40vw !important',
    maxWidth: '350px !important',
  },
};

const ThematicBreak = ({ classes, copy }) => <hr className={classes.break} />;

export default injectSheet(styles)(ThematicBreak);
