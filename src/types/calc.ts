import actionsConst from '../store/const';

export interface ICalcReducer {
  result: string;
  nullProc: boolean;
  calcText: string;
  calcSign: string;
  calcDisplay: string;
  prevSign: string;
  action: string;
  actionSign: string;
}

export interface ICalcChangeInputText {
  type: actionsConst.CALC_CHANGE_INPUT_TEXT;
  payload: string;
}

export interface ICalcActionChange {
  type: actionsConst.CALCULATE_ACTION_CHANGE;
  actionSign: string;
}

export interface ICalcChangeSignAction{
  type: actionsConst.CALC_CHANGE_SIGN_ACTION;
  sign: string;
  calcDisplay: string;
}

export interface ICalcCalculate{
  type: actionsConst.CALC_CALCULATE;
  result: string;
}

export interface ICalculateActionChange{
  type: actionsConst.CALCULATE_ACTION_CHANGE;
  actionSign: string;
}

export interface ICalcCommonAction{
  type: actionsConst.CALC_NULL_PROC | actionsConst.CALC_RESET_DISPLAY | actionsConst.CALC_RESET_TEXT_DISPLAY | actionsConst.CALC_RESET_RESULT | actionsConst.CALCULATE_SIGN | actionsConst.CALCULATE_INTEREST | actionsConst.CALCULATE_SIGN;
}

export type ICalcAction = ICalcChangeInputText | ICalcActionChange | ICalcChangeSignAction | ICalcCalculate | ICalcCommonAction | ICalculateActionChange;