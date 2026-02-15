import { motion } from "framer-motion";
import { Award, Clock, Phone, Stethoscope } from "lucide-react";
import { doctors, hospitalInfo } from "../data/data";
import { seoData } from "../data/seo";
import SEO from "../components/SEO";
import DoctorCard from "../components/DoctorCard";

const Doctors = () => {
  return (
    <>
      <SEO seoData={seoData?.doctors} />

      <div className="pt-20 pb-24 bg-slate-50 min-h-screen">
        {/* Page Header */}
        <div className="container mx-auto px-4 mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Meet Our <span className="text-medical-600">Specialists</span>
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our team of experienced consultants and surgeons is dedicated to
            providing you with the best medical care in Patuakhali.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2  gap-8">
            {doctors.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-medical-500/10 border border-slate-100 transition-all duration-300 group"
              >
                <DoctorCard key={doc.id} doctor={doc} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;
