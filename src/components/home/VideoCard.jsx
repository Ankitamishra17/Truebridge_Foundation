import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import ImageWithFallback from '../common/ImageWithFallback.jsx'

export default function VideoCard({ video, index, onPlay }) {
  return (
    <motion.button
      type="button"
      onClick={() => onPlay(video)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.09 }}
      whileHover="hover"
      className="text-left group h-full w-full flex flex-col"
    >
      <div className="relative w-full rounded-2xl overflow-hidden aspect-video bg-[#3E4095] flex-shrink-0">
        <motion.div
          variants={{ hover: { scale: 1.06 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full"
            rounded="rounded-none"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#3E4095]/70 via-[#3E4095]/10 to-transparent group-hover:from-[#3E4095]/80 transition-colors duration-300" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            variants={{ hover: { scale: 1.1 } }}
            transition={{ duration: 0.3 }}
            className="relative w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg"
          >
            <motion.span
              variants={{ hover: { scale: 1.6, opacity: 0 } }}
              initial={{ scale: 1, opacity: 0.35 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full bg-white"
            />
            <Play size={20} className="relative text-[#FF6634] ml-0.5" fill="#FF6634" />
          </motion.span>
        </div>

        <span className="absolute bottom-3 right-3 text-[11px] font-semibold text-white bg-black/60 rounded px-2 py-0.5">
          {video.duration}
        </span>
      </div>

      <div className="mt-3 flex-1 flex flex-col">
        <p className="text-[13px] font-semibold text-[#00A85A]">{video.category}</p>
        <h3 className="font-display font-semibold text-[16px] text-[#3E4095] mt-0.5 line-clamp-2 group-hover:text-[#00A85A] transition-colors">
          {video.title}
        </h3>
      </div>
    </motion.button>
  )
}