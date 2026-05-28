'use client';

import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, BookOpen, Layers, ShieldCheck, Globe2, Star, UserRoundCheck, CalendarDays } from 'lucide-react';
import { scholarshipHighlights } from '@/data/blogData';
import { useState, useEffect } from 'react';

const CountdownTimer = ({ deadline }: { deadline: string }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(deadline) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, mins: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute
    return () => clearInterval(timer);
  }, [deadline]);

  const hh = String(timeLeft.hours).padStart(2, '0');
  const mm = String(timeLeft.mins).padStart(2, '0');

  return (
    <div className="w-full rounded-xl border border-white/10 bg-[#050f19]/70 backdrop-blur-md px-4 py-3 shadow-inner">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-white/60">
          <CalendarDays className="h-4 w-4 text-[#D4AF37]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Deadline In</span>
        </div>
        <span className="text-xs font-extrabold text-[#D4AF37] tracking-wide">
          {timeLeft.days}D {hh}H {mm}M
        </span>
      </div>
    </div>
  );
};

export default function ScholarshipHighlights() {
  const cardDetails = [
    {
      progress: 85,
      degrees: 'PhD, Masters',
      subjects: 'All Subjects',
      featured: true,
      countryFull: 'CANADA',
      image:
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=70',
    },
    {
      progress: 70,
      degrees: 'Masters, MBA',
      subjects: 'All Subjects',
      featured: false,
      countryFull: 'UNITED KINGDOM',
      image:
        'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=70',
    },
    {
      progress: 80,
      degrees: 'PhD, Masters',
      subjects: 'Engineering, CS',
      featured: false,
      countryFull: 'CHINA',
      image:
        'https://images.unsplash.com/photo-1543158266-0066955465c0?auto=format&fit=crop&w=1200&q=70',
    },
    {
      progress: 80,
      degrees: 'Bachelors, Masters',
      subjects: 'All Subjects',
      featured: false,
      countryFull: 'AUSTRALIA',
      image:
        'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=70',
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#030c14] py-24 px-4 sm:px-6 lg:px-8 border-y border-white/5 z-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#1E3A8A]/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-[#D4AF37]/8 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[240px] w-[520px] bg-gradient-to-tr from-white/5 to-transparent blur-[60px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#071320]/60 px-4 py-2 w-max">
              <GraduationCap className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#D4AF37] font-sans">
                Global Opportunities
              </span>
            </div>

            <div>
              <h2 className="text-4xl font-extrabold text-white leading-[1.05] font-playfair">
                Urgent <br /> Scholarships
              </h2>
              <p className="mt-4 text-white/65 text-sm leading-relaxed font-sans">
                Exclusive funding opportunities with upcoming deadlines. Don’t miss your chance to study at top universities worldwide.
              </p>
            </div>

            <button className="inline-flex items-center justify-between gap-3 rounded-2xl border border-[#D4AF37]/25 bg-[#071320]/60 px-5 py-4 text-sm font-bold text-[#D4AF37] hover:bg-[#071320]/80 transition-colors w-full sm:w-max font-sans">
              <span>View All Scholarships</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4AF37] text-black">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          </div>

          <div className="lg:col-span-9">
            <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-3 rounded-2xl border border-white/10 bg-[#071320]/55 backdrop-blur-xl p-4">
              {[
                { Icon: GraduationCap, label: '1000+', sub: 'Scholarships' },
                { Icon: Globe2, label: '50+', sub: 'Countries' },
                { Icon: Star, label: 'Top', sub: 'Universities' },
                { Icon: UserRoundCheck, label: 'Expert', sub: 'Guidance' },
              ].map((item) => (
                <div key={item.sub} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#050f19]/80 border border-white/10 flex items-center justify-center">
                    <item.Icon className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-extrabold text-white">{item.label}</div>
                    <div className="text-[11px] text-white/55 font-semibold">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {scholarshipHighlights.map((scholarship, idx) => {
                const extra = cardDetails[idx] || cardDetails[0];
                return (
                  <motion.div
                    key={scholarship.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#071320]/55 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <img src={extra.image} alt="" className="h-full w-full object-cover object-center scale-[1.02] group-hover:scale-[1.08] transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071320] via-[#071320]/35 to-transparent" />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        {scholarship.code ? (
                          <span className={`fi fi-${scholarship.code} text-xl !rounded-[2px]`} title={scholarship.country} />
                        ) : (
                          <span className="text-xl">{scholarship.flag}</span>
                        )}
                      </div>
                      {extra.featured && (
                        <div className="absolute top-3 right-3 rounded-full border border-[#D4AF37]/40 bg-[#071320]/70 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#D4AF37]">
                          Featured
                        </div>
                      )}
                    </div>

                    <div className="p-5 flex flex-col gap-4">
                      <div>
                        <h3 className="text-lg font-extrabold text-white leading-tight group-hover:text-[#D4AF37] transition-colors font-playfair">
                          {scholarship.university}
                        </h3>
                        <div className="mt-1 text-[11px] font-bold text-[#D4AF37] font-sans">
                          {scholarship.type === 'Partial' ? 'Partial Funding' : scholarship.type}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[11px] text-white/65 font-sans">
                          <Layers className="h-4 w-4 text-[#D4AF37]/80" />
                          <span>{extra.degrees}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-white/65 font-sans">
                          <BookOpen className="h-4 w-4 text-[#D4AF37]/80" />
                          <span>{extra.subjects}</span>
                        </div>
                      </div>

                      <div className="pt-1">
                        <div className="flex items-center justify-between text-[10px] text-white/55 font-sans mb-2">
                          <span>{extra.progress}% Deadline Reached</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#050f19] border border-white/5">
                          <div className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]" style={{ width: `${extra.progress}%` }} />
                        </div>
                      </div>

                      <CountdownTimer deadline={scholarship.deadline} />

                      <button className="w-full rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] hover:from-[#c5a12d] hover:to-[#ebd68d] text-black font-extrabold py-3 text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(212,175,55,0.18)] font-sans">
                        Apply Now
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-[#071320]/55 backdrop-blur-xl px-6 py-5 flex flex-col md:flex-row md:items-center gap-4 justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#050f19]/80 border border-white/10 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-extrabold text-white">Trusted by 10,000+ students worldwide</div>
                  <div className="text-[11px] text-white/55 font-sans">We connect ambitious students with life-changing opportunities.</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {['gb', 'ca', 'us', 'au', 'cn'].map((code) => (
                  <span key={code} className={`fi fi-${code} text-lg !rounded-[4px] border border-white/10 bg-[#050f19]/60 p-2`} />
                ))}
                <div className="h-9 px-3 rounded-full border border-white/10 bg-[#050f19]/60 text-[11px] font-bold text-[#D4AF37] flex items-center">
                  +45 More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
