/** 
 * FileName - TeamPage.jsx
 * FileType - .jsx (React Js file)
 * Lines - 67
 * Created On - 21/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - Gallery page of the website
*/

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { GalleryList } from '../constants/data';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div className='w-full h-full max-w-[1280px] mx-auto flex flex-col p-4 pt-10 relative mt-6 mb-32'>
      <motion.h1
        variants={fadeIn('down', 40, 0.5)}
        initial="hidden"
        whileInView="show"
        className='team__title__gradient titleStyles mt-16 mb-8'
      >
        Gallery
      </motion.h1>
      <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[-50%] translate-y-[40%]' />
      <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[50%] md:translate-x-[100%] translate-y-[200%]' />

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 640: 1, 768: 2, 1024: 3 }}
      >
        <Masonry gutter="15px">
          {GalleryList.map((photo, index) => (
          <motion.div
            key={index}
            variants={fadeIn('down', 40, 0.5, index < 5 ? index*0.1 : 0)}
            initial="hidden"
            whileInView="show"
          >
            <img
              src={photo.img}
              style={{ width: "100%", display: "block", borderRadius: '15px' }}
              alt=''
              loading='lazy'
            />
            <div className='absolute top-0 left-0 w-full h-full flex px-3 py-2 items-end bg-gradient-to-t from-black/70 via-black/20 via-30% to-transparent'>
              <p className='text-[#ececec] font-semibold shadow-2xl'>{photo.title}</p>
            </div>
          </motion.div>
          ))}
        </Masonry>
      </ResponsiveMasonry>

    </div>
  );
}

export default GalleryPage;