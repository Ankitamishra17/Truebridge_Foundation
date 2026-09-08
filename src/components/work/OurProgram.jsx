import {
  HeartPulse,
  Droplets,
  Award,
  Megaphone,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    icon: HeartPulse,
    iconBg: "#FDE7E2",
    iconColor: "#FF6B4A",
    linkColor: "#FF6B4A",
    title: "Health camps",
    lede: "Free screening, brought to the neighbourhood",
    body: "Working with partner medical teams, we set up single-day camps offering eye examinations, sugar and blood-pressure testing, and dental check-ups. Camps are hosted at community grounds, temples and residential complexes so nobody has to travel far for a basic health check.",
  },
  {
    icon: Droplets,
    iconBg: "#E1F2F1",
    iconColor: "#0F8B8D",
    linkColor: "#0F8B8D",
    title: "Blood donation drives",
    lede: "Keeping local blood banks stocked",
    body: "Run jointly with partner foundations, these camps combine a health check-up with voluntary blood donation, supporting hospitals and blood banks that serve the wider Shahdara area.",
  },
  {
    icon: Award,
    iconBg: "#FDEDE0",
    iconColor: "#FF6B4A",
    linkColor: "#FF6B4A",
    title: "Community recognition",
    lede: "Honouring the people who show up",
    body: "From felicitation with a ceremonial shawl to civic and cultural honours presented by local dignitaries, we mark the contribution of doctors, elders, RWA members and volunteers whose work often goes unnoticed.",
  },
  {
    icon: Megaphone,
    iconBg: "#E1F2F1",
    iconColor: "#0F8B8D",
    linkColor: "#0F8B8D",
    title: "Civic & cultural programs",
    lede: "Flag hoisting, competitions and youth outreach",
    body: "On occasions like Republic Day, we organise flag hoisting alongside a medical camp and a poster-making competition for children, with past themes covering anaemia awareness and environmental protection.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-[#FFF9F3] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#FF6B4A]" />
            <p className="text-[13px] font-semibold tracking-[0.14em] text-[#063B5C]">
              OUR PROGRAMS
            </p>
          </div>
          <h2 className="mt-4 font-display text-[30px] sm:text-[40px] leading-[1.15] font-semibold text-[#063B5C]">
            Initiatives That Create{" "}
            <span className="text-[#0F8B8D]">Real Impact</span>
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#64748B]">
            From health camps to civic programs, we work on diverse initiatives
            to support and uplift our community.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group relative bg-white rounded-2xl border border-[#EDF1F5] p-6 sm:p-7 flex flex-col h-full overflow-hidden shadow-[0_1px_2px_rgba(6,59,92,0.04)] hover:shadow-[0_12px_28px_-8px_rgba(6,59,92,0.18)] hover:-translate-y-1 hover:border-transparent transition-all duration-300"
            >
              {/* Soft decorative glow, tucked in the corner */}
              <span
                className="pointer-events-none absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"
                style={{ backgroundColor: p.iconBg }}
                aria-hidden="true"
              />

              <span
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                style={{ backgroundColor: p.iconBg }}
              >
                <p.icon size={24} style={{ color: p.iconColor }} />
              </span>

              <h3 className="relative mt-5 font-display text-[18px] font-semibold text-[#063B5C]">
                {p.title}
              </h3>
              <p
                className="relative mt-1 text-[13px] font-semibold leading-snug"
                style={{ color: p.linkColor }}
              >
                {p.lede}
              </p>
              <p className="relative mt-4 text-[14px] leading-relaxed text-[#64748B] flex-1">
                {p.body}
              </p>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
