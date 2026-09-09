
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Stethoscope, Users, Calendar, Heart } from "lucide-react";
import Container from "../common/Container.jsx";

const stats = [
  { icon: Stethoscope, value: "50+", label: "Health Camps" },
  { icon: Users, value: "10000+", label: "People Reached", display: "10K+" },
  { icon: Calendar, value: "20+", label: "Community Events" },
  { icon: Heart, value: "100+", label: "Volunteers" },
];

function CountUp({ value, display, duration = 1200 }) {
  const match = value.match(/^([\d,]+)(.*)$/);
  const numeric = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  const suffix = match ? match[2] : "";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    let frame;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numeric));
      if (progress < 1) frame = requestAnimationFrame(step);
      else setCount(numeric);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric, duration]);

  // If a custom compact display was provided (e.g. "10K+"), only reveal it
  // once the count-up has effectively finished; otherwise show the live number.
  if (display && count >= numeric) return <span ref={ref}>{display}</span>;

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {!display && suffix}
    </span>
  );
}

export default function OurImpact() {
  return (
    <section
      className="relative overflow-hidden bg-[#3e4095] bg-cover bg-center"
      // style={{ backgroundImage: `url(/impact_bg.jpg)` }}
    >
      {/* gradient scrim over the photo so stats/text stay readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(62,64,149,0.92) 0%, rgba(0,168,90,0.85) 100%)",
        }}
      />

      {/* Decorative glows for depth */}
      <span
        className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-20 blur-3xl"
        style={{ background: "#00a85a" }}
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -bottom-20 right-10 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{ background: "#ff6634" }}
        aria-hidden="true"
      />

      <Container className="py-14 sm:py-16 relative">
        <div className="flex items-center gap-2">
          <span className="w-6 h-px bg-[#ff6634]" />
          <p className="text-[12px] font-bold tracking-widest text-white/90">
            OUR IMPACT
          </p>
        </div>

        <h2 className="mt-3 font-display text-[22px] sm:text-[26px] font-semibold text-white max-w-md">
          The difference, in numbers
        </h2>

        <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-10 sm:gap-0">
          <div className="grid grid-cols-2 sm:flex sm:flex-1 gap-4 sm:gap-0 sm:divide-x sm:divide-white/15">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group flex-1 flex flex-col items-center text-center rounded-2xl bg-white/[0.04] sm:bg-transparent border border-white/10 sm:border-none p-5 sm:p-0 sm:px-6"
                >
                  <span className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-[#f7f7f7]"
                    />
                  </span>

                  <p className="mt-4 font-display font-bold text-[28px] sm:text-[32px] text-white leading-none tabular-nums">
                    <CountUp value={stat.value} display={stat.display} />
                  </p>

                  <p className="mt-2 text-[13px] text-white/70">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="hidden lg:block flex-shrink-0 pl-10"
          >
            <p
              className="text-2xl leading-tight text-white/90"
              style={{
                fontFamily: "Caveat, cursive",
                transform: "rotate(-2deg)",
              }}
            >
              <span className="block">Healthier People</span>
              <span className="flex items-center gap-2">
                Stronger Communities
                <Heart size={16} className="text-[#ff6634] fill-[#ff6634]" />
              </span>
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

