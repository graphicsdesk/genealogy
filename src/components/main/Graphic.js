import React, { PureComponent } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import Record from './Record';
import { areEqualShallow } from '../../utils';

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
    padding: '0 7vw 120vh 7vw',

    // Remove margin bottom on last className.step
    '& > div > div:last-child': {
      marginBottom: 0,
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
  stepText: {
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px 0 rgba(0,0,0,0.41)',
    maxWidth: '500px',
    textAlign: 'center',
    color: '#222',
    padding: '1rem',
    fontSize: '1.1rem',
    fontFamily: 'Merriweather',
    fontWeight: 400,
    lineHeight: '1.9rem',
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
              <Step key={data.text} data={data}>
                <div
                  className={data.x < 1 ? classes.rightStep : classes.leftStep}
                >
                  <p
                    className={classes.stepText}
                    dangerouslySetInnerHTML={{ __html: data.text }}
                  />
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
