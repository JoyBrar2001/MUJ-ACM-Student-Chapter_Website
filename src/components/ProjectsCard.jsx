import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const ProjectsCard = () => {
  return (
    <div className='team__card__bg w-72 h-96 rounded-2xl relative flex flex-col items-center p-3'>
      <div className='bg-white w-32 h-32 rounded-full absolute left-[50%] top-0 -translate-x-[50%] -translate-y-[30%]'>
        {/* Image */}
      </div>
      <div className='w-full h-24' />
      <h1 className='text-3xl font-bold'>Project Title</h1>
      <p className='text-sm text-[#ececec] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos! Deleniti iure nemo voluptatem maiores, id iusto delectus, minus amet, consequuntur quia temporibus quod doloremque...</p>
      <p className='flex w-full justify-end items-center gap-1 text-xs opacity-80 mt-auto'>View More<BsArrowUpRight /></p>
    </div>
  );
}

export default ProjectsCard;
