import uuidv4 from 'uuid/v4';

/*const idStoreFactory = () => {
  const ids = {};
  return graphicId => {
    if (!(graphicId in ids))
      return ids[graphicId] 
  }
}*/

const clipIds = {};
export const clipId = graphicId => {
  if (!(graphicId in clipIds)) {
    return clipIds[graphicId] = uuidv4();
  }
  return clipIds[graphicId];
};

const imageIds = {};
export const imageId = graphicId => {
  if (!(graphicId in imageIds)) {
    return imageIds[graphicId] = uuidv4();
  }
  return imageIds[graphicId];
}

export const shadowId = 'drop-shadow-filter';
