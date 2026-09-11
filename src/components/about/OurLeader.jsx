import { motion } from "framer-motion";

const team = [
  {
    name: "Arun Dubey",
    role: "Director",
    image: "/Arun_dubey.jpeg",
    accent: "#ff6634",
    accentBg: "#FFF0EB",
  },
  {
    name: "Mayank Bansal",
    role: "Secretary",
    image: "/mayank.jpeg",
    accent: "#00a85a",
    accentBg: "#E8F7EF",
  },
  {
    name: "Basant Verma",
    role: "Executive Member",
    image: "/Basant.jpeg",
    accent: "#3e4095",
    accentBg: "#EEEEFA",
  },
  {
    name: "Neelam Bansal",
    role: "Executive Member",
    image: "/Neelam_Bansal.png",
    accent: "#00a85a",
    accentBg: "#E8F7EF",
  },
  {
    name: "Sushma Dubey",
    role: "Treasurer",
    image: "/Sushma_dubey.png",
    accent: "#ff6634",
    accentBg: "#FFF0EB",
  },
];

export default function OurLeadership() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#3e4095]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#00a85a]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="mb-3 inline-block rounded-md bg-[#3e4095]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#3e4095]">
            Our Leadership
          </span>

          <h2 className="font-heading text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Meet the People Behind{" "}
            <span className="text-[#3e4095]">Truebridge</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Our dedicated team works together to strengthen communities, promote
            healthcare and empower people through meaningful social initiatives.
          </p>
        </motion.div>

        {/* Leadership Layout */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          {/* Left Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3e4095]/10 lg:mx-0">
              <div className="h-7 w-7 rounded-full bg-[#3e4095]" />
            </div>

            <h3 className="font-heading text-2xl font-bold text-gray-900">
              Strong Leadership
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Guided by commitment, compassion and a vision for a healthier and
              empowered society.
            </p>
          </motion.div>

          {/* Team Cards */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                {/* Top Accent */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: member.accent }}
                />

                {/* Image */}
                <div className="relative flex justify-center px-3 pt-5">
                  <div
                    className="relative h-28 w-28 overflow-hidden rounded-full border-4 bg-white shadow-md transition-transform duration-300 group-hover:scale-105"
                    style={{
                      borderColor: member.accentBg,
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="px-3 pb-5 pt-4 text-center">
                  <h4 className="font-heading text-base font-bold leading-tight text-gray-900">
                    {member.name}
                  </h4>

                  <div
                    className="mx-auto mt-2 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold"
                    style={{
                      backgroundColor: member.accentBg,
                      color: member.accent,
                    }}
                  >
                    {member.role}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: member.accent }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
