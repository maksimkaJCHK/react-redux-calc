import api from './axios';

const setParam = (data) => api.post('/actions.json', data);

export default setParam;