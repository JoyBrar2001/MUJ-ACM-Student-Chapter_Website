import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';
import { BsArrowUpRight } from 'react-icons/bs';
import ProjectsCard from '../components/ProjectsCard';

const Projects = () => {
  return (
    <div className='w-full h-full max-w-[1440px] text-white mx-auto flex flex-col p-4 pt-10 relative'>
      <motion.h1
        variants={fadeIn('down', 40, 0.5)}
        initial="hidden"
        whileInView="show"
        className='team__title__gradient text-center text-7xl font-bold my-20 uppercase w-full'
      >
        Projects
      </motion.h1>

      <div className='flex justify-center items-center gap-10 flex-wrap'>
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </div>
  );
}

export default Projects;
