import React from 'react';
import injectSheet from 'react-jss';
import CoverPhoto from './CoverPhoto';

const styles = {
  header: {
    marginBottom: '1.3rem',
  },
  title: {
    margin: '0 auto',
    width: '65vw',
    maxWidth: '825px',
  },
  banner: {
    display: 'inline-block',
    textTransform: 'uppercase',
    fontFamily: 'Open Sans',
    fontSize: '1.05rem',
    borderBottom: '2.3px solid #5ec2c2',
    color: '#5ec2c2',
    margin: 0,
    marginBottom: '0.9rem',
  },
  headline: {
    display: 'inline-block',
    fontFamily: 'Merriweather',
    fontSize: '2.4rem',
    lineHeight: 1.5,
    color: '#333',
    margin: 0,
    marginBottom: '1.7rem',
  },
  meta: {
    margin: '0 auto',
    maxWidth: '650px',
    textAlign: 'center',
  },
  byline: {
    fontSize: '1.05rem',
    fontFamily: 'Merriweather',
    margin: 0,
    marginBottom: '6px',
    fontWeight: 900,
  },
  timestamp: {
    fontSize: '0.97rem',
    fontFamily: 'Atlas Grotesk',
    color: '#333',
    margin: 0,
    textTransform: 'uppercase',
  },
  '@media (max-width: 991px)': {
    title: {
      width: '90%',
    },
  },
  '@media (max-width: 575px)': {
    headline: {
      fontSize: '2rem',
    },
  },
};

const Header = ({ classes, header }) => {
  const { headline, bylines, date, cover } = header;
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <p className={classes.banner}>The Eye | Features</p>
        <p className={classes.headline}>{headline}</p>
      </div>
      <CoverPhoto source={cover} />
      <div className={classes.meta}>
        {bylines.map(line => (
          <p
            key={line.substr(0, 100)}
            className={classes.byline}
            dangerouslySetInnerHTML={{ __html: line }}
          />
        ))}
        <p className={classes.timestamp}>{date}</p>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Header);
