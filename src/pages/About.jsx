import { motion } from "framer-motion";
import { Award, Heart, Quote, Shield, Target } from "lucide-react";
import ChairmanImage from "../assets/images/nazimul-haq.jpg"; // <--- Add this
import MDImage from "../assets/images/Zakia.jpg";
import SEO from "../components/SEO";
import { seoData } from "../data/seo";

const About = () => {
  return (
    <>
      <SEO seoData={seoData?.about} />

      <div className="bg-white min-h-screen">
        {/* 1. Page Header */}
        <div className="bg-medical-50 py-20 lg:py-28 relative overflow-hidden">
          {/* Abstract Shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-medical-500 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-healing-500 rounded-full blur-3xl opacity-30 translate-y-1/3 -translate-x-1/3"></div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
            >
              About <span className="text-medical-600">Holy Touch</span>
            </motion.h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Since 2018, we have been rewriting the story of healthcare in
              Patuakhali with advanced technology and compassionate care.
            </p>
          </div>
        </div>

        {/* 2. Mission & Vision */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-medical-500/5 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-medical-100 text-medical-600 rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To provide accessible, affordable, and high-quality surgical and
                medical care to the people of the southern region of Bangladesh.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-medical-600 p-8 rounded-3xl text-white shadow-xl shadow-medical-600/20 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-medical-100 leading-relaxed">
                To become the most trusted referral center for advanced
                laparoscopic surgery and comprehensive maternity care in Barisal
                Division.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-medical-500/5 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-healing-500/10 text-healing-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Core Values
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <Award size={18} className="text-medical-600" /> Patient
                  Safety First
                </li>
                <li className="flex items-center gap-2">
                  <Award size={18} className="text-medical-600" /> Ethical
                  Practice
                </li>
                <li className="flex items-center gap-2">
                  <Award size={18} className="text-medical-600" /> 24/7
                  Availability
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Stats / Timeline */}
        <div className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-4 border-r border-slate-700 last:border-0">
                <div className="text-5xl font-bold text-medical-500 mb-2">
                  2018
                </div>
                <div className="text-slate-400">Founded</div>
              </div>
              <div className="p-4 border-r border-slate-700 last:border-0">
                <div className="text-5xl font-bold text-healing-500 mb-2">
                  15+
                </div>
                <div className="text-slate-400">Specialist Doctors</div>
              </div>
              <div className="p-4 border-r border-slate-700 last:border-0">
                <div className="text-5xl font-bold text-medical-500 mb-2">
                  50+
                </div>
                <div className="text-slate-400">Beds</div>
              </div>
              <div className="p-4">
                <div className="text-5xl font-bold text-healing-500 mb-2">
                  12k+
                </div>
                <div className="text-slate-400">Happy Patients</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Governing Body Message (Anonymous / Title Only) */}
        <div className="container mx-auto px-4 py-24">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Governing Body Message
            </h2>
            <div className="h-1.5 w-24 bg-medical-500 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg">
              Committed to clinical excellence, ethical practice, and the
              well-being of our community.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
            {/* --- CHAIRMAN MESSAGE --- */}
            <div className="bg-white rounded-3xl p-10 relative group hover:shadow-2xl hover:shadow-medical-500/10 transition-all duration-300 border-t-4 border-medical-500 shadow-lg">
              {/* Decorative Quote Icon */}
              <div className="absolute -top-6 left-10 w-12 h-12 bg-medical-500 text-white flex items-center justify-center rounded-full shadow-lg">
                <Quote size={24} fill="currentColor" />
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Message from the Chairman
                </h3>
                <div className="w-12 h-1 bg-medical-200 rounded-full mb-6"></div>

                <div className="space-y-4 text-slate-600 leading-relaxed italic">
                  <p>
                    "Our vision is to establish Holy Touch Hospital as a center
                    of excellence for advanced surgery in the Barisal division.
                    We are committed to ensuring that every patient receives the
                    highest standard of ethical medical care without needing to
                    travel to Dhaka."
                  </p>
                  <p>
                    "We have equipped our Operation Theaters with world-class
                    technology to ensure patient safety above all else."
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                  <div className="h-10 w-1 bg-medical-500 rounded-full"></div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                      The Chairman
                    </p>
                    <p className="text-xs text-slate-500">
                      Holy Touch Hospital
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- MANAGING DIRECTOR MESSAGE --- */}
            <div className="bg-white rounded-3xl p-10 relative group hover:shadow-2xl hover:shadow-healing-500/10 transition-all duration-300 border-t-4 border-healing-500 shadow-lg">
              {/* Decorative Quote Icon */}
              <div className="absolute -top-6 left-10 w-12 h-12 bg-healing-500 text-white flex items-center justify-center rounded-full shadow-lg">
                <Quote size={24} fill="currentColor" />
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Message from the Managing Director
                </h3>
                <div className="w-12 h-1 bg-healing-200 rounded-full mb-6"></div>

                <div className="space-y-4 text-slate-600 leading-relaxed italic">
                  <p>
                    "When we started this journey, our goal was simple: to bring
                    modern surgical and maternity care to the doorsteps of
                    Patuakhali. We wanted to create a hospital where patients
                    feel treated with dignity and compassion."
                  </p>
                  <p>
                    "Today, I am proud that we have successfully served
                    thousands of families. Our promise to you is uncompromised
                    quality, hygiene, and 24/7 support."
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                  <div className="h-10 w-1 bg-healing-500 rounded-full"></div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                      The Managing Director
                    </p>
                    <p className="text-xs text-slate-500">
                      Holy Touch Hospital
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
