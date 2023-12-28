import React from 'react'
import ACM_3D from '../assets/Logos/ACM-3D-Model.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'
import ACMLogo3D from '../components/ACMLogo3D'

const Hero = () => {
  return (
    <div id='Home' className='w-full h-full max-w-[1440px] mx-auto flex flex-col md:flex-row p-4 pt-10 relative mt-24'>
      <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[-50%] translate-y-[40%]' />
      <div className='flex gap-6 md:gap-8 lg:gap-10 w-full md:w-3/5'>
        <motion.div
          variants={fadeIn('down', 50, 1)}
          initial="hidden"
          whileInView="show"
          className='flex flex-col justify-center items-center'
        >
          <div className='bg-[#10BED5] w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full blue__glow' />
          <div className='bg-gradient-to-b from-[#10BED5] w-[7px] md:w-[9px] h-[600px] sm:h-[500px] mt-[-2px]' />
        </motion.div>
        <div className='pt-6'>
          <motion.h1
            variants={fadeIn('left', 100, 1)}
            initial="hidden"
            whileInView="show"
            className=' text-[#10BED5] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight uppercase blue-text__glow'
          >
            We are MUJ ACM<br className='md:hidden'/> Student Chapter
          </motion.h1>
          <motion.p
            variants={fadeIn('left', 50, 1, 0.5)}
            initial="hidden"
            whileInView="show"
            className='text-gray-400 text-base mt-4 w-full md:w-[80%]'
          >
            We the ACM Student Chapter are a dynamic community of tech enthusiasts driven by a shared passion to explore the multifaceted world of computing. Here, we believe that teamwork is not just a concept, it's the essence that propels us towards greatness. With a focus on nurturing talent and promoting learning, the ACM S chapter provides a platform for students to dive into technical challenges, engage in collaborative projects, and interact with industry professionals. Through a spectrum of workshops, hackathons and networking events, the ACM S chapter empowers students to refine their skills.
          </motion.p>
        </div>

      </div>

      <div className='flex justify-center items-center md:items-start w-full -mt-10 md:w-2/5'>
        <motion.img
          variants={fadeIn('right', 100, 1, 0.7)}
          initial="hidden"
          whileInView="show"
          src={ACM_3D}
          className='w-[400px] md:w-[500px] img-blue__glow' alt="ACM Logo"
        />
        {/* <ACMLogo3D /> */}
      </div>

    </div>
  )
}

export default Hero
