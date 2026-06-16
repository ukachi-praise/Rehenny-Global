'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button"
import PremiumMobileMenu from "@/components/ui/premium-mobile-menu"

export default function StudyNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Services', href: '/services' },
    { name: 'Scholarships', href: '/scholarships' },
    { name: 'Blog', href: '/blog' },
    { name: 'Referral', href: '/referral' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 border border-white/10 bg-white/80 dark:bg-[#071320]/75 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/5">
      
        <div className="mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center cursor-pointer group">
              <div className="relative">
                <img
                  src="/assets/Logo.png"
                  alt="Study Now Logo"
                  className="relative h-[55px] md:h-[65px] w-auto max-w-[240px] object-contain drop-shadow-lg"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-[14px] font-medium tracking-wide transition-all duration-300 group ${
                      isActive ? 'text-accent' : 'text-slate-800 dark:text-white/90 hover:text-accent dark:hover:text-accent'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-2 left-0 w-full h-[2px] bg-accent transition-all duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                )
              })}
            </div>

            {/* CTA and Theme Switcher */}
            <div className="hidden lg:flex items-center gap-4">
              <LiquidMetalButton label="Book a consultation" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 group relative justify-center items-center w-6 h-5"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-[2px] bg-slate-800 dark:bg-white rounded-full transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
              } group-hover:bg-accent`} />
              <span className={`w-4 h-[2px] bg-slate-800 dark:bg-white rounded-full ml-auto transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0 scale-x-0' : ''
              } group-hover:bg-accent`} />
              <span className={`w-6 h-[2px] bg-slate-800 dark:bg-white rounded-full transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
              } group-hover:bg-accent`} />
            </button>
          </div>
        </div>

      </nav>
      {mobileMenuOpen && <PremiumMobileMenu onClose={() => setMobileMenuOpen(false)} />}
    </>
  )
}