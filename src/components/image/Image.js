import React from 'react';

const IMGDIR = './imageAssets';

const Image = ({ dims, name, leftSide = false }) => {
  const { leftX, rightX, y, width, height } = dims;

  return (
    <image
      x={leftSide ? leftX : rightX}
      y={y}
      width={width}
      height={height}
      xlinkHref={require(`${IMGDIR}/${name}`)}
    />
  );
};

export default Image;
