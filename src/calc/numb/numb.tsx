import * as React from 'react';
import { useDispatch } from 'react-redux';
import numbArr from './numbArr';
import { useTypeSelector } from '../../types/appReducer';
import { changeInputText } from '../../store/actions';

const Numb: React.FC = () => {
  const dispatch = useDispatch();
  let { calcText } = useTypeSelector(state => state.CalcReducer);

  const onChangeInputText = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let { name } = e.target as HTMLButtonElement;

    if(calcText != '0' || name == '.') {
      calcText += name;
    } else {
      calcText = name;
    }
    dispatch(changeInputText(calcText));
  }

  return (
    <>
      {
        numbArr.map((el, count) => {
          let commonClass = 'btn numb col ';
          let addClass = (el == 0) ? 's8' : 's4';
          let buildClass = commonClass + addClass;
          return (
            <button className = { buildClass } name = { String(el) } type = 'button' key = { count } onClick = { onChangeInputText } >
              { el }
            </button>
          )
        })
      }
    </>
  )
}

export default Numb;