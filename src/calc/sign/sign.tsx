import * as React from 'react';
import { useDispatch } from 'react-redux';
import signArr from './signArr';
import { calculateSign, calculateActionChange } from '../../store/actions';

const Sign: React.FC = () => {
  const dispatch = useDispatch();
  const signClass = 'btn sign col s12';

  const onAction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { name } = e.target as HTMLButtonElement;
    dispatch(calculateActionChange(name));
  }

  const onCalculate = () => {
    dispatch(calculateSign());
  }

  return (
    <>
      {
        signArr.map((el, count) => {
          return (
            <button className = { signClass } name = { el == 'X' ? '*' : el } type = 'button' key = { count } onClick = { onAction } >
              { el }
            </button>
          )
        })
      }
      <button className = { signClass } type = 'button' onClick = { onCalculate } >
        =
      </button>
    </>
  )
}

export default Sign;