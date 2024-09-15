import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Card({width , start , para} ) {
  return (
    <div className={`w-1/2 bg-zinc-800 p-5 rounded-xl ${width} hover:bg-violet-600 min-h-[30rem] flex flex-col justify-between`}> 
      <div className='w-full'>
        <div className='w-full flex justify-between items-center'>
            <h3>One heading</h3>
            <FaArrowRight></FaArrowRight>
            
        </div>
        <h1 className='text-3xl font-medium mt-10'>Whatever heading</h1>

      </div>

      <div className='down w-full mt-60'>
        {
            start && 
            (
                <>
                  <h1 className='text-6xl font-semibold tracking-tight '>Start a Project</h1>
                  <button className='rounded-full py-2 mt-5 px-5 border-[2px] border-zinc-50'>Contact Us</button>
                </>
            )
        }
        
        { para &&
        (
            <p className='text-sm text-zinc-500 font-medium'>good morning Pineapple , looking very good very nice</p>

        )}

      </div>
        
    </div>
  )
}

export default Card
