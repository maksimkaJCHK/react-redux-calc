import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../types/appReducer';
import { resetCalcText, resetCalcDisplay, changeInputText, resetResult, nullProc, calculateInterest } from '../../store/actions';

const Services: React.FC = () => {
  const dispatch = useDispatch();
  let { calcText, calcDisplay, result, calcSign } = useTypeSelector(state => state.CalcReducer);

  const onResetInput = () => {
    if(calcText != '0') {
      dispatch(resetCalcText());
      return false;
    }
    if(calcDisplay) {
      dispatch(resetCalcDisplay());
      return false;
    }
    dispatch(resetResult());
  }

  const onChangeSign = () => {
    calcText = result ? result : calcText;

    if(calcText == '0') {
      return false;
    }
    if(Number(calcText) < 0) {
      calcText = String(Math.abs(Number(calcText)));
    } else {
      calcText = '-' + calcText;
    }
    dispatch(changeInputText(calcText));
  }

  const onCalcProc = () => {

    if(!calcSign) {
      dispatch(nullProc());
    } else {
      dispatch(calculateInterest());
    }
  }

  return (
    <>
      <button className = 'btn services col s4' type = 'button' onClick = { onResetInput } >
        AC
      </button>
      <button className = 'btn services col s4' type = 'button' onClick = { onChangeSign } >
        ±
      </button>
      <button className = 'btn services col s4' type = "button" onClick = { onCalcProc } >
        %
      </button>
    </>
  )
}

export default Services;