import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, CheckCircle2, User, MessageSquare, Send, Loader2 } from 'lucide-react'
import Container from '../common/Container.jsx'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Shahdara, Delhi NCR',
    accent: '#FF6B4A',
    accentBg: '#FDE7E2',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 00000 00000',
    accent: '#0F8B8D',
    accentBg: '#E1F2F1',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@truebridgefoundation.org',
    accent: '#C98A1F',
    accentBg: '#FCEFD6',
  },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire this up to your form backend / email service of choice
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 900)
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-[#FAFAF8] border-b border-[#EDF1F5]">
        <span
          className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-30 blur-3xl"
          style={{ background: '#E1F2F1' }}
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -top-10 right-0 w-56 h-56 rounded-full opacity-30 blur-3xl"
          style={{ background: '#FDE7E2' }}
          aria-hidden="true"
        />

        <Container className="relative pt-14 sm:pt-20 pb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-[#FF6B4A]" />
              <p className="text-[13px] font-bold tracking-widest text-[#0F8B8D]">
                CONTACT US
              </p>
              <span className="w-6 h-px bg-[#FF6B4A]" />
            </div>
            <h1 className="mt-4 font-display text-[32px] sm:text-[40px] font-semibold text-[#063B5C]">
              Get In Touch
            </h1>
            <p className="mt-4 text-[16px] text-[#64748B] max-w-xl mx-auto">
              Have a question, want to volunteer, or looking to partner with us? We'd
              love to hear from you.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {contactInfo.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="group flex gap-4 items-center p-4 rounded-2xl border border-[#EDF1F5] bg-white transition-all duration-300 hover:border-transparent hover:shadow-[0_8px_24px_rgba(6,59,92,0.08)]"
              >
                <span
                  className="w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                  style={{ backgroundColor: item.accentBg }}
                >
                  <Icon size={18} style={{ color: item.accent }} />
                </span>
                <div>
                  <h3 className="font-semibold text-[15px] text-[#063B5C]">{item.label}</h3>
                  <p className="text-[15px] text-[#64748B] mt-0.5">{item.value}</p>
                </div>
              </div>
            )
          })}

          <div className="relative rounded-2xl overflow-hidden border border-[#EDF1F5] h-56 mt-4">
            <iframe
              title="Foundation location"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              src="https://www.google.com/maps?q=Shahdara,Delhi&output=embed"
            />
            <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1.5 bg-white rounded-md shadow-md px-3 py-1.5">
              <MapPin size={13} className="text-[#FF6B4A]" />
              <span className="text-[12.5px] font-semibold text-[#063B5C]">Find us here</span>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative bg-[#FFF9F3] border border-[#EDF1F5] rounded-2xl p-7 sm:p-9 overflow-hidden"
        >
          {/* top accent + soft glow, consistent with the site's card language */}
          <span className="absolute top-0 left-0 right-0 h-1 bg-[#0F8B8D]" aria-hidden="true" />
          <span
            className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30 blur-3xl"
            style={{ background: '#E1F2F1' }}
            aria-hidden="true"
          />

          <AnimatePresence mode="wait">
            {status === 'sent' ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="relative h-full flex flex-col items-center justify-center text-center py-16"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
                  className="w-16 h-16 rounded-md bg-[#EAF8F7] flex items-center justify-center"
                >
                  <CheckCircle2 size={32} className="text-[#0F8B8D]" />
                </motion.span>
                <h3 className="mt-5 font-display text-[22px] font-semibold text-[#063B5C]">
                  Message sent
                </h3>
                <p className="mt-2 text-[15px] text-[#64748B] max-w-xs">
                  Thanks for reaching out — someone from the team will get back to you
                  shortly.
                </p>
                <button
                  onClick={() => {
                    setForm({ name: '', email: '', phone: '', message: '' })
                    setStatus('idle')
                  }}
                  className="mt-6 text-[14px] font-semibold text-[#FF6B4A] hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleSubmit}
                className="relative space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-[14px] font-medium text-[#063B5C] mb-1.5">
                    Full name
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#EDF1F5] bg-white text-[15px] text-[#063B5C] focus:border-[#0F8B8D] focus:ring-4 focus:ring-[#0F8B8D]/10 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-[14px] font-medium text-[#063B5C] mb-1.5">
                      Email
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#EDF1F5] bg-white text-[15px] text-[#063B5C] focus:border-[#0F8B8D] focus:ring-4 focus:ring-[#0F8B8D]/10 outline-none transition-all"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[14px] font-medium text-[#063B5C] mb-1.5">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                      <input
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#EDF1F5] bg-white text-[15px] text-[#063B5C] focus:border-[#0F8B8D] focus:ring-4 focus:ring-[#0F8B8D]/10 outline-none transition-all"
                        placeholder="+91"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[14px] font-medium text-[#063B5C] mb-1.5">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-4 top-3.5 text-[#94A3B8]" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#EDF1F5] bg-white text-[15px] text-[#063B5C] focus:border-[#0F8B8D] focus:ring-4 focus:ring-[#0F8B8D]/10 outline-none transition-all resize-none"
                      placeholder="Tell us how you'd like to help, or what you need"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#FF6B4A] text-white text-[15px] font-semibold hover:bg-[#F0572F] disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={15} />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  )
}