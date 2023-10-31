import types from '../types';

const initial_state = {
  zoneid: null,
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.SET_ZONEID:
      // console.log('reducer zone state-----', action);
      return {...state, zoneid: action.payload};
    default:
      return state;
  }
}
