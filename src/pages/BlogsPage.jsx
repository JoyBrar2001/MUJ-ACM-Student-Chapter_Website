import React, { useEffect } from 'react'

const BlogsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div>
      Blogs
    </div>
  )
}

export default BlogsPage
