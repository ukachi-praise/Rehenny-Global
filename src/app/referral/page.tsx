'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Users, Target, Award, Info } from 'lucide-react';
import Link from 'next/link';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';

const ReferralPage = () => {
  const rewards = [
    { country: "United Kingdom", flag: "🇬🇧", reward: "$100", note: "Fixed rate" },
    { country: "United States", flag: "🇺🇸", reward: "Varies", note: "Contact us" },
    { country: "Canada", flag: "🇨🇦", reward: "Varies", note: "Contact us" },
    { country: "Australia", flag: "🇦🇺", reward: "Varies", note: "Contact us" },
    { country: "New Zealand", flag: "🇳🇿", reward: "Varies", note: "Contact us" },
    { country: "Ireland", flag: "🇮🇪", reward: "Varies", note: "Contact us" },
    { country: "Finland", flag: "🇫🇮", reward: "Varies", note: "Contact us" },
    { country: "Hungary", flag: "🇭🇺", reward: "Varies", note: "Contact us" },
    { country: "China", flag: "🇨🇳", reward: "Varies", note: "Contact us" },
    { country: "Dubai (UAE)", flag: "🇦🇪", reward: "Varies", note: "Contact us" },
    { country: "Malaysia", flag: "🇲🇾", reward: "Varies", note: "Contact us" },
  ];

  const terms = [
    "Reward is paid after the referred student successfully enrols in their school and their place is officially confirmed by the institution.",
    "The referring party must be identified at the point of first contact. Retrospective claims cannot be accepted.",
    "UK referral reward is fixed at $100 USD. All other destination rewards are confirmed at the time of referral.",
    "Rhinny Global reserves the right to update reward amounts with prior notice. Agreed rates are honoured for active referrals.",
    "Rewards are paid via bank transfer or mobile money within 14 working days of confirmed enrolment.",
    "Self-referrals are not eligible. The programme is designed to reward genuine community introductions.",
    "There is no cap on the number of referrals. You may refer as many students as you like.",
  ];

  return (
    <div className="bg-white text-slate-800 font-sans">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <Badge variant="default" className="mb-4">RHINNY.GLOBAL</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-slate-900 mb-4">REFERRAL PROGRAMME</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">Refer a Student. Earn Real Money. When they successfully enrol, you earn — simply for making the right introduction.</p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-10 mb-12">
          <h2 className="text-2xl font-bold font-display text-slate-900 mb-6 flex items-center gap-3"><Target className="text-accent"/>Referral Rewards by Destination</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto">
              <thead>
                <tr className="border-b border-slate-300">
                  <th className="p-4 font-semibold text-slate-600">Destination</th>
                  <th className="p-4 font-semibold text-slate-600">Reward</th>
                  <th className="p-4 font-semibold text-slate-600">Note</th>
                </tr>
              </thead>
              <tbody>
                {rewards.map((item, index) => (
                  <tr key={index} className="border-b border-slate-200 last:border-b-0">
                    <td className="p-4 font-medium flex items-center gap-3 text-slate-900">{item.flag} {item.country}</td>
                    <td className="p-4 font-medium text-slate-900">{item.reward}</td>
                    <td className="p-4 text-slate-500">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold font-display text-center text-slate-900 mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col items-center">
              <div className="bg-accent/10 text-accent rounded-full p-4 mb-4"><Users size={28}/></div>
              <h3 className="text-xl font-bold font-display mb-2">1. Refer a Student</h3>
              <p className="text-slate-600">Share our contact details or send them directly to us via WhatsApp or our website.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col items-center">
              <div className="bg-accent/10 text-accent rounded-full p-4 mb-4"><Check size={28}/></div>
              <h3 className="text-xl font-bold font-display mb-2">2. They Enrol in School</h3>
              <p className="text-slate-600">We process their application, and they officially enrol in their chosen institution abroad.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col items-center">
              <div className="bg-accent/10 text-accent rounded-full p-4 mb-4"><Award size={28}/></div>
              <h3 className="text-xl font-bold font-display mb-2">3. You Get Paid</h3>
              <p className="text-slate-600">Your reward is processed promptly once their school enrolment is confirmed. No delays, no ambiguity.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-10 mb-12">
          <h2 className="text-2xl font-bold font-display text-slate-900 mb-6 flex items-center gap-3"><Info className="text-accent"/>Programme Terms</h2>
          <ul className="space-y-3">
            {terms.map((term, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-slate-600">{term}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold font-display text-slate-900 mb-4">Know a student ready to study abroad?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">Send them our way and earn when they succeed. That is the Rhinny Global community working exactly as it should.</p>
          <Link href="/contact">
            <LiquidMetalButton label="Contact Us to Start Referring" />
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default ReferralPage;
