import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../common/Container.jsx";
import PrimaryButton from "../common/PrimaryButton.jsx";

export default function HeroSection() {
  const [bgLoaded, setBgLoaded] = useState(true);

  return (
    <section className="bg-[#FFF9F3] overflow-hidden relative min-h-[calc(100vh-100px)]">
      {/* Background Image */}
      {bgLoaded && (
        <div className="absolute inset-0 z-0">
          <picture>
            <source
              media="(max-width: 639px)"
              srcSet="/home_bannerMobile.png"
            />

            <img
              src="/home_banner.png"
              alt=""
              aria-hidden="true"
              onError={() => setBgLoaded(false)}
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
      )}

      {/* Mobile Overlay */}
      {/* <div
        className="sm:hidden absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 35%, rgba(255,255,255,0.75) 55%, rgba(255,255,255,0.3) 78%, rgba(255,255,255,0) 100%)",
        }}
        aria-hidden="true"
      /> */}

      {/* Content */}
      <Container
        className="
          min-h-[calc(100vh-100px)]
          py-10
          sm:py-16
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          lg:gap-16
          items-center
          relative
          z-10
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Small Heading */}
          <p className="text-[9px] sm:text-[10px] font-semibold tracking-wide text-[#0F8B8D] font-body -mt-8">
            HEALTH &bull; EDUCATION &bull; COMMUNITY
          </p>

          {/* Main Heading */}
          <h1
            className="
              mt-3
              font-display
              font-bold
              text-[30px]
              sm:text-[48px]
              lg:text-[54px]
              leading-[1.1]
              text-[#063B5C]
            "
          >
            Bridging Today for a
            <br />
            <span className="text-[#0F8B8D]">Better Tomorrow</span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-4
              text-[12px]
              sm:text-[15px]
              leading-[1.55]
              text-[#64748B]
              max-w-[190px]
              sm:max-w-md
            "
          >
            Truebridge Empowerment Echo Foundation is building healthier
            communities through healthcare, education and social awareness.
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-4">
            <div className="scale-90 sm:scale-100 origin-left">
              <PrimaryButton to="/contact" variant="coral" showArrow>
                Donate Now
              </PrimaryButton>
            </div>

            <div className="scale-90 sm:scale-100 origin-left">
              <PrimaryButton href="/gallery">View Gallery</PrimaryButton>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
