import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ElicitEvents } from '../constants/data';

const EventsPage = () => {
  return (
    <div className='w-full h-full max-w-[1280px] mx-auto flex flex-col p-4 pt-10 relative mt-6 mb-32'>
      <motion.h1
        variants={fadeIn('down', 40, 0.5)}
        initial="hidden"
        whileInView="show"
        className='team__title__gradient text-center text-7xl font-bold mt-16 mb-8 uppercase w-full'
      >
        Elicit' 23
      </motion.h1>
      <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[-50%] translate-y-[40%]' />
        
      <VerticalTimeline>
        {ElicitEvents.map((event, index) => {
          return (
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))', 
                color: '#fff' 
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.1)' }}
              date={event.date}
              iconStyle={{ background: 'black', color: '#fff' }}
              icon={event.logo ? <img src={event.logo} className='w-full h-full'/> : null}
            >
              <div>
                <h3 className="text-2xl font-bold">{event.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p className='text-sm font-light'>
                  {event.description}
                </p>
              </div>
              <div className='w-full h-40 mt-4'>
                <img src={event.image} className='w-full h-full object-cover' alt="" />
              </div>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>

    </div>
  );
}

export default EventsPage;
