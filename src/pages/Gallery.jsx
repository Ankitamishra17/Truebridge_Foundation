// import { motion } from 'framer-motion'
// import Container from '../components/common/Container.jsx'
// import SectionHeading from '../components/common/SectionHeading.jsx'
// import ImageWithFallback from '../components/common/ImageWithFallback.jsx'

// const photos = [
//   { id: 1, alt: 'Health camp screening, Kanti Nagar', src: '/src/assets/images/gallery/photo-1.jpg' },
//   { id: 2, alt: 'Blood donation camp volunteers', src: '/src/assets/images/gallery/photo-2.jpg' },
//   { id: 3, alt: 'Felicitation ceremony with shawl', src: '/src/assets/images/gallery/photo-3.jpg' },
//   { id: 4, alt: 'Health camp at Khatu Dham', src: '/src/assets/images/gallery/photo-4.jpg' },
//   { id: 5, alt: 'Republic Day flag hoisting', src: '/src/assets/images/gallery/photo-5.jpg' },
//   { id: 6, alt: 'Poster-making competition entries', src: '/src/assets/images/gallery/photo-6.jpg' },
//   { id: 7, alt: 'Medical team at a community camp', src: '/src/assets/images/gallery/photo-7.jpg' },
//   { id: 8, alt: 'Volunteers preparing for a camp day', src: '/src/assets/images/gallery/photo-8.jpg' },
// ]

// export default function Gallery() {
//   return (
//     <div>
//       <section className="bg-[#FFF9F3]">
//         <Container className="pt-14 sm:pt-20 pb-14">
//           <p className="text-[13px] font-semibold tracking-wide text-[#0F8B8D]">GALLERY</p>
//           <SectionHeading
//             align="left"
//             className="mt-2"
//             title="Moments from our camps and ceremonies"
//             subtitle="Photos are added as each event is documented — drop real files into src/assets/images/gallery to replace these placeholders."
//           />
//         </Container>
//       </section>

//       <section className="bg-white">
//         <Container className="py-14 sm:py-16">
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
//             {photos.map((photo, i) => (
//               <motion.div
//                 key={photo.id}
//                 initial={{ opacity: 0, y: 12 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
//               >
//                 <ImageWithFallback
//                   src={photo.src}
//                   alt={photo.alt}
//                   className="w-full aspect-square"
//                   rounded="rounded-xl"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </Container>
//       </section>
//     </div>
//   )
// }


import HeroSection from "../components/gallery/HeroSection.jsx";
import GalleryGrid from "../components/gallery/GalleryGrid.jsx"


export default function OurWork() {
  return (
    <>
      <HeroSection />
     <GalleryGrid/>
    
    </>
  );
}
