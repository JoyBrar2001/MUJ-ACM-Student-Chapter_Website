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
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import img1 from '../assets/Gallery/1.jpg';
import img2 from '../assets/Gallery/2.jpg';
import img4 from '../assets/Gallery/4.jpg';
import img5 from '../assets/Gallery/5.jpg';

const Gallery = () => {
  return (
    <div id='Team' className='w-full max-w-[1024px] mx-auto h-full p-4 sm:p-2 md:p-0'>
      <motion.h1
        variants={fadeIn('down', 40, 0.5)}
        initial="hidden"
        whileInView="show"
        className='team__title__gradient titleStyles mt-12 mb-8 '
      >
        Gallery
      </motion.h1>

      {/* <div className='w-[80%] flex-1 justify-center items-center'> */}
        <Carousel
          width='100%'
          infiniteLoop
          autoPlay
          stopOnHover
          emulateTouch
          className='rounded-2xl overflow-hidden'
        >
          <div className=''>
            <img src={img1} alt="" />
            <p className='legend'>Legend 1</p>
          </div>
          <div>
            <img src={img2} alt="" />
            <p className='legend'>Legend 2</p>
          </div>
          <div>
            <img src={img4} alt="" />
            <p className='legend'>Legend 4</p>
          </div>
          <div>
            <img src={img5} alt="" />
            <p className='legend'>Legend 5</p>
          </div>
        </Carousel>
      {/* </div> */}
    </div>
  );
}

export default Gallery;