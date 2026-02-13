import { motion } from "framer-motion";
import { Award, Clock, Phone, Stethoscope } from "lucide-react";
import { doctors, hospitalInfo } from "../data/data";

const Doctors = () => {
  return (
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-medical-500/10 border border-slate-100 transition-all duration-300 group"
            >
              {/* Doctor Image Placeholder - You can add real <img> later */}
              <div className="h-64 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-medical-600/10 group-hover:bg-medical-600/0 transition-colors" />
                <img src={doc?.image} />

                {/* Fallback Icon if no image */}
                <div className="w-full h-full flex items-center justify-center text-slate-400 bg-gradient-to-t from-slate-300 to-slate-200">
                  <Stethoscope size={64} className="opacity-50" />
                </div>

                {/* Visiting Hours Badge */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-medical-700 flex items-center gap-1 shadow-sm">
                  <Clock size={12} /> 5:00 PM - 9:00 PM
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {doc.name}
                </h3>
                <p className="text-medical-600 font-medium text-sm mb-4">
                  {doc.degrees}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-healing-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-slate-700">
                        Specialty
                      </p>
                      <p className="text-sm text-slate-600">{doc.specialty}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Stethoscope className="w-5 h-5 text-medical-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-slate-700">
                        Position
                      </p>
                      <p className="text-sm text-slate-600">{doc.position}</p>
                    </div>
                  </div>
                </div>

                <a
                  href={`tel:${hospitalInfo.phone[0]}`}
                  className="w-full py-3 rounded-xl border border-medical-600 text-medical-600 font-bold hover:bg-medical-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={18} /> Call for Appointment
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
