import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import WhatsAppButton from './components/common/WhatsAppButton.jsx'
import CallButton from './components/common/CallButton.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Programs from './pages/Programs.jsx'
import Events from './pages/Events.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {

  // Prevent browser from restoring previous scroll position
  // and always start the application from the top.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })

    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto'
      }
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col font-body">

      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <main className="flex-1">
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/programs"
            element={<Programs />}
          />

          <Route
            path="/events"
            element={<Events />}
          />

          <Route
            path="/gallery"
            element={<Gallery />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <WhatsAppButton />
      <CallButton />

    </div>
  )
}