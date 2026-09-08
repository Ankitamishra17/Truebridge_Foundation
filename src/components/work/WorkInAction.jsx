import { useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const photos = [
  { src: '/image6.jpeg', alt: 'A doctor examining a schoolgirl at a health camp' },
  { src: '/image10.jpeg', alt: 'A volunteer speaking to a group at a community session' },
  { src: '/image40.jpeg', alt: 'Schoolgirls holding up posters from the poster-making competition' },
  { src: '/image11.jpeg', alt: 'A volunteer handing a care package to an elderly woman' },
]

export default function WorkInAction() {
  const scrollerRef = useRef(null)
  const itemRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    const el = scrollerRef.current
    if (!el) return
    // Find whichever card's centre is closest to the scroller's centre
    const scrollerCentre = el.scrollLeft + el.clientWidth / 2
    let closest = 0
    let minDist = Infinity
    itemRefs.current.forEach((item, i) => {
      if (!item) return
      const itemCentre = item.offsetLeft + item.clientWidth / 2
      const dist = Math.abs(itemCentre - scrollerCentre)
      if (dist < minDist) {
        minDist = dist
        closest = i
      }
    })
    setActiveIndex(closest)
  }

  const goTo = (i) => {
    const item = itemRefs.current[i]
    if (item) item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.14em] text-[#0F8B8D]">
              OUR WORK IN ACTION
            </p>
            <h2 className="mt-3 font-display text-[30px] sm:text-[38px] leading-[1.15] font-semibold text-[#063B5C]">
              Creating Change
              <br />
              On The Ground
            </h2>
          </div>
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-[#0F8B8D] text-[#0F8B8D] text-[14px] font-semibold hover:bg-[#0F8B8D] hover:text-white transition-colors flex-shrink-0 self-start"
          >
            View More <ArrowRight size={15} />
          </a>
        </div>

        <div className="relative mt-10">
          <div
            ref={scrollerRef}
            onScroll={handleScroll}
            className="flex sm:grid sm:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-px-5 -mx-5 px-5 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {photos.map((p, i) => (
              <div
                key={p.alt}
                ref={(el) => (itemRefs.current[i] = el)}
                className="snap-center sm:snap-align-none flex-shrink-0 w-full sm:w-auto aspect-[3/4] rounded-2xl overflow-hidden bg-[#EDF1F5]"
              >
                <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll position dots, mobile only */}
        <div className="mt-5 flex sm:hidden items-center justify-center gap-2">
          {photos.map((p, i) => (
            <button
              key={p.alt}
              onClick={() => goTo(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-6 bg-[#0F8B8D]' : 'w-1.5 bg-[#EDF1F5]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}