import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'

const Events = () => {
  return (
    <div className='w-full min-h-screen h-full max-w-[1440px] mx-auto flex flex-col p-4 pt-10 relative mt-24'>
      <motion.h1 
      variants={fadeIn('down', 40, 0.5)}
      initial="hidden"
      whileInView="show"
      className='team__title__gradient text-center text-7xl font-bold my-12 uppercase w-full'
      >
        Our Events
      </motion.h1>

      <div className='flex h-full w-full gap-4'>
        <div className='flex-[0.5] h-24 bg-white'></div>
        <div className='flex-[3] h-24 bg-white'></div>
        <div className='flex-[0.5] h-24 bg-white'></div>
        <div className='flex-[0.5] h-24 bg-white'></div>
        <div className='flex-[0.5] h-24 bg-white'></div>
      </div>
    </div>
  )
}

export default Events
