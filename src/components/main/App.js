import React from 'react';
import archieml from 'archieml';
import injectSheet from 'react-jss';
import uuidv4 from 'uuid/v4';
import Graphic from './Graphic';
import { Content, ContentBreak } from '../content';
import { unicodify } from '../../utils';

import copy from '../../copy';
const { copyAbove, graphics, copyBelow } = archieml.load(copy);

const processSteps = steps =>
  steps.map(({ text, poem, x, y, w, h }) => ({
    text: unicodify(text),
    poem,
    x: +x,
    y: +y,
    w: +w,
    h: +h,
  }));

const styles = {
  App: {
    margin: '5vh 0',
  },
};

const App = ({ classes }) => (
  <div className={classes.App}>
    <Content copy={copyAbove} />
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
    <ContentBreak />
    <Content copy={copyBelow} />
  </div>
);

export default injectSheet(styles)(App);
