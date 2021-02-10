import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCalcText, resetCalcDisplay, changeInputText, resetResult, nullProc, calculateInterest } from '../../store/actions';

const Services = () => {
  const dispatch = useDispatch();
  let { calcText, calcDisplay, result, calcSign } = useSelector(state => state.CalcReducer);

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
    if(calcText < 0) {
      calcText = Math.abs(calcText);
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