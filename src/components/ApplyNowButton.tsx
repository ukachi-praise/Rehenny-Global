'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Edit } from 'lucide-react';

const ApplyNowButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Link href="/contact" passHref legacyBehavior>
      <motion.a
        className="fixed bottom-8 left-8 z-50 bg-[#D4AF37] text-black p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Apply Now"
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => setIsOpen(false)}
      >
        <Edit className="h-6 w-6" />
        <AnimatePresence>
          {isOpen && (
            <motion.span
              initial={{ width: 0, opacity: 0, marginLeft: 0 }}
              animate={{ width: 'auto', opacity: 1, marginLeft: 8 }}
              exit={{ width: 0, opacity: 0, marginLeft: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="whitespace-nowrap font-bold"
            >
              Apply Now
            </motion.span>
          )}
        </AnimatePresence>
      </motion.a>
    </Link>
  );
};

export default ApplyNowButton;
