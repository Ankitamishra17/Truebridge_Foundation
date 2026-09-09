
import { motion } from 'framer-motion'

const team = [
  { name: 'Mayank Bansal', role: 'President', initials: 'MB', accent: '#00a85a', accentBg: '#E8F7EF' },
  { name: 'Neeraj Dubey', role: 'Director', initials: 'ND', accent: '#3e4095', accentBg: '#EEEEFA' },
  { name: 'Arun Dubey', role: 'Team Member', initials: 'AD', accent: '#ff6634', accentBg: '#FFF0EB' },
]

export default function OurLeadership() {
  return (
    <section className="relative overflow-hidden bg-[#FBFAF7]">
      {/* decorative leaves, bottom-left */}
      <svg
        className="absolute -bottom-6 -left-8 w-40 h-40 text-[#E8F7EF] -z-0"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M100 10 C 40 10, 10 60, 10 120 C 10 165, 45 195, 90 195 C 60 160, 55 100, 100 70 C 60 100, 65 150, 95 180 C 150 175, 190 130, 190 80 C 190 40, 150 10, 100 10 Z" />
      </svg>

      {/* decorative soft circle, top-right, for balance */}
      <span
        className="pointer-events-none absolute -top-14 right-0 w-56 h-56 rounded-full opacity-40 blur-3xl -z-0"
        style={{ background: '#FFF0EB' }}
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_1fr] gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-px bg-[#ff6634]" />
              <p className="text-[13px] font-bold tracking-wide text-[#00a85a]">
                OUR LEADERSHIP
              </p>
            </div>

            <h2 className="mt-4 font-display text-[28px] sm:text-[34px] font-bold leading-[1.15] text-[#3e4095]">
              Working Together for Greater Impact
            </h2>

            <p className="mt-5 text-[15px] leading-relaxed text-[#64748B] max-w-sm">
              Our dedicated team works with compassion, commitment and a shared vision
              to create a positive and lasting difference in society.
            </p>
          </motion.div>

          {/* Team cards */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl border border-[#E6E7F2] p-6 pt-7 flex flex-col items-center text-center overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(62,64,149,0.14)]"
              >
                {/* top accent bar, unique per member */}
                <span
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: member.accent }}
                  aria-hidden="true"
                />

                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center ring-4 ring-white shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
                  style={{ background: `linear-gradient(135deg, ${member.accent} 0%, #3e4095 100%)` }}
                >
                  <span className="font-display font-bold text-[22px] text-white">
                    {member.initials}
                  </span>
                </div>

                <h3 className="mt-4 font-display font-semibold text-[16px] text-[#3e4095]">
                  {member.name}
                </h3>

                <span
                  className="mt-2 px-3 py-1 rounded-md text-[12px] font-semibold"
                  style={{ backgroundColor: member.accentBg, color: member.accent }}
                >
                  {member.role}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

