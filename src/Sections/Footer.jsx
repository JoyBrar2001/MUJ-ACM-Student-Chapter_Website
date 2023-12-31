/** 
 * FileName - Footer.jsx
 * FileType - .jsx (React Js file)
 * Lines - 58
 * Created On - 15/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - The Footer of all Pages
*/

import React from 'react';
import ACMLogo from '../assets/Logos/ACM-Logo-White.png';
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';
import JoyBrar from '../assets/DevelopedBy/JoyBrarWebmaster.png';

const Footer = () => {
  return (
    <div className='about__gradient w-full mt-12 py-10 px-6 rounded-t-3xl gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' id='Footer'>
      <div className='flex flex-row justify-center items-center gap-4 md:gap-6'>
        <img src={ACMLogo} className='h-[85px] w-[85px]' alt="ACM Logo" />
        <div className='flex flex-col text-white'>
          <h2 className='text-2xl font-semibold'>Association for<br />Compting Machinery</h2>
          <h3>MUJ Student Chapter</h3>
        </div>
      </div>

      <div className='text-white flex flex-col gap-2 justify-center items-center'>
        <h1 className='text-2xl font-semibold'>Contact Us</h1>
        <div className='flex flex-col gap-1'>
          <a href='https://www.instagram.com/muj_acm/' target='_blank' className='flex justify-start items-center gap-2'>
            <BsInstagram /> Instagram
          </a>
          <a href='https://www.linkedin.com/company/muj-acm-student-chapter/?originalSubdomain=in' target='_blank' className='flex justify-start items-center gap-2'>
            <BsLinkedin /> LinkedIn
          </a>
          <a href='https://www.facebook.com/ACM.MUJ/' target='_blank' className='flex justify-start items-center gap-2'>
            <BsFacebook /> Facebook
          </a>
          <a href='https://twitter.com/muj_acm?lang=en' target='_blank' className='flex justify-start items-center gap-2'>
            <BsTwitter /> Twitter
          </a>
        </div>
      </div>
      <div className='text-white flex flex-col gap-2 justify-center items-center'>
        <h1 className='text-2xl font-semibold'>Developed By</h1>
        <div className='flex flex-row gap-2'>
          <img src={JoyBrar} alt="Joy Brar" className='w-16 h-16 rounded-full border-[3px] border-white' />
          <div className='flex flex-col justify-center'>
            <h2 className='text-xl font-semibold'>Joy Brar</h2>
            <h3 className='text-base font-light'>Webmaster</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;