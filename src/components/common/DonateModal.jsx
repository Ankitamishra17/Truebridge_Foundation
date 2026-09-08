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
          className="fixed inset-0 z-[100] bg-[#032D46]/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={resetAndClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* header */}
            <div className="relative bg-gradient-to-br from-[#0F8B8D] to-[#063B5C] px-6 pt-5 pb-6">
              <button
                onClick={resetAndClose}
                aria-label="Close"
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
              <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                <Heart size={18} className="text-white fill-white" />
              </span>
              <h2 className="mt-3 font-display font-semibold text-[19px] text-white">
                Make a Donation
              </h2>
              <p className="text-[13px] text-white/70 mt-0.5">
                Fill in your details and we'll take it from there.
              </p>
            </div>

            <div className="px-6 py-5">
              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center text-center py-6"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
                      className="w-14 h-14 rounded-full bg-[#EAF8F7] flex items-center justify-center"
                    >
                      <CheckCircle2 size={28} className="text-[#0F8B8D]" />
                    </motion.span>
                    <h3 className="mt-4 font-display text-[19px] font-semibold text-[#063B5C]">
                      Thank you, {form.name.split(' ')[0] || 'friend'}!
                    </h3>
                    <p className="mt-2 text-[13.5px] text-[#64748B] max-w-xs">
                      We've received your details and someone from our team will reach
                      out to {form.email || 'you'} shortly.
                    </p>
                    <button
                      onClick={resetAndClose}
                      className="mt-5 text-[14px] font-semibold text-[#FF6B4A] hover:underline"
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
                    className="space-y-3.5"
                  >
                    <div className="relative">
                      <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#EDF1F5] bg-white text-[14px] text-[#063B5C] focus:border-[#0F8B8D] focus:ring-4 focus:ring-[#0F8B8D]/10 outline-none transition-all"
                        placeholder="Full name"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                        <input
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-2 py-2.5 rounded-xl border border-[#EDF1F5] bg-white text-[14px] text-[#063B5C] focus:border-[#0F8B8D] focus:ring-4 focus:ring-[#0F8B8D]/10 outline-none transition-all"
                          placeholder="Email"
                        />
                      </div>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                        <input
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-2 py-2.5 rounded-xl border border-[#EDF1F5] bg-white text-[14px] text-[#063B5C] focus:border-[#0F8B8D] focus:ring-4 focus:ring-[#0F8B8D]/10 outline-none transition-all"
                          placeholder="Phone"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <MapPin size={15} className="absolute left-3.5 top-3 text-[#94A3B8]" />
                      <textarea
                        name="address"
                        required
                        rows={2}
                        value={form.address}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#EDF1F5] bg-white text-[14px] text-[#063B5C] focus:border-[#0F8B8D] focus:ring-4 focus:ring-[#0F8B8D]/10 outline-none transition-all resize-none"
                        placeholder="Address"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF6B4A] text-white text-[14.5px] font-semibold hover:brightness-105 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Heart size={14} className="fill-white" />
                          Donate Now
                        </>
                      )}
                    </button>

                    <p className="text-[11.5px] text-center text-[#94A3B8]">
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