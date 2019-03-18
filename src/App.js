import React from 'react';
import archieml from 'archieml';
import injectSheet from 'react-jss';
import Graphic from './Graphic';

import copy from './copy';
const steps = archieml.load(copy).steps;

const styles = {
  App: {
    marginBottom: '70vh',
  },
};

const App = ({ classes }) => (
  <div className={classes.App}>
    <Graphic steps={steps} />
  </div>
);

export default injectSheet(styles)(App);
