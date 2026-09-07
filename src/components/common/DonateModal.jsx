import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Heart, CheckCircle2, Loader2, User, Mail, Phone, MapPin } from 'lucide-react'

export default function DonateModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const resetAndClose = () => {
    onClose()
    setTimeout(() => {
      setStatus('idle')
      setForm({ name: '', email: '', phone: '', address: '' })
    }, 300)
  }

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire this up to your payment gateway / backend of choice
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 900)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[100] bg-[#032D46]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={resetAndClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 flex items-center justify-between px-6 sm:px-7 pt-6 pb-4 bg-white border-b border-[#EDF1F5]">
              <div className="flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-full bg-[#FFF0EC] flex items-center justify-center">
                  <Heart size={16} className="text-[#FF6B4A] fill-[#FF6B4A]" />
                </span>
                <h2 className="font-display font-semibold text-[18px] text-[#063B5C]">
                  Make a Donation
                </h2>
              </div>
              <button
                onClick={resetAndClose}
                aria-label="Close"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#64748B] hover:bg-[#FAFAF8] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 sm:px-7 py-6">
              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-[#EAF8F7] flex items-center justify-center"
                    >
                      <CheckCircle2 size={32} className="text-[#0F8B8D]" />
                    </motion.span>
                    <h3 className="mt-5 font-display text-[20px] font-semibold text-[#063B5C]">
                      Thank you, {form.name.split(' ')[0] || 'friend'}!
                    </h3>
                    <p className="mt-2 text-[14px] text-[#64748B] max-w-xs">
                      We've received your details and someone from our team will reach
                      out to {form.email || 'you'} shortly to complete your donation.
                    </p>
                    <button
                      onClick={resetAndClose}
                      className="mt-6 text-[14px] font-semibold text-[#FF6B4A] hover:underline"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <label htmlFor="donor-name" className="block text-[14px] font-medium text-[#063B5C] mb-1.5">
                        Full name
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                        <input
                          id="donor-name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#EDF1F5] bg-white text-[15px] text-[#063B5C] focus:border-[#0F8B8D] focus:ring-4 focus:ring-[#0F8B8D]/10 outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="donor-email" className="block text-[14px] font-medium text-[#063B5C] mb-1.5">
                        Email
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                        <input
                          id="donor-email"
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
                      <label htmlFor="donor-phone" className="block text-[14px] font-medium text-[#063B5C] mb-1.5">
                        Phone number
                      </label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                        <input
                          id="donor-phone"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#EDF1F5] bg-white text-[15px] text-[#063B5C] focus:border-[#0F8B8D] focus:ring-4 focus:ring-[#0F8B8D]/10 outline-none transition-all"
                          placeholder="+91"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="donor-address" className="block text-[14px] font-medium text-[#063B5C] mb-1.5">
                        Address
                      </label>
                      <div className="relative">
                        <MapPin size={16} className="absolute left-4 top-3.5 text-[#94A3B8]" />
                        <textarea
                          id="donor-address"
                          name="address"
                          required
                          rows={3}
                          value={form.address}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#EDF1F5] bg-white text-[15px] text-[#063B5C] focus:border-[#0F8B8D] focus:ring-4 focus:ring-[#0F8B8D]/10 outline-none transition-all resize-none"
                          placeholder="Your address"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#FF6B4A] text-white text-[15px] font-semibold hover:bg-[#F0572F] disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 size={17} className="animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Heart size={15} className="fill-white" />
                          Donate Now
                        </>
                      )}
                    </button>

                    <p className="text-[12px] text-center text-[#94A3B8]">
                      Secure • 100% goes toward our programs
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}