import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { EventsList } from '../constants/data'
import { fadeIn } from '../constants/motion'
import EventCard from '../components/EventCard'

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
            <EventCard key={index} index={index} handleHover={setActive} active={active} {...event} />
        ))}
      </div>
    </div>
  )
}

export default Events
