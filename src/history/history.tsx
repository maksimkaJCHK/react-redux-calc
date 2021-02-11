import * as React from 'react';
import { useTypeSelector } from '../types/appReducer';
import Preloader from './components/preloader';
import HistoryItems from './components/historyItems';
import './history.scss';

const History: React.FC = () => {
  let { load, error, items } = useTypeSelector(state => state.HistoryReducer);

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