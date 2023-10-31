import types from '../types';

export const setAreazoneId = areazoneid => {
  // console.log('action area zone id------------', areazoneid);
  return {
    type: types.SET_AREAZONEID,
    payload: areazoneid,
  };
};
