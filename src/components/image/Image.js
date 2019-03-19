import React from 'react';

const IMGDIR_PATH = '/img';

const Image = ({ dims, name, leftSide = false }) => {
  const { leftX, rightX, y, width, height } = dims;

  return (
    <image
      x={leftSide ? leftX : rightX}
      y={y}
      width={width}
      height={height}
      xlinkHref={IMGDIR_PATH + '/' + name}
    />
  );
};

export default Image;
