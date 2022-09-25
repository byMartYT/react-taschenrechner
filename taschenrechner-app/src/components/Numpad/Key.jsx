import React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import CalcContext from '../context/CalcContext';

function Key({color, text, span, func}) {

  const {numFunc,clearAll,clear,back,dot,opFunc,displaySolution} = useContext(CalcContext);

  const operator = ['+', '-', 'X', '/'];

  const handleClick = () => {
    
    if(!isNaN(text)) {
      numFunc(text);
    } else if(text === 'CE') {
      clearAll();
    } else if(text === 'C') {
      clear();
    } else if(text === '%') {
      //TODO
    } else if(operator.includes(text)) {
      opFunc(text);
    } else if(text === '=') {
      displaySolution();
    } else if(func ==='back') {
      back();
    } else if(func === 'dot') {
      dot();
    }
  }

  return (
    <button onClick={handleClick} className={`w-full h-full bg-${color} col-span-${span} grid place-items-center border border-[rgba(0,0,0,0.05)]`}>
        <p className='text-center text-xl text-black'>
        {text}
        </p>
    </button>
  )
}

Key.defaultProps = {
    color: 'salmon',
    text: 'D',
    span: 1,
};

Key.propTypes = {
    color: PropTypes.string,
    span: PropTypes.number,
}

export default Key