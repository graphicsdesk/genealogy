import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { interpolateNumber } from 'd3-interpolate';
import { areEqualShallow } from '../../utils';

const ANIM_DURATION = 3000;

const animate = WrappedComponent => {
  class AnimatedComponent extends Component {
    ref = React.createRef();

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
          typeof this.ref.current.setAttribute === 'function' &&
            this.ref.current.setAttribute(
              'transform',
              `translate(${interpolateX(t)}, ${interpolateY(t)})`,
            );
          window.requestAnimationFrame(updateTransform);
        } else {
          typeof this.ref.current.setAttribute === 'function' &&
            this.ref.current.setAttribute('transform', 'translate(0, 0)');
        }
      };

      window.requestAnimationFrame(updateTransform);
    }

    render() {
      return (
        <WrappedComponent
          ref={this.ref}
          {...this.props}
          dims={{ ...this.props.dims }}
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
