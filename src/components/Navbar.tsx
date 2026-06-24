'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button"
import PremiumMobileMenu from "@/components/ui/premium-mobile-menu"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Services', href: '/services' },
    { name: 'Scholarships', href: '/scholarships' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Referral', href: '/referral' },
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 border border-white/10 bg-[#071320]/75 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/50">
      
        <div className="mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center cursor-pointer group">
              <div className="relative">
                <img
                  src="/assets/Logo.png"
                  alt="Rhinny Global Logo"
                  className="relative h-[45px] md:h-[65px] w-auto max-w-[240px] object-contain drop-shadow-lg"
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
                    className={`relative text-[14px] font-medium tracking-wide transition-all duration-300 group ${isActive ? 'text-[#D4AF37]' : 'text-white/90 hover:text-[#D4AF37]'} transform hover:-translate-y-0.5 transition-transform`}>
                    {item.name}
                    <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#D4AF37] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </Link>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <LiquidMetalButton label="Apply Now" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 group relative justify-center items-center w-6 h-5"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-[2px] bg-[#D4AF37] rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
                } `} />
              <span className={`w-4 h-[2px] bg-[#D4AF37] rounded-full ml-auto transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''
                } `} />
              <span className={`w-6 h-[2px] bg-[#D4AF37] rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
                } `} />
            </button>
          </div>
        </div>

        {/* Ambient Glow */}
        <section id="hero" className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          <div className="absolute top-0 left-1/3 w-96 h-32 bg-[#1E3A8A]/20 blur-3xl" />
          <div className="absolute top-0 right-1/4 w-72 h-24 bg-[#D4AF37]/10 blur-3xl" />
        </section>
      </nav>
      {mobileMenuOpen && <PremiumMobileMenu onClose={() => setMobileMenuOpen(false)} />}
    </>
  )
}
