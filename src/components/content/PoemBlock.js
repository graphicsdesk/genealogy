import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  poem: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    maxWidth: '510px',
    textAlign: 'center',
    padding: '0.9rem',
    color: '#eee',
    fontSize: '1rem',
    fontFamily: 'Atlas Grotesk',
    fontWeight: 500,
    lineHeight: '1.7rem',
  },
  line: {
    margin: '1rem 0',
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
