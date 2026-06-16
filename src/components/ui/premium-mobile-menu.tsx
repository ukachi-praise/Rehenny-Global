'use client';

import {
  X,
  ArrowRight,
  Home,
  Globe,
  Briefcase,
  GraduationCap,
  FileText,
  Phone,
  User,
  Gift
} from "lucide-react";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "About Us", icon: User, href: "/#about" },
  { name: "Destinations", icon: Globe, href: "/#destinations" },
  { name: "Services", icon: Briefcase, href: "/services" },
  { name: "Scholarships", icon: GraduationCap, href: "/#scholarships" },
  { name: "Blog", icon: FileText, href: "/blog" },
  { name: "Referral", icon: Gift, href: "/referral" },
  { name: "Contact", icon: Phone, href: "/contact" },
];

export default function PremiumMobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed inset-0 bg-white/50 dark:bg-[#020817] backdrop-blur-sm flex items-center justify-center overflow-hidden z-[60]"
      >
        {/* MENU CONTAINER */}
        <motion.div
          initial={{ scale: 0.9, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 30 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative w-[390px] max-w-[90vw] h-[92vh] rounded-[38px] overflow-hidden border border-slate-200 dark:border-[#203050] bg-slate-50 dark:bg-gradient-to-b from-[#030f28] to-[#010819] p-5 shadow-lg"
        >
          {/* TOP BAR */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex items-center justify-between rounded-[24px] px-5 py-4 border border-slate-200 dark:border-[#1f3257] mb-5 bg-white/70 dark:bg-gradient-to-r from-[rgba(6,24,55,0.95)] to-[rgba(2,10,28,0.95)] shadow-inner-white dark:shadow-none"
          >
            {/* LOGO */}
            <div className="flex items-center">
              <img
                src="/assets/Logo.png"
                alt="Rhinny Global Logo"
                className="h-[55px] w-auto max-w-[180px] object-contain drop-shadow-lg"
              />
            </div>
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-300 dark:border-[#3b4f76] text-accent dark:text-[#E6B84E] bg-white/50 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]"
              >
                <X size={20} />
              </motion.button>
            </div>
          </motion.div>

          {/* MENU CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="rounded-[32px] border border-slate-200 dark:border-[#1d3157] p-4 bg-white/50 dark:bg-gradient-to-b from-[rgba(3,18,46,0.96)] to-[rgba(2,10,30,0.96)]"
          >
            {/* MENU ITEMS */}
            <div className="space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group relative w-full h-[58px] rounded-[20px] px-4 flex items-center justify-between transition-all duration-500 border border-slate-200/80 dark:border-[rgba(44,66,102,0.45)] cursor-pointer bg-slate-100/50 dark:bg-[hsl(var(--theme-color)/0.15)] backdrop-blur-md dark:hover:border-[rgba(255,215,0,0.25)]"
                    >
                      {/* LEFT */}
                      <div className="flex items-center gap-3 relative z-10">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/50 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
                          <Icon
                            size={20}
                            className="text-slate-600 dark:text-[#D7DCE5] group-hover:text-accent dark:group-hover:text-[#E6B84E] transition-colors duration-300"
                          />
                        </div>

                        <span className="text-[16px] font-medium text-slate-700 dark:text-[#D7DCE5] group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                          {item.name}
                        </span>
                      </div>

                      {/* RIGHT */}
                      <ArrowRight
                        size={18}
                        className="relative z-10 text-accent/50 dark:text-[#C9A048] group-hover:text-accent dark:group-hover:text-[#E6B84E] transition-colors duration-300"
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative mt-5 w-full h-[64px] rounded-full overflow-hidden border border-accent/50 dark:border-[#E6B84E]/50 flex items-center justify-center gap-3 bg-white/50 dark:bg-gradient-to-r from-[rgba(12,32,70,0.96)] to-[rgba(5,18,40,0.96)] shadow-inner-white dark:shadow-none"
            >
              <span className="text-accent dark:text-[#FFD166] text-[20px] font-semibold relative z-10">
                Apply Now
              </span>

              <ArrowRight
                size={20}
                className="text-accent dark:text-[#FFD166] relative z-10"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
