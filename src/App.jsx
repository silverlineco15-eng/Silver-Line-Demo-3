import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Evan from './pages/Evan'
import William from './pages/William'
import ProjectDetail from './pages/ProjectDetail'
import PageTransition from './components/PageTransition'
import HashScrollHandler from './components/HashScrollHandler'

export default function App() {
  const location = useLocation()

  return (
    <>
      <HashScrollHandler />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/evan"
            element={
              <PageTransition>
                <Evan />
              </PageTransition>
            }
          />
          <Route
            path="/william"
            element={
              <PageTransition>
                <William />
              </PageTransition>
            }
          />
          {/* Hidden work route — enable in nav when projects are ready */}
          <Route
            path="/work/:id"
            element={
              <PageTransition>
                <ProjectDetail />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
