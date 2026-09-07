import { motion } from 'framer-motion'




export default function EventsHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F3]">
      {/* Background photo — swap the URL below for your own image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/event_banner.png')" }}
        aria-hidden="true"
      />
      {/* Light cream overlay so navy text stays readable over any photo */}
      {/* <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,249,243,0.94) 0%, rgba(255,249,243,0.9) 55%, rgba(255,249,243,0.96) 100%)',
        }}
        aria-hidden="true"
      /> */}

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-4 sm:pt-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-sm mb-4">
            <a
              href="/"
              className="text-[#64748B] hover:text-[#0F8B8D] transition-colors"
            >
              Home
            </a>

            <span className="text-[#94A3B8]">/</span>

            <span className="font-medium text-[#0F8B8D]">Our Event</span>
          </div>
            <h1 className="mt-3 font-display text-[34px] sm:text-[44px] leading-[1.15] font-semibold text-[#063B5C]">
              Moments That Create
              <br />
              Lasting <span className="text-[#0F8B8D]">Change</span>
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-[#64748B] max-w-md">
              From health camps to awareness drives, our events bring communities together for a
              healthier, stronger and more empowered tomorrow.
            </p>
          </motion.div>

         
        </div>
      </div>
    </section>
  )
}