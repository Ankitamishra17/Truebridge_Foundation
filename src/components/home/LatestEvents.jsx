import { useRef, useState, useEffect } from 'react'
import Container from '../common/Container.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import PrimaryButton from '../common/PrimaryButton.jsx'
import EventCard from './EventCard.jsx'
import QuoteCard from './QuoteCard.jsx'
import { events } from '../../data/events.js'

export default function LatestEvents() {
  const scrollerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const onScroll = () => {
      const cardWidth = el.firstChild ? el.firstChild.offsetWidth + 16 : 1 // + gap
      const index = Math.round(el.scrollLeft / cardWidth)
      setActiveIndex(Math.max(0, Math.min(index, events.length - 1)))
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToIndex = (i) => {
    const el = scrollerRef.current
    if (!el || !el.children[i]) return
    el.scrollTo({ left: el.children[i].offsetLeft - 20, behavior: 'smooth' })
  }

  return (
    <section className="bg-[#FAFAF8]">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Events column */}
          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <SectionHeading
                align="left"
                title="Latest Events"
                subtitle="Stay updated with our recent initiatives"
              />
              <div className="hidden sm:block flex-shrink-0">
                <PrimaryButton to="/events" variant="outline" showArrow>
                  View All Events
                </PrimaryButton>
              </div>
            </div>

            {/* mobile scroll area with edge fade + snap */}
            <div className="relative mt-8 sm:mt-10">
              <div
                ref={scrollerRef}
                className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 pb-1"
              >
                {events.map((event, i) => (
                  <div
                    key={event.id}
                    className="w-full sm:w-auto flex-shrink-0 snap-center"
                  >
                    <EventCard event={event} index={i} />
                  </div>
                ))}
              </div>
            </div>

            {/* scroll progress dots, mobile only */}
            <div className="mt-5 flex sm:hidden items-center justify-center gap-1.5">
              {events.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to event ${i + 1}`}
                  onClick={() => scrollToIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? 'w-6 bg-[#0F8B8D]' : 'w-1.5 bg-[#0F8B8D]/25'
                  }`}
                />
              ))}
            </div>

            <div className="mt-8 sm:hidden">
              <PrimaryButton to="/events" variant="outline" showArrow className="w-full">
                View All Events
              </PrimaryButton>
            </div>
          </div>

          {/* Quote panel */}
          <div className="lg:col-span-1">
            <QuoteCard
              quote="Real change happens when compassion meets action."
              attribution="Truebridge Foundation"
              image="/latest_event_image.png"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}