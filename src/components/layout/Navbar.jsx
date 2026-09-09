
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  HeartHandshake,
  Home,
  Info,
  Briefcase,
  Calendar,
  Image,
  Mail,
  Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DonateModal from "../common/DonateModal.jsx";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/programs", label: "Our Work", icon: Briefcase },
  { to: "/events", label: "Events", icon: Calendar },
  { to: "/gallery", label: "Gallery", icon: Image },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [donateOpen, setDonateOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const openDonate = () => {
    setOpen(false);
    setDonateOpen(true);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(62,64,149,0.08)]"
          : "bg-white border-b border-[#EDF1F5]"
      }`}
    >
      <div
        className={`max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between gap-6 transition-[height] duration-300 ${
          scrolled ? "h-[64px]" : "h-[78px]"
        }`}
      >
        <NavLink
          to="/"
          className="group flex items-center gap-2.5 flex-shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a85a]/40"
          onClick={() => setOpen(false)}
        >
          <motion.img
            src="/logo.jpeg"
            alt="Truebridge Empowerment Echo Foundation"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`object-contain flex-shrink-0 transition-all duration-300 ${
              scrolled ? "w-14 h-14 lg:scale-125" : "w-16 h-16 lg:scale-[1.35]"
            } group-hover:scale-[1.4] group-hover:rotate-2`}
          />
        </NavLink>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 text-[15px] font-medium font-body transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#00a85a]/40 rounded-md ${
                  isActive
                    ? "text-[#3e4095]"
                    : "text-[#3e4095]/75 hover:text-[#3e4095]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{l.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute left-4 right-4 -bottom-0.5 h-[2px] bg-[#ff6634] rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={openDonate}
          className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-[#ff6634] text-white text-[15px] font-semibold transition-all duration-200 hover:brightness-105 hover:shadow-[0_10px_24px_-6px_rgba(255,102,52,0.5)] hover:-translate-y-0.5 outline-none focus-visible:ring-2 focus-visible:ring-[#ff6634]/40 flex-shrink-0"
        >
          <Heart size={15} className="fill-white" />
          Donate Now
        </button>

        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center text-[#3e4095] rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#00a85a]/40"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
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
          className="h-full bg-gradient-to-r from-[#00a85a] to-[#ff6634]"
          style={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Mobile menu — right-side drawer.
          z-index bumped well above any floating widgets (WhatsApp/Call
          buttons etc.) that sit at high z-index elsewhere on the page,
          so the drawer always renders on top of them, not underneath. */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 bg-[#3e4095]/40 backdrop-blur-[2px] z-[90]"
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="lg:hidden fixed inset-y-0 right-0 z-[100] w-[85vw] max-w-xs bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-5 h-[64px] border-b border-[#EDF1F5] flex-shrink-0">
            
                <span className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00a85a] to-[#3e4095] flex items-center justify-center overflow-hidden">
                    <img
                      src="/logo.jpeg"
                      alt="Truebridge"
                      className="w-full h-full object-contain"
                    />
                  </span>

                  <span className="font-display font-semibold text-[16px] text-[#3e4095]">
                    Truebridge
                  </span>
                </span>
                
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="w-9 h-9 flex items-center justify-center text-[#3e4095] rounded-full hover:bg-[#FAFAF8] outline-none focus-visible:ring-2 focus-visible:ring-[#00a85a]/40"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.05 + i * 0.04 }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-3 rounded-xl text-[16px] font-medium font-body transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#00a85a]/40 ${
                          isActive
                            ? "bg-[#EAF8F7] text-[#3e4095]"
                            : "text-[#3e4095]/80 hover:bg-[#FAFAF8]"
                        }`
                      }
                    >
                      <l.icon
                        size={18}
                        className="text-[#00a85a] flex-shrink-0"
                      />
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: 0.05 + links.length * 0.04,
                }}
                className="px-5 py-4 border-t border-[#EDF1F5] flex-shrink-0"
              >
                <button
                  onClick={openDonate}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#ff6634] text-white text-[15px] font-semibold hover:brightness-105 transition-all outline-none focus-visible:ring-2 focus-visible:ring-[#ff6634]/40"
                >
                  <Heart size={15} className="fill-white" />
                  Donate Now
                </button>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </header>
  );
}

