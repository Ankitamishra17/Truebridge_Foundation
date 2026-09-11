import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Camera,
  Video,
} from "lucide-react";

/* =========================================================
   EVENTS / PHOTOS
========================================================= */

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

/* =========================================================
   VIDEO DATA
========================================================= */

const videos = [
  {
    title: "Swachh Bharat Abhiyan",
    date: "7 June 2026",
    src: "/videos/video1.mp4",
  },
  {
    title: "Swachh Bharat Abhiyan",
    date: "7 June 2026",
    src: "/videos/video2.mp4",
  },
  {
    title: "Swachh Bharat Abhiyan",
    date: "7 June 2026",
    src: "/videos/video3.mp4",
  },
  {
    title: "Swachh Bharat Abhiyan",
    date: "7 June 2026",
    src: "/videos/video4.mp4",
  },
  {
    title: "Swachh Bharat Abhiyan",
    date: "7 June 2026",
    src: "/videos/video5.mp4",
  },
  {
    title: "Swachh Bharat Abhiyan",
    date: "7 June 2026",
    src: "/videos/video6.mp4",
  },
  {
    title: "",
    date: "",
    src: "/videos/video7.mp4",
  },
  {
    title: "",
    date: "",
    src: "/videos/video8.mp4",
  },
];

/* =========================================================
   CATEGORY COLORS
========================================================= */

const typeStyles = {
  "Health Camp": {
    bg: "#FDE7E2",
    text: "#FF6634",
  },

  Recognition: {
    bg: "#FCEFD6",
    text: "#C98A1F",
  },

  "Civic Program": {
    bg: "#E1F2F1",
    text: "#00A85A",
  },
};

/* =========================================================
   FLATTEN PHOTOS
========================================================= */

const photos = events.flatMap((event) =>
  event.images.map((src, i) => ({
    src,
    title: event.title,
    date: event.date,
    type: event.type,
    tall: i % 3 === 1,
  })),
);

const categories = [
  "All",
  "Health Camp",
  "Recognition",
  "Civic Program",
];

/* =========================================================
   PHOTO LIGHTBOX
========================================================= */

function Lightbox({ items, index, onClose, onNavigate, onJump }) {
  const photo = items[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "ArrowLeft") {
        onNavigate(-1);
      }

      if (e.key === "ArrowRight") {
        onNavigate(1);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onNavigate]);

  if (!photo) {
    return null;
  }

  const style =
    typeStyles[photo.type] ?? typeStyles["Civic Program"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        fixed
        inset-0
        z-50
        bg-[#032D46]/95
        flex
        items-center
        justify-center
        px-4
      "
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="
          absolute
          top-5
          right-5
          w-10
          h-10
          rounded-full
          bg-white/10
          text-white
          flex
          items-center
          justify-center
          hover:bg-white/20
          transition-colors
        "
      >
        <X size={20} />
      </button>

      {/* Previous */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(-1);
        }}
        aria-label="Previous photo"
        className="
          absolute
          left-3
          sm:left-6
          top-1/2
          -translate-y-1/2
          w-11
          h-11
          rounded-full
          bg-white/10
          text-white
          flex
          items-center
          justify-center
          hover:bg-white/20
          transition-colors
        "
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(1);
        }}
        aria-label="Next photo"
        className="
          absolute
          right-3
          sm:right-6
          top-1/2
          -translate-y-1/2
          w-11
          h-11
          rounded-full
          bg-white/10
          text-white
          flex
          items-center
          justify-center
          hover:bg-white/20
          transition-colors
        "
      >
        <ChevronRight size={20} />
      </button>

      {/* Content */}
      <motion.div
        key={photo.src}
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className="max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={photo.src}
            alt={photo.title}
            className="
              w-full
              max-h-[65vh]
              object-contain
              rounded-2xl
            "
          />

          <span
            className="
              absolute
              top-3
              left-3
              px-2.5
              py-1
              rounded-md
              text-[11px]
              font-semibold
            "
            style={{
              backgroundColor: style.bg,
              color: style.text,
            }}
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

        {/* Thumbnail strip for photos only */}
        {items.length > 1 && (
          <div
            className="
              mt-5
              flex
              justify-center
              gap-2
              overflow-x-auto
              pb-1
              [&::-webkit-scrollbar]:hidden
            "
          >
            {items.map((p, i) => (
              <button
                key={`${p.src}-${i}`}
                onClick={() => onJump(i)}
                className={`
                  flex-shrink-0
                  w-14
                  h-14
                  rounded-lg
                  overflow-hidden
                  transition-all
                  ${
                    i === index
                      ? "ring-2 ring-[#00A85A] opacity-100"
                      : "opacity-50 hover:opacity-80"
                  }
                `}
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

/* =========================================================
   VIDEO CARD
========================================================= */

function VideoCard({ video }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        bg-white
        border
        border-[#EDF1F5]
        shadow-[0_1px_2px_rgba(62,64,149,0.04)]
        hover:shadow-[0_16px_32px_-10px_rgba(62,64,149,0.2)]
        transition-shadow
        duration-300
      "
    >
      {/* VIDEO */}
      <div className="relative aspect-video overflow-hidden bg-[#032D46]">
        <video
          src={video.src}
          controls
          preload="metadata"
          className="w-full h-full object-cover"
        />

        {/* Video badge */}
        <span
          className="
            absolute
            top-3
            left-3
            inline-flex
            items-center
            gap-1.5
            px-2.5
            py-1
            rounded-md
            bg-[#3E4095]
            text-white
            text-[10px]
            font-semibold
            pointer-events-none
          "
        >
          <Video size={12} />
          VIDEO
        </span>
      </div>

      {/* Video information */}
      <div className="p-4">
        <h3
          className="
            font-display
            text-[15px]
            font-semibold
            text-[#3E4095]
            leading-snug
          "
        >
          {video.title}
        </h3>

        <p className="mt-1 text-[12px] text-[#64748B]">
          {video.date}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN GALLERY
========================================================= */

export default function Gallery() {
  const [galleryType, setGalleryType] = useState("Photos");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  /* =======================================================
     PHOTO COUNTS
  ======================================================= */

  const counts = useMemo(() => {
    const c = {
      All: photos.length,
    };

    categories.slice(1).forEach((cat) => {
      c[cat] = photos.filter(
        (p) => p.type === cat,
      ).length;
    });

    return c;
  }, []);

  /* =======================================================
     FILTERED PHOTOS
  ======================================================= */

  const filtered = useMemo(() => {
    if (activeCategory === "All") {
      return photos;
    }

    return photos.filter(
      (p) => p.type === activeCategory,
    );
  }, [activeCategory]);

  /* =======================================================
     LIGHTBOX NAVIGATION
  ======================================================= */

  const navigate = (dir) => {
    setOpenIndex((i) =>
      i === null
        ? null
        : (i + dir + filtered.length) %
          filtered.length,
    );
  };

  /* =======================================================
     MAIN UI
  ======================================================= */

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FFF9F3]
        py-16
        sm:py-20
      "
    >
      {/* =================================================
          DECORATIVE BACKGROUND
      ================================================= */}

      <span
        className="
          pointer-events-none
          absolute
          -top-20
          -left-20
          w-72
          h-72
          rounded-full
          opacity-30
          blur-3xl
        "
        style={{
          background: "#E1F2F1",
        }}
        aria-hidden="true"
      />

      <span
        className="
          pointer-events-none
          absolute
          bottom-0
          -right-16
          w-64
          h-64
          rounded-full
          opacity-30
          blur-3xl
        "
        style={{
          background: "#FDE7E2",
        }}
        aria-hidden="true"
      />

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#FF6634]" />

            <p className="text-[13px] font-semibold tracking-[0.14em] text-[#00A85A]">
              GALLERY
            </p>

            <span className="w-6 h-px bg-[#FF6634]" />
          </div>

          <h1
            className="
              mt-4
              font-display
              text-[30px]
              sm:text-[40px]
              leading-[1.15]
              font-semibold
              text-[#3E4095]
            "
          >
            Moments That Matter
          </h1>

          <p
            className="
              mt-3
              text-[15px]
              sm:text-[16px]
              leading-relaxed
              text-[#64748B]
            "
          >
            Every camp, celebration and small moment —
            captured as it happened.
          </p>
        </div>

        {/* =================================================
            MAIN PHOTO / VIDEO BUTTONS
        ================================================= */}

        <div className="mt-8 flex justify-center">
          <div
            className="
              inline-flex
              items-center
              gap-1
              p-1
              rounded-xl
              bg-white
              border
              border-[#E6E7F2]
              shadow-sm
            "
          >
            {/* PHOTO BUTTON */}
            <button
              type="button"
              onClick={() => {
                setGalleryType("Photos");
                setOpenIndex(null);
              }}
              className={`
                inline-flex
                items-center
                justify-center
                gap-2
                px-6
                py-2.5
                rounded-lg
                text-[14px]
                font-semibold
                transition-all
                duration-200
                ${
                  galleryType === "Photos"
                    ? "bg-[#3E4095] text-white shadow-sm"
                    : "text-[#64748B] hover:text-[#3E4095] hover:bg-[#F5F5FA]"
                }
              `}
            >
              <Camera size={17} />

              Photos

              <span
                className={`
                  px-1.5
                  py-0.5
                  rounded-full
                  text-[10px]
                  ${
                    galleryType === "Photos"
                      ? "bg-white/15 text-white"
                      : "bg-[#EDF1F5] text-[#64748B]"
                  }
                `}
              >
                {photos.length}
              </span>
            </button>

            {/* VIDEO BUTTON */}
            <button
              type="button"
              onClick={() => {
                setGalleryType("Videos");
                setOpenIndex(null);
              }}
              className={`
                inline-flex
                items-center
                justify-center
                gap-2
                px-6
                py-2.5
                rounded-lg
                text-[14px]
                font-semibold
                transition-all
                duration-200
                ${
                  galleryType === "Videos"
                    ? "bg-[#3E4095] text-white shadow-sm"
                    : "text-[#64748B] hover:text-[#3E4095] hover:bg-[#F5F5FA]"
                }
              `}
            >
              <Video size={17} />

              Videos

              <span
                className={`
                  px-1.5
                  py-0.5
                  rounded-full
                  text-[10px]
                  ${
                    galleryType === "Videos"
                      ? "bg-white/15 text-white"
                      : "bg-[#EDF1F5] text-[#64748B]"
                  }
                `}
              >
                {videos.length}
              </span>
            </button>
          </div>
        </div>

        {/* =================================================
            PHOTOS SECTION
        ================================================= */}

        {galleryType === "Photos" && (
          <>
            {/* PHOTO CATEGORIES */}
            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(null);
                  }}
                  className={`
                    inline-flex
                    items-center
                    gap-1.5
                    px-4
                    py-2
                    rounded-md
                    text-[13.5px]
                    font-semibold
                    border
                    transition-colors
                    ${
                      activeCategory === cat
                        ? "bg-[#3E4095] text-white border-[#3E4095]"
                        : "bg-white text-[#64748B] border-[#EDF1F5] hover:border-[#00A85A]/40"
                    }
                  `}
                >
                  {cat}

                  <span
                    className={`
                      text-[11px]
                      px-1.5
                      py-0.5
                      rounded-full
                      ${
                        activeCategory === cat
                          ? "bg-white/15"
                          : "bg-[#EDF1F5]"
                      }
                    `}
                  >
                    {counts[cat]}
                  </span>
                </button>
              ))}
            </div>

            {/* PHOTO GRID */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  mt-10
                  columns-2
                  sm:columns-3
                  lg:columns-4
                  gap-4
                "
              >
                {filtered.map((photo, i) => {
                  const style =
                    typeStyles[photo.type] ??
                    typeStyles["Civic Program"];

                  return (
                    <motion.button
                      key={`${photo.src}-${i}`}
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        margin: "-40px",
                      }}
                      transition={{
                        duration: 0.4,
                        delay: (i % 8) * 0.04,
                      }}
                      onClick={() => setOpenIndex(i)}
                      className={`
                        group
                        relative
                        block
                        w-full
                        mb-4
                        rounded-2xl
                        overflow-hidden
                        bg-[#EDF1F5]
                        border
                        border-[#EDF1F5]
                        break-inside-avoid
                        shadow-[0_1px_2px_rgba(62,64,149,0.04)]
                        hover:shadow-[0_16px_32px_-10px_rgba(62,64,149,0.2)]
                        transition-shadow
                        duration-300
                        ${
                          photo.tall
                            ? "aspect-[3/4]"
                            : "aspect-[4/3]"
                        }
                      `}
                    >
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />

                      {/* Category */}
                      <span
                        className="
                          absolute
                          top-3
                          left-3
                          px-2.5
                          py-1
                          rounded-md
                          text-[10px]
                          font-semibold
                        "
                        style={{
                          backgroundColor: style.bg,
                          color: style.text,
                        }}
                      >
                        {photo.type}
                      </span>

                      {/* Hover content */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#032D46]/85
                          via-[#032D46]/10
                          to-transparent
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          flex
                          flex-col
                          justify-end
                          p-4
                          text-left
                        "
                      >
                        <p className="text-white text-[13px] font-semibold leading-snug">
                          {photo.title}
                        </p>

                        <p className="mt-1 text-white/70 text-[11.5px]">
                          {photo.date}
                        </p>
                      </div>

                      {/* Zoom */}
                      <span
                        className="
                          absolute
                          top-3
                          right-3
                          w-8
                          h-8
                          rounded-full
                          bg-white/90
                          flex
                          items-center
                          justify-center
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                        "
                      >
                        <ZoomIn
                          size={14}
                          className="text-[#3E4095]"
                        />
                      </span>
                    </motion.button>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Empty */}
            {filtered.length === 0 && (
              <p className="mt-10 text-center text-[15px] text-[#64748B]">
                No photos in this category yet.
              </p>
            )}
          </>
        )}

        {/* =================================================
            VIDEOS SECTION
        ================================================= */}

        {galleryType === "Videos" && (
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              mt-10
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5
            "
          >
            {videos.map((video, i) => (
              <VideoCard
                key={`${video.src}-${i}`}
                video={video}
              />
            ))}
          </motion.div>
        )}

        {/* No videos */}
        {galleryType === "Videos" &&
          videos.length === 0 && (
            <p className="mt-10 text-center text-[15px] text-[#64748B]">
              No videos available yet.
            </p>
          )}
      </div>

      {/* =================================================
          PHOTO LIGHTBOX
      ================================================= */}

      <AnimatePresence>
        {galleryType === "Photos" &&
          openIndex !== null && (
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