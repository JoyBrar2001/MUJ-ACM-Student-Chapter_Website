/** 
 * FileName - ExecCard.jsx
 * FileType - .jsx (React Js file)
 * Lines - 51
 * Created On - 15/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - This exports Executive Board Card as seen in the home page
*/

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';
import Linkedin from '../assets/Socials/Linkedin.png';
import Github from '../assets/Socials/Github.png';
import Instgram from '../assets/Socials/Instagram.png';

const ExecCard = ({ name, position, image, id, linkedin, github, instagram }) => {
  return (
    <motion.div
      variants={fadeIn('down', 40, 0.5, id <= 2 ? id * 0.1 + 0.3 : id * 0.1)}
      initial="hidden"
      whileInView="show"
      className='team__card__bg flex flex-col rounded-3xl pt-3 group'
    >
      <div 
        className='flex flex-col justify-center items-center gap-4
        absolute top-8 -right-6 p-3 
        bg-gradient-to-b from-white/10 to-white/5 rounded-2xl 
        -translate-x-16 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-30'
      >
        <a href={linkedin} target='_blank'>
          <img src={Linkedin} className='h-10 w-10 opacity-0 group-hover:opacity-100 duration-300 delay-150' alt="Linkedin" />
        </a>
        <a href={github} target='_blank'>
          <img src={Github} className='h-10 w-10 opacity-0 group-hover:opacity-100 duration-300 delay-200 bg-white rounded-full' alt="Github" />
        </a>
        <a href={instagram} target='_blank'>
          <img src={Instgram} className='h-10 w-10 opacity-0 group-hover:opacity-100 duration-300 delay-300' alt="Instagram" />
        </a>
      </div>
      <img src={image} className='w-[280px] mx-auto z-10' alt={name} loading='lazy' />
      <div className='team__card__content rounded-3xl flex flex-col text-center text-white py-4 px-4'>
        <h1 className='font-bold text-3xl'>{name}</h1>
        <h3 className='font-normal text-lg'>{position}</h3>
      </div>
    </motion.div>
  );
}

export default ExecCard;