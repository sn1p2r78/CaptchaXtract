import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your backend URL
  timeout: 5000,
});

api.interceptors.response.use(response => response);
// Future: Add authorization and error handling here

export default api;