import React from 'react';
import injectSheet from 'react-jss';
import { hasHTMLElements } from '../../utils';

const styles = {
  text: {
    lineHeight: '1.9 !important',
    fontSize: '1.1rem !important',
    fontFamily: 'Merriweather !important',
    margin: '0 auto 1.3rem auto !important',
    maxWidth: '650px !important',
    '& a': {
      textDecoration: 'none !important',
      color: '#5ec2c2 !important',
      borderBottomColor: '#5ec2c2 !important',
      borderBottomWidth: '0 !important',
    },
    '& a:hover': {
      borderBottomWidth: '1px !important',
    },
  },
};

const Paragraph = ({ classes, text }) => {
  if (hasHTMLElements(text))
    return (
      <p className={classes.text} dangerouslySetInnerHTML={{ __html: text }} />
    );
  return <p className={classes.text}>{text}</p>;
};

export default injectSheet(styles)(Paragraph);
