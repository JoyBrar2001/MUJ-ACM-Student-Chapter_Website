import React from 'react'
import ACMLogo from '../assets/Logos/ACM-Logo-White.png';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center text-white p-4 relative'>
        {/* Left Side */}
        <div className='flex justify-center items-center gap-3'>
          <img src={ACMLogo} alt="ACM Logo" className='h-[55px] w-[55px]' />
          <div>
            <h1 className='font-bold text-[14px]'>Association for<br />Computing Machinery</h1>
            <p className='font-light text-xs'>MUJ Student Chapter</p>
          </div>
        </div>
        {/* Right Side */}
        <ul className='flex gap-6 text-md pr-4'>
            <li className='navbar-li'>Home</li>
            <li className='navbar-li'>About Us</li>
            <li className='navbar-li'>Team</li>
            <li className='navbar-li'>Events</li>
            <li className='navbar-li'>Blogs</li>
            <li className='navbar-li'>Projects</li>
            <li className='navbar-li'>Contact Us</li>
        </ul>

        {/* Gradients */}
        <div className='absolute white__gradient w-[500px] h-[500px] top-0 left-0 translate-x-[-50%] translate-y-[-60%]' />
        <div className='absolute white__gradient w-[900px] h-[500px] top-0 right-0 translate-x-[50%] translate-y-[-50%]' />
    </nav>
  )
}

export default Navbar
