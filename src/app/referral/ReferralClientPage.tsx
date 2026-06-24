'use client'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Check, Users, Target, Award, Info } from 'lucide-react';
import Link from 'next/link';
import 'flag-icons/css/flag-icons.min.css';
import { ReferralForm } from '@/components/ReferralForm';
import { motion } from 'framer-motion';

const ReferralClientPage = () => {
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="bg-white text-slate-800 font-montserrat">
      <Navbar />

      {/* Hero Section */}
      <motion.section 
        className="bg-white border-b border-slate-200"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-center">
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="mb-5 text-sm font-normal tracking-widest border-slate-300">RHINNY.GLOBAL</Badge>
          </motion.div>
          <motion.h1 variants={itemVariants} className="font-display text-4xl md:text-6xl font-bold text-slate-900 mb-6">Referral Programme</motion.h1>
          <motion.p variants={itemVariants} className="font-playfair text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto">
            Refer a Student. Earn Real Money.
          </motion.p>
          <motion.p variants={itemVariants} className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            Know someone dreaming of studying abroad? Send them to Rhinny Global. When they successfully enrol in their school, you earn — simply for making the right introduction.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10 flex justify-center gap-4">
            <ReferralForm label="Start Referring Now" />
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        className="py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <motion.h2 variants={itemVariants} className="font-playfair text-3xl md:text-4xl font-bold text-slate-900">How It Works</motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-slate-500 mt-4">A simple process designed for our community.</motion.p>
          </div>
          <motion.div 
            className="grid md:grid-cols-3 gap-x-12 gap-y-16 text-center"
            variants={sectionVariants}
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="bg-slate-800 text-white rounded-full p-5 mb-6">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-3">1. Refer a student</h3>
              <p className="text-slate-600 leading-relaxed">Share our contact details or send them directly to us via WhatsApp or our website.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="bg-slate-800 text-white rounded-full p-5 mb-6">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-3">2. They enrol in their school</h3>
              <p className="text-slate-600 leading-relaxed">We process their application, they receive their offer letter, and officially enrol in their chosen institution.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="bg-slate-800 text-white rounded-full p-5 mb-6">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-3">3. You get paid</h3>
              <p className="text-slate-600 leading-relaxed">Your reward is processed promptly once their school enrolment is confirmed. No delays, no ambiguity.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Referral Rewards */}
      <motion.section 
        className="bg-white py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <motion.h2 variants={itemVariants} className="font-playfair text-3xl md:text-4xl font-bold text-slate-900">Referral Rewards by Destination</motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-slate-500 mt-4 max-w-3xl mx-auto">Your reward is paid after the student successfully enrols. The UK carries a fixed rate, while others vary.</motion.p>
          </div>
          <motion.div variants={itemVariants} className="overflow-x-auto shadow-lg rounded-lg border border-slate-200">
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
          </motion.div>
          <motion.div variants={itemVariants} className="text-center mt-8 text-base text-slate-500">
            For destinations marked as 'Varies', please <Link href="/contact" className="text-accent font-normal hover:underline">contact us</Link> directly for confirmed figures.
          </motion.div>
        </div>
      </motion.section>

      {/* Programme Terms */}
      <motion.section 
        className="py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <motion.div variants={itemVariants} className="inline-block bg-slate-800 text-white p-4 rounded-full mb-5">
              <Info className="w-10 h-10" />
            </motion.div>
            <motion.h2 variants={itemVariants} className="font-playfair text-3xl md:text-4xl font-bold text-slate-900">Programme Terms</motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-slate-500 mt-4">Important details to ensure a smooth process for everyone.</motion.p>
          </div>
          <motion.div className="max-w-4xl mx-auto" variants={sectionVariants}>
            <ul className="space-y-6">
              {terms.map((term, index) => (
                <motion.li key={index} variants={itemVariants} className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 text-lg leading-relaxed">{term}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="bg-slate-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24 text-center">
            <motion.h2 variants={itemVariants} className="font-playfair text-3xl md:text-4xl font-bold text-white">Know a student ready to study abroad?</motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-white/80 mt-4 max-w-3xl mx-auto leading-relaxed">Send them our way and earn when they succeed. That's the Rhinny Global community working exactly as it should.</motion.p>
            <motion.div variants={itemVariants} className="mt-10 flex justify-center">
                <ReferralForm label="Refer a Friend" />
            </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ReferralClientPage;
