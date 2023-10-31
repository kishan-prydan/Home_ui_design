import types from '../types';

export const getRgbwDataByDeviceId = deviceid => {
  // console.log('action rgbw zone _id------------', deviceid);
  return {
    type: types.GET_RGBW_DATA_BYID,
    payload: deviceid,
  };
};
