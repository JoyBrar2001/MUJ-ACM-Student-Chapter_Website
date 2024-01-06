import React from 'react';
import ACMLogo from '../assets/Logos/ACM-Logo-White.png';

const Loader = () => {
  return (
    <div className='bg-black w-full h-screen flex flex-col gap-4 justify-center items-center relative loaderAnimation'>
      <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[-50%] translate-y-[40%]' />
      <img src={ACMLogo} height={150} width={150} />
      <p className='text-white font-semibold text-4xl'>Loading...</p>
    </div>
  );
}

export default Loader;
