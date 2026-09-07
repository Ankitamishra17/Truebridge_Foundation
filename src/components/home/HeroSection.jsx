import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Heart } from "lucide-react";
import Container from "../common/Container.jsx";
import PrimaryButton from "../common/PrimaryButton.jsx";
// import ImageWithFallback from '../common/ImageWithFallback.jsx'

export default function HeroSection() {
  const [bgLoaded, setBgLoaded] = useState(true);

  return (
    <section className="bg-[#FFF9F3] overflow-hidden relative">
      {/* Background image — drop a real photo at this path and it fades in;
          until then it simply stays hidden, no broken-image state. */}
      {bgLoaded && (
        <div className="absolute inset-0 z-0">
          <img
            src="/home_banner.png"
            alt=""
            aria-hidden="true"
            onError={() => setBgLoaded(false)}
            className="w-full h-full object-cover "
          />

          {/* <div className="absolute inset-0 bg-[#FFF9F3]/50" /> */}
        </div>
      )}

      <Container className="py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[13px] font-semibold tracking-wide text-[#0F8B8D] font-body">
            HEALTH &bull; EDUCATION &bull; COMMUNITY
          </p>
          <h1 className="mt-4 font-display font-bold text-[36px] sm:text-[48px] lg:text-[54px] leading-[1.12] text-[#063B5C]">
            Bridging Today for a<br />
            <span className="text-[#0F8B8D]">Better Tomorrow</span>
          </h1>
          <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-[#64748B] max-w-md">
            Truebridge Empowerment Echo Foundation is committed to building
            healthier, stronger and more empowered communities through
            healthcare, education and social awareness.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton to="/contact" variant="coral" showArrow>
              Donate Now
            </PrimaryButton>
            <PrimaryButton
              href="/gallery"
            >
              View Gallery
            </PrimaryButton>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
