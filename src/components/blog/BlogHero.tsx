'use client';

import { Search, GraduationCap, ShieldCheck, Building2, MapPin, Globe as GlobeIcon, LifeBuoy } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function BlogHero() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={(el) => {
        containerRef.current = el;
      }}
      className="relative overflow-hidden bg-[#071320] text-white pt-32 pb-14"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.img
          src="/assets/blog_hero.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
          style={{ y: bgY, scale: bgScale }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071320] via-[#071320]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071320] via-transparent to-transparent opacity-90" />
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[90px]" />
        <div className="absolute -top-24 right-0 h-[520px] w-[520px] rounded-full bg-[#1E3A8A]/18 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[11px] tracking-[0.22em] font-semibold text-[#C08D2A] uppercase"
            >
              Study. Explore. Succeed.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-playfair text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] tracking-tight text-white"
            >
              Your Journey to <br />
              <span className="italic text-[#D4AF37]">Global</span> Opportunities
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl text-sm sm:text-base text-white/70 leading-relaxed"
            >
              Discover scholarships, visa updates, university admissions, <br className="hidden sm:block" />
              and expert guidance to study abroad with confidence.
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-xl"
              action="/blog"
              method="get"
            >
              <div className="flex items-stretch rounded-xl border border-white/15 bg-white/10 backdrop-blur-md shadow-sm overflow-hidden hover:border-[#D4AF37]/30 transition-colors">
                <div className="flex flex-1 items-center gap-2 px-4">
                  <Search className="h-4 w-4 text-white/55" />
                  <input
                    type="text"
                    name="q"
                    placeholder="Search scholarships, universities, guides..."
                    className="w-full bg-transparent py-3.5 text-sm text-white placeholder-white/45 focus:outline-none"
                  />
                </div>
                <button type="submit" className="px-6 text-sm font-semibold bg-[#0D1B2A] text-white hover:bg-black transition-colors">
                  Search
                </button>
              </div>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              {[
                { Icon: GraduationCap, label: 'Scholarships' },
                { Icon: ShieldCheck, label: 'Visa Updates' },
                { Icon: Building2, label: 'Universities' },
                { Icon: MapPin, label: 'Destinations' },
              ].map((item) => (
                <motion.button
                  key={item.label}
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/15 transition-colors shadow-sm"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <item.Icon className="h-4 w-4 text-[#C08D2A]" />
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          </div>

          <div className="lg:hidden">
            <div className="-mx-6 sm:-mx-8 mt-10">
              <div className="w-full h-[320px] sm:h-[380px]" />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-sm overflow-hidden divide-x divide-y divide-white/10 lg:divide-y-0">
            {[
              { value: '50+', title: 'Countries', subtitle: 'Worldwide Reach', Icon: GlobeIcon },
              { value: '5K+', title: 'Universities', subtitle: 'Top Institutions', Icon: Building2 },
              { value: '100K+', title: 'Students', subtitle: 'Guided Successfully', Icon: GraduationCap },
              { value: '24/7', title: 'Expert Support', subtitle: 'Always Here to Help', Icon: LifeBuoy },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-4 px-6 py-5">
                <div className="h-11 w-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                  <item.Icon className="h-5 w-5 text-[#C08D2A]" />
                </div>
                <div className="leading-tight">
                  <div className="text-lg font-bold text-white">{item.value}</div>
                  <div className="text-xs font-semibold text-white/80">{item.title}</div>
                  <div className="text-[11px] text-white/55">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
