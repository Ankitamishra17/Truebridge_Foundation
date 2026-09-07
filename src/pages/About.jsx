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

import HeroSection from "../components/about/HeroSection.jsx";
import OurImpact from "../components/about/OurImpact.jsx";
import OurMission from "../components/about/OurMission.jsx";
import OurStory from "../components/about/OurStory.jsx";
import PresidentMessage from "../components/about/PresidentMessage.jsx";
import OurLeader from "../components/about/OurLeader.jsx"

export default function About() {
  return (
    <>
      <HeroSection />
      <OurMission/>
      <OurStory/>
      <OurImpact/>
      <PresidentMessage/>
      <OurLeader/>
    </>
  );
}
