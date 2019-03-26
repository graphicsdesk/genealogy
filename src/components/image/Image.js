import React from 'react';

const imageUrls = {
  'poem.jpg': 'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FGHZIHGLURDEHG3XUPBVMHZG2Q.jpg',
  'women.jpg': 'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/PWPTOPFN7VA4PC5SZ7D5FI6PGU.jpg',
  'ancestral-map.jpg': 'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FST5QKGRDNGRBDG5A2E2LXAC6U.jpg',
  'portraits.jpg': 'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/YS7N6SV4SFEL5I63PQTXS4GJCI.jpg',
};

const Image = ({ dims, name, leftSide = false }) => {
  const { leftX, rightX, y, width, height } = dims;

  return (
    <image
      x={leftSide ? leftX : rightX}
      y={y}
      width={width}
      height={height}
      xlinkHref={imageUrls[name]}
    />
  );
};

export default Image;
