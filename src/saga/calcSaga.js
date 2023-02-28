import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import getHistory from 'api/getHistory';
import setParam from 'api/setParam';
import calculate from 'calc/common/calculate';

import { CALCULATE_SIGN, CALCULATE_ACTION_CHANGE, CALCULATE_INTEREST } from 'store/const';
import { addHistoryItem, historyLoad, calcFunc, calcSignChange, historyError } from 'store/actions';

function* mixinSetParam({ text, display, sign, result }) {
  const data = yield call(setParam, { text, display, sign, result });

  yield put(addHistoryItem(data));
}

function* mixinCalculate(text, display, sign, error) {
  if(error) {
    const calcVal = calculate(text, display, sign);

    yield put(calcFunc(calcVal));
  } else {
    yield put(historyLoad());

    const result = calculate(text, display, sign);

    yield put(calcFunc(result));
    yield mixinSetParam({ text, display, sign, result});
  }
}

function* mixinCalculateSign(text, display, sign, actionSign, error) {
  if(error) {
    const result = calculate(text, display, sign);

    yield put(calcSignChange(result, actionSign));
  } else {
    yield put(historyLoad());

    const result = calculate(text, display, sign);

    yield put(calcSignChange(result, actionSign));
    yield mixinSetParam({ text, display, sign, result });
  }
}

function* loadHistory() {
  try {
    let historyItems = [];
    const historyParam = yield call(getHistory);

    const keysHistoryParams = Object.keys(historyParam);

    keysHistoryParams.forEach((key) => {
      historyItems = [
        {
          ...historyParam[key],
        },
        ...historyItems,
      ];
    });

    yield put(addHistoryItem(historyItems));
  } catch (error) {
    yield put(historyError());
  }
}

function* calculateS() {
  const { result, calcText, calcDisplay, calcSign } = yield select(state => state.CalcReducer);
  const { error } = yield select(state => state.HistoryReducer);

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
  const { calcText, calcDisplay, calcSign } = yield select(state => state.CalcReducer);
  const { error } = yield select(state => state.HistoryReducer);

  const calcProc = (calcDisplay/100) * calcText;

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