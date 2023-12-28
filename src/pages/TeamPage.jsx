import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';
import { TeamHeadsList } from '../constants/data';

const TeamPage = () => {
  return (
    <div className='w-full h-full max-w-[1280px] mx-auto flex flex-col p-4 pt-10 relative mt-6 mb-32'>
      <motion.h1
        variants={fadeIn('down', 40, 0.5)}
        initial="hidden"
        whileInView="show"
        className='team__title__gradient text-center text-7xl font-bold mt-16 mb-8 uppercase w-full'
      >
        The Team
      </motion.h1>
      <div>
        <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[-50%] translate-y-[40%]' />
        {TeamHeadsList.map((team, index) => {
          return (
            <div>
              <h1 className='team__title__gradient text-center text-5xl font-bold mt-8 mb-14 uppercase w-full'>{team.teamName}</h1>
              <div className='flex flex-wrap gap-x-16 gap-y-20 justify-center items-center relative mt-8'>
                {team.heads.map((head, index) => {
                  return (
                    <div className='teamhead__card__bg w-56 flex flex-col justify-center items-center rounded-3xl pb-3'>
                      <img src={head.photo} className='w-48 h-48 rounded-3xl -mt-6 hover:scale-105 transition-all ease-in-out duration-150' alt="" />
                      <p className='text-white mt-2 text-xl font-medium'>{head.name}</p>
                      <p className='text-white mt-1 text-sm font-normal opacity-80'>{head.post}</p>
                    </div>
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