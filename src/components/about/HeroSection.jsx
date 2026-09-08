import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Container from "../common/Container.jsx";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#FDFBF7] min-h-[calc(100vh-100px)]">

      {/* Background image — mobile */}
      <div
        className="sm:hidden absolute inset-0 bg-cover bg-right"
        style={{ backgroundImage: `url(/about_banner_mobile.png)` }}
        aria-hidden="true"
      />

      {/* Background image — desktop */}
      <div
        className="hidden sm:block absolute inset-0 bg-cover bg-right"
        style={{ backgroundImage: `url(/about_banner.png)` }}
        aria-hidden="true"
      />

      {/* left-side scrim — mobile */}
      <div className="sm:hidden absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/90 to-[#FDFBF7]/30" />

      {/* left-side scrim — desktop */}
      {/* <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/70 to-transparent" /> */}

      <Container className="relative z-10 min-h-[calc(100vh-100px)] flex items-center py-14 sm:py-20">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-4 -mt-8">
            <a
              href="/"
              className="text-[#64748B] hover:text-[#0F8B8D] transition-colors"
            >
              Home
            </a>

            <span className="text-[#94A3B8]">/</span>

            <span className="font-medium text-[#0F8B8D]">
              About Us
            </span>
          </div>

          <h1 className="mt-3 font-display text-[34px] sm:text-[40px] leading-[1.1] font-semibold text-[#063B5C]">
           Building Healthier Communities, Together.
          </h1>

          <p className="mt-6 text-[17px] max-w-[190px] sm:max-w-md leading-relaxed text-[#64748B]">
            Truebridge Empowerment Echo Foundation works in and around Shahdara,
            Delhi NCR, organising free health camps, blood donation drives and
            civic-awareness events.
          </p>

          <p
            className="mt-7 flex items-center gap-2 text-2xl sm:text-3xl text-[#063B5C]"
            style={{ fontFamily: "Caveat, cursive" }}
          >
            Together for a Better Tomorrow
            <Heart
              size={20}
              className="text-[#FF6B4A] fill-[#FF6B4A]"
            />
          </p>
        </motion.div>
      </Container>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="hidden sm:flex absolute right-8 lg:right-16 bottom-10 items-center gap-2.5 bg-white rounded-xl shadow-[0_12px_30px_rgba(6,59,92,0.15)] px-4 py-3"
      >
        <span className="w-8 h-8 rounded-full bg-[#EAF8F7] flex items-center justify-center flex-shrink-0">
          <Heart size={15} className="text-[#0F8B8D]" />
        </span>

        <span className="font-display font-semibold text-[13px] leading-tight text-[#063B5C]">
          Small Actions
          <br />
          Big Change
        </span>
      </motion.div>

    </section>
  );
}