import axios from 'axios'
import { getToken } from './auth';
import {BASE_URL} from './tools'

const instance= axios.create({
  baseURL:BASE_URL,
  timeout:5000
})

// 
instance.interceptors.request.use(function (config) {
  // 在请求拦截里统一设置header头
  if(getToken()){
    config.headers.authorization= 'Bearer ' +getToken()
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

// 封装get请求
export const get = (url, params) => instance.get(url, { params });
// 封装post请求
export const post = (url, data) => instance.post(url, data);
// 封装dele
export const dele = (url, params) => instance.delete(url, { params });
// 封装put
export const put = (url, params) => instance.put(url, { params });

export default instance;