/** 
 * FileName - Navbar.jsx
 * FileType - .jsx (React Js file)
 * Lines 86
 * Created On - 15/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - The Navbar of all Pages
*/

import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
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
      <ul className='hidden lg:flex gap-6 text-md pr-4 z-10'>
        <li className='navbar-li'><Link to="/">Home</Link></li>
        <li className='navbar-li'><a href="#About">About Us</a></li>
        <li className='navbar-li'><Link to="/team">Team</Link></li>
        <li className='navbar-li'><Link to="/events">Events</Link></li>
        <li className='navbar-li'><Link to="/gallery">Gallery</Link></li>
        <li className='navbar-li'><Link to="/blogs">Blogs</Link></li>
        <li className='navbar-li'><Link to="/projects">Projects</Link></li>
        <li className='navbar-li'><a href="#Footer">Contact Us</a></li>
      </ul>

      <BiMenuAltRight className='lg:hidden cursor-pointer z-10' onClick={handleNav} color='white' size={35} />
      <ul className={`absolute top-0 left-0 pt-10 z-50 w-full bg-gradient-to-b from-black/80 via-black/70 via-70% to-transparent flex flex-col justify-center items-center gap-4 py-6 text-xl transition-all duration-300 md:hidden ${navbar ? 'translate-x-0' : 'translate-x-[-100%]'} `}>
        <AiOutlineClose className='absolute top-5 right-5 cursor-pointer' color='white' size={35} onClick={handleNav} />
        <li onClick={handleNav} className='navbar-li border-b-[1px] border-b-gray-500'>
          <Link to="/">Home</Link>
        </li>
        <li onClick={handleNav} className='navbar-li border-b-[1px] border-b-gray-500'>
          <a href="#About">About Us</a>
        </li>
        <li onClick={handleNav} className='navbar-li border-b-[1px] border-b-gray-500'>
          <Link to="/team">Team</Link>
        </li>
        <li onClick={handleNav} className='navbar-li border-b-[1px] border-b-gray-500'>
          <Link to="/events">Events</Link>
        </li>
        <li onClick={handleNav} className='navbar-li border-b-[1px] border-b-gray-500'>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li onClick={handleNav} className='navbar-li border-b-[1px] border-b-gray-500'>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li onClick={handleNav} className='navbar-li border-b-[1px] border-b-gray-500'>
          <Link to="/projects">Projects</Link>
        </li>
        <li onClick={handleNav} className='navbar-li border-b-[1px] border-b-gray-500'>
          <a href="#Footer">Contact Us</a>
        </li>
        <div className='bg-transparent h-16' />
      </ul>

      {/* Gradients */}
      {/* <div className='absolute white__gradient w-[500px] h-[500px] top-0 left-0 translate-x-[-50%] translate-y-[-60%]' /> */}
      {/* <div className='absolute white__gradient w-[900px] h-[500px] top-0 right-0 translate-x-[50%] translate-y-[-50%]' /> */}
    </motion.nav>
  );
}

export default Navbar;