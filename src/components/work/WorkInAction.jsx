import { ArrowRight } from 'lucide-react'

const photos = [
  { src: '/image6.jpeg', alt: 'A doctor examining a schoolgirl at a health camp' },
  { src: '/image10.jpeg', alt: 'A volunteer speaking to a group at a community session' },
  { src: '/image40.jpeg', alt: 'Schoolgirls holding up posters from the poster-making competition' },
  { src: '/image11.jpeg', alt: 'A volunteer handing a care package to an elderly woman' },
]

export default function WorkInAction() {
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

        <div className="mt-10 flex sm:grid sm:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory -mx-5 px-5 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          {photos.map((p) => (
            <div
              key={p.alt}
              className="snap-start flex-shrink-0 w-[62%] xs:w-[48%] sm:w-auto aspect-[3/4] rounded-2xl overflow-hidden bg-[#EDF1F5]"
            >
              <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}