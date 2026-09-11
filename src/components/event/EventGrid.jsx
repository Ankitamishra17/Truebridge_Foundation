
import { useEffect, useMemo, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Award,
  Megaphone,
  Users,
  ShieldCheck,
  Droplets,
  Sparkles,
  X,
  Images,
} from "lucide-react";

const EVENTS_PER_PAGE = 6;

const events = [
  {
    id: 1,
    date: "15 Dec 2024",
    title: "Health Camp & Blood Donation Camp",
    category: "Health Camp",
    location: "Kanti Nagar, Shahdara, Delhi",
    description:
      "A community health and blood donation camp was organized to provide basic healthcare assistance and encourage voluntary blood donation.",
    images: ["/image8.jpeg", "/image4.jpeg", "/image3.jpeg"],
    icon: HeartPulse,
    color: "#00A85A",
  },
  {
    id: 2,
    date: "15 Dec 2024",
    title: "Brahmin Samman Samaroh",
    category: "Recognition",
    location: "Shahdara, Delhi",
    description:
      "Truebridge participated in the Brahmin Samman Samaroh where Director Neeraj Dubey was honored by Cabinet Minister and MLA Gopal Rai with a Parshuram image shield.",
    images: ["/image21.jpeg", "/image18.jpeg", "/image15.jpeg"],
    icon: Award,
    color: "#3E4095",
  },
  {
    id: 3,
    date: "15 Dec 2024",
    title: "Shivastra Dharan Samaroh",
    category: "Civic Program",
    location: "Bada Shiv Mandir, Delhi",
    description:
      "Director Neeraj Dubey was honored with the Shiv Astra during a special ceremony organized by RWA Jyoti Nagar.",
    images: ["/image46.jpeg", "/image47.jpeg"],
    icon: Sparkles,
    color: "#FF6634",
  },
  {
    id: 4,
    date: "22 Dec 2024",
    title: "Health Camp at Khatu Dham",
    category: "Health Camp",
    location: "Khatu Dham, Harsh Vihar, Delhi",
    description:
      "A health camp provided eye examinations, blood sugar and blood pressure checks, dental check-ups and free glasses and eye drops for community members.",
    images: ["/image1.jpeg", "/image6.jpeg", "/image7.jpeg"],
    icon: HeartPulse,
    color: "#00A85A",
  },
  {
    id: 5,
    date: "26 Jan 2025",
    title: "Republic Day Celebration",
    category: "Civic Program",
    location: "Community Grounds, Delhi",
    description:
      "Republic Day was celebrated with flag hoisting by Directors Neeraj Dubey and Arun Dubey, along with a medical camp and poster-making activity focused on health awareness.",
    images: ["/image41.jpeg", "/image42.jpeg", "/image43.jpeg"],
    icon: ShieldCheck,
    color: "#3E4095",
    featured: true,
  },
  {
    id: 6,
    date: "31 May 2026",
    title: "Free Sanitary Napkin Distribution & Women's Health Awareness",
    category: "Women Empowerment",
    location: "Kheda Gaon, near Mansarovar Park Metro Station, Delhi",
    description:
      "A women's health awareness programme was organized with free sanitary napkin distribution to support health, awareness and dignity among women in the community.",
    images: ["/Sanitary1.jpeg"],
    icon: Users,
    color: "#FF6634",
  },
  {
    id: 7,
    date: "07 Jun 2026",
    title: "Swachh Bharat Abhiyan",
    category: "Community Support",
    location: "Delhi",
    description:
      "A community cleanliness initiative was organized to encourage responsible civic participation and cleaner surroundings.",
    images: ["/Swachh.jpeg"],
    icon: Megaphone,
    color: "#00A85A",
  },
  {
    id: 8,
    date: "2026",
    title: "Cyber Awareness Camp",
    category: "Awareness",
    location: "Delhi",
    description:
      "An awareness programme for children and parents focused on cyber gaming scams, online fraud, cyber laws and the risks associated with excessive exposure to harmful or inappropriate online content.",
    images: ["/cyber.jpeg"],
    icon: ShieldCheck,
    color: "#3E4095",
  },
  {
    id: 9,
    date: "2026",
    title: "24×7 First Aid & Pilgrim Support",
    category: "Community Support",
    location: "Yamuna Wazirabad Road, Delhi",
    description:
      "Round-the-clock first aid and dressing support, acupressure therapy and wellness assistance were provided for Kanwar pilgrims in collaboration with Kshatriya Shiv Kanwar Seva Samiti (Regd.).",
    images: ["/Kanwar2.jpeg", "/Kanwar1.jpeg", "/Kanwar3.jpeg"],
    icon: HeartPulse,
    color: "#FF6634",
  },
  {
    id: 13,
    date: "2026",
    title: "Yamuna Safai Abhiyan",
    category: "Community Support",
    location: "Yamuna, Delhi",
    description:
      "A dedicated cleanliness initiative focused on cleaning the Yamuna riverbank and spreading awareness about keeping the river and its surroundings clean.",
    images: [
      "/Yamuna1.jpeg",
      "/Yamuna2.jpeg",
      "/Yamuna3.jpeg",
      "/Yamuna4.jpeg",
      "/Yamuna5.jpeg",
    ],
    icon: Droplets,
    color: "#3E4095",
  },
  {
    id: 14,
    date: "20 Aug 2026",
    title: "Jan Maha Andolan",
    category: "Civic Program",
    location: "Jantar Mantar, New Delhi",
    description:
      "Truebridge Empowerment Echo Foundation participated in the Jan Maha Andolan held at Jantar Mantar on 20 August 2026, supporting the call for reservation based on economic criteria.",
    images: ["/Andolan1.jpeg", "/Andolan2.jpeg"],
    icon: Megaphone,
    color: "#3E4095",
  },
  {
    id: 16,
    date: "2026",
    title: "Bhagwan Parshuram Ji Jayanti",
    category: "Civic Program",
    location: "Delhi",
    description:
      "Bhagwan Parshuram Ji Jayanti was celebrated with devotion and community participation, honoring the values, cultural heritage and teachings associated with Bhagwan Parshuram Ji.",
    images: ["/Parshuram1.jpeg", "/Parshuram5.jpeg","/Parshuram3.jpeg","/Parshuram2.jpeg","/Parshuram4.jpeg",],
    icon: Sparkles,
    color: "#3E4095",
  },
  {
    id: 15,
    date: "05 Sep 2026",
    title: "Teachers' Day Felicitations Ceremony & National Conference",
    category: "Recognition",
    location:
      "Rajaram Mohan Rai Memorial Trust Hall, 12 Vishnu Digambar Marg, Mandi House, New Delhi",
    description:
      "A national conference and Felicitations Ceremony organized on Teachers' Day, recognizing teachers and social workers for their contribution to society. Director Neeraj Dubey of Truebridge Empowerment Echo Foundation was specially invited to the programme.",
    images: ["/Shikshak8.png","/Shikshak1.jpg","/Shikshak2.jpg", "/Shikshak4.jpeg", "/Shikshak5.jpeg","/Shikshak6.jpeg" ,],
    icon: Award,
    color: "#3E4095",
  },
];

const categories = [
  "All",
  "Health Camp",
  "Women Empowerment",
  "Awareness",
  "Recognition",
  "Civic Program",
  "Community Support",
];

const categoryStyles = {
  "Health Camp": { bg: "#EAF8F1", color: "#00A85A" },
  "Women Empowerment": { bg: "#FFF0EB", color: "#FF6634" },
  Awareness: { bg: "#ECECF9", color: "#3E4095" },
  Recognition: { bg: "#ECECF9", color: "#3E4095" },
  "Civic Program": { bg: "#FFF0EB", color: "#FF6634" },
  "Community Support": { bg: "#EAF8F1", color: "#00A85A" },
};

/* ---------- shared: fading, skeleton-safe image ---------- */

function SmartImage({ src, alt, className, fit = "cover" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full transition-opacity duration-500 ${
          fit === "contain" ? "object-contain" : "object-cover"
        } ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}

/* ---------- card-level image gallery ---------- */

function EventImageGallery({ event, onOpen }) {
  const [activeImage, setActiveImage] = useState(0);
  const hasImages = event.images && event.images.length > 0;

  if (!hasImages) {
    return (
      <div className="relative h-56 sm:h-64 bg-[#F7F7F7] flex items-center justify-center overflow-hidden">
        <div
          className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-10"
          style={{ backgroundColor: event.color }}
        />
        <div
          className="absolute -bottom-16 -left-10 w-40 h-40 rounded-full opacity-10"
          style={{ backgroundColor: event.color }}
        />
        <div className="relative text-center px-6">
          <div
            className="w-14 h-14 mx-auto mb-3 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: `${event.color}15`, color: event.color }}
          >
            <event.icon size={27} strokeWidth={1.8} />
          </div>
          <p className="text-sm font-medium text-gray-500">
            Photos coming soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100">
      <button
        type="button"
        onClick={() => onOpen(activeImage)}
        aria-label={`View photos for ${event.title}`}
        className="absolute inset-0 w-full h-full cursor-zoom-in"
      >
        <SmartImage
          src={event.images[activeImage]}
          alt={event.title}
          className="w-full h-full"
        />
      </button>

      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

      {event.images.length > 1 && (
        <>
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-sm text-white text-[11px] font-semibold">
            <Images size={12} />
            {activeImage + 1}/{event.images.length}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImage((prev) =>
                prev === 0 ? event.images.length - 1 : prev - 1,
              );
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#3E4095] shadow-md hover:bg-white transition"
          >
            <ChevronLeft size={19} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImage((prev) =>
                prev === event.images.length - 1 ? 0 : prev + 1,
              );
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#3E4095] shadow-md hover:bg-white transition"
          >
            <ChevronRight size={19} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {event.images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage(index);
                }}
                aria-label={`Show image ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeImage ? "w-6 bg-white" : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ---------- event card ---------- */

function EventCard({ event, index, onOpenLightbox }) {
  const Icon = event.icon;
  const categoryStyle = categoryStyles[event.category] || {
    bg: "#ECECF9",
    color: "#3E4095",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="relative">
        <EventImageGallery
          event={event}
          onOpen={(imgIndex) => onOpenLightbox(event, imgIndex)}
        />

        {event.featured && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF6634] text-white text-xs font-semibold shadow-md">
              Featured
            </span>
          </div>
        )}

        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md">
            <Icon size={19} style={{ color: event.color }} strokeWidth={1.9} />
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: categoryStyle.bg,
              color: categoryStyle.color,
            }}
          >
            {event.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500">
            <CalendarDays size={14} />
            {event.date}
          </span>
        </div>

        <h3 className="font-['Poppins'] text-lg sm:text-xl font-semibold text-[#3E4095] leading-snug mb-3 group-hover:text-[#FF6634] transition-colors">
          {event.title}
        </h3>

        <div className="flex items-start gap-2 text-gray-500 mb-4">
          <MapPin
            size={16}
            className="mt-0.5 flex-shrink-0"
            style={{ color: event.color }}
          />
          <span className="text-sm leading-relaxed">{event.location}</span>
        </div>

        <p className="text-sm sm:text-[15px] text-gray-600 leading-7 line-clamp-3 flex-1">
          {event.description}
        </p>

        <button
          type="button"
          onClick={() => onOpenLightbox(event, 0)}
          className="mt-4 self-start text-sm font-semibold transition-colors"
          style={{ color: event.color }}
        >
          View details →
        </button>
      </div>
    </motion.article>
  );
}

/* ---------- lightbox ---------- */

function EventLightbox({ event, imageIndex, onClose, onNavigateImage }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigateImage(1);
      if (e.key === "ArrowLeft") onNavigateImage(-1);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNavigateImage]);

  if (!event) return null;

  const Icon = event.icon;
  const hasImages = event.images && event.images.length > 0;
  const categoryStyle = categoryStyles[event.category] || {
    bg: "#ECECF9",
    color: "#3E4095",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={event.title}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl overflow-hidden w-full max-w-3xl lg:max-w-5xl max-h-[94vh] flex flex-col"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 shadow-md hover:bg-white transition"
        >
          <X size={20} />
        </button>

        {hasImages ? (
          <div className="relative h-[50vh] sm:h-[65vh] bg-gray-100 flex-shrink-0">
            <SmartImage
              src={event.images[imageIndex]}
              alt={event.title}
              className="w-full h-full"
              fit="contain"
            />

            {event.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => onNavigateImage(-1)}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#3E4095] shadow-md hover:bg-white transition"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateImage(1)}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#3E4095] shadow-md hover:bg-white transition"
                >
                  <ChevronRight size={20} />
                </button>
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-sm text-white text-[11px] font-semibold">
                  <Images size={12} />
                  {imageIndex + 1}/{event.images.length}
                </span>
              </>
            )}
          </div>
        ) : (
          <div
            className="h-40 flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${event.color}10` }}
          >
            <Icon size={40} style={{ color: event.color }} strokeWidth={1.6} />
          </div>
        )}

        <div className="p-6 sm:p-8 overflow-y-auto">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: categoryStyle.bg,
                color: categoryStyle.color,
              }}
            >
              {event.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500">
              <CalendarDays size={14} />
              {event.date}
            </span>
          </div>

          <h3 className="font-['Poppins'] text-xl sm:text-2xl font-semibold text-[#3E4095] leading-snug mb-3">
            {event.title}
          </h3>

          <div className="flex items-start gap-2 text-gray-500 mb-4">
            <MapPin
              size={16}
              className="mt-0.5 flex-shrink-0"
              style={{ color: event.color }}
            />
            <span className="text-sm leading-relaxed">{event.location}</span>
          </div>

          <p className="text-sm sm:text-[15px] text-gray-600 leading-7">
            {event.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------- main grid ---------- */

export default function EventsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightbox, setLightbox] = useState(null); // { event, imageIndex }

  const categoryCounts = useMemo(() => {
    const counts = { All: events.length };
    categories.slice(1).forEach((cat) => {
      counts[cat] = events.filter((e) => e.category === cat).length;
    });
    return counts;
  }, []);

  const filteredEvents = useMemo(() => {
    if (activeCategory === "All") return events;
    return events.filter((event) => event.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredEvents.length / EVENTS_PER_PAGE),
  );
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const currentEvents = filteredEvents.slice(
    startIndex,
    startIndex + EVENTS_PER_PAGE,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const openLightbox = useCallback((event, imageIndex) => {
    setLightbox({ event, imageIndex });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const navigateLightboxImage = useCallback((direction) => {
    setLightbox((prev) => {
      if (!prev || !prev.event.images || prev.event.images.length < 2)
        return prev;
      const total = prev.event.images.length;
      const next = (prev.imageIndex + direction + total) % total;
      return { ...prev, imageIndex: next };
    });
  }, []);

  return (
    <section className="bg-[#F7F7F7] py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#ECECF9] text-[#3E4095] text-xs sm:text-sm font-semibold mb-4">
            <CalendarDays size={16} />
            Our Events
          </span>

          <h2 className="font-['Poppins'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E4095] leading-tight">
            Making a Difference
            <span className="text-[#FF6634]"> Together</span>
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
            Explore our health camps, awareness programmes, community
            initiatives and social activities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-9 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex items-center justify-center gap-2 min-w-max">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              const count = categoryCounts[category] ?? 0;
              if (category !== "All" && count === 0) return null;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-md text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-[#3E4095] text-white shadow-md"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-[#3E4095] hover:text-[#3E4095]"
                  }`}
                >
                  {category}
                  <span
                    className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/20" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Result Count */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-[#3E4095]">
              {filteredEvents.length === 0 ? 0 : startIndex + 1}
            </span>
            {" - "}
            <span className="font-semibold text-[#3E4095]">
              {Math.min(startIndex + EVENTS_PER_PAGE, filteredEvents.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-[#3E4095]">
              {filteredEvents.length}
            </span>{" "}
            events
          </p>

          {totalPages > 1 && (
            <p className="text-sm text-gray-500">
              Page{" "}
              <span className="font-semibold text-[#3E4095]">
                {currentPage}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-[#3E4095]">{totalPages}</span>
            </p>
          )}
        </div>

        {/* Events Grid */}
        {currentEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7">
            {currentEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                onOpenLightbox={openLightbox}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 py-16 px-6 text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#ECECF9] flex items-center justify-center">
              <CalendarDays size={28} className="text-[#3E4095]" />
            </div>
            <h3 className="font-['Poppins'] text-xl font-semibold text-[#3E4095] mb-2">
              No Events Found
            </h3>
            <p className="text-gray-500 text-sm">
              No events are currently available in this category.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                currentPage === 1
                  ? "border-gray-200 text-gray-300 cursor-not-allowed bg-white"
                  : "border-[#3E4095] text-[#3E4095] bg-white hover:bg-[#3E4095] hover:text-white"
              }`}
            >
              <ChevronLeft size={19} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => {
                  const isActive = page === currentPage;
                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => goToPage(page)}
                      className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-[#3E4095] text-white shadow-md"
                          : "bg-white border border-gray-200 text-gray-600 hover:border-[#3E4095] hover:text-[#3E4095]"
                      }`}
                    >
                      {page}
                    </button>
                  );
                },
              )}
            </div>

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                currentPage === totalPages
                  ? "border-gray-200 text-gray-300 cursor-not-allowed bg-white"
                  : "border-[#3E4095] text-[#3E4095] bg-white hover:bg-[#3E4095] hover:text-white"
              }`}
            >
              <ChevronRight size={19} />
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightbox && (
          <EventLightbox
            event={lightbox.event}
            imageIndex={lightbox.imageIndex}
            onClose={closeLightbox}
            onNavigateImage={navigateLightboxImage}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
