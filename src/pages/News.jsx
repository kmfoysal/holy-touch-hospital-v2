import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { newsItems } from '../data/data';

const News = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">News & Updates</h1>
          <p className="text-slate-600">
            Stay updated with the latest announcements, health tips, and success stories from Holy Touch Hospital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Area */}
              <div className="h-56 bg-slate-200 relative">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Calendar size={14} className="text-medical-600"/> {item.date}
                </div>
                 {/* Placeholder for Image */}
                 <div className="w-full h-full bg-gradient-to-br from-medical-100 to-slate-200" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-medical-600 text-xs font-bold uppercase tracking-wider mb-3">
                  {item.category}
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-medical-600 transition-colors cursor-pointer">
                  {item.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {item.excerpt}
                </p>
                
                <button className="flex items-center gap-2 text-slate-900 font-bold text-sm hover:gap-3 transition-all group">
                  Read Full Story <ArrowRight size={16} className="text-medical-600 group-hover:text-medical-500" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default News;