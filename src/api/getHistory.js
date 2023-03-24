import api from './axios';

const getHistory = () => api.get('/actions.json');

export default getHistory;