import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";

function Button({title='Get Started'}) {
  return (
    <div className='w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex justify-between items-center hover:cursor-pointer'>
        <span className='text-sm font-medium'>{title}</span>
        <FaArrowTrendUp></FaArrowTrendUp>
    </div>
  )
}

export default Button