/** 
 * FileName - EventsPage.jsx
 * FileType - .jsx (React Js file)
 * Lines - 126
 * Created On - 21/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - Events Page of the website
*/

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ElicitEvents, OurEvents, RTEEvents, SigfestEvents } from '../constants/data';

const VerticalTimelineElementComponent = ({ id, name, date, image, logo, description, addPadding }) => (
  <VerticalTimelineElement
    className='vertical-timeline-element--work'
    contentStyle={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))',
      color: '#fff'
    }}
    contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.1)' }}
    date={date}
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={logo ? <img src={logo} className={`w-full h-full rounded-full ${addPadding ? 'p-2' : ''}`} /> : null}
  >
    <div>
      <h3 className="text-2xl font-bold">{name}</h3>
      {/* <h4 className="vertical-timeline-element-subtitle">Location</h4> */}
      <p className='text-sm font-light'>
        {description}
      </p>
    </div>
    <div className='w-full h-40 mt-4'>
      <img src={image} className='w-full h-full object-cover' alt="" />
    </div>
  </VerticalTimelineElement>
)

const CreateHeading = ({ title }) => (
  <motion.h1
    variants={fadeIn('down', 40, 0.5)}
    initial="hidden"
    whileInView="show"
    className='team__title__gradient titleStyles mt-16 mb-8'
  >{title}</motion.h1>
)

const EventsPage = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   return () => {
  //     window.scrollTo(0, 0);
  //   };
  // }, []);
  return (
    <div className='w-full h-full max-w-[1280px] mx-auto flex flex-col p-4 pt-10 relative mt-6 mb-32'>

      <CreateHeading title="Elicit'23" />
      <VerticalTimeline>
        {ElicitEvents.map((event, index) => (
          <VerticalTimelineElementComponent key={index} {...event} />
        ))}
      </VerticalTimeline>

      <CreateHeading title="Road To Elicit" />
      <VerticalTimeline>
        {RTEEvents.map((event, index) => (
          <VerticalTimelineElementComponent key={index} addPadding {...event} />
        ))}
      </VerticalTimeline>

      <CreateHeading title="Our Events" />
      <VerticalTimeline>
        {OurEvents.map((event, index) => (
          <VerticalTimelineElementComponent key={index} addPadding {...event} />
        ))}
      </VerticalTimeline>

      <CreateHeading title="Sigfest'23" />
      <VerticalTimeline>
        {SigfestEvents.map((event, index) => (
          <VerticalTimelineElementComponent key={index} {...event} />
        ))}
      </VerticalTimeline>

      <div className='absolute w-full h-full opacity-60'>
        <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[-50%] translate-y-[40%]' />
        <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[100%] translate-y-[140%]' />
        <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[-50%] translate-y-[340%]' />
        <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[100%] translate-y-[550%]' />
        <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[-50%] translate-y-[800%]' />
        <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[100%] translate-y-[960%]' />
        <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[-50%] translate-y-[1100%]' />
        <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[100%] translate-y-[1300%]' />
      </div>
    </div>
  );
}

export default EventsPage;