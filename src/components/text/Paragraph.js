import React from 'react';
import injectSheet from 'react-jss';
import { hasHTMLElements } from '../../utils';

const styles = {
  text: {
    lineHeight: 1.9,
    fontSize: '1.1rem',
    fontFamily: 'Merriweather',
    margin: '0 auto 1.3rem auto',
    maxWidth: '650px',
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
