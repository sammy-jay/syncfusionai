'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Services', href: '/#services' },
  { name: 'Contact', href: '/contact' }
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <div className="flex items-center gap-3">
        <Link
          href="/contact"
          className="bg-neutral-800 px-3 py-1.5 rounded-full text-xs text-white hover:bg-neutral-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          Dominate Now
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 text-gray-300 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              }
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full right-0 mt-2 py-2 w-48 bg-neutral-900/95 backdrop-blur-sm rounded-2xl border border-gray-800/50 shadow-xl"
          >
            <nav className="flex flex-col">
              <Link
                href="/#services"
                className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-neutral-800/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/#process"
                className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-neutral-800/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blueprint
              </Link>

              <Link
                href="/#works"
                className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-neutral-800/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Success
              </Link>
              <Link
                href="/about-us"
                className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-neutral-800/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="block px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Dominate Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}