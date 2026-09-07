import { motion } from 'framer-motion'
import { Target, Eye, Users, TrendingUp } from 'lucide-react'
import Container from '../common/Container.jsx'

const items = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To improve lives by providing access to healthcare, education and community support, especially for the underprivileged.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'A healthier, more equitable and empowered society where every individual has the opportunity to thrive.',
  },
  {
    icon: Users,
    title: 'Our Values',
    description:
      'Compassion, integrity, inclusivity, collaboration and a deep commitment to social impact.',
  },
  {
    icon: TrendingUp,
    title: 'Our Goal',
    description:
      'To create sustainable change through community-driven initiatives and continuous support.',
  },
]

export default function MissionVisionValues() {
  return (
    <section className="bg-white">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                <span className="w-14 h-14 rounded-full bg-[#EAF8F7] flex items-center justify-center">
                  <Icon size={24} strokeWidth={1.8} className="text-[#0F8B8D]" />
                </span>
                <h3 className="mt-4 font-display font-bold text-[16px] text-[#063B5C]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#64748B] max-w-[24ch]">
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