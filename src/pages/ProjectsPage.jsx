/** 
 * FileName - ProjectsPage.jsx
 * FileType - .jsx (React Js file)
 * Lines - 46
 * Created On - 21/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - Projects Page of the website
*/

import React, { useEffect } from 'react';
import ProjectsCard from '../components/ProjectsCard';
import { ProjectsList } from '../constants/data';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div className='w-full h-full max-w-[1440px] mx-auto flex flex-col p-4 pt-10 relative mt-6 mb-32'>
      <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[-50%] translate-y-[40%]' />
      <motion.h1
        variants={fadeIn('down', 40, 0.5)}
        initial="hidden"
        whileInView="show"
        className='team__title__gradient titleStyles my-20'
      >
        Projects
      </motion.h1>
      <div className='grid sm:grid-cols-2 gap-10 w-full'>

        {ProjectsList.map((element, index) => (
          <ProjectsCard key={index} index={index} {...element} />
        ))}
      </div>
      <div className='absolute w-[600px] h-[600px] blue__gradient bg-white bottom-0' />
    </div>
  );
}

export default ProjectsPage;