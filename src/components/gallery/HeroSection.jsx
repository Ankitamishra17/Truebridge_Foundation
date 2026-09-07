import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Container from "../common/Container.jsx";

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#FDFBF7] bg-cover bg-right"
      style={{ backgroundImage: `url(/gallery_banner.png)` }}
    >
      {/* left-side scrim keeps text on plain ground even if the photo runs edge to edge */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#eeeeee] via-[#FDFBF7]/30 sm:via-[#FDFBF7]/70 to-transparent" />

      <Container className="relative pt-14 sm:pt-20 pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-2 text-sm mb-4">
            <a
              href="/"
              className="text-[#64748B] hover:text-[#0F8B8D] transition-colors"
            >
              Home
            </a>

            <span className="text-[#94A3B8]">/</span>

            <span className="font-medium text-[#0F8B8D]">Gallery</span>
          </div>

          <h1 className="mt-3 font-display text-[36px] sm:text-[46px] leading-[1.1] font-semibold text-[#063B5C]">
            Moments That Define Our Journey{" "}
          </h1>

          <p className="mt-6 text-[17px] leading-relaxed text-[#64748B]">
            A look back at our health camps, awareness drives and community
            events — captured through the people who make them possible.
         
          </p>

          <p
            className="mt-7 flex items-center gap-2 text-2xl sm:text-3xl text-[#063B5C]"
            style={{ fontFamily: "Caveat, cursive" }}
          >
            Together for a Better Tomorrow
            <Heart size={20} className="text-[#FF6B4A] fill-[#FF6B4A]" />
          </p>
        </motion.div>
      </Container>

      {/* floating badge, echoing the small "Small Actions, Big Change" card in the reference */}
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
