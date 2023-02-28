import api from './axios';

const getHistory = () => api('/actions.json');

export default getHistory;