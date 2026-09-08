import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// Same event photo sets as the Events page — flattened here into one gallery.
// Replace the placeholder paths with your real photos; add or remove freely.
const events = [
  {
    date: "15 Dec 2024",
    type: "Health Camp",
    title: "Health Camp & Blood Donation Camp — Kanti Nagar, Shahdara",
    images: ["/image8.jpeg", "/image4.jpeg", "/image3.jpeg"],
  },
  {
    date: "15 Dec 2024",
    type: "Recognition",
    title: "Brahmin Samman Samaroh",
    images: [
      "/image21.jpeg",
      "/image18.jpeg",
      "/image15.jpeg",
      "/image23.jpeg",
    ],
  },
  {
    date: "15 Dec 2024",
    type: "Recognition",
    title: "Shivastra Dharan Samaroh — Badi Shiv Mandir",
    images: ["/image46.jpeg", "/image47.jpeg"],
  },
  {
    date: "22 Dec 2024",
    type: "Health Camp",
    title: "Health Camp — Khatu Dham, Harsh Vihar",
    images: ["/image1.jpeg", "/image6.jpeg", "/image7.jpeg"],
  },
  {
    date: "26 Jan",
    type: "Civic Program",
    title: "Republic Day: Flag Hoisting, Medical Camp & Poster Competition",
    images: ["/image41.jpeg", "/image42.jpeg", "/image43.jpeg"],
  },
];

const typeStyles = {
  "Health Camp": { bg: "#FDE7E2", text: "#FF6B4A" },
  Recognition: { bg: "#FCEFD6", text: "#C98A1F" },
  "Civic Program": { bg: "#E1F2F1", text: "#0F8B8D" },
};

// Flatten events into a single list of photos, each carrying its event context.
const photos = events.flatMap((event) =>
  event.images.map((src, i) => ({
    src,
    title: event.title,
    date: event.date,
    type: event.type,
    // Vary card height a little so the grid reads as a gallery, not a spreadsheet.
    tall: i % 3 === 1,
  })),
);

const categories = ["All", "Health Camp", "Recognition", "Civic Program"];

function Lightbox({ items, index, onClose, onNavigate, onJump }) {
  const photo = items[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(-1);
      if (e.key === "ArrowRight") onNavigate(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNavigate]);

  if (!photo) return null;
  const style = typeStyles[photo.type] ?? typeStyles["Civic Program"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#032D46]/95 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <X size={20} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(-1);
        }}
        aria-label="Previous photo"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(1);
        }}
        aria-label="Next photo"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      <motion.div
        key={photo.src}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={photo.src}
            alt={photo.title}
            className="w-full max-h-[65vh] object-contain rounded-2xl"
          />
          <span
            className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold"
            style={{ backgroundColor: style.bg, color: style.text }}
          >
            {photo.type}
          </span>
        </div>

        <div className="mt-4 text-center">
          <p className="text-white font-display text-[16px] font-semibold">
            {photo.title}
          </p>
          <p className="mt-1 text-[#B9C7D3] text-[13.5px]">
            {photo.date} · {index + 1} of {items.length}
          </p>
        </div>

        {/* Thumbnail strip for quick jumps */}
        {items.length > 1 && (
          <div className="mt-5 flex justify-center gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden">
            {items.map((p, i) => (
              <button
                key={`${p.src}-${i}`}
                onClick={() => onJump(i)}
                className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden transition-all ${
                  i === index
                    ? "ring-2 ring-[#0F8B8D] opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <img
                  src={p.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const counts = useMemo(() => {
    const c = { All: photos.length };
    categories.slice(1).forEach((cat) => {
      c[cat] = photos.filter((p) => p.type === cat).length;
    });
    return c;
  }, []);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? photos
        : photos.filter((p) => p.type === activeCategory),
    [activeCategory],
  );

  const navigate = (dir) =>
    setOpenIndex((i) =>
      i === null ? null : (i + dir + filtered.length) % filtered.length,
    );

  return (
    <section className="relative overflow-hidden bg-[#FFF9F3] py-16 sm:py-20">
      {/* decorative glows for depth, consistent with the rest of the site */}
      <span
        className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "#E1F2F1" }}
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute bottom-0 -right-16 w-64 h-64 rounded-full opacity-30 blur-3xl"
        style={{ background: "#FDE7E2" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#FF6B4A]" />
            <p className="text-[13px] font-semibold tracking-[0.14em] text-[#0F8B8D]">
              GALLERY
            </p>
          </div>
          <h1 className="mt-4 font-display text-[30px] sm:text-[40px] leading-[1.15] font-semibold text-[#063B5C]">
            Photos from the ground
          </h1>
          <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-[#64748B]">
            Every camp, celebration and small moment — captured as it happened.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-[13.5px] font-semibold border transition-colors ${
                activeCategory === cat
                  ? "bg-[#063B5C] text-white border-[#063B5C]"
                  : "bg-white text-[#64748B] border-[#EDF1F5] hover:border-[#0F8B8D]/40"
              }`}
            >
              {cat}
              <span
                className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat ? "bg-white/15" : "bg-[#EDF1F5]"
                }`}
              >
                {counts[cat]}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-10 columns-2 sm:columns-3 lg:columns-4 gap-4"
          >
            {filtered.map((photo, i) => {
              const style =
                typeStyles[photo.type] ?? typeStyles["Civic Program"];
              return (
                <motion.button
                  key={`${photo.src}-${i}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                  onClick={() => setOpenIndex(i)}
                  className={`group relative block w-full mb-4 rounded-2xl overflow-hidden bg-[#EDF1F5] border border-[#EDF1F5] break-inside-avoid shadow-[0_1px_2px_rgba(6,59,92,0.04)] hover:shadow-[0_16px_32px_-10px_rgba(6,59,92,0.2)] transition-shadow duration-300 ${
                    photo.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-semibold"
                    style={{ backgroundColor: style.bg, color: style.text }}
                  >
                    {photo.type}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#032D46]/85 via-[#032D46]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-left">
                    <p className="text-white text-[13px] font-semibold leading-snug">
                      {photo.title}
                    </p>
                    <p className="mt-1 text-white/70 text-[11.5px]">
                      {photo.date}
                    </p>
                  </div>
                  <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={14} className="text-[#063B5C]" />
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-[15px] text-[#64748B]">
            No photos in this category yet.
          </p>
        )}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            items={filtered}
            index={openIndex}
            onClose={() => setOpenIndex(null)}
            onNavigate={navigate}
            onJump={setOpenIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
