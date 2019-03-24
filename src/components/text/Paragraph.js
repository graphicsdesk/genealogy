import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  text: {},
};

const Paragraph = ({ classes, text }) => <p className={classes.text}>{text}</p>;

export default injectSheet(styles)(Paragraph);
