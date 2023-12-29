import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';

const ProjectsCard = ({ id, index, title, description, photo }) => {
  const isBigCard = id === 'Project-1' || id === 'Project-7';
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncatedDescription = isBigCard ?
    description :
    description.length > 200 ?
      description.slice(0, 200) + '...'
      : description;

  return (
    <motion.div
      variants={fadeIn('down', 0, 0.5, (index % 4) * 0.1)}
      initial="hidden"
      whileInView="show"
      className={`team__card__bg w-full rounded-2xl relative flex ${id === 'Project-1' || id === 'Project-7' ? 'flex-col row-span-2' : 'flex-row'}  items-center overflow-hidden`}
    >
      <div className={`bg-white w-full h-full overflow-hidden ${id === 'Project-1' || id === 'Project-7' ? 'h-44 flex-1' : 'flex-[0.8]'}`}>
        <img src={photo} className='w-full h-full object-cover' alt={title} loading='lazy' />
      </div>
      <div className='flex-1 p-8'>
        <h1 className='text-3xl text-white font-bold'>{title}</h1>
        <p className='text-sm text-[#ececec] mt-3'>
          {showFullDescription ? description : truncatedDescription}
        </p>
        {!isBigCard ?
          <p
            className='flex w-full justify-end items-center gap-1 text-xs text-white opacity-80 mt-auto absolute cursor-pointer bottom-4 right-4'
            onClick={handleToggleDescription}
          >
            View {showFullDescription ? 'Less' : 'More'} {showFullDescription ? <FiChevronUp /> : <FiChevronDown /> } 
          </p>
          : 
          null
        }
      </div>
    </motion.div>
  );
}

export default ProjectsCard;
