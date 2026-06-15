import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Check, Users, Target, Award, Info } from 'lucide-react';
import Link from 'next/link';
import 'flag-icons/css/flag-icons.min.css';
import { ReferralForm } from '@/components/ReferralForm';

const ReferralPage = () => {
  const destinations = [
    { name: "United Kingdom", flag: "gb", reward: "$100", note: "Fixed rate" },
    { name: "United States", flag: "us", reward: "Varies", note: "Contact us" },
    { name: "Canada", flag: "ca", reward: "Varies", note: "Contact us" },
    { name: "Australia", flag: "au", reward: "Varies", note: "Contact us" },
    { name: "New Zealand", flag: "nz", reward: "Varies", note: "Contact us" },
    { name: "Ireland", flag: "ie", reward: "Varies", note: "Contact us" },
    { name: "Finland", flag: "fi", reward: "Varies", note: "Contact us" },
    { name: "Hungary", flag: "hu", reward: "Varies", note: "Contact us" },
    { name: "China", flag: "cn", reward: "Varies", note: "Contact us" },
    { name: "Dubai (UAE)", flag: "ae", reward: "Varies", note: "Contact us" },
    { name: "Malaysia", flag: "my", reward: "Varies", note: "Contact us" },
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
    <div className="bg-white text-slate-800 font-montserrat">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-center">
          <Badge variant="outline" className="mb-5 text-sm font-normal tracking-widest border-slate-300">RHINNY.GLOBAL</Badge>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-slate-900 mb-6">Referral Programme</h1>
          <p className="font-playfair text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto">
            Refer a Student. Earn Real Money.
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            Know someone dreaming of studying abroad? Send them to Rhinny Global. When they successfully enrol in their school, you earn — simply for making the right introduction.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <ReferralForm label="Start Referring Now" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900">How It Works</h2>
            <p className="text-lg text-slate-500 mt-4">A simple process designed for our community.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-16 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-slate-800 text-white rounded-full p-5 mb-6">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-3">1. Refer a student</h3>
              <p className="text-slate-600 leading-relaxed">Share our contact details or send them directly to us via WhatsApp or our website.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-slate-800 text-white rounded-full p-5 mb-6">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-3">2. They enrol in their school</h3>
              <p className="text-slate-600 leading-relaxed">We process their application, they receive their offer letter, and officially enrol in their chosen institution.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-slate-800 text-white rounded-full p-5 mb-6">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-3">3. You get paid</h3>
              <p className="text-slate-600 leading-relaxed">Your reward is processed promptly once their school enrolment is confirmed. No delays, no ambiguity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Rewards */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900">Referral Rewards by Destination</h2>
            <p className="text-lg text-slate-500 mt-4 max-w-3xl mx-auto">Your reward is paid after the student successfully enrols. The UK carries a fixed rate, while others vary.</p>
          </div>
          <div className="overflow-x-auto shadow-lg rounded-lg border border-slate-200">
            <table className="min-w-full">
              <thead className="bg-white border-b border-slate-200">
                <tr>
                  <th scope="col" className="px-8 py-4 text-left text-sm font-semibold text-slate-600 uppercase tracking-widest">Destination</th>
                  <th scope="col" className="px-8 py-4 text-left text-sm font-semibold text-slate-600 uppercase tracking-widest">Reward</th>
                  <th scope="col" className="px-8 py-4 text-left text-sm font-semibold text-slate-600 uppercase tracking-widest">Note</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {destinations.map((dest, index) => (
                  <tr key={index}>
                    <td className="px-8 py-5 whitespace-nowrap text-base font-medium text-slate-800 flex items-center gap-4">
                      <span className={`fi fi-${dest.flag} fis rounded-sm text-2xl`}></span>
                      {dest.name}
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-base text-slate-600">{dest.reward}</td>
                    <td className="px-8 py-5 whitespace-nowrap text-base text-slate-500">{dest.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8 text-base text-slate-500">
            For destinations marked as 'Varies', please <Link href="/contact" className="text-accent font-normal hover:underline">contact us</Link> directly for confirmed figures.
          </div>
        </div>
      </section>

      {/* Programme Terms */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-slate-800 text-white p-4 rounded-full mb-5">
              <Info className="w-10 h-10" />
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900">Programme Terms</h2>
            <p className="text-lg text-slate-500 mt-4">Important details to ensure a smooth process for everyone.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-6">
              {terms.map((term, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 text-lg leading-relaxed">{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">Know a student ready to study abroad?</h2>
            <p className="text-lg text-white/80 mt-4 max-w-3xl mx-auto leading-relaxed">Send them our way and earn when they succeed. That's the Rhinny Global community working exactly as it should.</p>
            <div className="mt-10 flex justify-center">
                <ReferralForm label="Contact Us Today" />
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReferralPage;
