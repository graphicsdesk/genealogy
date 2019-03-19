import React from 'react';
import { clipId, imageId } from '../../constants';

const ImageClip = ({ graphicId }) => (
  <use
    xlinkHref={`#${imageId(graphicId)}`}
    clipPath={`url(#${clipId(graphicId)})`}
  />
);

export default ImageClip;
