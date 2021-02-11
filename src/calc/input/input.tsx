import * as React from 'react';
import { useTypeSelector } from '../../types/appReducer';

const Input: React.FC = () => {
  let { calcText, calcSign, calcDisplay, result, nullProc } = useTypeSelector((state) => state.CalcReducer);

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