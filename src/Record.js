import React, { Component } from 'react';

class Record extends Component {
  state = {
    width: 0,
    height: window.innerHeight,
  };

  componentDidMount() {
    // After page loads, calculate client width (does not include scrollbar)
    this.setState({ width: document.body.clientWidth });
  }

  render() {
    const { width, height } = this.state;

    return (
      <svg width={width} height={height}>
        <image
          x={0}
          y={0}
          width={width / 2}
          height="100%"
          xlinkHref="/img/ancestral-map.jpg"
        />
      </svg>
    );
  }
}

export default Record;
