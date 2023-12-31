/** 
 * FileName - Team.jsx
 * FileType - .jsx (React Js file)
 * Lines - 49
 * Created On - 15/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - The Team Section of the Home Page
*/

import React from 'react';
import { CoreList, ExecList } from '../constants/data';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';
import StaggeredText from '../components/StaggeredText';
import ExecCard from '../components/ExecCard';
import CoreCard from '../components/CoreCard';

const Team = () => {
  return (
    <div id='Team' className='w-full max-w-[1200px] mx-auto h-full'>
      <motion.h1 
      variants={fadeIn('down', 40, 0.5)}
      initial="hidden"
      whileInView="show"
      className='team__title__gradient titleStyles mt-12 mb-8 '
      >
        The Team
      </motion.h1>
      <StaggeredText title={"Executive Committee"} fontsize={16} delay={0.03} totalDelay={0}/>
      <div className='flex flex-wrap gap-x-16 gap-y-20 justify-center items-center relative mt-8 mb-16'>
        <div className='absolute w-[600px] h-[600px] blue__gradient left-0 bottom-0 translate-x-[-100%]' />
        {ExecList.map((element, index) => (
          <ExecCard key={index} {...element} />
          ))}
      </div>
      
      <StaggeredText title={"Core Committee"} fontsize={16} delay={0.03} totalDelay={0} />
      <div className='flex flex-wrap gap-x-16 gap-y-20 justify-center items-center relative mt-8'>
        {/* <div className='absolute w-[600px] h-[600px] blue__gradient right-0 bottom-0 translate-x-[-100%]' /> */}
        {CoreList.map((element, index) => (
          <CoreCard key={index} {...element} />
        ))}
      </div>
    </div>
  );
}

export default Team;