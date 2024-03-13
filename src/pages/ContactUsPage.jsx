/** 
 * FileName - ContactUsPage.jsx
 * FileType - .jsx (React Js file)
 * Lines - 87
 * Created On - 21/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - Contact page of the website
*/

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';
import { MdOutlinePhoneCallback, MdOutlineMailOutline, MdLocationOn } from "react-icons/md";

const ContactUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div className='w-full h-full max-w-[1000px] mx-auto flex flex-col p-4 pt-10 relative mt-20'>
      <motion.h1
        variants={fadeIn('down', 40, 0.5)}
        initial="hidden"
        whileInView="show"
        className='team__title__gradient titleStyles mb-16'
      >
        Contact Us
      </motion.h1>
      <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[-50%] opacity-50' />

      <motion.div
        variants={fadeIn('down', 40, 0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        className='h-full text-white flex flex-col md:flex-row bg-gradient-to-b from-white/10 to-white/5 rounded-2xl'
      >

        <div className='md:w-[40%] lg:mx-6 p-8 bg-gradient-to-tl from-[#131341] to-[#0067A5] rounded-2xl lg:-translate-y-8 flex flex-col gap-4'>
          <div className='flex flex-row gap-2 justify-start items-center'>
            <div>
              <MdLocationOn size={30} color='white' />
            </div>
            <div>
              <h4 className='text-xl font-semibold'>Manipal University Jaipur</h4>
              <p className='text-sm font-light'>MUJ ACM Student Student Chapter Manipal University Jaipur, Dehmi Kalan, Near GVK Toll Plaza, Jaipur-Ajmer Expressway, Jaipur, Rajasthan 303007</p>
            </div>
          </div>
          <div className='flex flex-row gap-2 justify-start items-center'>
            <div>
              <MdOutlinePhoneCallback size={30} color='white' />
            </div>
            <div>
              <p className='text-lg font-medium'>+91 9987778800</p>
            </div>
          </div>
          <div className='flex flex-row gap-2 justify-start items-center'>
            <div>
              <MdOutlineMailOutline size={30} color='white' />
            </div>
            <div>
              <p className='text-lg font-medium'>acmmuj@gmail.com</p>
            </div>
          </div>
        </div>

        <form className='md:w-[60%] p-6 flex flex-col'>
          <div className='w-full flex flex-row'>
            <input type="text" name='First Name' placeholder='First Name' className='shadow appearance-none bg-transparent border-2 border-white/40 px-2 py-1 m-1 rounded-lg w-1/2' />
            <input type="text" name='Last Name' placeholder='Last Name' className='shadow appearance-none bg-transparent border-2 border-white/40 px-2 py-1 m-1 rounded-lg w-1/2' />
          </div>
          <input type="email" name='Email Adress' placeholder='Your Email Adress Here' className='shadow appearance-none bg-transparent border-2 border-white/40 px-2 py-1 m-1 rounded-lg w-full' />
          <textarea name="message" rows="7" placeholder='Your Message Here' required className='shadow appearance-none bg-transparent border-2 border-white/40 px-2 py-1 m-1 rounded-lg w-full'></textarea>
          <div className='flex justify-center items-center mt-2 group'>
            <button type='submit' className='bg-gradient-to-tl from-[#131341] to-[#0067A5] px-4 py-2 rounded-lg text-lg group-hover:font-semibold transition-all duration-200'>Send Message</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default ContactUsPage;