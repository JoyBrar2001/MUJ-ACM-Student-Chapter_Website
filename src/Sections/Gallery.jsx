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
