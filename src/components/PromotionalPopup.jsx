import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const PromotionalPopup = ({ imageSrc }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    // 1. Check if user already closed it this session (Optional: good for UX)
    const sessionClosed = sessionStorage.getItem("popupClosed");
    if (sessionClosed) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHasBeenClosed(true);
      return;
    }

    // 2. TRIGGER: Show after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // 3. TRIGGER: Or Show after scrolling down 500px
    const handleScroll = () => {
      if (window.scrollY > 500 && !hasBeenClosed) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasBeenClosed]);

  const closePopup = () => {
    setIsVisible(false);
    setHasBeenClosed(true);
    // Remember that user closed it (so it doesn't show again until tab close)
    sessionStorage.setItem('popupClosed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
          {/* Backdrop (Dark Background) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-3xl w-full"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 bg-white/80 p-2 rounded-full text-slate-600 hover:bg-red-50 hover:text-red-500 transition-colors z-10 backdrop-blur"
            >
              <X size={20} />
            </button>

            {/* Image */}
            <img
              src={imageSrc}
              alt="Special Offer"
              className="w-full h-auto object-cover"
            />

            {/* Optional: Call to Action Button below image */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Exclusive Hospital Services
              </h3>
              <p className="text-slate-500 mb-4 text-sm">
                Check out our latest facilities and packages.
              </p>
              <button
                onClick={closePopup}
                className="bg-medical-600 text-white px-6 py-2 rounded-full font-bold hover:bg-medical-700 transition w-full"
              >
                View Details
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PromotionalPopup;
