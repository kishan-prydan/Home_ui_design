import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../redux/store';
import types from '../redux/types';
import {showError} from './helperFunction';

const {dispatch} = store;

export async function getHeaders() {
  let userData = await AsyncStorage.getItem('userData');
  if (userData) {
    userData = JSON.parse(userData);
    const accessToken = userData.AccessToken;
    // console.log(accessToken);
    return {
      authorization: `Bearer ${accessToken}`,
    };
  }
  return {};
}

export async function apiReq(
  endPoint,
  data,
  method,
  headers,
  requestOptions = {},
) {
  return new Promise(async (res, rej) => {
    const getTokenHeader = await getHeaders();
    headers = {
      ...getTokenHeader,
      ...headers,
    };

    // console.log('api function get headre----------------------------',getTokenHeader);

    if (method === 'get' || method === 'delete') {
      data = {
        ...requestOptions,
        ...data,
        headers,
      };
    }

    axios[method](endPoint, data, {headers})
      .then(result => {
        const {data} = result;

        if (data.status === false) {
          return rej(data);
        }
        return res(data);
      })
      .catch(error => {
        console.log(error);
        if (error && error.response) {
          if (error.response.status === 401) {
            clearUserData();
            dispatch({
              type: types.CLEAR_REDUX_STATE,
              payload: {},
            });
            dispatch({
              type: types.NO_INTERNET,
              payload: {internetConnection: true},
            });
          }
          if (error.response.data) {
            return rej(error.response.data);
          }
        }

        if (error.message === 'Network Error') {
          // showError('Network Error. Please check your internet connection.');
          return rej({message: 'Network Error', msg: 'Network Error'});
        } else {
          return rej(error);
        }
      });
  });
}

export function apiPost(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
  return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'put', headers);
}

export function apiPatch(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'patch', headers);
}

export function setItem(key, data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem(key, data);
}

export function getItem(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key).then(data => {
      resolve(JSON.parse(data));
    });
  });
}

export function removeItem(key) {
  return AsyncStorage.removeItem(key);
}

export function clearAsyncStorate(key) {
  return AsyncStorage.clear();
}

export function setUserData(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('userData', data);
}

export async function getUserData() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('userData').then(data => {
      resolve(JSON.parse(data));
    });
  });
}
export async function clearUserData() {
  return AsyncStorage.removeItem('userData');
}
