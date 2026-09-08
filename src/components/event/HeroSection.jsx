import { motion } from "framer-motion";

export default function EventsHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F3] min-h-[calc(100vh-100px)]">
      {/* Background Image — mobile */}
      <div
        className="sm:hidden absolute inset-0 bg-no-repeat bg-right"
        style={{
          backgroundImage: "url('/event_banner_mobile.png')",
          backgroundSize: "cover",
        }}
        aria-hidden="true"
      />

      {/* Background Image — desktop */}
      <div
        className="hidden sm:block absolute inset-0 bg-no-repeat bg-right"
        style={{
          backgroundImage: "url('/event_banner.png')",
          backgroundSize: "auto 100%",
        }}
        aria-hidden="true"
      />

      {/* Left white/cream overlay for text readability — mobile */}
      <div
        className="sm:hidden absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,249,243,1) 0%, rgba(255,249,243,0.98) 38%, rgba(255,249,243,0.8) 58%, rgba(255,249,243,0.25) 80%, rgba(255,249,243,0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Left white/cream overlay for text readability — desktop */}
      {/* <div
        className="hidden sm:block absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,249,243,1) 0%, rgba(255,249,243,0.98) 30%, rgba(255,249,243,0.78) 48%, rgba(255,249,243,0.15) 72%, rgba(255,249,243,0) 100%)",
        }}
        aria-hidden="true"
      /> */}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 min-h-[calc(100vh-100px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl py-14 sm:py-16"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-5 -mt-8">
              <a
                href="/"
                className="text-[#64748B] hover:text-[#0F8B8D] transition-colors"
              >
                Home
              </a>

              <span className="text-[#94A3B8]">/</span>

              <span className="font-medium text-[#0F8B8D]">Our Events</span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.08] font-semibold text-[#063B5C]">
              Moments That Create
              <br />
              Lasting <span className="text-[#0F8B8D] ">Change</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-[#64748B] max-w-[190px] sm:max-w-md ">
              From health camps to awareness drives, our events bring
              communities together for a healthier, stronger and more empowered
              tomorrow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
