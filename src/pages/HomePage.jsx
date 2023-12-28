import React from 'react'
import { useScroll, motion, useSpring } from 'framer-motion'
import { Hero, About, Team, Events, Projects, Blogs } from '../Sections'

const HomePage = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 50 })

  return (
    <div className='bg-black w-full overflow-x-hidden'>
      <motion.div className='fixed h-2 w-full bg-[#20bbd2] z-[1000] origin-left overflow-y-hidden' style={{ scaleX, boxShadow: `0px 0px 10px rgba(22,178,207,0.5)` }} />
      <Hero />
      <About />
      <Team />
      <Events />
      <Projects />
      {/* <Blogs /> */}
    </div>
  )
}

export default HomePage
