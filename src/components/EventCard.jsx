import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'

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
        <div className='absolute w-full rounded-xl bottom-0 bg-black/50 backdrop-blur-sm text-white p-4'>
          <h3 className='text-4xl font-bold my-4'>{name}</h3>
          <p className='mb-2'>{desc}</p>
        </div>
      )}
    </motion.div>
  )
}

export default EventCard
