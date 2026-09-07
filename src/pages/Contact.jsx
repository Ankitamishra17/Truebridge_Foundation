// import { useState } from 'react'
// import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react'

// export default function Contact() {
//   const [sent, setSent] = useState(false)
//   const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

//   const handleChange = (e) => {
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Wire this up to your form backend / email service of choice
//     setSent(true)
//   }

//   return (
//     <div>
//       <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-14">
//         <p className="text-[14px] font-semibold text-[#0F8B8D]">Contact</p>
//         <h1 className="mt-3 font-display text-[36px] sm:text-[46px] leading-[1.1] font-semibold text-[#063B5C] max-w-2xl">
//           Volunteer, partner, or bring a camp to your area
//         </h1>
//         <p className="mt-5 text-[17px] leading-relaxed text-[#64748B] max-w-xl">
//           Whether you're a resident welfare association, a medical team, or someone who
//           wants to volunteer on the next camp day, we'd like to hear from you.
//         </p>
//       </section>

//       <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14">
//         <div className="space-y-8">
//           <div className="flex gap-4">
//             <span className="w-11 h-11 rounded-full bg-[#032D46] flex items-center justify-center flex-shrink-0">
//               <MapPin size={18} className="text-[#0F8B8D]" />
//             </span>
//             <div>
//               <h3 className="font-semibold text-[15px] text-[#063B5C]">Address</h3>
//               <p className="text-[15px] text-[#64748B] mt-1">Jyoti Nagar, Shahdara, Delhi NCR</p>
//             </div>
//           </div>
//           <div className="flex gap-4">
//             <span className="w-11 h-11 rounded-full bg-[#032D46] flex items-center justify-center flex-shrink-0">
//               <Phone size={18} className="text-[#0F8B8D]" />
//             </span>
//             <div>
//               <h3 className="font-semibold text-[15px] text-[#063B5C]">Phone</h3>
//               <p className="text-[15px] text-[#64748B] mt-1">+91 00000 00000</p>
//             </div>
//           </div>
//           <div className="flex gap-4">
//             <span className="w-11 h-11 rounded-full bg-[#032D46] flex items-center justify-center flex-shrink-0">
//               <Mail size={18} className="text-[#0F8B8D]" />
//             </span>
//             <div>
//               <h3 className="font-semibold text-[15px] text-[#063B5C]">Email</h3>
//               <p className="text-[15px] text-[#64748B] mt-1">contact@truebridgefoundation.org</p>
//             </div>
//           </div>

//           <div className="rounded-2xl overflow-hidden border border-[#EDF1F5] h-56 mt-2">
//             <iframe
//               title="Foundation location"
//               className="w-full h-full grayscale"
//               loading="lazy"
//               src="https://www.google.com/maps?q=Shahdara,Delhi&output=embed"
//             />
//           </div>
//         </div>

//         <div className="bg-[#FFF9F3] border border-[#EDF1F5] rounded-2xl p-7 sm:p-9">
//           {sent ? (
//             <div className="h-full flex flex-col items-center justify-center text-center py-16">
//               <CheckCircle2 size={40} className="text-[#0F8B8D]" />
//               <h3 className="mt-4 font-display text-[22px] font-semibold text-[#063B5C]">Message sent</h3>
//               <p className="mt-2 text-[15px] text-[#64748B] max-w-xs">
//                 Thanks for reaching out &#8212; someone from the team will get back to you shortly.
//               </p>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div>
//                 <label htmlFor="name" className="block text-[14px] font-medium text-[#063B5C] mb-1.5">
//                   Full name
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   required
//                   value={form.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-xl border border-[#EDF1F5] bg-white text-[15px] text-[#063B5C] focus:border-[#0F8B8D] outline-none transition-colors"
//                   placeholder="Your name"
//                 />
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 <div>
//                   <label htmlFor="email" className="block text-[14px] font-medium text-[#063B5C] mb-1.5">
//                     Email
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     value={form.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl border border-[#EDF1F5] bg-white text-[15px] text-[#063B5C] focus:border-[#0F8B8D] outline-none transition-colors"
//                     placeholder="you@email.com"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="phone" className="block text-[14px] font-medium text-[#063B5C] mb-1.5">
//                     Phone
//                   </label>
//                   <input
//                     id="phone"
//                     name="phone"
//                     value={form.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl border border-[#EDF1F5] bg-white text-[15px] text-[#063B5C] focus:border-[#0F8B8D] outline-none transition-colors"
//                     placeholder="+91"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-[14px] font-medium text-[#063B5C] mb-1.5">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows={5}
//                   value={form.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-xl border border-[#EDF1F5] bg-white text-[15px] text-[#063B5C] focus:border-[#0F8B8D] outline-none transition-colors resize-none"
//                   placeholder="Tell us how you'd like to help, or what you need"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FF6B4A] text-white text-[15px] font-semibold hover:bg-[#F0572F] transition-colors"
//               >
//                 Send message
//               </button>
//             </form>
//           )}
//         </div>
//       </section>
//     </div>
//   )
// }


import ContactForm from "../components/contact/ContactForm.jsx";
import FAQ from "../components/contact/FAQ.jsx";
import HeroSection from "../components/contact/HeroSection.jsx";


export default function OurWork() {
  return (
    <>
      <HeroSection />
   <ContactForm/>
   <FAQ/>
    
    </>
  );
}

