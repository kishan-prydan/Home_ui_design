import types from '../types';

export const setZoneId = zoneid => {
  // console.log('action zone id------------', zoneid);
  return {
    type: types.SET_ZONEID,
    payload: zoneid,
  };
};
