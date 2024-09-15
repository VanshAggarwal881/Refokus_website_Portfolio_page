import React, { useState } from 'react'
import { images } from '../utils/WokrImages/images'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function Work() { 
  const [imgs, setimgs] = useState(images)
  const { scrollYProgress } = useScroll()

  scrollYProgress.on('change' , (data) => {
    function imagesShow(arr){
      setimgs(prev => (
        prev.map((item , index) => (
          arr.indexOf(index) === -1 ? (
            {...item , isActive:false}
          ) :
          {...item , isActive:true}
        ))

      ))
    }
    switch (Math.floor(data*100)) {
      case 0:
        imagesShow([])
        break;
      
      case 1:
          imagesShow([0])
          break;

      case 6:
        imagesShow([0,1])
        break;

      case 9:
        imagesShow([0,1,2])
        break;

      case 7:
        imagesShow([0,1,2,3])
        break;

      case 8:
          imagesShow([0,1,2,3,4])
          break;

        case 10:
            imagesShow([0,1,2,3,4,5])
            break;
    
    }
  })  

  

  return (
    <div className='w-full'>
        <div className=' relative max-w-screen-lg mx-auto text-center'>
            <h1 className='text-[30vw] leading-tight font-medium  m-0'>Work</h1>
            
            <div className='absolute top-0 w-full h-full '>
            {imgs.map((e,i) => {
                return (
                    e.isActive && (
                    <img className='absolute rounded-lg w-60 -translate-x-[50]% -translate-y-[50%]' src={e.url} style={{top: e.top , left: e.left}} alt=''></img> )
                )
            })}
            </div>

        </div>

    </div>
  )
}

export default Work