import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { timeout as d3Timeout} from 'd3-timer';
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
      dims: {
        x: 0,
        y: 0,
      },
      transitioning: false,
    };

    componentDidUpdate(prevProps) {
      if (areEqualShallow(prevProps.dims, this.props.dims)) return;

      const {
        dims: { x: pX, y: pY },
      } = prevProps;
      const { dims: { x, y } } = this.props;

      this.setState({ transitioning: true });
      d3Timeout(() => {
        this.setState({ transitioning: false });
      }, animationDuration);
    }

    render() {
      const { transitioning, dims } = this.state;
      const { classes } = this.props;
      //return <WrappedComponent {...this.props} dims={this.props.dims} />;
      return (
        <g className={transitioning ? classes.hide : classes.show}>
          <WrappedComponent
            {...this.props}
          />
        </g>
      );
    }
  }

  FadeComponent.propTypes = {
    dims: PropTypes.exact({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number,
      height: PropTypes.number,
    }).isRequired,
  };

  return injectSheet(styles)(FadeComponent);
};

export default fadeMovement;
