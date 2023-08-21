import React from 'react'
import ACMLogo from '../assets/Logos/ACM-Logo-White.png';
import { IoMdMail } from 'react-icons/io'
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='about__gradient w-full py-10 px-6 rounded-t-3xl gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <div className='flex justify-center items-center gap-6'>
        <img src={ACMLogo} className='h-[85px] w-[85px]' alt="ACM Logo" />
        <div className='flex flex-col text-white'>
          <h2 className='text-2xl font-semibold'>Association for<br />Compting Machinery</h2>
          <h3>MUJ Student Chapter</h3>
        </div>
      </div>

      <div className='text-white flex flex-col gap-2 justify-center items-center'>
        <h1 className='text-2xl font-semibold'>Contact Us</h1>
        <div className='flex flex-col gap-1'>
          <div className='flex justify-start items-center gap-2'>
            <BsInstagram /> Instagram
          </div>
          <div className='flex justify-start items-center gap-2'>
            <BsFacebook /> Facebook
          </div>
          <div className='flex justify-start items-center gap-2'>
            <IoMdMail /> Mail Us
          </div>
          <div className='flex justify-start items-center gap-2'>
            <BsTwitter /> Twitter
          </div>
          <div className='flex justify-start items-center gap-2'>
            <BsLinkedin /> LinkedIn
          </div>
        </div>
      </div>
      <div>Developed By</div>
    </div>
  )
}

export default Footer
