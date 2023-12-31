/** 
 * FileName - Gallery.jsx
 * FileType - .jsx (React Js file)
 * Lines - -/-
 * Created On - 15/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - Unfinished
*/

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';

const Gallery = () => {
  return (
    <div id='Team' className='w-full max-w-[1200px] mx-auto h-full h-screen'>
      <motion.h1 
      variants={fadeIn('down', 40, 0.5)}
      initial="hidden"
      whileInView="show"
      className='team__title__gradient titleStyles mt-12 mb-8 '
      >
        Gallery
      </motion.h1>
    </div>
  );
}

export default Gallery;
