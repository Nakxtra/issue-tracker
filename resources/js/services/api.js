import { getCookie } from '../helper/CookieHelper.js';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000', 
});


apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
  const token = getCookie('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;