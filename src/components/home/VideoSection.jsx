import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../common/Container.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import VideoCard from './VideoCard.jsx'
import VideoModal from './VideoModal.jsx'
import { videos } from '../../data/videos.js'

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20">

        <SectionHeading
          title="See Our Impact In Action"
          subtitle="Watch how our health camps, awareness programs and community initiatives are creating meaningful change."
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {videos.map((video, i) => (
            <div key={video.id} className="min-w-0">
              <VideoCard
                video={video}
                index={i}
                onPlay={setActiveVideo}
              />
            </div>
          ))}
        </motion.div>

      </Container>

      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  )
}