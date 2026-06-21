'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import { Button } from '@/components/button';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

export default function ReferralPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('referralPopupShown')) {
        setIsOpen(true);
        sessionStorage.setItem('referralPopupShown', 'true');
      }
    }, 8000); // Show after 8 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-slate-800 border-slate-700 text-white p-8 max-w-lg">
        <DialogHeader>
          <motion.div 
            className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4"
            animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.05, 1, 1.05, 1] }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Gift className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold font-playfair text-center text-white">
            Refer & Earn!
          </h2>
        </DialogHeader>
        <p className="text-center text-slate-300 my-4 leading-relaxed">
          Know someone ready to study abroad? Send them our way and earn a reward when they succeed. It's our way of saying thanks!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Link href="/">
            <LiquidMetalButton label="Learn More" />
          </Link>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
