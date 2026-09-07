import Container from '../common/Container.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import PrimaryButton from '../common/PrimaryButton.jsx'
import EventCard from './EventCard.jsx'
import QuoteCard from './QuoteCard.jsx'
import { events } from '../../data/events.js'

export default function LatestEvents() {
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

            <div className="mt-10 flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0">
              {events.map((event, i) => (
                <div key={event.id} className="w-[85%] sm:w-auto flex-shrink-0">
                  <EventCard event={event} index={i} />
                </div>
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