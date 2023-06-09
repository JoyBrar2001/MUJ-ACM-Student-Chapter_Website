import React from 'react'
import Navbar from './Pages/Navbar'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Team from './Pages/Team'
import Events from './Pages/Events'
import { useScroll, motion, useMotionValueEvent, useSpring } from 'framer-motion'

const App = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 50 })

  return (
    <div className='bg-black w-full min-h-screen overflow-x-hidden'>
      <motion.div className='fixed h-2 w-full bg-[#20bbd2] z-[1000] origin-left overflow-y-hidden' style={{ scaleX, boxShadow: `0px 0px 10px rgba(22,178,207,0.5)` }} />
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Events />
    </div>
  )
}

export default App
