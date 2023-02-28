import api from './axios';

async function setParam({ text, display, sign, result }) {
  const buildId = `${new Date().getTime()}`;

  const Data = {
    'id': buildId,
    'date': buildId,
    'error': false, 
    'action': `${display} ${sign} ${text} = ${result}`
  }

  await api.post('/actions.json', Data)
    .catch(() => {
      Data = {
        ...Data,
        'error': true
      }
    })

  return Data;
}

export default setParam;