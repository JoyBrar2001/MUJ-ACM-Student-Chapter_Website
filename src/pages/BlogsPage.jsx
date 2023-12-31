/** 
 * FileName - BlogsPage.jsx
 * FileType - .jsx (React Js file)
 * Lines - -/-
 * Created On - 21/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - Blogs Page of the website
 * /////// NOT FINISHED AS OF NOW //////////
*/

import React, { useEffect } from 'react'

const BlogsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div className='h-screen flex justify-center items-center'>
      <p className='text-white'>Blogs</p>
    </div>
  )
}

export default BlogsPage
