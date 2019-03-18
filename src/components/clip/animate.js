import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { interpolateNumber } from 'd3-interpolate';
import { areEqualShallow } from '../../utils';

const ANIM_DURATION = 300;

const animate = WrappedComponent => {
  class AnimatedComponent extends Component {
    state = {
      x: 0,
      y: 0,
    };

    componentDidUpdate(prevProps) {
      if (areEqualShallow(prevProps.dims, this.props.dims)) return;

      const { dims: { x: pX, y: pY } } = prevProps;
      const { dims: { x, y } } = this.props;

      const interpolateX = interpolateNumber(pX, x);
      const interpolateY = interpolateNumber(pY, y);

      let start = null;
      const updateTransform = timestamp => {
        const elapsed = timestamp - (start || (start = timestamp));
        if (elapsed < ANIM_DURATION) {
          const t = elapsed / ANIM_DURATION;
          this.setState({
            x: interpolateX(t),
            y: interpolateY(t),
          });
          window.requestAnimationFrame(updateTransform);
        } else {
          this.setState({ x, y });
        }
      };

      window.requestAnimationFrame(updateTransform);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          dims={{ ...this.props.dims, ...this.state }}
        />
      );
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
