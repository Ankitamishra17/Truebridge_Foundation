// import { motion } from 'framer-motion'

// const events = [
//   {
//     date: '15 Dec 2024',
//     title: 'Health Camp & Blood Donation Camp',
//     place: 'Kanti Nagar, Shahdara',
//     body: 'Limra Foundation President Hina Akhtar welcomed and honoured Neeraj Dubey (Director, Truebridge Empowerment Echo Foundation) and Sushma Dubey (Director, Taksh Panchtatv Foundation) with a ceremonial shawl at the health and blood donation camp.',
//   },
//   {
//     date: '15 Dec 2024',
//     title: 'Brahmin Samman Samaroh',
//     place: 'Local community venue, Shahdara',
//     body: 'Cabinet Minister and area MLA Gopal Rai honoured Neeraj Dubey with a shield bearing an image of Lord Parshuram, in the presence of Pritam Sharma, Ramkant Kaushik, DC Vashistha, Brijesh Sharma and SN Sharma.',
//   },
//   {
//     date: '15 Dec 2024',
//     title: 'Shivastra Dharan Samaroh',
//     place: 'Badi Shiv Mandir',
//     body: 'Jai Bhagwan Goyal, National Executive President of the United Hindu Front, honoured Neeraj Dubey with a Shivastra at the Shivastra Dharan ceremony, conducted by RWA Jyoti Nagar.',
//   },
//   {
//     date: '22 Dec 2024',
//     title: 'Health Camp',
//     place: 'Khatu Dham, Harsh Vihar',
//     body: 'A dedicated health camp offered eye examinations, sugar testing, blood pressure checks and dental check-ups, conducted by the Sharp Sight medical team including Anurag Sharma and Mohan.',
//   },
//   {
//     date: '26 Jan',
//     title: 'Republic Day: Flag Hoisting, Medical Camp & Poster Competition',
//     place: 'Community grounds',
//     body: 'Directors Neeraj Dubey and Arun Dubey organised a Republic Day flag hoisting alongside a free medical camp for local residents and a children\u2019s poster-making competition on anaemia awareness and environmental protection. Chief guests included actor Lodhi Rakesh Rajput and Cabinet Minister Gopal Rai, joined by municipal councillor Mukesh Bansal and BJP candidate Anil Vashisth.',
//   },
// ]

// export default function Events() {
//   return (
//     <div>
//       <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-14">
//         <p className="text-[14px] font-semibold text-[#0F8B8D]">Events</p>
//         <h1 className="mt-3 font-display text-[36px] sm:text-[46px] leading-[1.1] font-semibold text-[#063B5C] max-w-2xl">
//           A record of camps, ceremonies and civic days
//         </h1>
//         <p className="mt-5 text-[17px] leading-relaxed text-[#64748B] max-w-xl">
//           Every entry below is a real event we've run or taken part in, in the order it happened.
//         </p>
//       </section>

//       <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
//         <div className="relative pl-8 sm:pl-10">
//           <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-[#EDF1F5]" />
//           <div className="space-y-12">
//             {events.map((e, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 14 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.05 }}
//                 className="relative"
//               >
//                 <span className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-[#FF6B4A] border-4 border-white" />
//                 <p className="font-display text-[14px] font-semibold text-[#0F8B8D]">{e.date}</p>
//                 <h2 className="mt-1.5 font-display text-[22px] sm:text-[24px] font-semibold text-[#063B5C]">
//                   {e.title}
//                 </h2>
//                 <p className="text-[13px] font-medium text-[#64748B] mt-1">{e.place}</p>
//                 <p className="mt-3 text-[15px] leading-relaxed text-[#64748B] max-w-2xl">{e.body}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

import HeroSection from "../components/event/HeroSection.jsx";
import EventGrid from "../components/event/EventGrid.jsx";



export default function OurEvent() {
  return (
    <>
      <HeroSection />
     <EventGrid/>
    
    </>
  );
}
