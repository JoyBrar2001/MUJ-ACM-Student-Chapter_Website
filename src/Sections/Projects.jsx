/** 
 * FileName - Projects.jsx
 * FileType - .jsx (React Js file)
 * Lines - 38
 * Created On - 15/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - The Projects Section of the Home Page
*/

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';
import ProjectsCard from '../components/ProjectsCard';
import { ProjectsList } from '../constants/data';

const Projects = () => {
  return (
    <div className='w-full h-full max-w-[1440px] text-white mx-auto flex flex-col p-4 pt-10 relative'>
      <motion.h1
        variants={fadeIn('down', 40, 0.5)}
        initial="hidden"
        whileInView="show"
        className='team__title__gradient titleStyles my-10 lg:my-20 uppercase w-full'
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