
import { motion } from 'framer-motion'
import { Users, HeartPulse, Briefcase, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Container from '../common/Container.jsx'
import SectionHeading from '../common/SectionHeading.jsx'

const ways = [
  {
    icon: Users,
    title: 'Volunteer',
    description: 'Join our team and contribute your time and skills.',
    cta: 'Join Now',
    accent: '#3E4095',
    tint: '#EEEEFA',
  },
  {
    icon: HeartPulse,
    title: 'Partner With Us',
    description: 'Collaborate for a greater impact.',
    cta: 'Partner Now',
    accent: '#00A85A',
    tint: '#E8F7EF',
  },
  {
    icon: Briefcase,
    title: 'Donate',
    description: 'Help us reach more communities in need.',
    cta: 'Donate Now',
    accent: '#FF6634',
    tint: '#FFF0EB',
  },
]

export default function GetInvolved() {
  const navigate = useNavigate()

  return (
    <section className="bg-[#FAFAF8]">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          title="How You Can Help"
          subtitle="There's a place for you in this work, whatever you can give."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7">
          {ways.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-[28px] p-8 border border-[#E6E7F2] shadow-[0_1px_2px_rgba(62,64,149,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(62,64,149,0.16)]"
            >
              {/* icon */}
              <span
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundColor: w.tint }}
              >
                <w.icon
                  size={26}
                  strokeWidth={1.8}
                  style={{ color: w.accent }}
                />
              </span>

              <h3 className="mt-7 font-display font-semibold text-[19px] text-[#3E4095]">
                {w.title}
              </h3>

              <p className="mt-2.5 text-[14px] leading-relaxed text-[#64748B] max-w-[26ch]">
                {w.description}
              </p>

              <button
                onClick={() => navigate('/contact')}
                className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold"
                style={{ color: w.accent }}
              >
                {w.cta}

                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
                  style={{ backgroundColor: w.tint }}
                >
                  <ArrowRight size={13} />
                </span>
              </button>

              {/* accent bar */}
              <span
                className="absolute left-8 right-8 bottom-0 h-[2.5px] rounded-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: w.accent }}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

