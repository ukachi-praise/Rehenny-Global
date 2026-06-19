'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#071320] min-h-screen flex flex-col font-montserrat">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
