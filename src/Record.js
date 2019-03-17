import React, { Component } from 'react';

import MaskRect from './MaskRect';

const aspectRatio = 1504 / 1024;
const margin = { top: 20, right: 20, bottom: 20, left: 20 };

class Record extends Component {
  state = {};

  componentDidMount() {
    setTimeout(() => {
      // hacky way to wait for document.body.clientWidth to account for scrollbar
      this.updateDimensions();
    }, 0);

    const height = window.innerHeight;
    this.setState({ height, imgHeight: height - margin.top - margin.bottom });
  }

  updateDimensions = () => {
    const width = document.body.clientWidth;
    const imgWidth = this.state.imgHeight / aspectRatio;
    const imgX = width / 2 - imgWidth;
    this.setState({
      imgX,
      imgY: margin.top,
      imgWidth,
    });
  };

  render() {
    const { height, imgX, imgY, imgWidth, imgHeight } = this.state;

    const imgDims = { x: imgX, y: imgY, width: imgWidth, height: imgHeight };
    return (
      <svg width={document.body.clientWidth} height={height}>
        <image {...imgDims} xlinkHref="/img/ancestral-map.jpg" />
        <MaskRect imgDims={imgDims} />
      </svg>
    );
  }
}

export default Record;
