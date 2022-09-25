import React from 'react'
import { useContext } from 'react'
import CalcContext from '../context/CalcContext'

function PrevInput() {

  const {prevText,operator} = useContext(CalcContext)

  return (
    <div className='text-gray text-xl absolute top-12 right-2'><p className='text-gray inline'>{prevText}  </p><p className="text-white inline">{operator}</p></div>
  )
}

export default PrevInput