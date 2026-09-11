import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import VideoCard from "./VideoCard.jsx";
import VideoModal from "./VideoModal.jsx";
import { videos } from "../../data/videos.js";

const INITIAL_COUNT = 4;

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  const visibleVideos = videos.slice(0, INITIAL_COUNT);

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
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto"
        >
          {visibleVideos.map((video, i) => (
            <div key={video.id} className="min-w-0">
              <VideoCard video={video} index={i} onPlay={setActiveVideo} />
            </div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#3E4095]/25 text-[#3E4095] text-sm font-semibold hover:bg-[#3E4095] hover:text-white hover:border-[#3E4095] transition-all duration-300"
          >
            View more videos
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </Container>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
