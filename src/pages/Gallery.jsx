import { AnimatePresence, motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { useState } from "react";
import { galleryImages } from "../data/data";

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    "Interior",
    "Operation Theater",
    "Wards",
    "Events",
  ];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-slate-600">
            A glimpse into our facilities, equipment, and community activities.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat
                  ? "bg-medical-600 text-white shadow-lg shadow-medical-500/30"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200 cursor-pointer"
              >
                {/* Placeholder for Real Image */}
                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform duration-500">
                  <img src={img.src} className="w-full h-full object-cover" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-medical-400 text-xs font-bold uppercase tracking-wider mb-1">
                    {img.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
