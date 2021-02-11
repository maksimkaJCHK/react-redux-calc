import api from './axios';
import { TypeItemsHistory } from '../types/history';

async function setParam(calcText: string, calcDisplay: string, calcSign: string, calcVal: string): Promise<TypeItemsHistory> {
  let buildId = `${new Date().getTime()}`;

  let Data: TypeItemsHistory = {
    id: buildId,
    date: buildId,
    error: false,
    action: `${calcDisplay} ${calcSign} ${calcText} = ${calcVal}`
  };
  
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