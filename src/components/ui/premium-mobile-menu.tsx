'use client';

import React, { useState } from 'react';
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
  Gift,
  ChevronDown
} from "lucide-react";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { destinations } from '@/data/destinations'; // Import destinations data
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: "Home", icon: Home, href: "/" },
  {
    name: "Destinations",
    icon: Globe,
    href: "/destinations",
    subItems: [
      { name: "All Destinations", href: "/destinations" },
      ...destinations.map(d => ({ name: d.name, href: `/destinations/${d.name.toLowerCase().replace(/ /g, '-')}` }))
    ]
  },
  { name: "Services", icon: Briefcase, href: "/services" },
  { name: "Scholarships", icon: GraduationCap, href: "/scholarships" },
  { name: "Blog", icon: FileText, href: "/blog" },
  { name: "Referral", icon: Gift, href: "/referral" },
  { name: "Contact", icon: Phone, href: "/contact" },
];

export default function PremiumMobileMenu({ onClose }: { onClose: () => void }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed inset-0 bg-[#020817]/95 flex items-center justify-center overflow-hidden z-[60]"
      >
        {/* MENU CONTAINER */}
        <motion.div
          initial={{ scale: 0.9, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 30 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative w-[390px] max-w-[90vw] h-[92vh] rounded-[38px] overflow-hidden border border-white/10 bg-[#010819] p-5 shadow-lg"
        >
          {/* TOP BAR */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex items-center justify-between rounded-[24px] px-5 py-4 border border-white/10 mb-5 bg-gradient-to-r from-[rgba(6,24,55,0.7)] to-[rgba(2,10,28,0.7)]"
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
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-[#E6B84E] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01)))]">
                <X size={20} />
              </motion.button>
            </div>
          </motion.div>

          {/* MENU CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="rounded-[32px] border border-white/10 p-4 bg-gradient-to-b from-[rgba(3,18,46,0.7)] to-[rgba(2,10,30,0.7)] overflow-y-auto"
          >
            {/* MENU ITEMS */}
            <div className="space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isDropdown = item.subItems && item.subItems.length > 0;
                const isOpen = openDropdown === item.name;
                const isActive = !isDropdown && pathname === item.href;
                const isDropdownActive = isDropdown && (pathname === item.href || item.subItems?.some(sub => pathname.startsWith(sub.href)));

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div
                      className={`group relative w-full h-[58px] rounded-[20px] px-4 flex items-center justify-between transition-all duration-500 border ${isActive || isDropdownActive ? 'border-[rgba(255,215,0,0.25)] bg-[hsl(var(--theme-color)/0.25)]' : 'border-[rgba(255,255,255,0.1)] bg-[hsl(var(--theme-color)/0.15)]'}`}
                    >
                      <Link href={item.href} onClick={onClose} className="flex items-center gap-3 relative z-10 flex-grow">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01)))]">
                          <Icon
                            size={20}
                            className={`transition-colors duration-300 ${isActive || isDropdownActive ? 'text-[#E6B84E]' : 'text-slate-400'}`}
                          />
                        </div>
                        <span className={`text-[16px] font-medium transition-colors duration-300 ${isActive || isDropdownActive ? 'text-white' : 'text-[#D7DCE5]'}`}>
                          {item.name}
                        </span>
                      </Link>
                      {isDropdown ? (
                        <ChevronDown
                          onClick={() => toggleDropdown(item.name)}
                          size={18}
                          className={`relative z-10 text-[#C9A048] group-hover:text-[#E6B84E] transition-transform duration-300 cursor-pointer ${isOpen ? 'rotate-180' : ''}`}
                        />
                      ) : (
                        <ArrowRight
                          size={18}
                          className="relative z-10 text-[#C9A048] group-hover:text-[#E6B84E] transition-colors duration-300"
                        />
                      )}
                    </div>
                    <AnimatePresence>
                      {isDropdown && isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-8 pt-2 space-y-2"
                        >
                          {item.subItems?.map((subItem, subIndex) => {
                            const isSubItemActive = pathname === subItem.href;
                            return(
                              <Link key={subIndex} href={subItem.href} onClick={onClose} className={`flex items-center gap-3 transition-colors ${isSubItemActive ? 'text-[#E6B84E]' : 'text-slate-400 hover:text-[#E6B84E]'}`}>
                                <ArrowRight size={16} />
                                <span>{subItem.name}</span>
                              </Link>
                            )
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-5"
            >
              <Link href="/contact" onClick={onClose}>
                <LiquidMetalButton label="Book a consultation" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
