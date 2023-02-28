import {
  CALC_CHANGE_INPUT_TEXT,
  CALC_RESET_RESULT,
  CALC_RESET_TEXT_DISPLAY,
  CALC_RESET_DISPLAY,
  CALC_CHANGE_SIGN_ACTION,
  CALC_CALCULATE,
  CALC_NULL_PROC,
  ADD_HISTORY_ITEMS,
  HISTORY_LOAD,
  CALCULATE_SIGN,
  CALCULATE_ACTION_CHANGE,
  CALCULATE_INTEREST,
  HISTORY_ERROR
} from './const';

export const changeInputText = (val) => {
  return {
    type: CALC_CHANGE_INPUT_TEXT,
    payload: val
  }
}

export const resetResult = () => {
  return {
    type: CALC_RESET_RESULT
  }
}
export const resetCalcText = () => {
  return {
    type: CALC_RESET_TEXT_DISPLAY
  }
}

export const resetCalcDisplay = () => {
  return {
    type: CALC_RESET_DISPLAY
  }
}

export const calcSignChange = (calcDisplay, sign) => {
  return {
    type: CALC_CHANGE_SIGN_ACTION,
    sign,
    calcDisplay
  }
}

export const calcFunc = (result) => {
  return {
    type: CALC_CALCULATE,
    result
  }
}

export const nullProc = () => {
  return {
    type: CALC_NULL_PROC
  }
}

export const addHistoryItem = (item) => {
  return {
    type: ADD_HISTORY_ITEMS,
    payload: Array.isArray(item) ? item : [item],
  }
}

export const historyLoad = () => {
  return {
    type: HISTORY_LOAD,
  }
}

export const historyError= () => {
  return {
    type: HISTORY_ERROR,
  }
}
// Для саги

export const calculateSign = () => {
  return {
    type: CALCULATE_SIGN
  }
}

export const calculateActionChange = (actionSign) => {
  return {
    type: CALCULATE_ACTION_CHANGE,
    actionSign
  }
}

export const calculateInterest = () => {
  return {
    type: CALCULATE_INTEREST
  }
}