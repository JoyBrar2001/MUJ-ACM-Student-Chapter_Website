import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'

const EventCard = ({ id, index, name, desc, active, handleHover }) => {
  return (
    <motion.div
      variants={fadeIn('down', 0, 0.5, index * 0.1)}
      initial="hidden"
      whileInView="show"
      id={id}
      className={`bg-white/20 h-96 relative rounded-xl cursor-pointer transition-all duration-300 ease-in-out ${id === active ? 'flex-[3] lg:flex-[3.5]' : 'flex-[1] lg:flex-[0.5]'}`}
      onMouseOver={() => handleHover(id)}
    >
      {active !== id ? (
        <h3 className='absolute bottom-4 left-0 -rotate-90'>{name}</h3>
      ) : (
        <div className='absolute w-full rounded-xl bottom-0 h-32 bg-white/20 p-4'>
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
      )}
    </motion.div>
  )
}

export default EventCard
