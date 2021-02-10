import api from './axios';

async function setParam(calcText, calcDisplay, calcSign, calcVal) {
  let buildId = `${new Date().getTime()}`;

  let Data = {
    'id': buildId,
    'date': buildId,
    'error': false, 
    'action': `${calcDisplay} ${calcSign} ${calcText} = ${calcVal}`
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