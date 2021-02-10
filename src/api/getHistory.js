import api from './axios';

async function getHistory() {
  let historyItems = [];
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