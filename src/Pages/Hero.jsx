import React from 'react'
import ACM_3D from '../assets/Logos/ACM-3D-Model.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'

const Hero = () => {
  return (
    <div id='Home' className='w-full h-full max-w-[1440px] mx-auto flex flex-col md:flex-row p-4 pt-10 relative mt-24'>
      <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[-50%] translate-y-[40%]' />
      <div className='flex gap-10 w-full md:w-3/5'>
        <motion.div 
        variants={fadeIn('down', 50, 1)}
        initial="hidden"
        whileInView="show"
        className='flex flex-col justify-center items-center'
        >
          <div className='bg-[#10BED5] w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full blue__glow' />
          <div className='bg-gradient-to-b from-[#10BED5] w-[7px] md:w-[9px] h-[400px] md:h-[500px] mt-[-2px]' />
        </motion.div>
        <div className='pt-6'>
          <motion.h1
            variants={fadeIn('left', 100, 1)}
            initial="hidden"
            whileInView="show"
            className=' text-[#10BED5] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight uppercase blue-text__glow'
          >
            We are MUJ ACM<br />Student Chapter
          </motion.h1>
          <motion.p
            variants={fadeIn('left', 50, 1, 0.5)}
            initial="hidden"
            whileInView="show"
            className='text-gray-400 text-base mt-4 w-[80%]'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque dolorum vel dolor consequuntur harum mollitia perspiciatis dolores quaerat voluptatibus nisi cupiditate fuga voluptatem libero nam, recusandae laboriosam repellendus sequi facilis tempora. Quos quia, dicta cum tempora vero maxime ratione ipsam. Voluptatum aperiam dolores fugiat pariatur quibusdam dolor vitae impedit.
          </motion.p>
        </div>

      </div>

      <div className='flex justify-center items-center md:items-start w-full md:w-2/5'>
        <motion.img
          variants={fadeIn('right', 100, 1, 0.7)}
          initial="hidden"
          whileInView="show"
          src={ACM_3D}
          className='w-[400px] md:w-[500px] img-blue__glow' alt="ACM Logo"
        />
      </div>

    </div>
  )
}

export default Hero
