import React from 'react'
import Button from './Button'


function Navbar() {
  return (
    <div className='max-w-screen-lg  mx-auto py-5 flex items-center justify-between border-b-[1px] border-zinc-500'>
      <div className='nleft flex items-center'>
        <img className='w-[80px] h-[50px]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wgWCZYpx_ff0A3-abXMOKv02MmG-SOJ53w&s'></img>
        <div className='links flex gap-14 ml-36'>
          {
          ['Home','Work','Culture','','News'].map((e,i) => (
            e.length===0 ? (<span className='h-10 w-[2px] bg-zinc-500'></span>) 
                         : (<a className='flex items-center gap-1' href='#'> 
              {i===1 && <span className=' inline-block h-2 w-2 rounded-full bg-green-700 '></span>}  
              {e} 
              </a>)
          ))
          }

        </div>
      </div>

      <Button></Button>
    </div>
  )
}

export default Navbar