'use client';

import Link from "next/link";
import { Users } from "lucide-react";
import dynamic from "next/dynamic";

const LiquidMetalButton = dynamic(() => import('@/components/ui/liquid-metal-button').then(mod => mod.LiquidMetalButton), {
  ssr: false,
});

export default function ScholarshipSidebarCTA() {
  return (
    <div className="sticky top-24 space-y-6">
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <h3 className="font-display font-bold text-lg text-slate-900 mb-3 flex items-center gap-3">
          <Users className="text-accent" size={20} />
          Need Help Applying?
        </h3>
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          Our experts guide you at every step of your scholarship application journey.
        </p>
        <Link href="/contact" className='block w-full'>
          <LiquidMetalButton label="Book Free Consultation" className="w-full" />
        </Link>
      </div>
    </div>
  );
}
