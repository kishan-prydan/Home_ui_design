import types from '../types';

const initial_state = {
  deviceid: null,
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.GET_RGBW_DATA_BYID:
      // console.log('reducer rgbw zone state-----', action);
      return {...state, deviceid: action.payload};
    default:
      return state;
  }
}
