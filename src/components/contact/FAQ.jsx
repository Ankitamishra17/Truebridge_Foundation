import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

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

function FaqItem({ faq, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`bg-white rounded-2xl border transition-colors duration-200 ${
        isOpen ? 'border-[#0F8B8D]/40' : 'border-[#EDF1F5]'
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
      >
        <span className="font-display text-[15.5px] sm:text-[16.5px] font-semibold text-[#063B5C]">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? 'bg-[#0F8B8D] text-white' : 'bg-[#032D46]/5 text-[#063B5C]'
          }`}
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
            <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-[14.5px] leading-relaxed text-[#64748B]">
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
    <section className="bg-[#FFF9F3] py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#EAF8F7] mb-4">
            <HelpCircle size={20} className="text-[#0F8B8D]" />
          </span>
          <p className="text-[13px] font-semibold tracking-[0.14em] text-[#0F8B8D]">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-[28px] sm:text-[36px] leading-[1.15] font-semibold text-[#063B5C]">
            Questions people ask us
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-[#64748B]">
            Can't find what you're looking for? Reach out through our Contact page.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
          <div className="flex flex-col gap-4 sm:gap-5">
            {leftFaqs.map(({ faq, index }) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                index={index}
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
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}