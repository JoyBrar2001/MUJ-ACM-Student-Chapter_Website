import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Team from './Components/Team'

const App = () => {
  return (
    <div className='bg-black w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Team />
    </div>
  )
}

export default App
