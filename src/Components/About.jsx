import React from 'react'

const About = () => {
  return (
    <div className='w-full p-6 mt-10'>
        <div className='about__gradient w-full h-full py-10 px-14 max-w-[1440px] mx-auto rounded-[40px] grid grid-cols-3 gap-x-12 gap-y-20'>
            {/* Row 1 */}
            <div className='col-span-1 flex flex-col gap-4 pt-4'>
                <div className='w-[70px] h-[8px] about__element__gradient' />
                <h1 className='text-5xl font-bold text-white'>About ACM</h1>
            </div>
            <p className='text-base text-gray-400 col-span-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

            {/* Row 2 */}
            <h1 className='text-6xl uppercase col-span-3 font-bold text-white'>Some. Ache. Words. Here.</h1>

            {/* Row 3 */}
            <div className='flex flex-col gap-4'>
                <div className='w-[70px] h-[8px] about__element__gradient' />
                <h1 className='text-4xl font-bold text-white'>About MUJ</h1>
                <p className='text-base text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo placeat delectus ipsam quibusdam rerum nisi eligendi possimus iure autem!</p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='w-[70px] h-[8px] about__element__gradient' />
                <h1 className='text-4xl font-bold text-white'>Our Aim</h1>
                <p className='text-base text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo placeat delectus ipsam quibusdam rerum nisi eligendi possimus iure autem!</p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='w-[70px] h-[8px] about__element__gradient' />
                <h1 className='text-4xl font-bold text-white'>Our Mission</h1>
                <p className='text-base text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo placeat delectus ipsam quibusdam rerum nisi eligendi possimus iure autem!</p>
            </div>
        </div>
    </div>
  )
}

export default About
