import { motion } from 'framer-motion'
import { Stethoscope, Users, Calendar, Heart } from 'lucide-react'
import Container from '../common/Container.jsx'

const stats = [
  { icon: Stethoscope, value: '50+', label: 'Health Camps' },
  { icon: Users, value: '10K+', label: 'People Reached' },
  { icon: Calendar, value: '20+', label: 'Community Events' },
  { icon: Heart, value: '100+', label: 'Volunteers' },
]

export default function OurImpact() {
  return (
    <section
      className="relative overflow-hidden bg-[#032D46] bg-cover bg-center"
      style={{ backgroundImage: `url(/impact_bg.jpg)` }}
    >
      {/* gradient scrim over the photo so stats/text stay readable */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(120deg, rgba(3,45,70,0.92) 0%, rgba(15,139,141,0.85) 100%)' }}
      />

      <Container className="py-12 sm:py-14 relative">
        <p className="text-[12px] font-bold tracking-widest text-white/90">
          OUR IMPACT
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-10 sm:gap-0">
          <div className="grid grid-cols-2 sm:flex sm:flex-1 gap-y-10 sm:gap-0 sm:divide-x sm:divide-white/15">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex-1 flex flex-col items-center text-center sm:px-6"
                >
                  <span className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon size={20} strokeWidth={1.8} className="text-[#7FE0DD]" />
                  </span>
                  <p className="mt-4 font-display font-bold text-[28px] sm:text-[32px] text-white leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[13px] text-white/70">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="hidden lg:flex flex-col items-start text-2xl leading-tight text-white/90 pl-10 flex-shrink-0"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            <span>Healthier People</span>
            <span className="flex items-center gap-2">
              Stronger Communities
              <Heart size={16} className="text-[#FF6B4A] fill-[#FF6B4A]" />
            </span>
          </motion.p>
        </div>
      </Container>
    </section>
  )
}