import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { areEqualShallow } from '../../utils';

const animationDuration = 500;

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
      transitioning: true,
      dims: this.props.dims,
      label: this.props.label,
    };

    componentDidUpdate(prevProps) {
      const { dims: prevDims, label: prevLabel } = prevProps;
      const { dims, label } = this.props;

      if (areEqualShallow(prevProps.dims, this.props.dims)) {
        return;
      }
      // If dims changed but same label, we can assume the page was resized
      if (prevLabel === label) {
        this.setState({ dims });
        return;
      }

      // If component has never been shown before, no need to fade out
      if (prevDims.width + prevDims.height === 0) {
        this.setState({ transitioning: false, dims, label });
        return;
      }

      this.setState({ transitioning: true, dims: prevDims, label: prevLabel });
      setTimeout(() => {
        this.setState({ transitioning: false, dims, label });
      }, animationDuration);
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
