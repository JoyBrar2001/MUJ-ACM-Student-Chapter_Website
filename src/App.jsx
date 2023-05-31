import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'

const App = () => {
  return (
    <div className='bg-black w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
