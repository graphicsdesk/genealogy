import React from 'react';

const Image = ({ imgDims, href, leftSide = false }) => {
  const { leftX, rightX, y, width, height } = imgDims;

  return (
    <image
      x={leftSide ? leftX : rightX}
      y={y}
      width={width}
      height={height}
      xlinkHref={href}
    />
  );
};

export default Image;
