import { motion } from 'framer-motion'
import Container from '../common/Container.jsx'
import PrimaryButton from '../common/PrimaryButton.jsx'
import ImageWithFallback from '../common/ImageWithFallback.jsx'

export default function OurStory() {
  return (
    <section className="bg-[#EAF8F7]">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2  sm:-mt-56">
              <span className="w-6 h-px bg-[#FF6B4A]" />
              <p className="text-[13px] font-bold tracking-wide text-[#0F8B8D]">
                OUR STORY
              </p>
            </div>
            <h2 className="mt-4 font-display text-[30px] sm:text-[38px] font-bold leading-[1.15] text-[#063B5C]">
              A Journey of Hope and Action
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed text-[#475569]">
              Truebridge Empowerment Echo Foundation was founded in Shahdara, Delhi NCR,
              on a simple belief — that small efforts, when combined, can create a big
              impact. Under the leadership of directors Neeraj Dubey and Arun Dubey, what
              started as a small circle of like-minded neighbours has grown into a
              dedicated community working for healthcare, education and social welfare.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#475569]">
              Over the years, we have organised free health camps offering eye, sugar,
              BP and dental check-ups, run blood donation drives, and been recognised
              alongside RWAs and community leaders for our civic and welfare work —
              reaching thousands of lives and creating meaningful change, one
              neighbourhood at a time.
            </p>

            <div className="mt-8 flex items-center gap-5">
             
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="font-display text-[14px] font-semibold text-[#063B5C]">
                  Neeraj & Arun Dubey
                </span>
                <span className="text-[12.5px] text-[#64748B]">Founders, Truebridge</span>
              </div>
            </div>
          </motion.div>

          {/* Photo collage */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            {/* Decorative glow behind the collage */}
            <span
              className="pointer-events-none absolute -top-8 -right-8 w-56 h-56 rounded-full opacity-30 blur-3xl"
              style={{ background: '#0F8B8D' }}
              aria-hidden="true"
            />

            <div className="relative grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-2xl overflow-hidden aspect-[16/10] shadow-lg shadow-[#0F8B8D]/10 group">
                <ImageWithFallback
                  src="/image7.jpeg"
                  alt="Children at a Truebridge community event, smiling together"
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  rounded="rounded-none"
                />
              </div>

              <div className="rounded-2xl overflow-hidden aspect-square shadow-lg shadow-[#0F8B8D]/10 group">
                <ImageWithFallback
                  src="/image6.jpeg"
                  alt="Hands joined together in unity at a community gathering"
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  rounded="rounded-none"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square shadow-lg shadow-[#0F8B8D]/10 group">
                <ImageWithFallback
                  src="/image12.jpeg"
                  alt="A doctor checking on an elderly woman at a Truebridge health camp"
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  rounded="rounded-none"
                />
              </div>
            </div>

            {/* Founding place badge */}
            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2 bg-white rounded-2xl shadow-lg px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#FF6B4A]" />
              <p className="text-[13px] font-semibold text-[#063B5C] whitespace-nowrap">
                Founded in Shahdara, Delhi NCR
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}