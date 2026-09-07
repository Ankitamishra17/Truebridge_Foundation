import { motion } from 'framer-motion'
import { HeartPulse, Users, CalendarDays, ShieldCheck } from 'lucide-react'
import Container from '../common/Container.jsx'

const stats = [
  { icon: HeartPulse, value: '50+', label: 'Health Camps' },
  { icon: Users, value: '10K+', label: 'People Reached' },
  { icon: CalendarDays, value: '20+', label: 'Community Events' },
  { icon: ShieldCheck, value: '100+', label: 'Volunteers' },
]

export default function ImpactStats() {
  return (
    <section className="bg-white">
      <Container className="py-10 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-3"
            >
              <span className="w-11 h-11 rounded-xl bg-[#EAF8F7] flex items-center justify-center flex-shrink-0">
                <s.icon size={20} className="text-[#0F8B8D]" />
              </span>
              <div>
                <p className="font-display font-bold text-[22px] sm:text-[26px] text-[#063B5C] leading-none">
                  {s.value}
                </p>
                <p className="mt-1 text-[13px] text-[#64748B]">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
