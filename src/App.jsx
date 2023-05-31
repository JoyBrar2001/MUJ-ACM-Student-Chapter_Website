import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

const App = () => {
  return (
    <div className='bg-black w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
