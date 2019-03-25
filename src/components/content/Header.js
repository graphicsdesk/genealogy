import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  header: {
    marginBottom: '1.3rem',
    margin: '0 auto',
    maxWidth: '650px',
    textAlign: 'center',
  },
  byline: {
    fontSize: '1.05rem',
    fontFamily: 'Merriweather',
    margin: 0,
    marginBottom: '5px',
    fontWeight: 900,
  },
  timestamp: {
    fontSize: '1rem',
    fontFamily: 'Atlas Grotesk',
    color: '#333',
    margin: 0,
    textTransform: 'uppercase',
  },
};

const Header = ({ classes, header }) => {
  const { title, bylines, date } = header;
  return (
    <div className={classes.header}>
      {bylines.map(line => (
        <p
          key={line.substr(0, 100)}
          className={classes.byline}
          dangerouslySetInnerHTML={{ __html: line }}
        />
      ))}
      <p className={classes.timestamp}>{date}</p>
    </div>
  );
};

export default injectSheet(styles)(Header);
