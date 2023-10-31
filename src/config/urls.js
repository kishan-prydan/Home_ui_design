import axios from 'axios';

//base url of the api
export const BASE_URL = 'http://103.1.100.53:3000';

axios.defaults.baseURL = BASE_URL;

//making variable to add the end point to the base url
export const getApiUrl = endpoint => BASE_URL + endpoint;

//auth url
export const LOGIN = getApiUrl('/login');
export const FORGOTPASSWORD = getApiUrl('/forgot-password');
export const RESETPASSWORD = getApiUrl('/reset-password');

// sinc api urls
export const SINC_GET_DATA = getApiUrl('/syncalldata');

//add area data
export const ADD_AREA = getApiUrl('/addarea');
