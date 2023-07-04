import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'
import CreateLine from '../components/CreateLine'

const About = () => {
    return (
    <motion.div
      id='About'
      variants={fadeIn('down', 100, 1)}
      initial="hidden"
      whileInView="show"
      className='w-full max-w-[1340px] mx-auto h-full p-6 mt-10 relative'
    >
      <div className='absolute w-[600px] h-[600px] blue__gradient right-0 bottom-0 translate-x-[50%]' />
      <div className='about__gradient w-full h-full py-10 px-14 max-w-[1440px] mx-auto rounded-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20'>
        {/* Row 1 */}
        <motion.div
          variants={fadeIn('down', 40, 0.5)}
          initial="hidden"
          whileInView="show"
          className='col-span-1 flex flex-col gap-4 pt-4'
        >
          <CreateLine />
          <h1 className='text-5xl font-bold text-white'>About ACM</h1>
        </motion.div>

        <motion.p
          variants={fadeIn('down', 40, 0.5, 0.2)}
          initial="hidden"
          whileInView="show"
          className='text-base text-gray-400 lg:col-span-2'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </motion.p>

        {/* Row 2 */}
        <motion.h1 
          variants={fadeIn('down', 40, 0.5)}
          initial="hidden"
          whileInView="show"
          className='text-6xl uppercase md:col-span-2 lg:col-span-3 font-bold text-white'
        >
          Some. Ache. Words. Here.
          </motion.h1>

        {/* Row 3 */}
        <motion.div 
          className='flex flex-col gap-4'
          variants={fadeIn('down', 40, 0.5, 0)}
          initial="hidden"
          whileInView="show"
        >
          <CreateLine />
          <h1 className='text-4xl font-bold text-white'>About MUJ</h1>
          <p className='text-base text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo placeat delectus ipsam quibusdam rerum nisi eligendi possimus iure autem!</p>
        </motion.div>
        <motion.div 
          className='flex flex-col gap-4'
          variants={fadeIn('down', 40, 0.5, 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <CreateLine />
          <h1 className='text-4xl font-bold text-white'>Our Aim</h1>
          <p className='text-base text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo placeat delectus ipsam quibusdam rerum nisi eligendi possimus iure autem!</p>
        </motion.div>
        <motion.div 
          className='flex flex-col gap-4'
          variants={fadeIn('down', 40, 0.5, 0.4)}
          initial="hidden"
          whileInView="show"
        >
          <CreateLine />
          <h1 className='text-4xl font-bold text-white'>Our Mission</h1>
          <p className='text-base text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo placeat delectus ipsam quibusdam rerum nisi eligendi possimus iure autem!</p>
        </motion.div>
      </div>

    </motion.div>
  )
}

export default About
