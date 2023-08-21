import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'
import { BsArrowUpRight } from 'react-icons/bs'

const EventCard = ({ id, index, name, image, desc, active, handleHover }) => {
  return (
    <motion.div
      variants={fadeIn('down', 0, 0.5, index * 0.1)}
      initial="hidden"
      whileInView="show"
      id={id}
      className={`overflow-hidden h-[500px] relative rounded-xl cursor-pointer transition-all duration-300 ease-in-out ${id === active ? 'flex-[3] lg:flex-[3.5]' : 'flex-[1] lg:flex-[0.5]'}`}
      onMouseOver={() => handleHover(id)}
    >
      <img src={image} alt={name} className="absolute w-full h-full object-cover" />
      {active !== id ? (
        <h3 className='absolute bottom-8 left-0 -rotate-90 text-left text-white text-2xl font-bold shadow-3xl'>{name}</h3>
      ) : (
        <div className='absolute w-full rounded-xl left-0 bottom-0 bg-black/70 backdrop-blur-sm text-white p-4'>
          <h3 className='text-4xl font-bold my-4'>{name}</h3>
          <p className='mb-2'>{desc}</p>
          <p className='flex justify-start items-center gap-1 text-xs opacity-80'>View More<BsArrowUpRight /></p>
        </div>
      )}
    </motion.div>
  )
}

export default EventCard
