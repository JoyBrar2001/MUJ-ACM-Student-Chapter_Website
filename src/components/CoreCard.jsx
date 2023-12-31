/** 
 * FileName - CoreCard.jsx
 * FileType - .jsx (React Js file)
 * Lines - 32
 * Created On - 15/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - This exports Core Team Card as seen in the home page
*/

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';

const CoreCard = ({ name, position, image, id }) => {
  return (
    <motion.div
      variants={fadeIn('down', 40, 0.5, id * 0.1 + 0.2)}
      initial="hidden"
      whileInView="show"
      className='team__card__bg flex flex-col rounded-3xl pt-3'
    >
      <img src={image} className='w-[200px] mx-auto' alt={name} loading='lazy' />
      <div className='team__card__content rounded-3xl flex flex-col text-center text-white py-4 px-4'>
        <h1 className='font-bold text-2xl'>{name}</h1>
        <h3 className='font-normal text-sm'>{position}</h3>
      </div>
    </motion.div>
  );
}

export default CoreCard;