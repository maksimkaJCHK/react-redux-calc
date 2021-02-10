import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import AppReducer from './store/reducers';
import calcSaga from './saga/calcSaga';
import Calc from './calc/calc.jsx';
import History from './history/history.jsx';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(
  AppReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(calcSaga);
const node = document.getElementById('app');

ReactDOM.render(
  <Provider store = { store }>
    <Calc />
    <History />
  </Provider>,
  node
)