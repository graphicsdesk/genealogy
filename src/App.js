import React from 'react';
import injectSheet from 'react-jss';
import Record from './Record';

const styles = {
  App: {
    marginBottom: '70vh',
  },
};

const App = ({ classes }) => (
  <div className={classes.App}>
    <Record />
  </div>
);

export default injectSheet(styles)(App);
