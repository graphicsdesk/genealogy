import React, { Component } from 'react';

import ClipPath from './ClipPath';
import ImageClip from './ImageClip';
import Image from './Image';
import ImageMask from './ImageMask';
import ShadowFilter from './ShadowFilter';
import { imagesId, shadowId } from './constants';

const ASPECT_RATIO = 1504 / 1024;
const margin = { top: 20, right: 20, bottom: 24, left: 20 };

class Record extends Component {
  state = {
    height: null,

    leftImgX: null,
    rightImgX: null,
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
    const imgWidth = this.state.imgHeight / ASPECT_RATIO;

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
    } = this.state;
    const { clip } = this.props;

    const imgDims = {
      leftX: leftImgX,
      rightX: rightImgX,
      y: imgY,
      width: imgWidth,
      height: imgHeight,
    };

    return (
      <svg width={document.body.clientWidth} height={height}>
        <ShadowFilter />
        <defs>
          <ClipPath imgDims={imgDims} fracs={clip} />
        </defs>

        <g id={imagesId} style={{ filter: `url(#${shadowId})` }}>
          <Image imgDims={imgDims} href="/img/ancestral-map.jpg" leftSide />
          <Image imgDims={imgDims} href="/img/portraits.jpg" />
        </g>
        <ImageMask imgDims={imgDims} />
        <ImageClip />
      </svg>
    );
  }
}

export default Record;
