import React from 'react';
import archieml from 'archieml';
import injectSheet from 'react-jss';
import uuidv4 from 'uuid/v4';
import Graphic from './Graphic';
import { Paragraph } from '../text';

import copy from '../../copy';
const { copyAbove, graphics } = archieml.load(copy);

const processSteps = steps =>
  steps.map(({ text, x, y, w, h, clipLabel }) => ({
    text,
    x: +x,
    y: +y,
    w: +w,
    h: +h,
    clipLabel,
  }));

const styles = {
  App: {
    margin: '70vh 0',
  },
  content: {},
};

const App = ({ classes }) => (
  <div className={classes.App}>
    <div className={classes.content}>
      {copyAbove.map(text => <Paragraph text={text} />)}
    </div>
    {graphics.map(({ leftImg, rightImg, steps }) => {
      const id = uuidv4();
      return (
        <Graphic
          key={id}
          id={id}
          leftImg={leftImg}
          rightImg={rightImg}
          steps={processSteps(steps)}
        />
      );
    })}
  </div>
);

export default injectSheet(styles)(App);
