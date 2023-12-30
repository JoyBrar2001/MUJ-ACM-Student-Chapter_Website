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
