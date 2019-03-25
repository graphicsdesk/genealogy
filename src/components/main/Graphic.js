import React, { PureComponent } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import { areEqualShallow } from '../../utils';
import { TextBlock, PoemBlock } from '../content';
import Record from './Record';

const stepStyles = {
  marginBottom: '70vh',
  display: 'flex',
};
const styles = {
  Graphic: {
    marginBottom: '5vh',
  },
  sticky: {
    position: 'sticky',
    top: 0,
  },
  steps: {
    WebkitTransform: 'translate3d(0, 0, 0)', // https://stackoverflow.com/questions/16033416/while-scrolling-on-an-ios-device-the-z-index-of-elements-isnt-working
    padding: '0 7vw 110vh 7vw',
    '& > div > div:last-child': {
      marginBottom: 0, // Remove margin bottom on last className.step
    },
  },
  leftStep: {
    ...stepStyles,
    justifyContent: 'flex-start',
  },
  rightStep: {
    ...stepStyles,
    justifyContent: 'flex-end',
  },
  centerStep: {
    ...stepStyles,
    justifyContent: 'center',
  },
  '@media (max-width: 767px)': {
    steps: { padding: '0 5vw 130vh 5vw' },
  },
  '@media (max-width: 575px)': {
    leftStep: { justifyContent: 'center' },
    rightStep: { justifyContent: 'center' },
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
    const { classes, id, leftImg, rightImg, steps } = this.props;

    return (
      <div className={classes.Graphic}>
        <figure className={classes.sticky}>
          <Record
            graphicId={id}
            leftImg={leftImg}
            rightImg={rightImg}
            clip={clip}
          />
        </figure>
        <article className={classes.steps}>
          <Scrollama onStepEnter={this.onStepEnter}>
            {steps.map(data => (
              <Step key={data.text + data.poem} data={data}>
                <div
                  className={data.poem ? classes.centerStep : (data.x < 1 ? classes.rightStep : classes.leftStep)}
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
