import React from 'react'
import Button from './Button'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-lg mx-auto flex items-center py-10 gap-14'>
            <div className='basis-1/2'>
                <h1 className='text-[10rem] font-semibold tracking-tight'>
                    infernite.</h1>

            </div>
            <div className='basis-1/2 flex gap-10'>
                <div className='basis-1/3'>
                    <h4 className='mb-12 capitalize'>Socials</h4>
                    { ['Instagram' , 'Twitter (x?)', 'LinkedIn'].map( i => <a className='block mt-2 capitalize text-zinc-600'>{i}</a>)}
                </div>
                <div className='basis-1/3'>
                    <h4 className='mb-12 capitalize'>Socials</h4>
                    { ['Instagram' , 'Twitter (x?)', 'LinkedIn'].map( i => <a className='block mt-2 capitalize text-zinc-600'>{i}</a>)}
                </div>
                <div className='basis-1/2 flex flex-col items-end'>
                   <p className='my-5 text-right'>Good Morning PineApple , Looking Very Good Very Niiice!!</p>
                   <Button></Button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer