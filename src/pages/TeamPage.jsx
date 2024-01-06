/** 
 * FileName - TeamPage.jsx
 * FileType - .jsx (React Js file)
 * Lines - 77
 * Created On - 21/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - Team Heads page of the website
*/

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';
import { TeamHeadsList } from '../constants/data';

const TeamPage = () => {
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
        className='team__title__gradient titleStyles mt-12 mb-2'
      >
        The Team
      </motion.h1>
      <div>
        {TeamHeadsList.map((team, index) => {
          return (
            <div key={index}>
              {
                index % 4 == 0 && index != TeamHeadsList.length - 1 ?
                  <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[-50%] translate-y-[40%]' />
                  :
                  (index + 2) % 4 == 0 && index != TeamHeadsList.length - 1 ?
                    <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[140%] translate-y-[40%]' />
                    : null
              }
              <motion.h1
                variants={fadeIn('down', 40, 0.5)}
                initial="hidden"
                whileInView="show"
                className='team__title__gradient text-center text-4xl sm:text-5xl md:text-6xl font-bold uppercase mt-6 md:mt-6 mb-12 md:mb-14'
              >
                {team.teamName}
              </motion.h1>
              <div className='flex flex-wrap gap-x-16 gap-y-20 justify-center items-center relative mt-8'>
                {team.heads.map((head, index) => {
                  return (
                    <motion.div
                      variants={fadeIn('down', 40, 0.5, index * 0.1)}
                      initial="hidden"
                      whileInView="show"
                      className='teamhead__card__bg w-56 flex flex-col justify-center items-center rounded-3xl pb-3 px-4'
                      key={index}
                    >
                      <img src={head.photo} className='w-48 h-48 rounded-3xl -mt-6 hover:scale-105 transition-all ease-in-out duration-150' alt={head.name} loading='lazy' />
                      <p className='text-white text-center mt-2 text-xl font-medium'>{head.name}</p>
                      <p className='text-white text-center mt-1 text-sm font-normal opacity-80'>{head.post}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default TeamPage;