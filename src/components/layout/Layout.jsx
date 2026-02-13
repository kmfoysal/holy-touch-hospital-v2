import {
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Menu,
  Phone,
  Send,
  Twitter,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { hospitalInfo, navLinks } from "../../data/data";
import logo from "../../assets/images/logo-with-text.png";

// --- 1. MODERN TOP BAR ---
const TopBar = () => (
  <div className="relative bg-slate-900 text-slate-300 text-sm hidden md:block z-[60]">
    {/* Gradient Line */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-medical-500 via-healing-500 to-medical-600"></div>

    <div className="container mx-auto px-4 py-2.5 flex justify-between items-center mt-1">
      <div className="flex gap-6">
        <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
          <Phone size={14} className="text-healing-500" />{" "}
          {hospitalInfo.phone[0]}
        </span>
        <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
          <MapPin size={14} className="text-medical-500" /> Patuakhali,
          Bangladesh
        </span>
      </div>
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2 text-slate-400">
          <Clock size={14} /> Emergency:{" "}
          <span className="text-white font-medium">Open 24/7</span>
        </span>
        <div className="flex gap-3 border-l border-white/10 pl-6">
          <a href="#" className="hover:text-medical-500 transition-colors">
            <Facebook size={14} />
          </a>
          <a href="#" className="hover:text-medical-500 transition-colors">
            <Instagram size={14} />
          </a>
          <a href="#" className="hover:text-medical-500 transition-colors">
            <Linkedin size={14} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

// --- 2. MAIN NAVBAR ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopBar />

      <header
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-2 border-slate-100"
            : "bg-white py-4 shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center relative z-50">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-30">
              <img
                src={logo}
                alt="Holy Touch Hospital Logo"
                className="w-full"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-medical-50 text-medical-700 font-bold"
                      : "text-slate-600 hover:text-medical-600 hover:bg-slate-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${hospitalInfo.phone[0]}`}
              className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-medical-600 transition-all shadow-lg shadow-slate-900/20 hover:shadow-medical-500/30 flex items-center gap-2 group"
            >
              <Phone
                size={16}
                className="text-healing-500 group-hover:text-white transition-colors"
              />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ---------------- MOBILE FULL SCREEN MENU ---------------- */}
        <div
          className={`md:hidden fixed inset-0 w-full h-screen bg-white z-40 transition-all duration-500 ease-in-out ${
            isOpen
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-full"
          }`}
          style={{ top: 0 }}
        >
          {/* Background Decor */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-medical-50 rounded-tl-full opacity-50 -z-10"></div>

          <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between p-5 rounded-2xl font-bold text-lg transition-all ${
                      isActive
                        ? "bg-medical-50 text-medical-700 border border-medical-100"
                        : "text-slate-600 hover:bg-slate-50 border border-transparent"
                    }`
                  }
                >
                  {link.name}
                  <ArrowRight
                    size={20}
                    className={`transition-opacity opacity-50}`}
                  />
                </NavLink>
              ))}
            </div>

            {/* Mobile Footer Info */}
            <div className="mt-auto pt-8 border-t border-slate-100">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                Emergency Contact
              </p>
              <a
                href={`tel:${hospitalInfo.phone[0]}`}
                className="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl mb-4 active:scale-95 transition-transform"
              >
                <Phone size={20} className="text-healing-500" />
                Call Ambulance
              </a>
              <div className="flex gap-4 justify-center">
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-medical-600 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-medical-600 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" }, // You might need to import Instagram
    { icon: <Linkedin size={20} />, href: "#" }, // You might need to import Linkedin
    { icon: <Twitter size={20} />, href: "#" }, // You might need to import Twitter
  ];

  // Make sure to import these icons from 'lucide-react' at the top of the file:
  // import { Facebook, Instagram, Linkedin, Twitter, ArrowRight, Send } from 'lucide-react';

  return (
    <footer className="bg-slate-900 text-slate-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-medical-500 via-healing-500 to-medical-600"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-medical-500 rounded-full blur-[128px] opacity-10"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-healing-500 rounded-full blur-[128px] opacity-10"></div>

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 1. Brand & About */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-linear-to-br from-medical-500 to-medical-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-medical-500/20 group-hover:scale-110 transition-transform">
                H
              </div>
              <div className="leading-tight">
                <h2 className="text-xl font-bold text-white">Holy Touch</h2>
                <p className="text-xs font-medium text-medical-400 tracking-wider">
                  HOSPITAL
                </p>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8">
              Providing advanced surgical care and compassionate medical
              services to the people of Patuakhali since 2018. Your health is
              our priority.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 hover:bg-medical-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 text-slate-400 hover:text-white border border-white/5 hover:border-transparent"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links (Added Gallery & News) */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-medical-500 rounded-full"></span>{" "}
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Doctors", path: "/doctors" },
                { name: "Services", path: "/services" },
                { name: "Photo Gallery", path: "/gallery" }, // Added
                { name: "News & Events", path: "/news" }, // Added
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 hover:text-medical-400 transition-all duration-300 hover:translate-x-1"
                  >
                    <ArrowRight size={14} className="text-medical-500" />{" "}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-healing-500 rounded-full"></span>{" "}
              Contact Info
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="bg-medical-500/10 p-3 rounded-lg text-medical-500 group-hover:bg-medical-500 group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">
                    Hospital Address
                  </p>
                  <p className="text-sm text-slate-400">
                    {hospitalInfo.address}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="bg-healing-500/10 p-3 rounded-lg text-healing-500 group-hover:bg-healing-500 group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">
                    Emergency (24/7)
                  </p>
                  <div className="flex flex-col text-sm text-slate-400">
                    {hospitalInfo.phone.map((p) => (
                      <span key={p}>{p}</span>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter & Map */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to get the latest health tips and hospital updates.
            </p>
            <form className="relative mb-8">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-medical-500 focus:bg-white/10 transition-all"
              />
              <button className="absolute right-2 top-2 bg-medical-600 p-1.5 rounded-lg text-white hover:bg-medical-500 transition-colors">
                <Send size={16} />
              </button>
            </form>

            {/* Mini Map Preview */}
            <div className="h-24 rounded-xl overflow-hidden relative border border-white/10 opacity-70 hover:opacity-100 transition-opacity">
              <iframe
                src={hospitalInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">Holy Touch Hospital</span>.
            All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link
              to="/privacy"
              className="hover:text-medical-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-medical-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
