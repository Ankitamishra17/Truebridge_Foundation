import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/work_banner.png')",
        }}
        aria-hidden="true"
      />

      {/* White Gradient - Left to Right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.90) 30%, rgba(255,255,255,0.55) 55%, rgba(255,255,255,0.08) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Soft White Glow */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-6 sm:pt-14 pb-14 sm:pb-16">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Small Heading */}
<div className="flex items-center gap-2 text-sm mb-4">
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
                mt-3
                font-display
                text-[38px]
                sm:text-[52px]
                leading-[1.08]
                font-semibold
                text-[#032D46]
                max-w-2xl
              "
            >
                Four kinds of work, one purpose — a healthier neighbourhood.
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                text-[17px]
                leading-relaxed
                text-[#032D46]/75
                max-w-lg
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
              mt-14
              sm:mt-16
              flex
              flex-wrap
              gap-x-10
              gap-y-6
              border-t
              border-[#032D46]/10
              pt-8
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
              <div key={stat.label}>
                <p
                  className="
                    font-display
                    text-[24px]
                    font-semibold
                    text-[#032D46]
                  "
                >
                  {stat.value}
                </p>

                <p className="text-[14px] text-[#032D46]/65">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
