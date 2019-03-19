import React, { PureComponent } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import Record from './Record';
import { areEqualShallow } from '../../utils';

const styles = {
  Graphic: {
    marginBottom: '70vh',
  },
  sticky: {
    position: 'sticky',
    // position: '-webkit-sticky',
    top: 0,
  },
  steps: {
    padding: '0 5vw 130vh 5vw',
  },
  step: {
    position: 'relative',
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px 0 rgba(0,0,0,0.41)',
    margin: '0 auto 70vh auto',
    maxWidth: '500px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  stepText: {
    textAlign: 'center',
    color: '#222',
    padding: '1rem',
    fontSize: '1.1rem',
    fontFamily: 'Merriweather',
    fontWeight: 400,
    lineHeight: '1.9rem',
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
                <div className={classes.step}>
                  <p className={classes.stepText}>{data.text}</p>
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
