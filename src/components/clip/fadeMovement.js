import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { timeout as d3Timeout } from 'd3-timer';
import { areEqualShallow } from '../../utils';

const animationDuration = 300;

const styles = {
  show: {
    animationDuration,
    animation: 'fadeIn',
  },
  hide: {
    animationDuration,
    animation: 'fadeOut',
  },
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  '@keyframes fadeOut': {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
};

const fadeMovement = WrappedComponent => {
  class FadeComponent extends Component {
    state = {
      transitioning: false,
      dims: this.props.dims,
      label: this.props.label,
    };

    componentDidUpdate(prevProps) {
      if (areEqualShallow(prevProps.dims, this.props.dims)) return;

      const { dims: prevDims, label: prevLabel } = prevProps;
      const { dims, label } = this.props;

      this.setState({ transitioning: true, dims: prevDims, label: prevLabel });
      d3Timeout(() => {
        this.setState({ transitioning: false, dims, label });
      }, prevDims.width + prevDims.height > 0 ? animationDuration : 0);
    }

    render() {
      const { transitioning } = this.state;
      const { classes } = this.props;
      return (
        <g className={transitioning ? classes.hide : classes.show}>
          <WrappedComponent {...this.props} {...this.state} />
        </g>
      );
    }
  }

  FadeComponent.propTypes = {
    dims: PropTypes.exact({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
  };

  return injectSheet(styles)(FadeComponent);
};

export default fadeMovement;
