import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Minus,
  Phone,
  Plus,
  Star,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import {
  faqs,
  features,
  hospitalInfo,
  services,
  stats,
  testimonials,
} from "../data/data";
import HeroImg from "../assets/images/service-img-1.jpg";
import WhyImg1 from '../assets/images/whyUs1.jpg';
import WhyImg2 from '../assets/images/whyUs2.jpg';
import WhyImg3 from '../assets/images/whyUs4.jpg';
import WhyImg4 from '../assets/images/whyUs5.jpg';

// --- ANIMATION VARIANTS ---
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// --- SUB-COMPONENTS ---

const SectionHeader = ({ title, subtitle, center = true }) => (
  <div
    className={`mb-12 ${center ? "text-center" : "text-left"} max-w-3xl mx-auto`}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
      {title}
    </h2>
    <div
      className={`h-1.5 w-20 bg-medical-500 rounded-full mb-4 ${center ? "mx-auto" : ""}`}
    />
    <p className="text-slate-600 text-lg">{subtitle}</p>
  </div>
);

const AccordionItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden mb-4 bg-white transition-all hover:border-medical-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left bg-slate-50/50 hover:bg-white"
      >
        <span className="font-bold text-slate-800 text-lg">{q}</span>
        {isOpen ? (
          <Minus className="text-medical-600" />
        ) : (
          <Plus className="text-slate-400" />
        )}
      </button>
      {isOpen && (
        <div className="p-5 pt-0 text-slate-600 leading-relaxed bg-white border-t border-slate-100 mt-2">
          {a}
        </div>
      )}
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---

const Home = () => {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-28 lg:pb-36 bg-medical-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-medical-100/60 to-transparent -z-10 rounded-bl-[200px]" />

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-medical-200 text-medical-700 text-sm font-bold mb-8 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-healing-500 animate-pulse" />
              Serving Patuakhali Since 2018
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Advanced Care <br />
              <span className="text-medical-600">Close to Home</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              Experience world-class surgical and maternity care with our expert
              team of consultants and modern technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-medical-600 text-white px-8 py-4 rounded-full font-bold hover:bg-medical-700 transition shadow-xl shadow-medical-500/20 flex items-center gap-2"
              >
                Book Appointment <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="bg-white text-medical-900 border border-slate-300 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          {/* Hero Image / Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
              <div
                className="bg-slate-200 h-[500px] w-full flex items-center justify-center text-slate-400 bg-cover bg-center"
                style={{
                  backgroundImage: "url(/assets/images/service-img-1.jpg)",
                }}
              >
                {/* Fallback if image missing */}
                <img
                  src={HeroImg}
                  alt="Holy Touch Hospital Logo"
                  className="h-full w-full"
                />
              </div>
            </div>
            {/* Floating Badge with Gradient Border */}
            <div className="absolute bottom-10 -left-10 z-20 animate-bounce-slow rounded-2xl p-[2px] bg-gradient-to-r from-medical-500 via-healing-500 to-medical-600 shadow-xl">
              {/* Inner White Box */}
              <div className="bg-white rounded-[14px] p-5 flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">
                    98% Success
                  </p>
                  <p className="text-sm text-slate-500">
                    Surgical Recovery Rate
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION (New) */}
      <section className="py-12 bg-medical-600 relative z-20 -mt-10 mx-4 lg:mx-20 rounded-2xl shadow-2xl text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-medical-500/50">
            {stats.map((stat) => (
              <div key={stat.id} className="p-2">
                <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <h3 className="text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </h3>
                <p className="text-medical-100 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT / WHY US (New) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="order-2 lg:order-1"
          >
            <div className="inline-block px-3 py-1 bg-medical-50 text-medical-700 font-bold rounded-full text-sm mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Dedicated to Providing the <br />
              <span className="text-medical-600">Highest Standard of Care</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              At Holy Touch Hospital, we believe in treating patients with
              dignity and compassion. Our facility is equipped with modern
              Operation Theaters and a dedicated team available round the clock.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-medical-50 rounded-lg flex items-center justify-center text-medical-600 shrink-0">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/about"
                className="text-medical-600 font-bold hover:underline flex items-center gap-2"
              >
                Learn more about our mission <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

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
      </section>

      {/* 4. SERVICES PREVIEW */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Medical Services"
            subtitle="Comprehensive healthcare solutions designed for your family's well-being."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeIn}
                className="group p-8 bg-white rounded-2xl border border-slate-100 hover:border-medical-300 hover:shadow-xl hover:shadow-medical-500/10 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-medical-50 rounded-xl flex items-center justify-center text-medical-600 mb-6 group-hover:scale-110 transition-transform group-hover:bg-medical-600 group-hover:text-white">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  className="text-medical-600 font-semibold text-sm flex items-center gap-1 group-hover:translate-x-2 transition-transform"
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="btn-secondary px-8 py-3 rounded-full border border-slate-300 font-bold hover:bg-white transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 5. EMERGENCY CTA BANNER (New) */}
      <section className="py-16 bg-gradient-to-r from-medical-900 to-medical-800 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Need Emergency Help?</h2>
            <p className="text-medical-100 text-lg">
              Our ambulance and emergency unit is ready 24/7.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${hospitalInfo.phone[0]}`}
              className="bg-white text-medical-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition flex items-center justify-center gap-2"
            >
              <Phone size={20} className="fill-medical-900" />{" "}
              {hospitalInfo.phone[0]}
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full font-bold border-2 border-white/20 hover:bg-white/10 transition text-center"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS (New) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What Patients Say"
            subtitle="We are proud to be the trusted choice for thousands of families."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative"
              >
                {/* Quote Icon */}
                <div className="text-6xl text-medical-100 absolute top-4 right-6 font-serif">
                  "
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 relative z-10">
                  {item.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-medical-200 rounded-full flex items-center justify-center font-bold text-medical-700">
                    {item.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION (New) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeader
            title="Common Questions"
            subtitle="Find answers to frequently asked questions about our hospital."
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
