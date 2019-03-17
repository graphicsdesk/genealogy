import React from 'react';
import archieml from 'archieml';

import Graphic from './Graphic';
import copy from './copy';

const steps = archieml.load(copy).steps;

const App = () => (
  <div>
    <Graphic steps={steps} />
  </div>
);

export default App;
