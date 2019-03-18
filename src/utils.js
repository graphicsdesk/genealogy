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

export const areEqualShallow = (a, b) =>
  Object.keys(a).length === Object.keys(b).length &&
  Object.keys(a).every(key => b.hasOwnProperty(key) && a[key] === b[key]);
