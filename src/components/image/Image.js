import React from 'react';

const Image = ({ dims, href, leftSide = false }) => {
  const { leftX, rightX, y, width, height } = dims;

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
