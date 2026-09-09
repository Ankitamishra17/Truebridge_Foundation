import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ImageWithFallback from '../common/ImageWithFallback.jsx'

export default function EventCard({ event, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="bg-white rounded-2xl border border-[#EDF1F5] overflow-hidden flex flex-col h-full min-w-[280px] sm:min-w-0"
    >
      <ImageWithFallback
        src={event.image}
        alt={event.title}
        className="w-full aspect-[16/10]"
        rounded="rounded-none"
      />
      <div className="p-6 flex gap-4 flex-1">
        <div className="flex-shrink-0 text-center">
          <p className="font-display font-bold text-[26px] text-[#3E4095] leading-none">{event.date}</p>
          <p className="text-[12px] font-semibold text-[#00A85A] uppercase mt-1">{event.month}</p>
        </div>
        <div className="border-l border-[#EDF1F5] pl-4 flex flex-col flex-1">
          <h3 className="font-display font-semibold text-[16px] text-[#3E4095] leading-snug">{event.title}</h3>
          <p className="flex items-center gap-1 text-[13px] text-[#64748B] mt-1.5">
            <MapPin size={13} /> {event.place}
          </p>
          <Link
            to="/events"
            className="mt-auto pt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[#FF6634]"
          >
            Read More <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}