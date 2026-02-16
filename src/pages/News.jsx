import { ExternalLink, Facebook } from "lucide-react";
import SEO from "../components/SEO";
import { seoData } from "../data/seo";
import FacebookFeed from "../components/news/FacebookFeed";

const News = () => {
  return (
    <>
      <SEO seoData={seoData?.news} />

      {/* 1. Page Header (Modern Gradient) */}
      <div className="bg-medical-50 py-20 relative overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-medical-500 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-healing-500 rounded-full blur-3xl opacity-30 translate-y-1/3 -translate-x-1/3"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-medical-100 text-medical-600 text-sm font-bold mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Live Updates
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Social <span className="text-medical-600">Hub</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Connect with us on Facebook for real-time announcements, medical
            camp schedules, and health tips.
          </p>
        </div>
      </div>

      {/* 2. Main Feed Section */}
      <div className="bg-slate-50 py-24 min-h-screen relative">
        <div className="container mx-auto px-1 relative z-10 -mt-10">
          {/* THE CARD CONTAINER */}
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 flex flex-col md:flex-row">
            {/* Left Side: Desktop Info Panel (Hidden on Mobile) */}
            <div className="hidden md:flex md:w-5/12 bg-slate-900 text-white p-10 flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-medical-600 to-slate-900 opacity-90"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Facebook size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Connect With Us</h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Like our page to get notified about:
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-healing-500"></span>
                    Free Medical Camps
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-healing-500"></span>
                    New Doctor Schedules
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-healing-500"></span>
                    Health Awareness Tips
                  </li>
                </ul>
              </div>

              <a
                href="https://www.facebook.com/hth.ptk.bd"
                target="_blank"
                rel="noreferrer"
                className="relative z-10 flex items-center gap-2 text-white font-bold hover:text-healing-400 transition-colors group"
              >
                Visit Official Page{" "}
                <ExternalLink
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            {/* Right Side: The Feed (Visible on All Devices) */}
            <div className="w-full md:w-7/12 bg-slate-50 p-4 md:p-8 flex justify-center items-start">
              {/* This component will auto-resize to fit this container */}
              <FacebookFeed />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
