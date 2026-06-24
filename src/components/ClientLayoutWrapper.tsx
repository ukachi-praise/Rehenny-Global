'use client'

import ReferralPopup from '@/components/ReferralPopup'
import { usePathname } from 'next/navigation'

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Don't show popup on the referral page itself
  const showPopup = !pathname.startsWith('/referral')

  return (
    <>
      {showPopup && <ReferralPopup intervalMinutes={0} initialDelaySeconds={1} />}
      {children}
    </>
  )
}
