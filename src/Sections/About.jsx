/** 
 * FileName - About.jsx
 * FileType - .jsx (React Js file)
 * Lines - 94
 * Created On - 15/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - The About section of the Home Page
*/

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';
import CreateLine from '../components/CreateLine';

const About = () => {
    return (
    <motion.div
      id='About'
      variants={fadeIn('down', 100, 1)}
      initial="hidden"
      whileInView="show"
      className='w-full max-w-[1340px] mx-auto h-full p-6 mt-10 relative'
    >
      <div className='absolute w-[600px] h-[600px] blue__gradient right-0 bottom-0 translate-x-[50%]' />
      <div className='about__gradient w-full h-full py-10 px-14 max-w-[1440px] mx-auto rounded-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 sm:gap-y-10 md:gap-y-20'>
        {/* Row 1 */}
        <motion.div
          variants={fadeIn('down', 40, 0.5)}
          initial="hidden"
          whileInView="show"
          className='col-span-1 flex flex-col gap-4 pt-4'
        >
          <CreateLine />
          <h1 className='text-4xl lg:text-5xl font-bold text-white'>About ACM</h1>
        </motion.div>

        <motion.p
          variants={fadeIn('down', 40, 0.5, 0.2)}
          initial="hidden"
          whileInView="show"
          className='text-sm lg:text-base text-gray-400 lg:col-span-2'
        >
          The Association for Computing Machinery (ACM) stands at the forefront of the computing world as world’s largest educational and scientific computing society.<br /> With a rich history and an expansive network, ACM is dedicated to advancing computing as a discipline and profession. Through its commitment to research, education, and collaboration, ACM serves as a vital hub for connecting computing professionals, fostering innovation, and promoting ethical practices.
        </motion.p>

        {/* Row 2 */}
        <motion.h1 
          variants={fadeIn('down', 40, 0.5)}
          initial="hidden"
          whileInView="show"
          className='text-4xl md:text-5xl lg:text-6xl uppercase md:col-span-2 lg:col-span-3 font-bold text-white'
        >
          Innovate. Achieve. Empower.
        </motion.h1>

        {/* Row 3 */}
        <motion.div 
          className='flex flex-col gap-4'
          variants={fadeIn('down', 40, 0.5, 0)}
          initial="hidden"
          whileInView="show"
        >
          <CreateLine />
          <h1 className='text-4xl font-bold text-white'>About MUJ</h1>
          <p className='text-sm md:text-base text-gray-400'>Built on academic excellence and innovation, Manipal University Jaipur offers a range of undergraduate, postgraduate, and doctoral programs. Our campus is a hub of learning, ideas, collaborations, and cultural exchange. We embrace sportsmanship and create unforgettable experiences.</p>
        </motion.div>
        <motion.div 
          className='flex flex-col gap-4'
          variants={fadeIn('down', 40, 0.5, 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <CreateLine />
          <h1 className='text-4xl font-bold text-white'>Our Aim</h1>
          <p className='text-sm md:text-base text-gray-400'>Our aim is to create a dynamic and collaborative space where technology enthusiasts can come together to explore, learn, and innovate. Through workshops, projects, and knowledge-sharing sessions, we strive to enhance our members technical skills and foster a culture of continuous learning.</p>
        </motion.div>
        <motion.div 
          className='flex flex-col gap-4'
          variants={fadeIn('down', 40, 0.5, 0.4)}
          initial="hidden"
          whileInView="show"
        >
          <CreateLine />
          <h1 className='text-4xl font-bold text-white'>Our Mission</h1>
          <p className='text-sm md:text-base text-gray-400'>Bridging academia and industry, we unite theory and application, nurturing holistic professionals. Through teamwork, leadership, and ethics, we develop individuals who grasp work's broader impact, blending technical prowess with a wider perspective for a more comprehensive approach.</p>
        </motion.div>
      </div>

    </motion.div>
  );
}

export default About;