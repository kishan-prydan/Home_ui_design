// actions.js
import {FORGOTPASSWORD, LOGIN, RESETPASSWORD} from '../../config/urls';
import {apiPatch, apiPost, clearUserData, setUserData} from '../../utils/utils';
import store from '../store';
import types from '../types';

const {dispatch} = store;

export const saveUserData = data => {
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};

export function login(data) {
  return new Promise(async (resolve, reject) => {
    return apiPost(LOGIN, data)
      .then(res => {
        setUserData(res).then(() => {
          resolve(res);
          saveUserData(res);
        });
        return;
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function forgotPassword(data) {
  return new Promise(async (resolve, reject) => {
    return apiPost(FORGOTPASSWORD, data)
      .then(res => {
        resolve(res);
        return;
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function resetPassword(data) {
  return new Promise(async (resolve, reject) => {
    return apiPatch(RESETPASSWORD, data)
      .then(res => {
        // console.log(res);
        resolve(res);
        return;
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function logout() {
  dispatch({type: types.CLEAR_REDUX_STATE});
  clearUserData();
}
