import React from 'react'
import Key from './Key'
import {FiDelete} from 'react-icons/fi'
import {BsDot} from 'react-icons/bs'

function Numpad() {
  

  return (
    <div className="grid h-3/4 w-full grid-cols-4 numpad">
      {/* Line 1 */}
      <Key color={'iron'} text={'CE'} func={'delall'} />
      <Key color={'iron'} text={'C'} func={'del'}/>
      <Key color={'iron'} text={'%'} func={'%'}/>
      <Key color={'hitpink'} text={'/'} func={'/'}/>
      {/* Line 2 */}
      <Key color={'w2'} text={'7'} func={'7'}/>
      <Key color={'w2'} text={'8'} func={'8'}/>
      <Key color={'w2'} text={'9'} func={'9'}/>
      <Key color={'hitpink'} text={'X'} func={'X'}/>
      {/* Line 3 */}
      <Key color={'w2'} text={'4'} func={'4'}/>
      <Key color={'w2'} text={'5'} func={'5'}/>
      <Key color={'w2'} text={'6'} func={'6'}/>
      <Key color={'hitpink'} text={'-'} func={'-'}/>
      {/* Line 4 */}
      <Key color={'w2'} text={'1'} func={'1'}/>
      <Key color={'w2'} text={'2'} func={'2'}/>
      <Key color={'w2'} text={'3'} func={'3'}/>
      <Key color={'hitpink'} text={'+'} func={'+'}/>
      {/* Line 5 */}
      <Key color={'w2'} text={'0'} func={'0'}/>
      <Key color={'w2'} text={<BsDot/>} func={'dot'}/>
      <Key color={'w2'} text={<FiDelete/>} func={'back'}/>
      <Key color={'salmon'} text={'='} func={'='}/>


    </div>
  )
}

export default Numpad