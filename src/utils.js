import uuidv4 from 'uuid/v4';

export const createIdStore = () => {
  const ids = {};
  return graphicId => {
    if (!(graphicId in ids)) return (ids[graphicId] = uuidv4());
    return ids[graphicId];
  };
};

export const calculateClipDims = (imgDims, clipFracs) => {
  const { leftX, y, width, height } = imgDims;
  const { x: fracX, y: fracY, w: fracW, h: fracH } = clipFracs;
  return {
    x: leftX + fracX * width,
    y: y + fracY * height,
    width: fracW * width,
    height: fracH * height,
  };
};

// Source: https://gist.github.com/nmsdvid/8807205#gistcomment-2548862
export const debounceEvent = (callback, time) => {
  let interval;
  return (...args) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      interval = null;
      callback(...args);
    }, time);
  };
};

export const areEqualShallow = (a, b) =>
  Object.keys(a).length === Object.keys(b).length &&
  Object.keys(a).every(key => b.hasOwnProperty(key) && a[key] === b[key]);

// Compares two dimension objects
export const areSimilar = (a, b) => {
  const { width: aw, height: ah } = a;
  const { width: bw, height: bh } = b;

  return Math.abs(ah / aw - bh / bw) < 0.001;
};

// An extremely limited unicodifier improved on a case-by-case basis
export const unicodify = text =>
  text
    .replace('“', '\u201c')
    .replace('”', '\u201d')
    .replace('’', '\u2019')
    .replace('‘', '\u2018');

const htmlTagRegexp = /<[a-z][\s\S]*>/i;
export const hasHTMLElements = string => htmlTagRegexp.test(string);
