import React, { PureComponent } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import { areEqualShallow } from '../../utils';
import { TextBlock, PoemBlock } from '../content';
import Record from './Record';

const styles = {
  Graphic: {
    marginBottom: '1.7rem !important',
  },
  sticky: {
    position: 'sticky !important',
    top: '0 !important',
  },
  steps: {
    WebkitTransform: 'translate3d(0, 0, 0) !important', // https://stackoverflow.com/questions/16033416/while-scrolling-on-an-ios-device-the-z-index-of-elements-isnt-working
    padding: '0 7vw 110vh 7vw !important',
    '& > div > div:last-child': {
      marginBottom: '0 !important', // Remove margin bottom on last className.step
    },
  },
  step: {
    marginBottom: '70vh !important',
    display: 'flex !important',
    justifyContent: 'center !important',
  },
  shortStep: {
    display: 'flex !important',
    justifyContent: 'center !important',
  },
  captionContainer: {
    marginTop: '0.4rem !important',
    padding: '0 15px !important',
  },
  caption: {
    fontFamily: 'Atlas Grotesk !important',
    fontSize: '0.95rem !important',
    maxWidth: '650px !important',
    margin: '0 auto !important',
    color: '#888 !important',
  },
  '@media (max-width: 767px)': {
    steps: { padding: '0 5vw 130vh 5vw !important' },
  },
};

class Graphic extends PureComponent {
  state = {
    clip: { clipLabel: '', x: 0, y: 0, w: 0, h: 0 },
  };

  onStepEnter = ({ data: { text, ...clip } }) => {
    if (!areEqualShallow(this.state.clip, clip)) {
      this.setState({ clip });
    }
  };

  render() {
    const { clip } = this.state;
    const { classes, id, leftImg, rightImg, steps, caption } = this.props;

    return (
      <div className={classes.Graphic}>
        <figure className={classes.sticky}>
          <Record
            graphicId={id}
            leftImg={leftImg}
            rightImg={rightImg}
            clip={clip}
          />
          {caption && (
            <div className={classes.captionContainer}>
              <p className={classes.caption}>{caption}</p>
            </div>
          )}
        </figure>
        <article className={classes.steps}>
          <Scrollama onStepEnter={this.onStepEnter}>
            {steps.map(data => (
              <Step key={data.text + data.poem} data={data}>
                <div
                  className={
                    data.noBottomMargin ? classes.shortStep : classes.step
                  }
                >
                  {data.poem ? (
                    <PoemBlock text={data.poem} />
                  ) : (
                    <TextBlock text={data.text} />
                  )}
                </div>
              </Step>
            ))}
          </Scrollama>
        </article>
      </div>
    );
  }
}

export default injectSheet(styles)(Graphic);
