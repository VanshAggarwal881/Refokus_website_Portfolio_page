import { motion } from 'framer-motion'
import React from 'react'

function Marquee({imgsrc , direction}) {
  
  return (
    <div className='w-full flex overflow-hidden'>
      <motion.div initial={{x: direction === 'left' ? '0' : '-100%'}} 
                  animate ={{x:direction === 'left' ? '-100%' : '0'}} 
                  transition={{ease:'linear' , duration: 15 , repeat:Infinity}}  className='flex flex-shrink-0 gap-40 py-10 pr-40 '>
      {imgsrc.map(urls => <img className='w-32' src={urls} alt=''/>)}
      </motion.div>
      <motion.div 
                  initial={{x: direction === 'left' ? '0' : '-100%'}} 
                  animate ={{x:direction === 'left' ? '-100%' : '0'}}  
                  transition={{ease:'linear' , duration: 15 , repeat:Infinity}}
                  className='flex flex-shrink-0 gap-40 py-10 pr-40 '>
      {imgsrc.map(urls => <img className='w-32' src={urls} alt=''/>)}
      </motion.div>
        
        
    </div>
  )
}

export default Marquee