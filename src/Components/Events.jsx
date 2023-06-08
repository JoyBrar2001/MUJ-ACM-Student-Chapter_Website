import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { EventsList } from '../constants/data'
import { fadeIn } from '../constants/motion'

const CreateEventCard = ({ id, index, name, desc, active, handleHover }) => {
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

const Events = () => {
    const [active, setActive] = useState('event-3')

  return (
    <div className='w-full min-h-screen h-full max-w-[1440px] mx-auto flex flex-col p-4 pt-10 relative mt-24'>
      <div className='absolute w-[600px] h-[600px] blue__gradient right-0 top-0 translate-x-[-100%]' />
      <motion.h1 
      variants={fadeIn('down', 40, 0.5)}
      initial="hidden"
      whileInView="show"
      className='team__title__gradient text-center text-7xl font-bold my-12 uppercase w-full'
      >
        Our Events
      </motion.h1>

      <div className='flex flex-col md:flex-row min-h-screen w-full gap-4'>
        {EventsList.map((event, index) => (
            <CreateEventCard key={index} index={index} handleHover={setActive} active={active} {...event} />
        ))}
      </div>
    </div>
  )
}

export default Events
