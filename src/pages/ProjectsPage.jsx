import React from 'react';
import ProjectsCard from '../components/ProjectsCard';
import { ProjectsList } from '../constants/data';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';

const ProjectsPage = () => {
  return (
    <div className='w-full h-full max-w-[1440px] mx-auto flex flex-col p-4 pt-10 relative mt-6 mb-32'>
      <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[-50%] translate-y-[40%]' />
      <motion.h1
        variants={fadeIn('down', 40, 0.5)}
        initial="hidden"
        whileInView="show"
        className='team__title__gradient text-center text-7xl font-bold my-20 uppercase w-full'
      >
        Projects
      </motion.h1>
      <div className=' grid grid-cols-2 gap-10 w-full'>

        {ProjectsList.map((element, index) => (
          <ProjectsCard key={index} index={index} {...element} />
        ))}
      </div>
      <div className='absolute w-[600px] h-[600px] blue__gradient bg-white bottom-0' />
    </div>
  );
}

export default ProjectsPage;
