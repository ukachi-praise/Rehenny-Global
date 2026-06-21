'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col font-montserrat">
      <Navbar />
      {children}
      <WhatsAppButton />
      <Footer />
    </div>
  )
}
