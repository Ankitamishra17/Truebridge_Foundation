import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react'

const faqs = [
  {
    question: 'What does Truebridge Empowerment Echo Foundation actually do?',
    answer:
      'We run free health camps, blood donation drives, community recognition events and civic programs across Shahdara and nearby neighbourhoods in New Delhi — mostly hands-on, on-the-ground work rather than desk-based programs.',
  },
  {
    question: 'How can I volunteer?',
    answer:
      'Fill out the contact form on our Contact page and mention "volunteer" along with any skills or time you can offer — medical, logistics, design, or just an extra pair of hands on camp day. We\u2019ll reach out with the next camp that fits.',
  },
  {
    question: 'Are your health camps really free?',
    answer:
      'Yes. Every health camp we run — eye examinations, sugar and blood-pressure testing, dental check-ups — is free for anyone who attends, regardless of where they live.',
  },
  {
    question: 'How do I stay updated on upcoming events?',
    answer:
      'Check the Events page for our latest camps and programs, or follow our social channels — we post ahead of each event with the date, location, and what to expect.',
  },
]

const accents = ['#0F8B8D', '#FF6B4A', '#C98A1F', '#063B5C']

function FaqItem({ faq, isOpen, onToggle, index, accent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`group bg-white rounded-2xl border transition-all duration-300 ${
        isOpen
          ? 'border-transparent shadow-[0_12px_28px_-10px_rgba(6,59,92,0.18)]'
          : 'border-[#EDF1F5] hover:border-transparent hover:shadow-[0_8px_20px_-10px_rgba(6,59,92,0.12)]'
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-4 p-5 sm:p-6 text-left"
      >
        <span
          className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-0.5"
          style={{ backgroundColor: accent }}
          aria-hidden="true"
        />
        <span className="flex-1 font-display text-[15.5px] sm:text-[16.5px] font-semibold text-[#063B5C]">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? 'text-white' : 'bg-[#032D46]/5 text-[#063B5C]'
          }`}
          style={isOpen ? { backgroundColor: accent } : undefined}
        >
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex"
          >
            <ChevronDown size={16} />
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pl-[2.1rem] pr-5 sm:pr-6 pb-5 sm:pb-6 text-[14.5px] leading-relaxed text-[#64748B]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState()
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i))

  const mid = Math.ceil(faqs.length / 2)
  const leftFaqs = faqs.slice(0, mid).map((faq, i) => ({ faq, index: i }))
  const rightFaqs = faqs.slice(mid).map((faq, i) => ({ faq, index: i + mid }))

  return (
    <section className="relative overflow-hidden bg-[#FFF9F3] py-16 sm:py-20">
      {/* decorative glows, consistent with the rest of the site */}
      <span
        className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-30 blur-3xl"
        style={{ background: '#E1F2F1' }}
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute bottom-0 -left-16 w-56 h-56 rounded-full opacity-30 blur-3xl"
        style={{ background: '#FDE7E2' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#EAF8F7] mb-4">
            <HelpCircle size={20} className="text-[#0F8B8D]" />
          </span>
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#FF6B4A]" />
            <p className="text-[13px] font-semibold tracking-[0.14em] text-[#0F8B8D]">FAQ</p>
            <span className="w-6 h-px bg-[#FF6B4A]" />
          </div>
          <h2 className="mt-3 font-display text-[28px] sm:text-[36px] leading-[1.15] font-semibold text-[#063B5C]">
            Questions people ask us
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-[#64748B]">
            Can't find what you're looking for? Reach out and we'll answer directly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
          <div className="flex flex-col gap-4 sm:gap-5">
            {leftFaqs.map(({ faq, index }) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                index={index}
                accent={accents[index % accents.length]}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:gap-5">
            {rightFaqs.map(({ faq, index }) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                index={index}
                accent={accents[index % accents.length]}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-[#0F8B8D] text-[#0F8B8D] text-[14px] font-semibold hover:bg-[#0F8B8D] hover:text-white transition-colors"
          >
            Still have questions? Contact us <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}