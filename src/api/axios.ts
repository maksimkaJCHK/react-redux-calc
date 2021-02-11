import axios from 'axios';

const api = axios.create({
  baseURL: 'https://calcaction.firebaseio.com/'
});

export default api;