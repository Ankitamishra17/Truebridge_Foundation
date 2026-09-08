import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ChevronLeft, ChevronRight, Images, X } from 'lucide-react'

// Each event can carry as many images as you have — 1 or many, handled the same way.
// Replace the placeholder paths with your real photo paths.
const events = [
  {
    date: '15 Dec 2024',
    type: 'Health Camp',
    title: 'Health Camp & Blood Donation Camp',
    place: 'Kanti Nagar, Shahdara',
    body: 'Limra Foundation President Hina Akhtar welcomed and honoured Neeraj Dubey (Director, Truebridge Empowerment Echo Foundation) and Sushma Dubey (Director, Taksh Panchtatv Foundation) with a ceremonial shawl at the health and blood donation camp.',
    images: ['/image8.jpeg', '/image4.jpeg', '/image3.jpeg'],
  },
  {
    date: '15 Dec 2024',
    type: 'Recognition',
    title: 'Brahmin Samman Samaroh',
    place: 'Local community venue, Shahdara',
    body: 'Cabinet Minister and area MLA Gopal Rai honoured Neeraj Dubey with a shield bearing an image of Lord Parshuram, in the presence of Pritam Sharma, Ramkant Kaushik, DC Vishisht, Brijesh Sharma and SN Sharma.',
    images: ['/image21.jpeg', '/image18.jpeg', '/image15.jpeg'],
  },
  {
    date: '15 Dec 2024',
    type: 'Recognition',
    title: 'Shivastra Dharan Samaroh',
    place: 'Badi Shiv Mandir',
    body: 'Jai Bhagwan Goyal, National Executive President of the United Hindu Front, honoured Neeraj Dubey with a Shivastra at the Shivastra Dharan ceremony, conducted by RWA Jyoti Nagar.',
    images: ['/image46.jpeg', '/image47.jpeg'],
  },
  {
    date: '22 Dec 2024',
    type: 'Health Camp',
    title: 'Health Camp',
    place: 'Khatu Dham, Harsh Vihar',
    body: 'A dedicated health camp offered eye examinations, sugar testing, blood pressure checks and dental check-ups, conducted by the Sharp Sight medical team including Anurag Sharma and Mohan, with free spectacles and eye drops distributed by the Lakshya Welfare team and Seema Sharma.',
    images: ['/image1.jpeg', '/image6.jpeg', '/image7.jpeg'],
  },
  {
    date: '26 Jan',
    type: 'Civic Program',
    title: 'Republic Day: Flag Hoisting, Medical Camp & Poster Competition',
    place: 'Community grounds',
    body: 'Directors Neeraj Dubey and Arun Dubey organised a Republic Day flag hoisting alongside a free medical camp for local residents and a children\u2019s poster-making competition on anaemia awareness and environmental protection. Chief guests included actor Lodhi Rakesh Rajput and Cabinet Minister Gopal Rai, joined by municipal councillor Mukesh Bansal and BJP candidate Anil Vashisth.',
    images: ['/image41.jpeg', '/image42.jpeg', '/image43.jpeg'],
    featured: true,
  },
]

const categories = ['All', 'Health Camp', 'Recognition', 'Civic Program']

const typeStyles = {
  'Health Camp': { bg: '#FDE7E2', text: '#FF6B4A' },
  Recognition: { bg: '#FCEFD6', text: '#C98A1F' },
  'Civic Program': { bg: '#E1F2F1', text: '#0F8B8D' },
}

function parseDate(dateStr) {
  const parts = dateStr.split(' ')
  return { day: parts[0], month: parts[1] }
}

function DateBadge({ date }) {
  const { day, month } = parseDate(date)
  return (
    <div className="absolute top-3 left-3 bg-white rounded-xl px-2.5 py-1.5 text-center leading-none shadow-sm">
      <p className="font-display text-[16px] font-bold text-[#063B5C]">{day}</p>
      <p className="text-[10px] font-semibold tracking-wide text-[#0F8B8D] uppercase">{month}</p>
    </div>
  )
}

function TypeTag({ type }) {
  const style = typeStyles[type] ?? typeStyles['Civic Program']
  return (
    <span
      className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-semibold"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {type}
    </span>
  )
}

// Auto-advances through images every few seconds; pauses on hover so people
// can still use the manual arrows without fighting the timer.
function EventGallery({ images, title, className = '', autoPlayMs = 3000 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const hasMultiple = images.length > 1

  useEffect(() => {
    if (!hasMultiple || paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, autoPlayMs)
    return () => clearInterval(id)
  }, [hasMultiple, paused, images.length, autoPlayMs])

  const go = (dir) => (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIndex((i) => (i + dir + images.length) % images.length)
  }

  return (
    <div
      className={`relative overflow-hidden bg-[#EDF1F5] ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`${title} — photo ${index + 1} of ${images.length}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </AnimatePresence>

      {hasMultiple && (
        <>
          <button
            onClick={go(-1)}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={go(1)}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            <ChevronRight size={16} />
          </button>
          <span className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 rounded-md bg-black/50 text-white text-[11px] font-semibold z-10">
            <Images size={11} />
            {index + 1}/{images.length}
          </span>
          {/* progress dots, double as a quiet play-position indicator */}
          <div className="absolute bottom-2 left-2 flex gap-1 z-10">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === index ? 'w-4 bg-white' : 'w-1 bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function EventDetailBody({ event }) {
  return (
    <div className="p-6 sm:p-8 flex flex-col justify-center">
      <p className="text-[13px] font-semibold tracking-[0.1em] text-[#0F8B8D] uppercase">
        {event.type}
      </p>
      <h3 className="mt-2 font-display text-[24px] sm:text-[28px] font-semibold text-[#063B5C] leading-tight">
        {event.title}
      </h3>
      <p className="mt-2 flex items-center gap-1.5 text-[14px] text-[#64748B]">
        <MapPin size={14} className="flex-shrink-0" />
        {event.place}
      </p>
      <p className="mt-4 text-[15px] leading-relaxed text-[#64748B]">{event.body}</p>
    </div>
  )
}

function FeaturedEvent({ event, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={() => onOpen(event)}
      className="group cursor-pointer bg-white rounded-2xl border border-[#EDF1F5] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-[0_1px_2px_rgba(6,59,92,0.04)] hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative">
        <EventGallery images={event.images} title={event.title} className="aspect-[4/3] lg:aspect-auto lg:h-full" />
        <DateBadge date={event.date} />
        <TypeTag type={event.type} />
      </div>
      <div>
        <p className="pt-6 sm:pt-8 px-6 sm:px-8 text-[13px] font-semibold tracking-[0.1em] text-[#0F8B8D] uppercase">
          Latest event
        </p>
        <EventDetailBody event={{ ...event, type: undefined }} />
      </div>
    </motion.article>
  )
}

function EventCard({ event, i, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      onClick={() => onOpen(event)}
      className="group cursor-pointer bg-white rounded-2xl border border-[#EDF1F5] overflow-hidden flex flex-col shadow-[0_1px_2px_rgba(6,59,92,0.04)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="relative">
        <EventGallery images={event.images} title={event.title} className="aspect-[4/3]" />
        <DateBadge date={event.date} />
        <TypeTag type={event.type} />
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="font-display text-[17px] font-semibold text-[#063B5C] leading-snug">
          {event.title}
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-[13.5px] text-[#64748B]">
          <MapPin size={13} className="flex-shrink-0" />
          {event.place}
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-[#64748B] flex-1">{event.body}</p>
      </div>
    </motion.article>
  )
}

// Full-detail view, shown for whichever card was clicked — same visual
// language as the featured card, just in a modal so every event can use it.
function EventModal({ event, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!event) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#032D46]/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="group relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto grid grid-cols-1 lg:grid-cols-2 shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#063B5C] hover:bg-[#EDF1F5] transition-colors"
        >
          <X size={16} />
        </button>

        <div className="relative">
          <EventGallery
            images={event.images}
            title={event.title}
            className="aspect-[4/3] lg:aspect-auto lg:h-full"
          />
          <DateBadge date={event.date} />
          <TypeTag type={event.type} />
        </div>
        <EventDetailBody event={event} />
      </motion.div>
    </motion.div>
  )
}

export default function EventsGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selected, setSelected] = useState(null)

  const featured = useMemo(() => events.find((e) => e.featured), [])
  const rest = useMemo(() => {
    const pool = activeCategory === 'All' ? events.filter((e) => !e.featured) : events
    return activeCategory === 'All'
      ? pool
      : pool.filter((e) => e.type === activeCategory && !(e.featured && activeCategory === 'All'))
  }, [activeCategory])

  return (
    <section className="bg-[#FFF9F3] py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[13px] font-semibold tracking-[0.14em] text-[#0F8B8D]">
              OUR EVENTS
            </p>
            <h2 className="mt-3 font-display text-[28px] sm:text-[36px] leading-[1.15] font-semibold text-[#063B5C]">
              Recent moments from the ground
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-md text-[13.5px] font-semibold border transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#063B5C] text-white border-[#063B5C]'
                    : 'bg-white text-[#63748B] border-[#EDF1F5] hover:border-[#0F8B8D]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {activeCategory === 'All' && featured && (
          <div className="mt-10">
            <FeaturedEvent event={featured} onOpen={setSelected} />
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {rest.map((event, i) => (
              <EventCard
                key={`${event.title}-${event.date}`}
                event={event}
                i={i}
                onOpen={setSelected}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {rest.length === 0 && activeCategory !== 'All' && (
          <p className="mt-10 text-center text-[15px] text-[#64748B]">
            No events in this category yet.
          </p>
        )}
      </div>

      <AnimatePresence>
        {selected && <EventModal event={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}