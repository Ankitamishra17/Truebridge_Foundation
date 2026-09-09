
import { FlagTriangleRight, Stethoscope, Palette, ArrowRight } from 'lucide-react'
import { Link } from "react-router-dom";

const moments = [
  {
    icon: FlagTriangleRight,
    // Swap in your own photo path here
    image: '/image38.jpeg',
    title: 'Flag hoisting',
    detail: 'Led by directors Neeraj Dubey and Arun Dubey to mark Republic Day.',
  },
  {
    icon: Stethoscope,
    image: '/image2.jpeg',
    title: 'Medical camp',
    detail: 'Free health check-ups and consultations for local residents.',
  },
  {
    icon: Palette,
    image: '/image39.jpeg',
    title: 'Poster-making competition',
    detail: 'Children presented ideas on "Anaemia" and "Ways to protect the environment."',
  },
]

export default function Spotlight() {
  return (
    <section id="spotlight" className="bg-[#E6F6EF] py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-14 items-center">
          {/* Left: copy */}
          <div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-px bg-[#ff6634]" />
              <p className="text-[13px] font-semibold tracking-[0.14em] text-[#3e4095]">
                IN FOCUS
              </p>
            </div>
            <h2 className="mt-4 font-display text-[26px] sm:text-[32px] leading-[1.15] font-semibold text-[#3e4095]">
              A Day Of Service And Celebration
            </h2>
            <p className="mt-3 text-[15px] font-semibold text-[#00a85a]">
              Republic Day: Health, Awareness &amp; Community Spirit
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5B6B76] max-w-sm">
              We combined patriotism with purpose by organising multiple activities for the
              community.
            </p>
            <Link
              to="/gallery"
              className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#3e4095] text-white text-[14px] font-semibold hover:bg-[#3e4095] transition-colors"
            >
              View Event Gallery <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right: photo trio + sticker */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 flex-1 w-full">
              {moments.map((m) => (
                <div key={m.title}>
                  <div className="relative">
                    <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#DDF0E8]">
                      <img
                        src={m.image}
                        alt={m.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="absolute -bottom-5 left-5 w-11 h-11 rounded-full bg-[#3e4095] border-4 border-[#E6F6EF] flex items-center justify-center">
                      <m.icon size={16} className="text-white" />
                    </span>
                  </div>
                  <div className="mt-7">
                    <h3 className="font-display text-[15px] font-semibold text-[#3e4095]">
                      {m.title}
                    </h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-[#5B6B76]">
                      {m.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

           
          </div>
        </div>
      </div>
    </section>
  )
}

