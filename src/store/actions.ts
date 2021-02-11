import actionsConst from './const';
import { TypeItemsHistory } from '../types/history';
import { ICalcChangeInputText, ICalcCommonAction, ICalcChangeSignAction, ICalcCalculate, ICalculateActionChange } from '../types/calc';
import { IAddHistory, IHistoryLoad } from '../types/history';

export const changeInputText = (val: string): ICalcChangeInputText => {
  return {
    type: actionsConst.CALC_CHANGE_INPUT_TEXT,
    payload: val
  }
}

export const resetResult = (): ICalcCommonAction => {
  return {
    type: actionsConst.CALC_RESET_RESULT
  }
}

export const resetCalcText = (): ICalcCommonAction => {
  return {
    type: actionsConst.CALC_RESET_TEXT_DISPLAY
  }
}

export const resetCalcDisplay = (): ICalcCommonAction => {
  return {
    type: actionsConst.CALC_RESET_DISPLAY
  }
}

export const calcSignChange = (calcDisplay: string, sign: string): ICalcChangeSignAction => {
  return {
    type: actionsConst.CALC_CHANGE_SIGN_ACTION,
    sign,
    calcDisplay
  }
}

export const calcFunc = (result: string): ICalcCalculate => {
  return {
    type: actionsConst.CALC_CALCULATE,
    result
  }
}

export const nullProc = (): ICalcCommonAction => {
  return {
    type: actionsConst.CALC_NULL_PROC
  }
}

export const addHistoryItem = (item: TypeItemsHistory, error = false): IAddHistory => {
  return {
    type: actionsConst.ADD_HISTORY_ITEMS,
    payload: Array.isArray(item) ? item : [item],
    error
  }
}

export const historyLoad = (load: boolean): IHistoryLoad => {
  return {
    type: actionsConst.HISTORY_LOAD,
    payload: load
  }
}

// Для саги

export const calculateSign = (): ICalcCommonAction => {
  return {
    type: actionsConst.CALCULATE_SIGN
  }
}

export const calculateActionChange = (actionSign: string): ICalculateActionChange => {
  return {
    type: actionsConst.CALCULATE_ACTION_CHANGE,
    actionSign
  }
}

export const calculateInterest = (): ICalcCommonAction => {
  return {
    type: actionsConst.CALCULATE_INTEREST
  }
}