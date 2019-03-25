import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { areEqualShallow, areSimilar } from '../../utils';

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
      // If label remains the same and we think the highlighting box
      // changed, we can assume the page was just resized
      if (areSimilar(prevProps.dims, this.props.dims) && prevLabel === label) {
        this.setState({ dims });
        return;
      }

      // If previous clip was invisible...
      if (prevDims.width === 0 && prevDims.height === 0) {
        // If current clip is visible, it must be the first one we animate.
        // Thus, we skip the transition-out animation and transition it in.
        if (dims.width > 0 && dims.height > 0) {
          this.setState({ transitioning: false, dims, label });
        }
        // If the current clip was not visible, this resize must have been
        // triggered by a resize/initial dimension processing. Ignore.
        return;
      }

      this.setState({ transitioning: true, dims: prevDims, label: prevLabel });
      setTimeout(() => {
        this.setState({ dims, label }, () =>
          this.setState({ transitioning: false }),
        );
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
