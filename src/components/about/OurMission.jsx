import { motion } from 'framer-motion'
import { Target, Eye, Users, TrendingUp } from 'lucide-react'
import Container from '../common/Container.jsx'

const items = [
  {
    icon: Target,
    accent: '#FF6B4A',
    accentBg: '#FDE7E2',
    title: 'Our Mission',
    description:
      'To improve lives by providing access to healthcare, education and community support, especially for the underprivileged.',
  },
  {
    icon: Eye,
    accent: '#0F8B8D',
    accentBg: '#E1F2F1',
    title: 'Our Vision',
    description:
      'A healthier, more equitable and empowered society where every individual has the opportunity to thrive.',
  },
  {
    icon: Users,
    accent: '#C98A1F',
    accentBg: '#FCEFD6',
    title: 'Our Values',
    description:
      'Compassion, integrity, inclusivity, collaboration and a deep commitment to social impact.',
  },
  {
    icon: TrendingUp,
    accent: '#063B5C',
    accentBg: '#E7EDF1',
    title: 'Our Goal',
    description:
      'To create sustainable change through community-driven initiatives and continuous support.',
  },
]

export default function MissionVisionValues() {
  return (
    <section className="bg-[#fffdfc]">
      <Container className="py-16 sm:py-20">
        <div className="text-center max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#FF6B4A]" />
            <p className="text-[13px] font-semibold tracking-[0.14em] text-[#063B5C]">
              WHAT DRIVES US
            </p>
          </div>
          <h2 className="mt-4 font-display text-[26px] sm:text-[32px] font-semibold text-[#063B5C] leading-tight">
            Our mission, vision & values
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative bg-white rounded-2xl border border-[#EDF1F5] p-6 sm:p-7 flex flex-col items-center text-center overflow-hidden shadow-[0_1px_2px_rgba(6,59,92,0.04)] hover:shadow-[0_12px_28px_-10px_rgba(6,59,92,0.18)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top accent bar */}
                <span
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: item.accent }}
                  aria-hidden="true"
                />

                <span
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                  style={{ backgroundColor: item.accentBg }}
                >
                  <Icon size={24} strokeWidth={1.8} style={{ color: item.accent }} />
                </span>
                <h3 className="mt-5 font-display font-semibold text-[16px] sm:text-[17px] text-[#063B5C]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13.5px] sm:text-[14px] leading-relaxed text-[#64748B] max-w-[24ch]">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}