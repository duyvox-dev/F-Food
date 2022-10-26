import axios, { Method, AxiosResponse, ResponseType } from 'axios';
// import store from '@app/store';

// import apiLinks from './api-links';
// import { getCookie } from './cookie';
// import { CookiesName } from './constants';


const request = (arg) => {
  //   const { token, documentToken ,cookieValue } = store.getState().auth;
  //   const cookie=getCookie(CookiesName.NAME)
  const {
    method,
    contentType = 'application/json',
    url,
    data,
    params,
    signal,
    responseType = 'json',
    // authorization = `bearer ${token?.access_token ?? ''}`,
    routing,
  } = arg;

  const source = axios.CancelToken.source();
  if (signal) {
    signal.addEventListener('abort', () => {
      source.cancel();
    });
  }

  return axios.request({
    method,
    headers: {
      'content-type': contentType,
      // Authorization: `bearer ${token}`,
    },
    url: url ?? '',
    data,
    params,
    responseType,
    cancelToken: source.token,
  });
};

const httpClient = {
  request,
  get: (arg) => {
    return request({ ...arg, method: 'GET' });
  },
  post: (arg) => {
    return request({ ...arg, method: 'POST' });
  },
  put: (arg) => {
    return request({ ...arg, method: 'PUT' });
  },
  delete: (arg) => {
    return request({ ...arg, method: 'DELETE' });
  },
  option: (arg) => {
    return request({ ...arg, method: 'OPTIONS' });
  },
};

export default httpClient;
