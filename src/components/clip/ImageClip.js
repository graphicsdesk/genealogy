import React, { Fragment } from 'react';
import ClipLabel from './ClipLabel';
import ClipPath from './ClipPath';
import fadeMovement from './fadeMovement';
import { clipId, imageId } from '../../constants';

const ImageClip = ({ graphicId, dims, label }) => (
  <Fragment>
    <defs>
      <ClipPath dims={dims} graphicId={graphicId} />
    </defs>
    <use
      xlinkHref={`#${imageId(graphicId)}`}
      clipPath={`url(#${clipId(graphicId)})`}
    />
    <ClipLabel dims={dims} text={label} />
  </Fragment>
);

export default fadeMovement(ImageClip);
