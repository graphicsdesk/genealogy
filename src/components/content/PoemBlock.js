import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  poem: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    maxWidth: '500px',
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
  title: {
    marginBottom: '1rem',
    fontSize: '1.3rem',
    fontWeight: 400,
  },
};

const PoemBlock = ({ classes, text }) => {
  const lines = text.split('\n');
  return (
    <div className={classes.poem}>
      <p className={classes.title}>{lines[0]}</p>
      {lines.slice(1).map(line =>
                          <p key={line} className={classes.line}>{line}</p>
      )}
    </div>
  );
};

export default injectSheet(styles)(PoemBlock);
