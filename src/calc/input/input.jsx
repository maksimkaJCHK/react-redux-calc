import React from 'react';
import { useSelector } from 'react-redux';

const Input = () => {
  let { calcText, calcSign, calcDisplay, result, nullProc } = useSelector(state => state.CalcReducer);

  return (
    <div className = 'calc-input'>
      <div className = 'calc-disp'>
        { nullProc ? '0' : calcDisplay } { calcSign }
      </div>
      <div className = 'calc-text'>
        { !result ? calcText : result }
      </div>
    </div>
  )
}

export default Input;