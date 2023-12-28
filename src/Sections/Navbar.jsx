import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'
import ACMLogo from '../assets/Logos/ACM-Logo-White.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)
  const handleNav = () => {
    setNavbar(!navbar)
  }

  return (
    <motion.nav
      variants={fadeIn('down', 0, 1, 1.3)}
      initial="hidden"
      whileInView="show"
      className={`w-full flex justify-between items-center text-white p-4 fixed z-40 bg-gradient-to-b from-black via-black-70 via-50% to-transparent`}
    >
      {/* Left Side */}
      <div className='flex justify-center items-center gap-3'>
        <img src={ACMLogo} alt="ACM Logo" className='h-[55px] w-[55px]' />
        <div>
          <h1 className='font-bold text-[14px]'>Association for<br />Computing Machinery</h1>
          <p className='font-light text-xs'>MUJ Student Chapter</p>
        </div>
      </div>
      {/* Right Side */}
      <ul className='hidden md:flex gap-6 text-md pr-4 z-10'>
        <li className='navbar-li'><Link to="/MUJ-ACM-Student-Chapter_Website/">Home</Link></li>
        <li className='navbar-li'><a href="#About">About Us</a></li>
        <li className='navbar-li'><Link to="/MUJ-ACM-Student-Chapter_Website/team">Team</Link></li>
        <li className='navbar-li'><Link to="/MUJ-ACM-Student-Chapter_Website/events">Events</Link></li>
        <li className='navbar-li'><Link to="/MUJ-ACM-Student-Chapter_Website/blogs">Blogs</Link></li>
        <li className='navbar-li'><Link to="/MUJ-ACM-Student-Chapter_Website/projects">Projects</Link></li>
        <li className='navbar-li'><a href="#Footer">Contact Us</a></li>
      </ul>

      <BiMenuAltRight className='md:hidden cursor-pointer z-10' onClick={handleNav} color='white' size={35} />

      <ul className={`absolute top-0 left-0 pt-10 z-50 backdrop-blur-lg w-full flex flex-col justify-center items-center gap-4 py-6 text-xl transition-all duration-300 md:hidden ${navbar ? 'translate-x-0' : 'translate-x-[-100%]'} `}>

        <AiOutlineClose className='absolute top-5 right-5 cursor-pointer' color='white' size={35} onClick={handleNav} />
        <li className='navbar-li border-b-[1px] border-b-gray-500'>Home</li>
        <li className='navbar-li border-b-[1px] border-b-gray-500'>About Us</li>
        <li className='navbar-li border-b-[1px] border-b-gray-500'>Team</li>
        <li className='navbar-li border-b-[1px] border-b-gray-500'>Events</li>
        <li className='navbar-li border-b-[1px] border-b-gray-500'>Blogs</li>
        <li className='navbar-li border-b-[1px] border-b-gray-500'>Projects</li>
        <li className='navbar-li border-b-[1px] border-b-gray-500'>Contact Us</li>
      </ul>

      {/* Gradients */}
      {/* <div className='absolute white__gradient w-[500px] h-[500px] top-0 left-0 translate-x-[-50%] translate-y-[-60%]' /> */}
      {/* <div className='absolute white__gradient w-[900px] h-[500px] top-0 right-0 translate-x-[50%] translate-y-[-50%]' /> */}
    </motion.nav>
  )
}

export default Navbar
