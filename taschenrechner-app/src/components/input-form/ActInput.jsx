import React from 'react'
import { useContext } from 'react'
import CalcContext from '../context/CalcContext'

function ActInput() { 

  const {acText} = useContext(CalcContext);  

  return (
    <div className='absolute bottom-0 right-0 text-5xl p-2 text-white'>{acText}</div>
  )
}

export default ActInput