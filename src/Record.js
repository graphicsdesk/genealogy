import React, { Component } from 'react';
import { clipId } from './constants';

import ImageMask from './ImageMask';
import ClipPath from './ClipPath';

const aspectRatio = 1504 / 1024;
const margin = { top: 20, right: 20, bottom: 20, left: 20 };

class Record extends Component {
  state = {
    height: null,
    imgX: null,
    imgY: null,
    imgWidth: null,
    imgHeight: null,
  };

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
        <defs>
          <ClipPath
            imgDims={imgDims}
            fracs={{ x: 0.4, y: 0.4, w: 0.1, h: 0.1 }}
          />
        </defs>

        <image {...imgDims} xlinkHref="/img/ancestral-map.jpg" />
        <ImageMask imgDims={imgDims} />
        <image
          {...imgDims}
          xlinkHref="/img/ancestral-map.jpg"
          clipPath={`url(#${clipId})`}
        />
      </svg>
    );
  }
}

export default Record;
