import { motion } from "framer-motion";
import { Award, Heart, Shield, Target } from "lucide-react";
import DirectorImage from "../assets/images/Zakia.jpg";

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Page Header */}
      <div className="bg-medical-50 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/dot-bg.png')] opacity-10"></div>
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
                <Award size={18} className="text-medical-600" /> Patient Safety
                First
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

      {/* 4. Director's Message (Optional but Recommended) */}
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            {/* Placeholder for Director Image */}
            <div className="aspect-[3/4] bg-slate-200 rounded-3xl relative overflow-hidden">
              <img src={DirectorImage} alt="Director Image" className="h-full w-full object-cover"/>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Message from the Director
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                "Welcome to Holy Touch Hospital. When we started this journey,
                our goal was simple: to bring high-level surgical care to the
                doorsteps of Patuakhali so people wouldn't have to travel to
                Dhaka for basic operations."
              </p>
              <p>
                "Today, I am proud to say that we have successfully performed
                thousands of surgeries with a near-perfect success rate. Our
                promise to you is uncompromised quality and hygiene."
              </p>
            </div>
            <div className="mt-8">
              <p className="font-bold text-slate-900 text-xl">
                Dr. Zakia Sultana
              </p>
              <p className="text-medical-600">
                Managing Director, Holy Touch Hospital
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
