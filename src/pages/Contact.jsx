import { Mail, MapPin, Phone } from "lucide-react";
import SEO from "../components/SEO";
import { hospitalInfo } from "../data/data";
import { seoData } from "../data/seo";

const Contact = () => {
  return (
    <>
      <SEO seoData={seoData.contact} />

      <div className="bg-slate-50 min-h-screen pt-12 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-slate-600">
              Whether you need to book an appointment or have a general query,
              our team is ready to assist you 24/7.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Send a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-medical-500 focus:ring-2 focus:ring-medical-200 outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-medical-500 focus:ring-2 focus:ring-medical-200 outline-none transition"
                      placeholder="+880 17..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-medical-500 focus:ring-2 focus:ring-medical-200 outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-medical-500 focus:ring-2 focus:ring-medical-200 outline-none transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-medical-600 text-white font-bold py-4 rounded-xl hover:bg-medical-700 transition shadow-lg shadow-medical-500/20"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Info & Map */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
                  <div className="bg-medical-50 p-3 rounded-lg text-medical-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Phone</h3>
                    {hospitalInfo.phone.map((p) => (
                      <p key={p} className="text-slate-600 text-sm">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
                  <div className="bg-healing-500/10 p-3 rounded-lg text-healing-500 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email</h3>
                    <p className="text-slate-600 text-sm">
                      {hospitalInfo.email}
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4 sm:col-span-2">
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-500 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Location</h3>
                    <p className="text-slate-600 text-sm">
                      {hospitalInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-2 rounded-3xl shadow-sm border border-slate-100 h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.7281300538616!2d90.33516519999999!3d22.363892099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aac7500e25b8f9%3A0xce4888ee84232451!2sHoli%20Touch%20Hospital!5e0!3m2!1sen!2sbd!4v1771011069512!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "1rem" }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Holy Touch Hospital Map"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
