import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, HeartHandshake, Home, Info, Briefcase, Calendar, Image, Mail, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import DonateModal from '../common/DonateModal.jsx'

const links = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/about', label: 'About', icon: Info },
  { to: '/programs', label: 'Our Work', icon: Briefcase },
  { to: '/events', label: 'Events', icon: Calendar },
  { to: '/gallery', label: 'Gallery', icon: Image },
  { to: '/contact', label: 'Contact', icon: Mail },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [donateOpen, setDonateOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const openDonate = () => {
    setOpen(false)
    setDonateOpen(true)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(6,59,92,0.08)]'
          : 'bg-white border-b border-[#EDF1F5]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 h-[78px] flex items-center justify-between gap-6">
        <NavLink
          to="/"
          className="group flex items-center gap-2.5 flex-shrink-0"
          onClick={() => setOpen(false)}
        >
          <motion.span
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#0F8B8D] to-[#063B5C] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
          >
            <span className="absolute inset-0 rounded-full bg-[#0F8B8D]/30 scale-100 group-hover:scale-150 group-hover:opacity-0 opacity-60 transition-all duration-500" />
            <HeartHandshake size={19} className="relative text-white" />
          </motion.span>
          <span className="leading-tight">
            <span className="block font-display font-semibold text-[18px] text-[#063B5C]">
              Truebridge
            </span>
            <span className="block text-[11px] tracking-wide text-[#64748B]">
              Empowerment Echo Foundation
            </span>
          </span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-full text-[15px] font-medium font-body transition-colors duration-200 ${
                  isActive
                    ? 'text-[#063B5C]'
                    : 'text-[#17324D]/75 hover:text-[#063B5C] hover:bg-[#EAF8F7]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{l.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-[#EAF8F7] rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={openDonate}
          className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-[#FF6B4A] text-white text-[15px] font-semibold hover:bg-[#F0572F] transition-colors flex-shrink-0"
        >
          <Heart size={15} className="fill-white" />
          Donate Now
        </button>

        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center text-[#063B5C]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? 'close' : 'open'}
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.18 }}
              className="absolute"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* scroll progress hairline */}
      <div className="h-[2px] w-full bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-[#0F8B8D] to-[#FF6B4A]"
          style={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 top-[78px] bg-[#032D46]/30 backdrop-blur-[2px] z-40"
            />
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden relative z-50 overflow-hidden border-t border-[#EDF1F5] bg-white"
            >
              <div className="max-w-[1280px] mx-auto px-5 py-4 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.04 }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-3 rounded-xl text-[16px] font-medium font-body transition-colors ${
                          isActive
                            ? 'bg-[#EAF8F7] text-[#063B5C]'
                            : 'text-[#17324D]/80 hover:bg-[#FAFAF8]'
                        }`
                      }
                    >
                      <l.icon size={18} className="text-[#0F8B8D] flex-shrink-0" />
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: links.length * 0.04 }}
                  className="pt-3"
                >
                  <button
                    onClick={openDonate}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#FF6B4A] text-white text-[15px] font-semibold hover:bg-[#F0572F] transition-colors"
                  >
                    <Heart size={15} className="fill-white" />
                    Donate Now
                  </button>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </header>
  )
}