import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { interpolateNumber } from 'd3-interpolate';
import { areEqualShallow } from '../../utils';

const ANIM_DURATION = 3000;

const animate = WrappedComponent => {
  class AnimatedComponent extends Component {
    state = {
      style: {},
    };

    componentDidUpdate(prevProps) {
      if (areEqualShallow(prevProps.dims, this.props.dims)) return;

      const { dims: { x: pX, y: pY } } = prevProps;
      const { dims: { x, y } } = this.props;

      const interpolateX = interpolateNumber(pX - x, 0);
      const interpolateY = interpolateNumber(pY - y, 0);

      let start = null;
      const updateTransform = time => {
        const elapsed = time - (start || (start = time));
        if (elapsed < ANIM_DURATION) {
          const t = elapsed / ANIM_DURATION;
          this.setState({
            style: {
              transform: `translate(${interpolateX(t)}px, ${interpolateY(
                t,
              )}px)`,
            },
          });
          window.requestAnimationFrame(updateTransform);
        } else {
          this.setState({ style: { transform: `translate(0px, 0px)` } });
        }
      };

      window.requestAnimationFrame(updateTransform);
    }

    render() {
      const { style } = this.state;
      return <WrappedComponent {...this.props} style={style} />;
    }
  }

  AnimatedComponent.propTypes = {
    dims: PropTypes.exact({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number,
      height: PropTypes.number,
    }).isRequired,
  };

  return AnimatedComponent;
};

export default animate;
