import { motion } from "framer-motion";
import {
  HeartPulse,
  GraduationCap,
  HandHeart,
  Leaf,
  ArrowRight,
} from "lucide-react";

const focusAreas = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Medical camps, health checkups and awareness programs.",
    iconBg: "#EAF8F7",
    iconColor: "#0F8B8D",
    linkColor: "#0F8B8D",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Skill development, awareness and learning opportunities.",
    iconBg: "#FFF0EC",
    iconColor: "#FF6B4A",
    linkColor: "#FF6B4A",
  },
  {
    icon: HandHeart,
    title: "Community Support",
    description: "Empowering underprivileged communities.",
    iconBg: "#E9F1FA",
    iconColor: "#063B5C",
    linkColor: "#063B5C",
  },
  // {
  //   icon: Leaf,
  //   title: "Environment",
  //   description: "Awareness and initiatives for a cleaner, healthier tomorrow.",
  //   iconBg: "#EFFAF0",
  //   iconColor: "#3E9B4F",
  //   linkColor: "#3E9B4F",
  // },
];

export default function FocusAreas() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "#17324D", fontFamily: "Poppins, sans-serif" }}
          >
            Our Focus Areas
          </h2>
          {/* Underline */}
          <span className="block mx-auto mt-3.5 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#0F8B8D] to-[#FF6B4A]" />

          <p
            className="mt-2 text-base sm:text-lg"
            style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}
          >
            Working together for healthier and stronger communities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Focus area cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {focusAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative bg-white rounded-2xl p-6 flex flex-col border border-[#EDF1F5] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-10px_rgba(6,59,92,0.14)]"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: area.iconBg }}
                  >
                    <Icon
                      size={22}
                      style={{ color: area.iconColor }}
                      strokeWidth={2}
                    />
                  </div>
                  <h3
                    className="text-lg font-semibold mt-5 mb-2"
                    style={{
                      color: "#17324D",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {area.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{
                      color: "#64748B",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {area.description}
                  </p>
                  <a
                    href="/programs"
                    className="inline-flex items-center gap-1.5 text-sm font-medium mt-5 group/link"
                    style={{
                      color: area.linkColor,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Learn More
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </a>

                  {/* accent underline, revealed on hover */}
                  <span
                    className="absolute left-6 right-6 bottom-0 h-[2.5px] rounded-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                    style={{ backgroundColor: area.linkColor }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Donate CTA panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[380px] flex flex-col justify-end shadow-[0_20px_45px_-15px_rgba(3,45,70,0.35)]"
            style={{ backgroundColor: "#032D46" }}
          >
            <img
              src="/image50.png"
              alt="Children supported by Truebridge Empowerment Echo Foundation"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(3,45,70,0.15) 0%, rgba(3,45,70,0.55) 55%, rgba(3,45,70,0.96) 100%)",
              }}
            />

            {/* Caveat decorative phrase */}
            <p
              className="absolute top-6 right-6 text-right text-xl sm:text-2xl leading-tight"
              style={{ color: "#FFF9F3", fontFamily: "Caveat, cursive" }}
            >
              “Healthier
              <br />
              People
              <br />
              Happier
              <br />
              Communities
            </p>

            <div className="relative z-10 p-6 sm:p-8">
              <h3
                className="text-2xl sm:text-3xl font-bold mb-3 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Be a Part
                <br />
                of the Change
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "#EAF8F7", fontFamily: "Inter, sans-serif" }}
              >
                Your support helps us organize health camps, awareness drives
                and community programs. Together, we can build a healthier and
                stronger society.
              </p>
              <a
                href="/donate"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_10px_24px_-6px_rgba(255,107,74,0.5)]"
                style={{
                  backgroundColor: "#FF6B4A",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Donate Now
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
