import React, { Fragment } from 'react';
import ClipLabel from './ClipLabel';
import { clipId, imageId } from '../../constants';

const ImageClip = ({ graphicId, dims, label }) => (
  <Fragment>
    <use
      xlinkHref={`#${imageId(graphicId)}`}
      clipPath={`url(#${clipId(graphicId)})`}
    />
    <ClipLabel dims={dims} text={label} />
  </Fragment>
);

export default ImageClip;
