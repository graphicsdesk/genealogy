import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { areEqualShallow } from '../../utils';

const animate = WrappedComponent => {
  class AnimatedComponent extends Component {
    state = {
      transform: 'translate(0, 0)',
    };

    componentDidUpdate(prevProps) {
      if (areEqualShallow(prevProps.dims, this.props.dims)) return;

      const { dims: { pX, pY, pWidth, pHeight } } = prevProps;
      const { dims: { x, y, width, height } } = this.props;
      this.setState({
        transform: this.state.transform,
      });
    }

    render() {
      return (
        <WrappedComponent
          dims={this.props.dims}
          transform={this.state.transform}
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
