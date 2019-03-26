import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  poem: {
    backgroundColor: 'rgba(0, 0, 0, 0.5) !important',
    maxWidth: '510px !important',
    textAlign: 'center !important',
    padding: '0.9rem !important',
    color: '#eee !important',
    fontSize: '1rem !important',
    fontFamily: 'Atlas Grotesk !important',
    fontWeight: '500 !important',
    lineHeight: '1.7rem !important',
  },
  line: {
    margin: '1rem 0 !important',
  },
};

const PoemBlock = ({ classes, text }) => {
  return (
    <div className={classes.poem}>
      {text.split('\n').map(line => (
        <p key={line} className={classes.line}>
          {line}
        </p>
      ))}
    </div>
  );
};

export default injectSheet(styles)(PoemBlock);
