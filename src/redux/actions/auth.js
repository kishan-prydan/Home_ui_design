// actions.js
import {LOGIN} from '../../config/urls';
import {apiGet, apiPost, clearUserData, setUserData} from '../../utils/utils';
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
        // console.log(res);
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

  // return apiGet('https://api.treatmytravel.com/api/testimonials');
}


export function logout() {
  dispatch({type: types.CLEAR_REDUX_STATE})
  clearUserData();
}
