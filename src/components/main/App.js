import React from 'react';
import archieml from 'archieml';
import injectSheet from 'react-jss';
import uuidv4 from 'uuid/v4';
import copy from '../../copy';
import { unicodify } from '../../utils';
import { Content, Header } from '../content';
import Graphic from './Graphic';

const { header, copyAbove, graphics, copyBelow } = archieml.load(copy);

const processSteps = steps =>
  steps.map(({ text, poem, noBottomMargin, x, y, w, h }) => ({
    text: unicodify(text),
    noBottomMargin,
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
    <Header header={header} />
    <Content copy={copyAbove} />
    {graphics.map(({ leftImg, rightImg, steps, caption }) => {
      const id = uuidv4();
      return (
        <Graphic
          key={id}
          id={id}
          leftImg={leftImg}
          rightImg={rightImg}
          steps={processSteps(steps)}
          caption={caption}
        />
      );
    })}
    <Content copy={copyBelow} />
  </div>
);

export default injectSheet(styles)(App);
