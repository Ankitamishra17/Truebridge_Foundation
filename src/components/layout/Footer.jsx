import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Youtube,
  Instagram,
  Facebook,
  HeartHandshake,
  Heart,
} from "lucide-react";
import DonateModal from "../common/DonateModal.jsx";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Our Work" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
];

const initiativeLinks = [
  { to: "/events", label: "Healthcare" },
  { to: "/events", label: "Education" },
  { to: "/events", label: "Community Support" },
  { to: "/events", label: "Women Empowerment" },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  const [donateOpen, setDonateOpen] = useState(false);

  return (
    <footer className="relative bg-[#032D46] text-white overflow-hidden">
      {/* top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#0F8B8D] via-[#0F8B8D] to-[#FF6B4A]" />

      {/* newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-5">
          <div>
            <h3 className="font-display font-semibold text-[16px] sm:text-[18px] lg:text-[20px]">
              Stay Connected With Our Work
            </h3>
            <p className="text-[13px] sm:text-[14px] text-white/60 mt-1">
              Get updates on upcoming health camps, drives and community events.
            </p>
          </div>
          <button
            onClick={() => setDonateOpen(true)}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF6B4A] hover:brightness-105 text-white text-[14px] font-semibold rounded-md px-6 py-3 transition"
          >
            <Heart size={15} className="fill-white" />
            Donate Now
          </button>
        </div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        <div className="sm:col-span-2 lg:col-span-1 lg:pr-4">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0F8B8D] to-[#FF6B4A] flex items-center justify-center flex-shrink-0">
              <HeartHandshake size={18} className="text-white" />
            </span>
            <span className="font-display font-semibold text-[16px] leading-tight">
              Truebridge
              <br />
              <span className="text-[11px] font-body font-normal text-white/60">
                Empowerment Echo Foundation
              </span>
            </span>
          </div>
          <p
            className="text-[16px] sm:text-[17px] text-white/75"
            style={{ fontFamily: "Caveat, cursive" }}
          >
            Together for a better tomorrow.
          </p>
          <div className="flex gap-3 mt-6">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:bg-[#0F8B8D] hover:border-[#0F8B8D] hover:text-white transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold tracking-wide text-white/50 mb-4 font-display uppercase">
            Quick Links
          </h3>
          <ul className="space-y-3 text-[14px] sm:text-[15px]">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-flex items-center gap-1.5 text-white/75 hover:text-[#7FE0DD] transition-colors group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#0F8B8D] group-hover:bg-[#7FE0DD] transition-colors" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold tracking-wide text-white/50 mb-4 font-display uppercase">
            Our Initiatives
          </h3>
          <ul className="space-y-3 text-[14px] sm:text-[15px]">
            {initiativeLinks.map((i) => (
              <li key={i.label}>
                <Link
                  to={i.to}
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center gap-1.5 text-white/75 hover:text-[#7FE0DD] transition-colors group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#0F8B8D] group-hover:bg-[#7FE0DD] transition-colors" />
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold tracking-wide text-white/50 mb-4 font-display uppercase">
            Connect With Us
          </h3>
          <ul className="space-y-4 text-[14px] sm:text-[15px] text-white/75">
            <li className="flex gap-3">
              <span className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center flex-shrink-0">
                <MapPin size={14} className="text-[#0F8B8D]" />
              </span>
              <span className="pt-1.5">New Delhi, India</span>
            </li>
            <li className="flex gap-3">
              <span className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center flex-shrink-0">
                <Mail size={14} className="text-[#0F8B8D]" />
              </span>
              <span className="pt-1.5 break-all">
                info@truebridgefoundation.org
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center flex-shrink-0">
                <Phone size={14} className="text-[#0F8B8D]" />
              </span>
              <span className="pt-1.5">+91 98765 43210</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row gap-3 justify-between text-[12.5px] sm:text-[13px] text-white/50 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Truebridge Empowerment Echo Foundation.
            All rights reserved.
          </p>
          <div className="flex gap-5 justify-center sm:justify-start">
            <a href="#" className="hover:text-[#7FE0DD] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#7FE0DD] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>

      <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </footer>
  );
}
