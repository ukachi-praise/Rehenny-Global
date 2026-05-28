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
        className="fixed inset-0 bg-[#020817] flex items-center justify-center overflow-hidden z-[60]"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          {/* Blue radial glow */}
          <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-[#0f4fff]/20 blur-[120px] rounded-full" />

          {/* Gold glow */}
          <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-[#f4b942]/10 blur-[120px] rounded-full" />

          {/* Gradient mesh */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: `
              radial-gradient(circle at 20% 20%, rgba(255,196,0,0.15), transparent 30%),
              radial-gradient(circle at 80% 80%, rgba(37,99,235,0.15), transparent 30%)
            `,
            }}
          />
        </div>

        {/* MENU CONTAINER */}
        <motion.div
          initial={{ scale: 0.9, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 30 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="
          relative
          w-[390px]
          max-w-[90vw]
          h-[92vh]
          rounded-[38px]
          overflow-hidden
          border
          border-[#203050]
          backdrop-blur-2xl
          p-5
        "
          style={{
            background: `
            linear-gradient(
              180deg,
              rgba(3,15,40,0.97) 0%,
              rgba(1,8,25,0.98) 100%
            )
          `,
            boxShadow: `
            inset 0 1px 1px rgba(255,255,255,0.06),
            0 20px 80px rgba(0,0,0,0.65),
            0 0 0 1px rgba(255,215,0,0.06)
          `,
          }}
        >
          {/* TOP BAR */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="
            flex
            items-center
            justify-between
            rounded-[24px]
            px-5
            py-4
            border
            border-[#1f3257]
            mb-5
          "
            style={{
              background: `
              linear-gradient(
                135deg,
                rgba(6,24,55,0.95),
                rgba(2,10,28,0.95)
              )
            `,
              boxShadow: `
              inset 0 1px 0 rgba(255,255,255,0.04),
              0 10px 30px rgba(0,0,0,0.35)
            `,
            }}
          >
            {/* LOGO */}
            <div className="flex items-center">
              <img
                src="/assets/logo.png"
                alt="Rhinny Global Logo"
                className="h-[55px] w-auto max-w-[180px] object-contain drop-shadow-lg"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="
              w-9
              h-9
              rounded-full
              flex
              items-center
              justify-center
              border
              border-[#3b4f76]
              text-[#E6B84E]
            "
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
              }}
            >
              <X size={20} />
            </motion.button>
          </motion.div>

          {/* MENU CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="
            rounded-[32px]
            border
            border-[#1d3157]
            p-4
          "
            style={{
              background: `
              linear-gradient(
                180deg,
                rgba(3,18,46,0.96),
                rgba(2,10,30,0.96)
              )
            `,
              boxShadow: `
              inset 0 1px 0 rgba(255,255,255,0.03),
              0 15px 40px rgba(0,0,0,0.4)
            `,
            }}
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
                      className="
                        group
                        relative
                        w-full
                        h-[58px]
                        rounded-[20px]
                        px-4
                        flex
                        items-center
                        justify-between
                        transition-all
                        duration-500
                        border
                        cursor-pointer
                        hover:border-[rgba(255,215,0,0.25)]
                      "
                      style={{
                        background: `
                          linear-gradient(
                            180deg,
                            rgba(6,20,45,0.55),
                            rgba(3,12,30,0.4)
                          )
                        `,
                        borderColor: "rgba(44,66,102,0.45)",

                        boxShadow: `
                          inset 0 1px 0 rgba(255,255,255,0.02)
                        `,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.08), 0 0 30px rgba(255,196,0,0.12)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.02)';
                      }}
                    >
                      {/* LEFT */}
                      <div className="flex items-center gap-3 relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="
                          w-9
                          h-9
                          rounded-xl
                          flex
                          items-center
                          justify-center
                        "
                          style={{
                            background: `
                            linear-gradient(
                              180deg,
                              rgba(255,255,255,0.03),
                              rgba(255,255,255,0.01)
                            )
                          `,
                          }}
                        >
                          <Icon
                            size={20}
                            className="text-[#D7DCE5] group-hover:text-[#E6B84E] transition-colors duration-300"
                          />
                        </motion.div>

                        <span className="text-[16px] font-medium text-[#D7DCE5] group-hover:text-white transition-colors duration-300">
                          {item.name}
                        </span>
                      </div>

                      {/* RIGHT */}
                      <motion.div
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <ArrowRight
                          size={18}
                          className="
                          relative
                          z-10
                          text-[#C9A048]
                          group-hover:text-[#E6B84E]
                          transition-colors duration-300
                        "
                        />
                      </motion.div>
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
              className="
              relative
              mt-5
              w-full
              h-[64px]
              rounded-full
              overflow-hidden
              border
              border-[#E6B84E]/50
              flex
              items-center
              justify-center
              gap-3
            "
              style={{
                background: `
                linear-gradient(
                  135deg,
                  rgba(12,32,70,0.96),
                  rgba(5,18,40,0.96)
                )
              `,
                boxShadow: `
                inset 0 1px 0 rgba(255,255,255,0.06),
                0 0 40px rgba(255,196,0,0.18)
              `,
              }}
            >
              {/* SHINE */}
              <motion.div
                animate={{ x: ['0%', '150%'], rotate: [25, 25] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="
                absolute
                top-[-50%]
                left-[-30%]
                w-[35%]
                h-[200%]
                bg-white/10
              "
              />

              <span className="text-[#FFD166] text-[20px] font-semibold relative z-10">
                Apply Now
              </span>

              <ArrowRight
                size={20}
                className="text-[#FFD166] relative z-10"
              />
            </motion.button>


          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
