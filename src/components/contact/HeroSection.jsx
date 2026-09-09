
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white min-h-[calc(100vh-100px)]">
      {/* Background Image — mobile */}
      <div
        className="sm:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/contact_banner_mobile.png')",
        }}
        aria-hidden="true"
      />

      {/* Background Image — desktop */}
      <div
        className="hidden sm:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/contact_banner.png')",
        }}
        aria-hidden="true"
      />

      {/* White Gradient Overlay — mobile */}
      <div
        className="sm:hidden absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 35%, rgba(255,255,255,0.75) 55%, rgba(255,255,255,0.3) 78%, rgba(255,255,255,0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* White Gradient Overlay — desktop (this was missing before, so the
          text and icon circles sat directly on the photo with nothing behind
          them for contrast) */}
      <div
        className="hidden sm:block absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0.35) 65%, rgba(255,255,255,0) 85%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 min-h-[calc(100vh-100px)] flex items-center">
        <div className="w-full">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl py-12 sm:py-16"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-5 -mt-8">
              <Link
                to="/"
                className="text-[#64748B] hover:text-[#3e4095] transition-colors"
              >
                Home
              </Link>

              <span className="text-[#94A3B8]">/</span>

              <span className="font-medium text-[#00a85a]">Contact Us</span>
            </div>

            {/* Heading */}
            <h1
              className="
                font-display
               text-[34px] sm:text-[40px]
                leading-[1.1]
                font-semibold
                max-w-[200px]
                sm:max-w-md
                text-[#3e4095]
              "
            >
              We'd love to hear from you.
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                text-[13px]
                sm:text-[16px]
                lg:text-[17px]
                leading-[1.6]
                text-[#3e4095]/75
                max-w-[190px]
                sm:max-w-md
              "
            >
              Whether you want to volunteer, partner on a camp, or just ask a
              question — reach out and someone from our team will get back to
              you.
            </p>
          </motion.div>

     
        </div>
      </div>
    </section>
  );
}

