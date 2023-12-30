import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';
import { BsArrowUpRight } from 'react-icons/bs';
import ProjectsCard from '../components/ProjectsCard';
import { ProjectsList } from '../constants/data';

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

      <div className='grid sm:grid-cols-2 gap-10 w-full'>
        {ProjectsList.slice(0,3).map((element, index) => (
          <ProjectsCard key={index} index={index} {...element} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
