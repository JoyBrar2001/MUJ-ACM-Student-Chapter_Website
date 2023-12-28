import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';

const ProjectsCard = ({ id, index, title, description, photo }) => {
  return (
    <motion.div
      variants={fadeIn('down', 0, 0.5, (index%4)*0.1)}
      initial="hidden"
      whileInView="show"
      className={`team__card__bg w-full rounded-2xl relative flex ${id === 'Project-1' || id === 'Project-7' ? 'flex-col row-span-2' : 'flex-row'}  items-center overflow-hidden`}
    >
      <div className={`bg-white w-full h-full overflow-hidden ${id === 'Project-1' || id === 'Project-7' ? 'h-44 flex-1' : 'flex-[0.8]'}`}>
        <img src={photo} className='w-full h-full object-cover' alt={title} />
      </div>
      <div className='flex-1 p-8'>
        <h1 className='text-3xl text-white font-bold'>{title}</h1>
        <p className='text-sm text-[#ececec] mt-3'>
          {id != 'Project-1' && id != 'Project-7' ? description.slice(0,200) + '...' : description.slice(0,600) + '...'}
        </p>
        <p className='flex w-full justify-end items-center gap-1 text-xs text-white opacity-80 mt-auto absolute cursor-pointer bottom-4 right-4'>
          View More <BsArrowUpRight />
        </p>
      </div>
    </motion.div>
  );
}

export default ProjectsCard;
