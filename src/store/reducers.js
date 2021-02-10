import { combineReducers } from 'redux';
import { CALC_CHANGE_INPUT_TEXT, CALC_RESET_RESULT, CALC_RESET_TEXT_DISPLAY, CALC_RESET_DISPLAY,  CALC_CHANGE_SIGN_ACTION, CALC_CALCULATE, CALC_NULL_PROC, ADD_HISTORY_ITEMS, HISTORY_LOAD, CALCULATE_ACTION_CHANGE } from './const';

const CalcReducerState = {
  result: null,
  nullProc: false,
  calcText: '0',
  calcSign: null,
  calcDisplay: null,
  prevSign: '',
  action: ''
};

const CalcReducer = (state = { ...CalcReducerState }, action) => {
  switch(action.type) {
    case CALC_CHANGE_INPUT_TEXT:
      return {
        ...state,
        result: null,
        nullProc: false,
        calcText: action.payload
      }
    case CALC_RESET_RESULT:
      return {
        ...state,
        calcText: '0',
        nullProc: false,
        result: null,
      }
    case CALC_RESET_TEXT_DISPLAY:
      return {
        ...state,
        calcText: '0',
        nullProc: false,
        result: null,
      }
    case CALC_RESET_DISPLAY:
      return {
        ...state,
        calcSign: null,
        calcText: '0',
        calcDisplay: null,
        nullProc: false,
        result: null,
      }
    case CALCULATE_ACTION_CHANGE:
      return {
        ...state,
        actionSign: action.actionSign
      }
    case CALC_CHANGE_SIGN_ACTION:
      return {
        ...state,
        calcSign: action.sign,
        calcText: '0',
        calcDisplay: action.calcDisplay,
        nullProc: false,
        result: null,
      }
    case CALC_CALCULATE:
      return {
        ...state,
        result: action.result,
        calcText: '0',
        calcSign: null,
        calcDisplay: null,
        nullProc: false,
      }
    case CALC_NULL_PROC:
      return {
        ...state,
        calcText: '0',
        nullProc: true
      }
    default:
      return state
  }
}

const HistoryReducer = (state = { load: true, error: false, items: [] }, action) => {
  switch(action.type) {
    case ADD_HISTORY_ITEMS:
      return {
        ...state,
        items: [
          ...action.payload,
          ...state.items
        ],
        load: false,
        error: action.error
      }
    case HISTORY_LOAD:
      return {
        ...state,
        load: action.payload
      }
    default:
      return state
  }
}

const AppReducer = combineReducers({
  CalcReducer,
  HistoryReducer
});

export default AppReducer;