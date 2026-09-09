import { motion } from 'framer-motion'
import ImageWithFallback from '../common/ImageWithFallback.jsx'

export default function QuoteCard({
  quote = 'Real change happens when compassion meets action.',
  attribution = 'Truebridge Foundation',
  image = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.2 }}
      className="relative h-full min-h-[380px] rounded-2xl overflow-hidden flex flex-col bg-[#FFF9F3]"
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#00A85A]/15 blur-2xl" />
      <div className="pointer-events-none absolute top-16 right-0 w-28 h-28 rounded-full bg-[#FF6634]/10 blur-xl" />

      <div className="relative z-10 p-6 sm:p-7 flex-1 flex flex-col">
        <span className="font-display text-5xl leading-none text-[#00A85A]">&ldquo;</span>
        <p className="mt-1 font-display font-semibold text-[22px] sm:text-[24px] leading-snug text-[#3E4095]">
          {quote}
        </p>
        <p className="mt-4 text-[13px] text-[#64748B]">— {attribution}</p>
      </div>

      <div className="relative mt-auto h-[42%] min-h-[150px]">
        <ImageWithFallback
          src={image}
          alt={`Hands holding a heart, symbolizing ${attribution}'s mission`}
          className="w-full h-full"
          rounded="rounded-none"
        />
      </div>
    </motion.div>
  )
}