'use client';

import { motion } from 'framer-motion';
import { Bell, ArrowRight } from 'lucide-react';
import { latestUpdates } from '@/data/blogData';

export default function LatestUpdates() {
  return (
    <section className="bg-[#071320] py-20 px-6 lg:px-8 relative max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <div className="p-3 bg-[#1E3A8A]/20 rounded-xl border border-[#1E3A8A]/50">
          <Bell className="w-6 h-6 text-[#D4AF37]" />
        </div>
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white">
          Latest University Updates
        </h2>
      </div>

      <div className="relative border-l-2 border-white/10 pl-6 md:pl-10 ml-4 md:ml-6">
        {latestUpdates.map((update, idx) => (
          <motion.div
            key={update.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="mb-12 relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[35px] md:-left-[51px] top-1 w-4 h-4 bg-[#071320] border-2 border-[#D4AF37] rounded-full group-hover:bg-[#D4AF37] group-hover:shadow-[0_0_10px_#D4AF37] transition-all duration-300" />

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 relative overflow-hidden">
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <span className="text-sm font-semibold text-[#1E3A8A] bg-blue-100/10 px-3 py-1 rounded-full border border-blue-500/20">
                  {update.category}
                </span>
                <span className="text-sm text-[#B8C0CC]">{update.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                {update.title}
              </h3>
              
              <p className="text-[#B8C0CC] mb-4">
                {update.description}
              </p>

              <button className="text-sm font-semibold text-white flex items-center gap-1 hover:text-[#D4AF37] transition-colors">
                Read Details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
