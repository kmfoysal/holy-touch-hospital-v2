import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const FacebookFeed = () => {
  const [key, setKey] = useState(0);
  const [loading, setLoading] = useState(true);

  // Force re-render on resize to fix Facebook's responsive glitch
  useEffect(() => {
    const handleResize = () => {
      setKey((prev) => prev + 1);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full mx-auto bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 min-h-150">
      {/* Loading Spinner (Visible until iframe loads) */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-10">
          <Loader2 className="animate-spin text-medical-600" size={32} />
        </div>
      )}

      <iframe
        key={key} // Key forces re-render on resize
        src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhth.ptk.bd&tabs=timeline&width=375&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
        width="100%"
        height="800"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        onLoad={() => setLoading(false)}
        className="block"
        title="Facebook Feed"
      ></iframe>
    </div>
  );
};

export default FacebookFeed;
