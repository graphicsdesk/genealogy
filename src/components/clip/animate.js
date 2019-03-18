import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { interpolateString } from 'd3-interpolate';
import { areEqualShallow } from '../../utils';

const ANIM_DURATION = 300;

const animate = WrappedComponent => {
  class AnimatedComponent extends Component {
    state = {
      translate: 'translate(0, 0)',
    };

    componentDidUpdate(prevProps) {
      if (areEqualShallow(prevProps.dims, this.props.dims)) return;

      const { dims: { x: pX, y: pY } } = prevProps;
      const { dims: { x, y } } = this.props;
      const dx = pX - x;
      const dy = pY - y;

      const interpolator = interpolateString(
        `translate(${dx}, ${dy})`,
        'translate(0, 0)',
      );

      let start = null;
      const updateTransform = timestamp => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        console.log(elapsed);
        if (elapsed < ANIM_DURATION) {
          this.setState({ translate: interpolator(elapsed / ANIM_DURATION) });
          window.requestAnimationFrame(updateTransform);
        } else {
          this.setState({ translate: interpolator(1) });
        }
      };

      window.requestAnimationFrame(updateTransform);
    }

    render() {
      return (
        <WrappedComponent
          dims={this.props.dims}
          transform={this.state.translate}
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
