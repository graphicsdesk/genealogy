import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { imageId, shadowId } from '../../constants';
import { debounceEvent, calculateClipDims } from '../../utils';

import { ShadowFilter } from '../svg';
import { Image, ImageVeil } from '../image';
import { ImageClip } from '../clip';

const ASPECT_RATIO = 1504 / 1024;
const DEBOUNCE_TIME = 250;

const margin = { top: 20, right: 20, bottom: 24, left: 20 };

const styles = {
  container: {
    transitionDuration: '0.6s',
  },
};

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

      this.debouncedUpdateDimensions = debounceEvent(
        this.updateDimensions,
        DEBOUNCE_TIME,
      );
      window.addEventListener('resize', this.debouncedUpdateDimensions);
    }, 0);

    const height = window.innerHeight;
    this.setState({ height, imgHeight: height - margin.top - margin.bottom });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedUpdateDimensions);
  }

  updateDimensions = () => {
    let width = document.body.clientWidth;
    let height = window.innerHeight;

    let imgHeight = height - margin.top - margin.bottom;
    let imgWidth = imgHeight / ASPECT_RATIO;
    let imgY = margin.top;

    if (width > 512) {
      if (imgWidth * 2 > width) {
        imgWidth = (width - margin.left - margin.right) / 2;
      }
    } else {
      imgWidth = width - margin.left - margin.right;
    }
    imgHeight = imgWidth * ASPECT_RATIO;
    imgY += (height - margin.top - margin.bottom - imgHeight) / 2;

    this.setState({
      width,
      height,
      leftImgX: width / 2 - imgWidth,
      rightImgX: width / 2,
      imgY,
      imgWidth,
      imgHeight,
    });
  };

  render() {
    const {
      width,
      height,
      leftImgX,
      rightImgX,
      imgY,
      imgWidth,
      imgHeight,
    } = this.state;
    const {
      classes,
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

    let translateX = 0;
    if (width <= 512) {
      translateX = Math.max(margin.left - clipDims.x, -imgWidth / 2);
    }

    return (
      <svg width={width} height={height}>
        <g
          className={classes.container}
          style={{ transform: `translate(${translateX}px, 0px)` }}
        >
          <ShadowFilter />

          <g id={imageId(graphicId)} style={{ filter: `url(#${shadowId})` }}>
            <Image dims={imgDims} name={leftImg} leftSide />
            <Image dims={imgDims} name={rightImg} />
          </g>
          <ImageVeil dims={imgDims} />

          <ImageClip graphicId={graphicId} dims={clipDims} label={clipLabel} />
        </g>
      </svg>
    );
  }
}

export default injectSheet(styles)(Record);
