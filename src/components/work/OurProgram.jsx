import { useRef, useState, useEffect, useCallback } from "react";
import {
  HeartPulse,
  Droplets,
  Award,
  Megaphone,
  HandHeart,
  PawPrint,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const programs = [
  {
    icon: HeartPulse,
    iconBg: "#FFE5DC",
    iconColor: "#ff6634",
    linkColor: "#ff6634",
    title: "Health camps",
    lede: "Free screening, brought to the neighbourhood",
    body: "Working with partner medical teams, we set up single-day camps offering eye examinations, sugar and blood-pressure testing, and dental check-ups. Camps are hosted at community grounds, temples and residential complexes so nobody has to travel far for a basic health check.",
  },

  {
    icon: Droplets,
    iconBg: "#E6F6EF",
    iconColor: "#00a85a",
    linkColor: "#00a85a",
    title: "Blood donation drives",
    lede: "Keeping local blood banks stocked",
    body: "Run jointly with partner foundations, these camps combine a health check-up with voluntary blood donation, supporting hospitals and blood banks that serve the wider Shahdara area.",
  },

  {
    icon: Award,
    iconBg: "#FFE5DC",
    iconColor: "#ff6634",
    linkColor: "#ff6634",
    title: "Community recognition",
    lede: "Honouring the people who show up",
    body: "From felicitation with a ceremonial shawl to civic and cultural honours presented by local dignitaries, we mark the contribution of doctors, elders, RWA members and volunteers whose work often goes unnoticed.",
  },

  {
    icon: Megaphone,
    iconBg: "#E6F6EF",
    iconColor: "#00a85a",
    linkColor: "#00a85a",
    title: "Civic & cultural programs",
    lede: "Flag hoisting, competitions and youth outreach",
    body: "On occasions like Republic Day, we organise flag hoisting alongside a medical camp and a poster-making competition for children, with past themes covering anaemia awareness and environmental protection.",
  },

  {
    icon: HandHeart,
    iconBg: "#FFE5DC",
    iconColor: "#ff6634",
    linkColor: "#ff6634",
    title: "Support for Widows & Underprivileged Women",
    lede: "Quick relief for women who can't wait",
    body: "We step in fast for widows and financially vulnerable women in the community — ration kits, small emergency grants and help accessing medical care — when a family has nowhere else to turn.",
  },

  {
    icon: PawPrint,
    iconBg: "#E6F6EF",
    iconColor: "#00a85a",
    linkColor: "#00a85a",
    title: "Gau Seva & Animal Welfare",
    lede: "Caring for the street animals nobody else does",
    body: "Feeding drives, basic medical care and shelter support for street cows and stray animals across the neighbourhood, run together with local gaushalas and animal welfare volunteers.",
  },

  {
    icon: Sparkles,
    iconBg: "#FFE5DC",
    iconColor: "#ff6634",
    linkColor: "#ff6634",
    title: "Women Empowerment",
    lede: "Skills, confidence and independence",
    body: "We support women through awareness, guidance, counselling and opportunities that help them become self-reliant and confident. Our women empowerment initiatives focus on helping women understand their rights, access necessary support and move towards greater independence. We also engage with social leaders and community supporters to strengthen these efforts. During a recent meeting at an art gallery, Mrs. Salma Ansari expressed her support for our work in women empowerment and assured possible cooperation and support for the NGO.",
  },

  {
    icon: ShieldCheck,
    iconBg: "#E6F6EF",
    iconColor: "#00a85a",
    linkColor: "#00a85a",
    title: "Cyber Awareness",
    lede: "Helping children and parents stay safe online",
    body: "Awareness sessions help children and parents understand the risks associated with cyber gaming, online fraud, excessive exposure to inappropriate websites and other digital threats. The initiative encourages responsible digital behaviour and helps families recognise cyber risks before they become serious problems.",
  },

  {
    icon: HeartHandshake,
    iconBg: "#FFE5DC",
    iconColor: "#ff6634",
    linkColor: "#ff6634",
    title: "24×7 First Aid & Pilgrim Support",
    lede: "Round-the-clock support for Kanwar pilgrims",
    body: "We provide 24×7 first aid and dressing support, acupressure therapy and wellness assistance for Kanwar pilgrims during their journey. The service is provided on Yamuna Wazirabad Road, Delhi, in collaboration with Kshatriya Shiv Kanwar Seva Samiti (Regd.), with a focus on serving pilgrims with care and support.",
  },
];

export default function Programs() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  const [scrollState, setScrollState] = useState({
    atStart: true,
    atEnd: false,
    progress: 0,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const drag = useRef({
    active: false,
    startX: 0,
    startScroll: 0,
    moved: false,
    lastX: 0,
    lastT: 0,
    velocity: 0,
  });

  const momentumFrame = useRef(null);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;

    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;

    setScrollState({
      atStart: el.scrollLeft <= 4,
      atEnd: el.scrollLeft >= max - 4,
      progress: max > 0 ? el.scrollLeft / max : 0,
    });

    // Whichever card's center is closest to the track's center
    // is considered active.
    const trackCenter = el.scrollLeft + el.clientWidth / 2;

    let closest = 0;
    let closestDist = Infinity;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      const cardCenter = card.offsetLeft + card.offsetWidth / 2;

      const dist = Math.abs(cardCenter - trackCenter);

      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });

    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const el = trackRef.current;

    if (!el) return;

    updateScrollState();

    el.addEventListener("scroll", updateScrollState, {
      passive: true,
    });

    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [updateScrollState]);

  const cancelMomentum = () => {
    if (momentumFrame.current) {
      cancelAnimationFrame(momentumFrame.current);
      momentumFrame.current = null;
    }
  };

  const runMomentum = () => {
    const el = trackRef.current;

    if (!el) return;

    let v = drag.current.velocity;

    const step = () => {
      if (Math.abs(v) < 0.05) {
        momentumFrame.current = null;
        return;
      }

      el.scrollLeft -= v;

      v *= 0.94;

      momentumFrame.current = requestAnimationFrame(step);
    };

    momentumFrame.current = requestAnimationFrame(step);
  };

  const scrollByCard = (dir) => {
    const el = trackRef.current;

    if (!el) return;

    cancelMomentum();

    const card = cardRefs.current[activeIndex];

    const cardWidth = card ? card.offsetWidth + 24 : 300;

    el.scrollBy({
      left: dir * cardWidth,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (i) => {
    const el = trackRef.current;
    const card = cardRefs.current[i];

    if (!el || !card) return;

    cancelMomentum();

    const target = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;

    el.scrollTo({
      left: target,
      behavior: "smooth",
    });
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByCard(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByCard(-1);
    }
  };

  // Desktop mouse drag only.
  // Touch devices keep native scrolling.
  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse") return;

    const el = trackRef.current;

    if (!el) return;

    cancelMomentum();

    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: false,
      lastX: e.clientX,
      lastT: performance.now(),
      velocity: 0,
    };

    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    const el = trackRef.current;

    if (!el || !drag.current.active) return;

    const dx = e.clientX - drag.current.startX;

    if (Math.abs(dx) > 3) {
      drag.current.moved = true;
    }

    el.scrollLeft = drag.current.startScroll - dx;

    const now = performance.now();
    const dt = now - drag.current.lastT;

    if (dt > 0) {
      drag.current.velocity = ((e.clientX - drag.current.lastX) / dt) * 16;
    }

    drag.current.lastX = e.clientX;
    drag.current.lastT = now;
  };

  const onPointerUp = () => {
    if (drag.current.active) {
      runMomentum();
    }

    drag.current.active = false;
  };

  // Prevent click-through immediately after dragging.
  const onTrackClickCapture = (e) => {
    if (drag.current.moved) {
      e.stopPropagation();
      e.preventDefault();

      drag.current.moved = false;
    }
  };

  return (
    <section id="programs" className="bg-[#FFF9F3] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-6 h-px bg-[#ff6634]" />

              <p className="text-[13px] font-semibold tracking-[0.14em] text-[#3e4095]">
                OUR PROGRAMS
              </p>
            </div>

            <h2 className="mt-4 font-display text-[30px] sm:text-[40px] leading-[1.15] font-semibold text-[#3e4095]">
              Initiatives That Create{" "}
              <span className="text-[#00a85a]">Real Impact</span>
            </h2>

            <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#64748B]">
              From health camps to civic programs, we work on diverse
              initiatives to support and uplift our community.
            </p>
          </div>

          {/* ================= DESKTOP CONTROLS ================= */}
          <div className="hidden sm:flex items-center gap-4 flex-shrink-0">
            <span className="text-[13px] font-medium text-[#9295C2] tabular-nums">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(programs.length).padStart(2, "0")}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={scrollState.atStart}
                aria-label="Previous programs"
                className="
                  w-11 h-11
                  rounded-full
                  border border-[#E6E7F2]
                  bg-white
                  flex items-center justify-center
                  text-[#3e4095]
                  transition-all duration-200
                  hover:border-[#3e4095]
                  hover:bg-[#3e4095]
                  hover:text-white
                  disabled:opacity-30
                  disabled:pointer-events-none
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#3e4095]
                "
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={scrollState.atEnd}
                aria-label="Next programs"
                className="
                  w-11 h-11
                  rounded-full
                  border border-[#E6E7F2]
                  bg-white
                  flex items-center justify-center
                  text-[#3e4095]
                  transition-all duration-200
                  hover:border-[#3e4095]
                  hover:bg-[#3e4095]
                  hover:text-white
                  disabled:opacity-30
                  disabled:pointer-events-none
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#3e4095]
                "
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= PROGRAM CARDS ================= */}
        <div className="relative mt-12">
          {/* LEFT FADE */}
          

          {/* RIGHT FADE */}
          

          <div
            ref={trackRef}
            role="region"
            aria-label="Our programs, scrollable"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            onClickCapture={onTrackClickCapture}
            className="
              flex
              gap-6
              overflow-x-auto
              no-scrollbar
              -mx-5
              px-5
              sm:mx-0
              sm:px-0
              snap-x
              snap-mandatory
              cursor-grab
              active:cursor-grabbing
              select-none
              rounded-2xl
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#3e4095]/40
            "
          >
            {programs.map((p, i) => (
              <div
                key={p.title}
                ref={(el) => (cardRefs.current[i] = el)}
                className="
                  group
                  relative
                  bg-white
                  rounded-2xl
                  border border-[#E6E7F2]
                  p-6 sm:p-7
                  flex flex-col
                  overflow-hidden
                  hover:-translate-y-1
                  hover:border-transparent
                  transition-all duration-300
                  w-[82%]
                  sm:w-[46%]
                  lg:w-[27%]
                  flex-shrink-0
                  snap-start
                "
              >
                {/* Decorative Glow */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    -top-10
                    -right-10
                    w-28
                    h-28
                    rounded-full
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                    blur-2xl
                  "
                  style={{
                    backgroundColor: p.iconBg,
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <span
                  className="
                    relative
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                    transition-transform duration-300
                    group-hover:scale-110
                    group-hover:-rotate-3
                  "
                  style={{
                    backgroundColor: p.iconBg,
                  }}
                >
                  <p.icon
                    size={24}
                    style={{
                      color: p.iconColor,
                    }}
                  />
                </span>

                {/* Title */}
                <h3
                  className="
                    relative
                    mt-5
                    font-display
                    text-[18px]
                    font-semibold
                    text-[#3e4095]
                  "
                >
                  {p.title}
                </h3>

                {/* Short Description */}
                <p
                  className="
                    relative
                    mt-1
                    text-[13px]
                    font-semibold
                    leading-snug
                  "
                  style={{
                    color: p.linkColor,
                  }}
                >
                  {p.lede}
                </p>

                {/* Full Description */}
                <p
                  className="
                    relative
                    mt-4
                    text-[14px]
                    leading-relaxed
                    text-[#64748B]
                  "
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PROGRESS BAR ================= */}
        <div
          className="
            mt-7
            mx-auto
            max-w-[220px]
            h-[3px]
            rounded-full
            bg-[#E6E7F2]
            overflow-hidden
          "
        >
          <div
            className="
              h-full
              rounded-full
              bg-[#3e4095]
            "
            style={{
              width: `${Math.max(12, scrollState.progress * 100)}%`,
              transition: "width 120ms linear",
            }}
          />
        </div>

        {/* ================= DOTS ================= */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {programs.map((p, i) => (
            <button
              key={p.title}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to ${p.title}`}
              aria-current={activeIndex === i}
              className="
                h-2
                rounded-full
                transition-all duration-300
              "
              style={{
                width: activeIndex === i ? 22 : 8,
                backgroundColor: activeIndex === i ? "#3e4095" : "#D9DBEC",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
