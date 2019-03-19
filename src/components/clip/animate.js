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

      const {
        dims: { x: pX, y: pY, width: pWidth = 0, height: pHeight = 0 },
      } = prevProps;
      const { dims: { x, y, width = 0, height = 0 } } = this.props;

      const interpolateX = interpolateNumber(pX, x);
      const interpolateY = interpolateNumber(pY, y);
      const interpolateW = interpolateNumber(pWidth, width);
      const interpolateH = interpolateNumber(pHeight, height);

      let start = null;
      const updateDims = timestamp => {
        const elapsed = timestamp - (start || (start = timestamp));
        if (elapsed < ANIM_DURATION) {
          const t = elapsed / ANIM_DURATION;
          this.setState({
            x: interpolateX(t),
            y: interpolateY(t),
            width: interpolateW(t),
            height: interpolateH(t),
          });
          window.requestAnimationFrame(updateDims);
        } else {
          this.setState({ x, y, width, height });
        }
      };

      window.requestAnimationFrame(updateDims);
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
