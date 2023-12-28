import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'

const TeamPage = () => {
  return (
    <div className='w-full h-full max-w-[1440px] mx-auto flex flex-col p-4 pt-10 relative mt-6 mb-32'>
      <motion.h1
        variants={fadeIn('down', 40, 0.5)}
        initial="hidden"
        whileInView="show"
        className='team__title__gradient text-center text-7xl font-bold my-20 uppercase w-full'
      >
        The Team
      </motion.h1>
    </div>
  )
}

export default TeamPage
