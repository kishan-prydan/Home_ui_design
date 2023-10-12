import axios from 'axios';

export const BASE_URL = 'http://192.168.1.2:7000/api';

axios.defaults.baseURL = BASE_URL;

export const getApiUrl = (endpoint) => BASE_URL + endpoint;

export const LOGIN = getApiUrl('/login');
export const FORGOTPASSWORD = getApiUrl('/forgotpassword');