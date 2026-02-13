import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router";
import { hospitalFacilities, hospitalInfo } from "../data/data";

import WhyImg1 from "../assets/images/whyUs6.jpg";
import WhyImg2 from "../assets/images/whyUs2.jpg";
import WhyImg3 from "../assets/images/whyUs4.jpg";
import WhyImg4 from "../assets/images/whyUs5.jpg";

const Services = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header */}
      <div className="bg-medical-900 text-white py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-medical-500 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Medical Services
          </motion.h1>
          <p className="text-medical-100 max-w-2xl mx-auto text-lg">
            Comprehensive care designed for your family's health and well-being.
          </p>
        </div>
      </div>

      {/* 2. Photo + Highlights Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Summary */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 bg-white border border-medical-200 text-medical-700 font-bold rounded-full text-sm mb-6 shadow-sm">
                Service Overview
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Modern Care at <br />
                <span className="text-medical-600">Affordable Cost</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Holy Touch Hospital is equipped with 3 modern Operation Theaters
                and specialized machines like the Longo Machine for painless
                piles surgery. We ensure comfort with separate wards and VVIP
                cabins.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-healing-500" />
                  <span className="font-bold text-slate-700">3 Modern OTs</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-healing-500" />
                  <span className="font-bold text-slate-700">
                    Laparoscopy Unit
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-healing-500" />
                  <span className="font-bold text-slate-700">Digital Lab</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-healing-500" />
                  <span className="font-bold text-slate-700">
                    24/7 Generator
                  </span>
                </div>
              </div>

              <a
                href={`tel:${hospitalInfo.phone[0]}`}
                className="inline-flex items-center gap-2 bg-medical-600 text-white px-8 py-4 rounded-full font-bold hover:bg-medical-700 transition shadow-xl shadow-medical-500/20"
              >
                <Phone size={20} /> Call for Details
              </a>
            </motion.div>

            {/* Right: The Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-medical-100 rounded-full blur-3xl opacity-30"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div
                    className="h-60 bg-slate-200 rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${WhyImg1})` }}
                  ></div>
                  <div
                    className="h-46 bg-slate-200 rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${WhyImg2})` }}
                  ></div>
                </div>
                <div className="space-y-4">
                  <div
                    className="h-46 bg-slate-200 rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${WhyImg3})` }}
                  ></div>
                  <div
                    className="h-60 bg-slate-200 rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${WhyImg4})` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Full 9-Point List */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Facilities
          </h2>
          <p className="text-slate-600 text-lg">
            A detailed look at what we offer to our patients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitalFacilities.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-medical-300 hover:shadow-xl hover:-translate-y-1 transition-all group h-full flex flex-col"
            >
              <div className="w-14 h-14 bg-medical-50 rounded-2xl flex items-center justify-center text-medical-600 mb-6 group-hover:bg-medical-600 group-hover:text-white transition-colors">
                <item.icon size={28} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed mb-4 flex-grow">
                {item.desc}
              </p>

              {/* Bangla Translation - Excellent for Local Trust */}
              <div className="pt-4 border-t border-slate-50">
                <p className="text-sm text-slate-400 font-medium font-['Hind_Siliguri']">
                  {item.original}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Bottom CTA */}
      <div className="bg-medical-50 py-24 border-t border-medical-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Need Emergency Admission?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-medical-600 text-white px-8 py-3 rounded-full font-bold hover:bg-medical-700 transition"
            >
              Get Directions <ArrowRight size={20} />
            </Link>
            <a
              href={`tel:${hospitalInfo.phone[0]}`}
              className="inline-flex items-center gap-2 bg-white text-medical-900 border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition"
            >
              Call Ambulance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
