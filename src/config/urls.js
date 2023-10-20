import axios from 'axios';

// export const BASE_URL = 'http://192.168.1.3:7000/api';
export const BASE_URL = 'http://103.1.100.53:3000';

axios.defaults.baseURL = BASE_URL;

export const getApiUrl = endpoint => BASE_URL + endpoint;

//auth url
export const LOGIN = getApiUrl('/login');
export const FORGOTPASSWORD = getApiUrl('/forgot-password');
export const RESETPASSWORD = getApiUrl('/reset-password');

// sinc api urls
export const SINC_GET_AREA = getApiUrl('/getareabydate')