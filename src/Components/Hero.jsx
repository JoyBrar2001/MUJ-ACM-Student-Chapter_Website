import React from 'react'
import ACM_3D from '../assets/Logos/ACM-3D-Model.png'

const Hero = () => {
  return (
    <div className='w-full h-full max-w-[1440px] mx-auto flex pt-10 relative'>
      <div className='flex gap-10 w-3/5'>
        <div className='flex flex-col justify-center items-center'>
          <div className='bg-[#10BED5] w-[50px] h-[50px] rounded-full blue__glow' />
          <div className='bg-gradient-to-b from-[#10BED5] w-[9px] h-[500px] mt-[-2px]' />
        </div>
        <div className='pt-6'>
          <h1 className=' text-[#10BED5] text-7xl font-bold leading-tight uppercase blue-text__glow'>We are MUJ ACM<br />Student Chapter</h1>
          <p className='text-gray-400 text-base mt-4 w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque dolorum vel dolor consequuntur harum mollitia perspiciatis dolores quaerat voluptatibus nisi cupiditate fuga voluptatem libero nam, recusandae laboriosam repellendus sequi facilis tempora. Quos quia, dicta cum tempora vero maxime ratione ipsam. Voluptatum aperiam dolores fugiat pariatur quibusdam dolor vitae impedit.</p>
        </div>

      </div>

      <div className='flex justify-center items-start w-2/5'>
        <img src={ACM_3D} className='w-[500px] img-blue__glow' alt="ACM Logo" />
      </div>

      <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[-50%] translate-y-[40%]' />
    </div>
  )
}

export default Hero
