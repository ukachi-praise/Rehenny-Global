'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import ReferralPopup from '@/components/ReferralPopup'
import { usePathname } from 'next/navigation'

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Don't show popup on the referral page itself
  const showPopup = !pathname.startsWith('/referral')

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      {showPopup && <ReferralPopup intervalMinutes={0} initialDelaySeconds={1} />}
      {children}
    </>
  )
}
