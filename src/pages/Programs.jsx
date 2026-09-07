// import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'
// import {
//   HeartPulse,
//   Droplets,
//   Award,
//   Megaphone,
//   ArrowUpRight,
//   FlagTriangleRight,
//   Stethoscope,
//   Palette,
// } from 'lucide-react'

// const programs = [
//   {
//     icon: HeartPulse,
//     title: 'Health camps',
//     lede: 'Free screening, brought to the neighbourhood',
//     body: 'Working with partner medical teams, we set up single-day camps offering eye examinations, sugar and blood-pressure testing, and dental check-ups. Camps are hosted at community grounds, temples and residential complexes so nobody has to travel far for a basic health check.',
//   },
//   {
//     icon: Droplets,
//     title: 'Blood donation drives',
//     lede: 'Keeping local blood banks stocked',
//     body: 'Run jointly with partner foundations, these camps combine a health check-up with voluntary blood donation, supporting hospitals and blood banks that serve the wider Shahdara area.',
//   },
//   {
//     icon: Award,
//     title: 'Community recognition',
//     lede: 'Honouring the people who show up',
//     body: 'From felicitation with a ceremonial shawl to civic and cultural honours presented by local dignitaries, we mark the contribution of doctors, elders, RWA members and volunteers whose work often goes unnoticed.',
//   },
//   {
//     icon: Megaphone,
//     title: 'Civic & cultural programs',
//     lede: 'Flag hoisting, competitions and youth outreach',
//     body: 'On occasions like Republic Day, we organise flag hoisting alongside a medical camp and a poster-making competition for children, with past themes covering anaemia awareness and environmental protection.',
//   },
// ]

// const storyFacts = [
//   {
//     icon: FlagTriangleRight,
//     label: 'Flag hoisting',
//     detail: 'Led by directors Neeraj Dubey and Arun Dubey to mark Republic Day.',
//   },
//   {
//     icon: Stethoscope,
//     label: 'Medical camp',
//     detail: 'Free health check-ups and consultations for local residents.',
//   },
//   {
//     icon: Palette,
//     label: 'Poster-making competition',
//     detail: 'Children presented ideas on "Anaemia" and "Ways to protect the environment."',
//   },
// ]

// export default function OurWork() {
//   return (
//     <div>
//       <section className="relative overflow-hidden bg-[#032D46]">
//         <div
//           className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-25 blur-3xl"
//           style={{ background: 'radial-gradient(circle, #0F8B8D 0%, transparent 70%)' }}
//           aria-hidden="true"
//         />
//         <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-14 sm:pb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <p className="text-[14px] font-semibold text-[#0F8B8D]">Our work</p>
//             <h1 className="mt-3 font-display text-[38px] sm:text-[52px] leading-[1.08] font-semibold text-white max-w-2xl">
//               Four kinds of work, one purpose — a healthier, more connected neighbourhood.
//             </h1>
//             <p className="mt-5 text-[17px] leading-relaxed text-[#B9C7D3] max-w-lg">
//               We run health camps, blood donation drives, community recognition events and civic
//               programs across New Delhi's Shahdara area — mostly free of cost, mostly on the
//               ground, mostly led by people from the neighbourhood.
//             </p>
//             <div className="mt-8 flex flex-wrap items-center gap-4">
//               <a
//                 href="#programs"
//                 className="px-7 py-3.5 rounded-full bg-[#FF6B4A] text-white text-[15px] font-semibold hover:bg-[#E85A3A] transition-colors inline-flex items-center gap-1.5"
//               >
//                 See our programs <ArrowUpRight size={16} />
//               </a>
//               <a
//                 href="#spotlight"
//                 className="text-[15px] font-semibold text-white/90 hover:text-white transition-colors underline underline-offset-4 decoration-white/30"
//               >
//                 Read our latest story
//               </a>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             className="mt-14 sm:mt-16 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-8"
//           >
//             {[
//               { value: '4', label: 'areas of work' },
//               { value: 'Shahdara', label: 'and nearby neighbourhoods' },
//               { value: 'Free', label: 'for everyone who attends' },
//             ].map((stat) => (
//               <div key={stat.label}>
//                 <p className="font-display text-[24px] font-semibold text-white">{stat.value}</p>
//                 <p className="text-[14px] text-[#B9C7D3]">{stat.label}</p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       <section id="programs" className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-20 pb-20">
//         <div className="divide-y divide-[#EDF1F5] border-y border-[#EDF1F5]">
//           {programs.map((p, i) => (
//             <motion.div
//               key={p.title}
//               initial={{ opacity: 0, y: 14 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.06 }}
//               className="py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 sm:gap-10"
//             >
//               <span className="w-12 h-12 rounded-full bg-[#032D46] flex items-center justify-center flex-shrink-0">
//                 <p.icon size={20} className="text-[#0F8B8D]" />
//               </span>
//               <div>
//                 <p className="text-[13px] font-semibold text-[#0F8B8D]">{p.lede}</p>
//                 <h2 className="mt-1 font-display text-[24px] sm:text-[28px] font-semibold text-[#063B5C]">
//                   {p.title}
//                 </h2>
//                 <p className="mt-3 text-[16px] leading-relaxed text-[#64748B] max-w-2xl">{p.body}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Spotlight: Republic Day on the ground */}
//       <section id="spotlight" className="bg-[#FFF9F3]">
//         <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
//             <motion.div
//               initial={{ opacity: 0, y: 14 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <p className="text-[13px] font-semibold text-[#0F8B8D]">From the ground · 26 January</p>
//               <h2 className="mt-2 font-display text-[26px] sm:text-[32px] font-semibold text-[#063B5C] leading-tight">
//                 Republic Day in New Delhi: flags, free check-ups and young voices
//               </h2>
//               <p className="mt-4 text-[16px] leading-relaxed text-[#64748B] max-w-md">
//                 Truebridge Empowerment Echo Foundation marked Republic Day with a flag-hoisting
//                 ceremony led by directors Neeraj Dubey and Arun Dubey, followed by a free medical
//                 camp for local residents. Children took part in a poster-making competition,
//                 turning serious public-health and environmental themes into their own artwork.
//                 Actor Lodhi Rakesh Rajput joined as chief guest.
//               </p>
//               <Link
//                 to="/events"
//                 className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#0F8B8D] hover:text-[#0C7375] transition-colors"
//               >
//                 See more from our events <ArrowUpRight size={16} />
//               </Link>
//             </motion.div>

//             <div className="space-y-5">
//               {storyFacts.map((f, i) => (
//                 <motion.div
//                   key={f.label}
//                   initial={{ opacity: 0, y: 14 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
//                   className="flex items-start gap-4 bg-white rounded-2xl p-5 sm:p-6 border border-[#EDF1F5]"
//                 >
//                   <span className="w-11 h-11 rounded-full bg-[#032D46] flex items-center justify-center flex-shrink-0">
//                     <f.icon size={18} className="text-[#0F8B8D]" />
//                   </span>
//                   <div>
//                     <h3 className="font-display text-[17px] font-semibold text-[#063B5C]">{f.label}</h3>
//                     <p className="mt-1 text-[15px] leading-relaxed text-[#64748B]">{f.detail}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* President's message */}
//       <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 14 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 sm:gap-10 items-start"
//         >
//           <span className="w-14 h-14 rounded-full bg-[#0F8B8D] flex items-center justify-center flex-shrink-0 text-white font-display text-[20px] font-semibold">
//             MB
//           </span>
//           <div>
//             <p className="text-[13px] font-semibold text-[#0F8B8D]">A note from our President</p>
//             <p className="mt-3 font-hand text-[26px] sm:text-[30px] leading-snug text-[#063B5C] max-w-2xl">
//               Healthcare and justice shouldn't be a privilege — they should be a right for everyone.
//             </p>
//             <p className="mt-4 text-[16px] leading-relaxed text-[#64748B] max-w-2xl">
//               I'm driven by women's empowerment and social welfare, and by building an
//               organisation that offers medical assistance, legal support and everyday guidance to
//               women and anyone in need. My work here is about counselling and standing beside
//               people so they can become self-reliant and confident — and about staying on the
//               ground, learning as we go, so this stays real, useful work rather than a distant
//               promise.
//             </p>
//             <p className="mt-5 font-display text-[16px] font-semibold text-[#063B5C]">
//               Mayank Bansal
//             </p>
//             <p className="text-[14px] text-[#64748B]">President, Truebridge Empowerment Echo Foundation</p>
//           </div>
//         </motion.div>
//       </section>

//       <section className="bg-[#032D46]">
//         <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
//           <h2 className="font-display text-[26px] sm:text-[30px] font-semibold text-white max-w-md">
//             See how these programs have run on the ground
//           </h2>
//           <Link
//             to="/events"
//             className="flex-shrink-0 px-7 py-3.5 rounded-full bg-[#0F8B8D] text-[#063B5C] text-[15px] font-semibold hover:bg-[#0C7375] transition-colors inline-flex items-center gap-1.5"
//           >
//             View events <ArrowUpRight size={16} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   )
// }


// import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'

// const directors = [
//   {
//     name: 'Neeraj Dubey',
//     role: 'Director',
//     bio: 'Leads Truebridge\u2019s health camps and civic programs across Shahdara and neighbouring Delhi NCR, working closely with local RWAs and medical partners.',
//   },
//   {
//     name: 'Arun Dubey',
//     role: 'Director',
//     bio: 'Co-leads community and civic-day programs, including the foundation\u2019s Republic Day flag hoisting, medical camp and youth poster-making competition.',
//   },
// ]

// const partners = [
//   'RWA Jyoti Nagar',
//   'Sharp Sight Medical Team',
//   'Limra Foundation',
//   'Taksh Panchtatv Foundation',
//   'United Hindu Front',
// ]

// export default function About() {
//   return (
//     <div>
//       <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-14">
//         <p className="text-[14px] font-semibold text-[#0F8B8D]">About us</p>
//         <h1 className="mt-3 font-display text-[36px] sm:text-[46px] leading-[1.1] font-semibold text-[#063B5C] max-w-2xl">
//           A neighbourhood foundation built on health camps, honest volunteering and local partnerships.
//         </h1>
//         <p className="mt-6 text-[17px] leading-relaxed text-[#64748B] max-w-2xl">
//           Truebridge Empowerment Echo Foundation works in and around Shahdara, Delhi NCR,
//           organising free health camps, blood donation drives and civic-awareness events.
//           We work alongside resident welfare associations, medical teams and local
//           well-wishers rather than at a distance from them — most of what we do starts
//           with a neighbourhood asking for a camp, and ends with volunteers from that same
//           neighbourhood running it.
//         </p>
//       </section>

//       {/* Directors */}
//       <section className="bg-[#FFF9F3] border-y border-[#EDF1F5]">
//         <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
//           <h2 className="font-display text-[28px] sm:text-[32px] font-semibold text-[#063B5C]">Leadership</h2>
//           <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
//             {directors.map((d, i) => (
//               <motion.div
//                 key={d.name}
//                 initial={{ opacity: 0, y: 14 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="bg-white rounded-2xl border border-[#EDF1F5] p-7"
//               >
//                 <span className="w-14 h-14 rounded-full bg-[#063B5C] text-white font-display font-semibold text-[19px] flex items-center justify-center">
//                   {d.name.split(' ').map((n) => n[0]).join('')}
//                 </span>
//                 <h3 className="mt-5 font-display text-[20px] font-semibold text-[#063B5C]">{d.name}</h3>
//                 <p className="text-[14px] font-medium text-[#0F8B8D]">{d.role}</p>
//                 <p className="mt-3 text-[15px] leading-relaxed text-[#64748B]">{d.bio}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Partners */}
//       <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
//         <h2 className="font-display text-[28px] sm:text-[32px] font-semibold text-[#063B5C] max-w-lg">
//           Organisations we've worked alongside
//         </h2>
//         <p className="mt-3 text-[15px] text-[#64748B] max-w-lg">
//           Every camp is a joint effort — here are some of the foundations, teams and
//           associations that have partnered with us on the ground.
//         </p>
//         <ul className="mt-8 flex flex-wrap gap-3">
//           {partners.map((p) => (
//             <li
//               key={p}
//               className="px-5 py-2.5 rounded-full border border-[#EDF1F5] text-[14px] font-medium text-[#063B5C] bg-[#FFF9F3]"
//             >
//               {p}
//             </li>
//           ))}
//         </ul>
//       </section>

//       <section className="bg-[#032D46]">
//         <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
//           <h2 className="font-display text-[26px] sm:text-[30px] font-semibold text-white max-w-md">
//             Want to partner with us on a camp?
//           </h2>
//           <Link
//             to="/contact"
//             className="flex-shrink-0 px-7 py-3.5 rounded-full bg-[#0F8B8D] text-[#063B5C] text-[15px] font-semibold hover:bg-[#0C7375] transition-colors"
//           >
//             Get in touch
//           </Link>
//         </div>
//       </section>
//     </div>
//   )
// }

import HeroSection from "../components/work/HeroSection.jsx";
import OurProgram from "../components/work/OurProgram.jsx"
import Spotlight from "../components/work/SpotLight.jsx";
import WorkInAction from "../components/work/workInAction.jsx";


export default function OurWork() {
  return (
    <>
      <HeroSection />
      <OurProgram/>
      <Spotlight/>
      <WorkInAction/>
    
    </>
  );
}
