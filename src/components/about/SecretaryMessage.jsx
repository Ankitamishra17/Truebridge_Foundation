
import { motion } from 'framer-motion'
import Container from '../common/Container.jsx'
import ImageWithFallback from '../common/ImageWithFallback.jsx'

export default function SecretaryMessage() {
  return (
    <section className="bg-[#FFF9F3]">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Message - Left on desktop, first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-1"
          >
            {/* Label */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-px bg-[#ff6634]" />
              <p className="text-[13px] font-bold tracking-wide text-[#00a85a]">
                SECRETARY&apos;S MESSAGE
              </p>
            </div>

            {/* Heading */}
            <h2 className="mt-4 font-display text-[28px] sm:text-[34px] font-bold leading-[1.15] text-[#3e4095]">
              Empowering Lives, Creating Change
            </h2>

            {/* Message Card */}
            <div className="relative mt-7 bg-white rounded-2xl border-l-4 border-[#00a85a] p-6 sm:p-7 overflow-hidden shadow-sm">
              <span className="absolute -top-2 right-4 font-display text-6xl text-[#00a85a]/10 select-none">
                &rdquo;
              </span>

              <p className="relative text-[15px] leading-relaxed text-[#475569]">
                I am passionate about working for women empowerment and social welfare.
                I want to contribute to an NGO that provides medical assistance, legal
                support, and guidance to women and people in need. I believe that access
                to healthcare and justice should be a right for everyone, not a privilege.
                My aim is to support, counsel, and empower women to become self-reliant
                and confident. I am eager to learn, serve on the ground, and be a part
                of meaningful change in society.
              </p>
            </div>

            {/* Name and Designation */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-[26px] text-[#00a85a]"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  Mayank Bansal
                </p>
                <p className="mt-1 text-[13px] text-[#64748B]">
                  Secretary
                </p>
              </div>
            </div>
          </motion.div>

          {/* Photo - Right on desktop, after text on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative max-w-sm mx-auto lg:mx-0 order-2 lg:order-2"
          >
            {/* Decorative Leaf */}
            <svg
              className="absolute -bottom-8 -right-10 w-56 h-56 text-[#E8F7EF] -z-10"
              viewBox="0 0 200 200"
              fill="currentColor"
            >
              <path d="M100 10 C 40 10, 10 60, 10 120 C 10 165, 45 195, 90 195 C 60 160, 55 100, 100 70 C 60 100, 65 150, 95 180 C 150 175, 190 130, 190 80 C 190 40, 150 10, 100 10 Z" />
            </svg>

            {/* Decorative Circle */}
            <svg
              className="absolute -top-6 -left-8 w-28 h-28 text-[#FFF0EB] -z-10"
              viewBox="0 0 200 200"
              fill="currentColor"
            >
              <circle cx="100" cy="100" r="90" />
            </svg>

            {/* Image */}
            <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] ring-4 ring-white shadow-[0_20px_45px_-15px_rgba(62,64,149,0.25)]">
              <ImageWithFallback
                src="/mayank.jpeg"
                alt="Mayank Bansal, Secretary of Truebridge Empowerment Echo Foundation"
                className="w-full h-full"
                rounded="rounded-none"
              />
            </div>

            {/* Name Badge */}
            <div className="absolute right-5 -bottom-6 flex items-center gap-2 bg-white rounded-2xl shadow-[0_12px_30px_rgba(62,64,149,0.15)] px-5 py-3">
              <span className="w-2 h-2 rounded-md bg-[#ff6634] flex-shrink-0" />

              <div>
                <p className="font-display font-semibold text-[15px] text-[#3e4095] leading-none">
                  Mayank Bansal
                </p>

                <p className="mt-1 text-[13px] text-[#64748B] leading-none">
                  Secretary
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}