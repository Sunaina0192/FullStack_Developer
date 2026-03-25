import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './Arrow'
const LeftContent = () => {
  return (
    <div className='p-6  h-full w-1/3  flex flex-col justify-between '>
        <HeroText/>
        <Arrow/>
    </div>
  )
}

export default LeftContent
