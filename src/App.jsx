import React, { lazy, Suspense } from 'react'
import { useScroll, motion, useSpring } from 'framer-motion'
import { Navbar, Hero, About, Team, Events, Projects, Blogs, Footer } from './Sections'
import { Route, Router, Routes } from 'react-router-dom'
// import HomePage from './pages/HomePage'
// import TeamPage from './pages/TeamPage'
// import EventsPage from './pages/EventsPage'
// import BlogsPage from './pages/BlogsPage'
// import ProjectsPage from './pages/ProjectsPage'
const HomePage = React.lazy(() => import('./pages/HomePage'));
const TeamPage = React.lazy(() => import('./pages/TeamPage'));
const EventsPage = React.lazy(() => import('./pages/EventsPage'));
const BlogsPage = React.lazy(() => import('./pages/BlogsPage'));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));

const App = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 50 })

  return (
    <div className='bg-black w-full overflow-x-hidden'>
      <motion.div className='fixed h-2 w-full bg-[#20bbd2] z-[1000] origin-left overflow-y-hidden' style={{ scaleX, boxShadow: `0px 0px 10px rgba(22,178,207,0.5)` }} />
      <Navbar />

      {/* Main Section where all the content is rendered */}
      <Routes>
        <Route
          path='/MUJ-ACM-Student-Chapter_Website/'
          element={
            <React.Suspense>
              <HomePage />
            </React.Suspense>
          }
        />
        <Route
          path='/MUJ-ACM-Student-Chapter_Website/team'
          element={
            <React.Suspense>
              <TeamPage />
            </React.Suspense>
          }
        />
        <Route
          path='/MUJ-ACM-Student-Chapter_Website/events'
          element={
            <React.Suspense>
              <EventsPage />
            </React.Suspense>
          }
        />
        <Route
          path='/MUJ-ACM-Student-Chapter_Website/blogs'
          element={
            <React.Suspense>
              <BlogsPage />
            </React.Suspense>
          }
        />
        <Route
          path='/MUJ-ACM-Student-Chapter_Website/projects'
          element={
            <React.Suspense>
              <ProjectsPage />
            </React.Suspense>
          }
        />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
