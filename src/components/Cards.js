import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-lg mx-auto py-20 flex gap-2'>
            <Card width={'basis-1.1/3'} start = {false} para={true}></Card>
            <Card width={'basis-2/3'} start = {true} para={false}></Card>

        </div>

    </div>
  )
}

export default Cards