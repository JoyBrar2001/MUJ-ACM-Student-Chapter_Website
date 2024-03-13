/** 
 * FileName - Loader.jsx
 * FileType - .jsx (React Js file)
 * Lines - 24
 * Created On - 21/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - Loader for the website
*/

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