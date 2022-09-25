import React from 'react'
import { useDrag } from 'react-use-gesture'
import PrevInput from './PrevInput'
import ActInput from './ActInput'

function Input({setPos}) {

  const bindCalcPos = useDrag((params) => {
        setPos.y.set(params.offset[0]);
        setPos.x.set(params.offset[1]);
  });

  return (
    <div {...bindCalcPos()} className="h-1/4 bg-gray-500 bg-input cursor-move relative">
      <PrevInput />
      <ActInput /> 
    </div>
  )
}

export default Input