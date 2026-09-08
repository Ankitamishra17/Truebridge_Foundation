import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white min-h-[calc(100vh-100px)]">
      {/* Background Image — mobile */}
      <div
        className="sm:hidden absolute inset-0 bg-no-repeat bg-right"
        style={{
          backgroundImage: "url('/work_banner_mobile.png')",
          backgroundSize: "cover",
        }}
        aria-hidden="true"
      />

      {/* Background Image — desktop */}
      <div
        className="hidden sm:block absolute inset-0 bg-no-repeat bg-right"
        style={{
          backgroundImage: "url('/work_banner.png')",
          backgroundSize: "auto 100%",
        }}
        aria-hidden="true"
      />

      {/* White Gradient - Left to Right, mobile */}
      <div
        className="sm:hidden absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 35%, rgba(255,255,255,0.75) 55%, rgba(255,255,255,0.3) 78%, rgba(255,255,255,0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* White Gradient - Left to Right, desktop */}
      {/* <div
        className="hidden sm:block absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 28%, rgba(255,255,255,0.82) 45%, rgba(255,255,255,0.35) 68%, rgba(255,255,255,0) 100%)",
        }}
        aria-hidden="true"
      /> */}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 min-h-[calc(100vh-100px)] flex items-center">
        <div className="w-full">
          {/* Hero Content */}
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

              <span className="font-medium text-[#0F8B8D]">Our Work</span>
            </div>

            {/* Main Heading */}
            <h1
              className="
                font-display
                
                text-[34px]
                 sm:text-[40px]
                leading-[1.08]
                font-semibold
                text-[#032D46]
                max-w-2xl
              "
            >
              Four kinds of work,
              <br />
              one purpose — a healthier{" "}
              <span className="text-[#0F8B8D]">neighbourhood.</span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                text-[16px]
                sm:text-[17px]
                leading-relaxed
                text-[#032D46]/75
                max-w-[190px]
                sm:max-w-md
              "
            >
              We run health camps, blood donation drives, community recognition
              events and civic programs across New Delhi's Shahdara area —
              mostly free of cost, mostly on the ground, mostly led by people
              from the neighbourhood.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/events"
                className="
                  px-7
                  py-3.5
                  rounded-md
                  bg-[#FF6B4A]
                  text-white
                  text-[15px]
                  font-semibold
                  hover:bg-[#E85A3A]
                  transition-colors
                  inline-flex
                  items-center
                  gap-1.5
                "
              >
                See our events
                <ArrowUpRight size={16} />
              </a>

              <a
                href="/about"
                className="
                  text-[15px]
                  font-semibold
                  text-[#032D46]
                  hover:text-[#0F8B8D]
                  transition-colors
                  underline
                  underline-offset-4
                  decoration-[#032D46]/30
                "
              >
                Read our story
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="
    mt-2
    sm:mt-4
    flex
    flex-nowrap
    gap-x-3
    sm:gap-x-10
    border-t
    border-[#032D46]/10
    pt-5
    sm:pt-6
    pb-6
    sm:pb-8
  "
          >
            {[
              {
                value: "4",
                label: "areas of work",
              },
              {
                value: "Shahdara",
                label: "and nearby neighbourhoods",
              },
              {
                value: "Free",
                label: "for everyone who attends",
              },
            ].map((stat) => (
              <div key={stat.label} className="flex-1 min-w-0">
                <p
                  className="
          font-display
          text-[18px]
          sm:text-[23px]
          font-semibold
          text-[#032D46]
          whitespace-nowrap
        "
                >
                  {stat.value}
                </p>

                <p className="text-[11px] sm:text-[14px] text-[#032D46]/65 leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
