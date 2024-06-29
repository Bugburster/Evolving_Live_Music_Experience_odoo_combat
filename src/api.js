import axios from 'axios';

const api = axios.create({
    baseURL: 'http://your-api-url.com/api', // Replace with your actual API URL
});

export const loginUser = (userData) => api.post('/auth/login', userData);
export const signupUser = (userData) => api.post('/auth/signup', userData);
// Add other API calls here

export default api;