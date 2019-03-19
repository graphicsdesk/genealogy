import uuidv4 from 'uuid/v4';

const makeIdStore = () => {
  const ids = {};
  return graphicId => {
    if (!(graphicId in ids))
      return ids[graphicId] = uuidv4();
    return ids[graphicId];
  }
};
export const clipId = makeIdStore();
export const imageId = makeIdStore();

export const shadowId = 'drop-shadow-filter';
