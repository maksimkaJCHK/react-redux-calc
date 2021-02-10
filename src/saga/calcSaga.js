import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { CALCULATE_SIGN, CALCULATE_ACTION_CHANGE, CALCULATE_INTEREST } from '../store/const';
import getHistory from '../api/getHistory';
import calculate from '../calc/common/calculate';
import setParam from '../api/setParam';
import { addHistoryItem, historyLoad, calcFunc, calcSignChange } from '../store/actions';

function* mixinSetParam(text, display, sign, result) {
  let data = yield call(setParam, text, display, sign, result);
  yield put(addHistoryItem(data));
}

function* mixinCalculate(text, display, sign, error) {
  if(error) {
    let calcVal = calculate(text, display, sign);
    yield put(calcFunc(calcVal));
  } else {
    yield put(historyLoad(true));
    let calcVal = calculate(text, display, sign);
    yield put(calcFunc(calcVal));
    yield mixinSetParam(text, display, sign, calcVal);
  }
}

function* mixinCalculateSign(text, display, sign, actionSign, error) {
  if(error) {
    let result = calculate(text, display, sign);
    yield put(calcSignChange(result, actionSign));
  } else {
    yield put(historyLoad(true));
    let result = calculate(text, display, sign);
    yield put(calcSignChange(result, actionSign));
    yield mixinSetParam(text, display, sign, result);
  }
}

function* loadHistory() {
  let historyParam = yield call(getHistory);
  yield put(addHistoryItem(historyParam.historyItems, historyParam.error));
}

function* calculateS() {
  let { result, calcText, calcDisplay, calcSign } = yield select(state => state.CalcReducer);
  let { error } = yield select(state => state.HistoryReducer);

  if(!result && calcSign) {
    yield mixinCalculate(calcText, calcDisplay, calcSign, error);
  }
}

function* calculateSignS() {
  let { result, calcText, calcDisplay, calcSign, actionSign } = yield select(state => state.CalcReducer);
  let { error } = yield select(state => state.HistoryReducer);

  if(!calcDisplay) {
    calcText = result ? result : calcText;
    yield put(calcSignChange(calcText, actionSign));
  } else {
    yield mixinCalculateSign(calcText, calcDisplay, calcSign, actionSign, error)
  }
}

function* calculateInterestS() {
  let { calcText, calcDisplay, calcSign } = yield select(state => state.CalcReducer);
  let { error } = yield select(state => state.HistoryReducer);

  let calcProc = (calcDisplay/100) * calcText;
  yield mixinCalculate(calcProc, calcDisplay, calcSign, error);
}

function* watchCalculate() {
  yield takeLatest(CALCULATE_ACTION_CHANGE, calculateSignS);
  yield takeLatest(CALCULATE_SIGN, calculateS);
  yield takeLatest(CALCULATE_INTEREST, calculateInterestS);
}

export default function* calcSaga() {
  yield all([
    loadHistory(),
    watchCalculate()
  ])
}