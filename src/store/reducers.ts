import { combineReducers } from 'redux';
import actionsConst from './const';
import { IHistoryAction, IHistoryReducer } from '../types/history';
import { ICalcAction, ICalcReducer } from '../types/calc';

const CalcReducerState: ICalcReducer = {
  result: null,
  nullProc: false,
  calcText: '0',
  calcSign: null,
  calcDisplay: null,
  prevSign: '',
  action: '',
  actionSign: null
};

const CalcReducer = (state = { ...CalcReducerState }, action: ICalcAction): ICalcReducer => {
  switch(action.type) {
    case actionsConst.CALC_CHANGE_INPUT_TEXT:
      return {
        ...state,
        result: null,
        nullProc: false,
        calcText: action.payload
      }
    case actionsConst.CALC_RESET_RESULT:
      return {
        ...state,
        calcText: '0',
        nullProc: false,
        result: null,
      }
    case actionsConst.CALC_RESET_TEXT_DISPLAY:
      return {
        ...state,
        calcText: '0',
        nullProc: false,
        result: null,
      }
    case actionsConst.CALC_RESET_DISPLAY:
      return {
        ...state,
        calcSign: null,
        calcText: '0',
        calcDisplay: null,
        nullProc: false,
        result: null,
      }
    case actionsConst.CALCULATE_ACTION_CHANGE:
      return {
        ...state,
        actionSign: action.actionSign
      }
    case actionsConst.CALC_CHANGE_SIGN_ACTION:
      return {
        ...state,
        calcSign: action.sign,
        calcText: '0',
        calcDisplay: action.calcDisplay,
        nullProc: false,
        result: null,
      }
    case actionsConst.CALC_CALCULATE:
      return {
        ...state,
        result: action.result,
        calcText: '0',
        calcSign: null,
        calcDisplay: null,
        nullProc: false,
      }
    case actionsConst.CALC_NULL_PROC:
      return {
        ...state,
        calcText: '0',
        nullProc: true
      }
    default:
      return state
  }
}

const HistoryReducer = (state: IHistoryReducer = { load: true, error: false, items: [] }, action: IHistoryAction): IHistoryReducer => {
  switch(action.type) {
    case actionsConst.ADD_HISTORY_ITEMS:
      return {
        ...state,
        items: [
          ...action.payload,
          ...state.items
        ],
        load: false,
        error: action.error
      }
    case actionsConst.HISTORY_LOAD:
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

export type TypeAppReducer = ReturnType<typeof AppReducer>;

export default AppReducer;