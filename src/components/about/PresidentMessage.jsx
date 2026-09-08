import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import Container from '../common/Container.jsx'
import ImageWithFallback from '../common/ImageWithFallback.jsx'

export default function PresidentMessage() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative max-w-sm mx-auto lg:mx-0 order-2 lg:order-1"
          >
            {/* decorative leaf shapes, layered for depth */}
            <svg
              className="absolute -bottom-8 -left-10 w-56 h-56 text-[#EAF8F7] -z-10"
              viewBox="0 0 200 200"
              fill="currentColor"
            >
              <path d="M100 10 C 40 10, 10 60, 10 120 C 10 165, 45 195, 90 195 C 60 160, 55 100, 100 70 C 60 100, 65 150, 95 180 C 150 175, 190 130, 190 80 C 190 40, 150 10, 100 10 Z" />
            </svg>
            <svg
              className="absolute -top-6 -right-8 w-28 h-28 text-[#FDE7E2] -z-10"
              viewBox="0 0 200 200"
              fill="currentColor"
            >
              <circle cx="100" cy="100" r="90" />
            </svg>

            <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] ring-4 ring-white shadow-[0_20px_45px_-15px_rgba(6,59,92,0.25)]">
              <ImageWithFallback
                src="/mayank.jpeg"
                alt="Mayank Bansal, President of Truebridge Empowerment Echo Foundation"
                className="w-full h-full"

                rounded="rounded-none"
              />
            </div>

            {/* name badge */}
            <div className="absolute left-5 -bottom-6 flex items-center gap-2 bg-white rounded-2xl shadow-[0_12px_30px_rgba(6,59,92,0.15)] px-5 py-3">
              <span className="w-2 h-2 rounded-md bg-[#FF6B4A] flex-shrink-0" />
              <div>
                <p className="font-display font-semibold text-[15px] text-[#063B5C] leading-none">
                  Mayank Bansal
                </p>
                <p className="mt-1 text-[13px] text-[#64748B] leading-none">President</p>
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-px bg-[#FF6B4A]" />
              <p className="text-[13px] font-bold tracking-wide text-[#0F8B8D]">
                PRESIDENT&apos;S MESSAGE
              </p>
            </div>
            <h2 className="mt-4 font-display text-[28px] sm:text-[34px] font-bold leading-[1.15] text-[#063B5C]">
              A Stronger Tomorrow for Everyone
            </h2>

            <div className="relative mt-7 bg-[#FFF9F3] rounded-2xl border-l-4 border-[#0F8B8D] p-6 sm:p-7 overflow-hidden">
              <span className="absolute -top-2 right-4 font-display text-6xl text-[#0F8B8D]/10 select-none">
                &rdquo;
              </span>
              <p className="relative text-[15px] leading-relaxed text-[#475569]">
                I am passionate about working for women empowerment and social welfare.
                I believe that access to healthcare, education and justice should be a
                right for everyone, not a privilege. Through Truebridge Empowerment Echo
                Foundation, we aim to support, counsel and empower women and people in
                need to become self-reliant and confident. I am committed to serving
                society and being a part of meaningful change.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
              <a
                href="https://youtu.be/grhjQ4Odr2o"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-[#FF6B4A] text-white rounded-md pl-2 pr-5 py-2 text-[14px] font-semibold hover:brightness-105 transition"
              >
                <span className="relative w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-white/30 animate-ping group-hover:opacity-0" />
                  <Play size={15} className="relative text-white ml-0.5" fill="white" />
                </span>
                Watch My Message
              </a>

              <p
                className="text-[26px] text-[#0F8B8D]"
                style={{ fontFamily: 'Caveat, cursive' }}
              >
                Mayank Bansal
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}