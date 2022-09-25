import React from 'react'
import Input from './input-form/Input'
import Numpad from './Numpad/Numpad'
import { useSpring, animated } from 'react-spring'


function Calc() {
  const calcPos = useSpring({x:0,y:0});
  
  return (
    <animated.div className='calc bg-white rounded-xl drop-shadow-2xl overflow-hidden' style={{
        position: 'relative',
        x: calcPos.y,
        y: calcPos.x,
      }}> 
        <Input setPos={calcPos} />
        <Numpad />
    </animated.div>
  )
}

export default Calc