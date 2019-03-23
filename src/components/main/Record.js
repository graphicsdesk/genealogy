import React, { Component } from 'react';

import { ShadowFilter } from '../svg';
import { Image, ImageVeil } from '../image';
import { ImageClip } from '../clip';

import { imageId, shadowId } from '../../constants';
import { calculateClipDims } from '../../utils';

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
    let { imgHeight, height } = this.state;
    let imgWidth = imgHeight / ASPECT_RATIO;

    let imgY = margin.top;

    if (imgWidth * 2 > width) {
      imgWidth = (width - margin.left - margin.right) / 2;
      imgHeight = imgWidth * ASPECT_RATIO;
      imgY += (height - margin.top - margin.bottom - imgHeight) / 2;
    }

    this.setState({
      leftImgX: width / 2 - imgWidth,
      rightImgX: width / 2,
      imgY,
      imgWidth,
      imgHeight,
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
    const {
      graphicId,
      leftImg,
      rightImg,
      clip: { clipLabel, ...clipFracs },
    } = this.props;

    const imgDims = {
      leftX: leftImgX,
      rightX: rightImgX,
      y: imgY,
      width: imgWidth,
      height: imgHeight,
    };
    const clipDims = calculateClipDims(imgDims, clipFracs);

    return (
      <svg width={document.body.clientWidth} height={height}>
        <ShadowFilter />

        <g id={imageId(graphicId)} style={{ filter: `url(#${shadowId})` }}>
          <Image dims={imgDims} name={leftImg} leftSide />
          <Image dims={imgDims} name={rightImg} />
        </g>
        <ImageVeil dims={imgDims} />

        <ImageClip graphicId={graphicId} dims={clipDims} label={clipLabel} />
      </svg>
    );
  }
}

export default Record;
