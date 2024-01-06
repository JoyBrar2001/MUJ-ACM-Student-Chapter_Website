/** 
 * FileName - App.jsx
 * FileType - .jsx (React Js file)
 * Lines - 84
 * Created On - 15/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - Router for all the different pages of the website
*/

import React, { lazy, Suspense } from 'react';
import { useScroll, motion, useSpring } from 'framer-motion';
import { Navbar, Footer } from './Sections';
import { Route, Router, Routes } from 'react-router-dom';
const HomePage = React.lazy(() => import('./pages/HomePage'));
const TeamPage = React.lazy(() => import('./pages/TeamPage'));
const EventsPage = React.lazy(() => import('./pages/EventsPage'));
const BlogsPage = React.lazy(() => import('./pages/BlogsPage'));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
const GalleryPage = React.lazy(() => import('./pages/GalleryPage'));
const ContactUsPage = React.lazy(() => import('./pages/ContactUsPage'));

const App = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 50 })

  return (
    <div className='bg-black w-full overflow-x-hidden'>
      <motion.div className='fixed h-2 w-full bg-[#20bbd2] z-[1000] origin-left overflow-y-hidden' style={{ scaleX, boxShadow: `0px 0px 10px rgba(22,178,207,0.5)` }} />
      <Navbar />

      {/* Main Section where all the content is rendered */}
      <Routes>
        {/* Home Page */}
        <Route
          path='/'
          element={
            <React.Suspense>
              <HomePage />
            </React.Suspense>
          }
        />
        {/* Team Page */}
        <Route
          path='/team'
          element={
            <React.Suspense>
              <TeamPage />
            </React.Suspense>
          }
        />
        {/* Events Page */}
        <Route
          path='/events'
          element={
            <React.Suspense>
              <EventsPage />
            </React.Suspense>
          }
        />
        {/* Gallery Page */}
        <Route
          path='/gallery'
          element={
            <React.Suspense>
              <GalleryPage />
            </React.Suspense>
          }
        />
        {/* Blogs Page */}
        <Route
          path='/blogs'
          element={
            <React.Suspense>
              <BlogsPage />
            </React.Suspense>
          }
        />
        {/* Projects Page */}
        <Route
          path='/projects'
          element={
            <React.Suspense>
              <ProjectsPage />
            </React.Suspense>
          }
        />
        {/* Contact Us Page */}
        <Route
          path='/contact'
          element={
            <React.Suspense>
              <ContactUsPage />
            </React.Suspense>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;