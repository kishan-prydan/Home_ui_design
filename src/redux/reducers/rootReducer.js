import {combineReducers} from 'redux';
import auth from './auth';
import setAreazoneId from './setAreazoneId';
import setZoneId from './setZoneId';
import getRgbwDataByID from './getRgbwDataByDeviceId';
import types from '../types';

const appReducer = combineReducers({
  auth,
  setAreazoneId,
  setZoneId,
  getRgbwDataByID,
});

const rootReducer = (state, action) => {
  if (action.type == types.CLEAR_REDUX_STATE) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
