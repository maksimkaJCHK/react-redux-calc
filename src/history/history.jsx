import React from 'react';
import { useSelector } from 'react-redux';
import Preloader from './components/preloader.jsx';
import HistoryItems from './components/historyItems.jsx';
import './history.scss';

const History = () => {
  const { load, items, error } = useSelector(state => state.HistoryReducer);

  return (
    <div className = 'history'>
      <h3>
        История операций
      </h3>
      <div className = 'history-actions'>
        {
          load
            ? <Preloader />
            : error
                ? <div className = "history-actions-item alarm">
                    <b>Cервер не доступен, нужно продлить на firebase доступ к базе данных, возможно у вас отсутствует подключение к интернету.
                    </b>
                  </div>
                : <HistoryItems items = { items } />
        }
      </div>
    </div>
  )
}

export default History;