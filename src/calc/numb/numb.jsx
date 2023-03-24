import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import numbArr from './numbArr';
import { changeInputText } from '@store/actions';

const Numb = () => {
  const dispatch = useDispatch();
  let { calcText } = useSelector(state => state.CalcReducer);

  const onChangeInputText = (e) => {
    let butValue = e.target.name;

    if(calcText != '0' || butValue == '.') {
      calcText += butValue;
    } else {
      calcText = butValue;
    }
    dispatch(changeInputText(calcText));
  }

  return (
    <>
      {
        numbArr.map((el, count) => {
          const commonClass = 'btn numb col ';
          const addClass = (el == 0) ? 's8' : 's4';
          const buildClass = commonClass + addClass;

          return (
            <button className = { buildClass } name = { el } type = 'button' key = { count } onClick = { onChangeInputText } >
              { el }
            </button>
          )
        })
      }
    </>
  )
}

export default Numb;