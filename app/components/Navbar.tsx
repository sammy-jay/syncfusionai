'use client'

import Link from 'next/link'
import { MobileNav } from './MobileNav'
import useScrollPosition from '../hooks/useScrollPosition'

export function Navbar() {
  const { activeSection } = useScrollPosition();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
      <nav className="w-full md:w-auto bg-black/50 backdrop-blur-sm rounded-full border border-gray-800/50">
        <div className="px-4 py-2 md:px-5 md:py-2.5 flex items-center justify-between md:justify-center gap-6 md:gap-12">
          <Link
            href="/"
            className="flex-1 md:block text-[#FFA500] text-[20px] font-bold text-base hover:text-[#FFA500]/90 transition-colors"
          >
            Teros AI
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6">
              <Link href="/#services" className={`text-[14px] ${activeSection === 'services' ? 'text-[#FFA500]' : 'text-gray-300'} hover:text-white transition-colors`}>
                Solutions
              </Link>
              <Link href="/#process" className={`text-[14px] ${activeSection === 'process' ? 'text-[#FFA500]' : 'text-gray-300'} hover:text-white transition-colors`}>
                Blueprint
              </Link>
              <Link href="/#works" className={`text-[14px] ${activeSection === 'testimonials' ? 'text-[#FFA500]' : 'text-gray-300'} hover:text-white transition-colors`}>
                Success
              </Link>
              <Link href="/about-us" className={`text-[14px] ${activeSection === 'about' ? 'text-[#FFA500]' : 'text-gray-300'} hover:text-white transition-colors`}>
                About Us
              </Link>
            </div>
          </div>

          <Link
            href="/contact"
            className="hidden md:flex bg-[#FFA500]/70 px-4 py-1.5 rounded-full text-[14px] text-white hover:bg-neutral-700 transition-all hover:scale-[1.02] active:scale-[0.98] flex-row items-center"
          >
            Dominate Now
          </Link>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </nav>
    </div>
  )
}