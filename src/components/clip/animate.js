import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { interpolateNumber } from 'd3-interpolate';
import { areEqualShallow } from '../../utils';

const ANIM_DURATION = 300;

const animate = WrappedComponent => {
  class AnimatedComponent extends Component {
    state = {
      translateX: 0,
      translateY: 0,
    };

    componentDidUpdate(prevProps) {
      if (areEqualShallow(prevProps.dims, this.props.dims)) return;

      const { dims: { x: pX, y: pY } } = prevProps;
      const { dims: { x, y } } = this.props;
      const dx = pX - x;
      const dy = pY - y;

      const interpolateX = interpolateNumber(dx, 0);
      const interpolateY = interpolateNumber(dy, 0);

      let start = null;
      const updateTransform = timestamp => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        console.log(elapsed);
        const t = elapsed / ANIM_DURATION;
        if (elapsed < ANIM_DURATION) {
          this.setState({ translateX: interpolateX(t), translateY: interpolateY(t) });
          window.requestAnimationFrame(updateTransform);
        } else {
          this.setState({ translateX: 0, translateY: 0 });
        }
      };

      window.requestAnimationFrame(updateTransform);
    }

    render() {
      const { translateX, translateY } = this.state;
      return (
        <WrappedComponent
          dims={this.props.dims}
          transform={`translate(${translateX}, ${translateY})`}
        />
      );
    }
  }

  AnimatedComponent.propTypes = {
    dims: PropTypes.exact({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
  };

  return AnimatedComponent;
};

export default animate;
