import api from './axios';
import { TypeItemsHistory, IGetHistory } from '../types/history';

async function getHistory(): Promise<IGetHistory> {
  let historyItems: TypeItemsHistory[] = [];
  let error = false;

  await api('/actions.json')
    .then(response => {
      for(let key in response.data) {
        historyItems.unshift({
          ...response.data[key]
        });
      }
    })
    .catch(() => {
      error = true;
    });

  return { historyItems, error };
}

export default getHistory;