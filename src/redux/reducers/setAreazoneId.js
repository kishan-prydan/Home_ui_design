import types from '../types';

const initial_state = {
  areazoneid: null,
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.SET_AREAZONEID:
      // console.log('reducer rgbw zone state-----', action);
      return {...state, areazoneid: action.payload};
    default:
      return state;
  }
}
