import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../redux/store';
import types from '../redux/types';
import { showError } from './helperFunction';

const {dispatch, getState} = store;

export async function getHeaders() {
  let userData = await AsyncStorage.getItem('userData');
  if (userData) {
    userData = JSON.parse(userData);
    // console.log(userData.accessToken, 'header')
    return {
      authorization: `${userData.access_token}`,
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
  
  // console.log('++++++++++++++++api req called++++++++++++++++');

  return new Promise(async (res, rej) => {
    // if (!navigator.onLine) {
    //   showError('Network Error. Please check your internet connection.');
      // return rej({ message: 'No Internet', msg: 'Internet connection error' });
    // }

    const getTokenHeader = await getHeaders();
    headers = {
      ...getTokenHeader,
      ...headers,
    };

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

        // console.log('===============axios called===============');

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

        // Handle other network errors here
        if (error.message === 'Network Error') {
          showError('Network Error. Please check your internet connection.');
          // return rej({message: 'Network Error', msg: 'Network Error'});
        } else {
          return rej(error);
        }
      });
  });
}

export function apiPost(endPoint, data, headers = {}) {
  // console.log('---------------post api called---------------');

  return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
  // console.log('---------------get api called---------------');
  return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'put', headers);
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
