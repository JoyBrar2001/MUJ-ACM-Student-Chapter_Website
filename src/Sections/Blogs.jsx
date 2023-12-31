/** 
 * FileName - Blogs.jsx
 * FileType - .jsx (React Js file)
 * Lines - -/-
 * Created On - 15/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - UNFINISHED ------ The Blogs Section of the Home Page
*/

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'

const Blogs = () => {
  return (
    <div className='w-full h-full max-w-[1440px] mx-auto flex flex-col p-4 pt-10 relative mt-20'>
      <motion.h1 
      variants={fadeIn('down', 40, 0.5)}
      initial="hidden"
      whileInView="show"
      className='team__title__gradient text-center text-7xl font-bold my-12 uppercase w-full'
      >
        Blogs
      </motion.h1>

    </div>
  )
}

export default Blogs
