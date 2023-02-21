import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import AppReducer from './store/reducers';
import calcSaga from './saga/calcSaga';
import Calc from './calc/calc.jsx';
import History from './history/history.jsx';

import './common.css';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: AppReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(calcSaga);

const App = () => {
  return (
    <Provider store = { store }>
      <Calc />
      <History />
    </Provider>
  )
};

export default App;