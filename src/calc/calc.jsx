import React from 'react';
import Input from './input';
import Numb from './numb';
import Services from './services';
import Sign from './sign';
import './calc.scss';

const Calc = (props) => {
  return (
    <div className = 'calc' >
      <Input />
      <div className = 'calc-panel row'>
        <div className = 'col s9'>
          <Services />
          <Numb />
        </div>
        <div className = 'col s3'>
          <Sign />
        </div>
      </div>
    </div>
  )
}

export default Calc;