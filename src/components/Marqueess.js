import React from 'react'
import Marquee from './Marquee'
import { imgurl } from '../utils/Marqueeimg/marquee'

function Marqueess() {
  return (
    <div className='py-10 mt-20 w-full relative overflow-hidden'>
        { imgurl.map((i , index) => <Marquee key={index} direction={index === 0 ? 'left' : 'right'} imgsrc={i}></Marquee>)}
    </div>
  )
}

export default Marqueess