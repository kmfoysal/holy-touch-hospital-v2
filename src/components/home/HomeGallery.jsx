import { motion } from "framer-motion";
import { ArrowRight, ZoomIn } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

// 1. IMPORT LIGHTBOX
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import img1 from "../../assets/images/whyUs1.jpg"; // Interior
import img2 from "../../assets/images/ot.jpeg"; // OT
import img3 from "../../assets/images/ot-1.jpeg"; // OT
import img4 from "../../assets/images/ot-2.jpeg"; // OT
import img5 from "../../assets/images/vip-cabin-1.jpeg"; // Cabin
import img6 from "../../assets/images/vvip-cabin-1.jpeg"; // Cabin
import img7 from "../../assets/images/double-cabin-1.jpeg"; // Cabin
import img8 from "../../assets/images/double-cabin-2.jpeg"; // Cabin
import img9 from "../../assets/images/emg-exit.jpeg"; // Interior
import img10 from "../../assets/images/whyUs2.jpg";
import img11 from "../../assets/images/whyUs5.jpg";
import img12 from "../../assets/images/whyUs4.jpg";
import img13 from "../../assets/images/whyUs6.jpg";

const galleryImages = [
  // COLUMN 1 START (Mix of Wide & Tall)
  {
    src: img5, // VIP Cabin
    category: "Luxury Accommodation",
    title: "Premium VIP Suite",
    height: "h-96", // Tall anchor image for Col 1
  },
  {
    src: img2, // OT Entrance
    category: "Surgical Wing",
    title: "Sterile OT Zone",
    height: "h-64", // Short balance
  },
  {
    src: img7, // Double Cabin
    category: "Inpatient Care",
    title: "Standard Double Cabin",
    height: "h-72", // Medium
  },
  {
    src: img12, // Laparoscopy
    category: "Advanced Technology",
    title: "HD Laparoscopy Unit",
    height: "h-64", // Short
  },

  // COLUMN 2 START (Focus on the Main Features)
  {
    src: img4, // OT 2
    category: "Operation Theater",
    title: "Modern Surgical Complex",
    height: "h-80", // Medium-Tall
  },
  {
    src: img1, // Interior
    category: "Patient Comfort",
    title: "Spacious Waiting Lounge",
    height: "h-64", // Short
  },
  {
    src: img13, // Anesthesia
    category: "Critical Care",
    title: "Digital Anesthesia Workstation",
    height: "h-96", // Tall feature
  },
  {
    src: img9, // Emergency
    category: "Safety",
    title: "Emergency Exit Route",
    height: "h-64", // Short
  },

  // COLUMN 3 START (Visual Balance)
  {
    src: img3, // OT 1
    category: "Operation Theater",
    title: "Advanced OT Setup",
    height: "h-72", // Medium
  },
  {
    src: img6, // VVIP Cabin
    category: "Luxury Accommodation",
    title: "Executive VVIP Cabin",
    height: "h-80", // Medium-Tall
  },
  {
    src: img11, // Corridor
    category: "Interior",
    title: "Hygienic Hospital Corridor",
    height: "h-64", // Short
  },
  {
    src: img8, // Double Cabin 2
    category: "Inpatient Care",
    title: "Patient Recovery Room",
    height: "h-72", // Medium
  },
//   {
//     src: img10, // OT 3 (WhyUs2)
//     category: "Surgical Wing",
//     title: "Dedicated OT Staff",
//     height: "h-64", // Short
//   },
];

const HomeGallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Helper to open specific image
  const handleOpen = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <section className="py-20 bg-slate-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-medical-200 text-medical-600 text-xs font-bold mb-4 shadow-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-healing-500 animate-pulse" />
              Hospital Interior
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              A Glimpse Inside{" "}
              <span className="text-medical-600">Holy Touch</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Explore our modern facilities, from state-of-the-art Operation
              Theaters to comfortable Cabins designed for healing.
            </p>
          </div>

          <Link
            to="/gallery"
            className="group flex items-center gap-2 text-medical-600 font-bold hover:text-medical-700 transition-colors"
          >
            View All Photos
            <span className="bg-medical-50 p-2 rounded-full group-hover:bg-medical-100 transition-colors">
              <ArrowRight size={20} />
            </span>
          </Link>
        </div>

        {/* MASONRY GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => handleOpen(i)} // <--- CLICK TO OPEN
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className={`w-full ${item.height} object-cover transform transition-transform duration-700 group-hover:scale-110`}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-medical-500 text-xs font-bold uppercase tracking-wider mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>

                {/* Center Zoom Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-4 rounded-full text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn size={32} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LIGHTBOX COMPONENT */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={galleryImages.map((img) => ({ src: img.src }))}
          // 👇 BLUR EFFECT + MEDICAL BLUE TINT
          styles={{
            root: {
              "--yarl__container_background_color": "rgba(15, 23, 42, 0.8)", // Slate-900 with opacity
              backdropFilter: "blur(10px)", // Blurs the background content
              WebkitBackdropFilter: "blur(10px)", // Safari support
            },
          }}
        />
      </div>
    </section>
  );
};

export default HomeGallery;
