import React, { Component } from 'react';
import { imagesId } from './constants';

import ClipPath from './ClipPath';
import ImageClip from './ImageClip';
import Image from './Image';
import ImageMasks from './ImageMasks';

const aspectRatio = 1504 / 1024;
const margin = { top: 20, right: 20, bottom: 20, left: 20 };

class Record extends Component {
  state = {
    height: null,

    leftImgX: null,
    rightImgX: null,
    imgY: null,
    imgWidth: null,
    imgHeight: null,

    clipFracs: { x: 1.4, y: 0.4, w: 0.1, h: 0.1 },
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

    this.setState({
      leftImgX: width / 2 - imgWidth,
      rightImgX: width / 2,
      imgY: margin.top,
      imgWidth,
    });
  };

  render() {
    const {
      height,
      leftImgX,
      rightImgX,
      imgY,
      imgWidth,
      imgHeight,
      clipFracs,
    } = this.state;

    const imgDims = {
      leftX: leftImgX,
      rightX: rightImgX,
      y: imgY,
      width: imgWidth,
      height: imgHeight,
    };
    return (
      <svg width={document.body.clientWidth} height={height}>
        <defs>
          <ClipPath imgDims={imgDims} fracs={clipFracs} />
        </defs>

        <g id={imagesId}>
          <Image imgDims={imgDims} href="/img/ancestral-map.jpg" leftSide />
          <Image imgDims={imgDims} href="/img/portraits.jpg" />
        </g>
        <ImageMasks imgDims={imgDims} />
        <ImageClip />
      </svg>
    );
  }
}

export default Record;
