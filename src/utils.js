export const calculateClipDims = (imgDims, clipFracs) => {
  const { leftX, y, width, height } = imgDims;
  const { x: fracX, y: fracY, w: fracW, h: fracH } = clipFracs;
  return {
    x: leftX + fracX * width,
    y: y + fracY * width,
    width: fracW * width,
    height: fracH * height,
  };
};
