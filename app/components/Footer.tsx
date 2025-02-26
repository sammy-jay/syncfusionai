'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const footerLinks = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Services', href: '/#services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Mission', href: '/about-us#mission' },
  { name: 'Team', href: '/about-us#team' }
]

export function Footer() {
  return (
    <footer className="relative py-32">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:24px_24px] opacity-25"
          style={{
            maskImage: 'radial-gradient(circle at center, transparent 10%, black 90%)',
            WebkitMaskImage: 'radial-gradient(circle at center, transparent 10%, black 90%)'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <span className="text-2xl font-medium text-[#FFA500]">
            Syncfusion AI
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="text-center">
          {/* Heading */}
          <div className="space-y-4 mb-8">
            <motion.h2 className=" text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              Transform Your
            </motion.h2>
            <motion.h2 className=" text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              IT Infrastructure
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p className="text-gray-400 text-xl max-w-2xl mx-auto mb-16">
            Partner with us for comprehensive technology solutions
            that drive your business forward.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-32"
          >
            <Link
              href="/contact"
              className="text-[#FFA500] text-xl font-medium hover:text-[#FFA500]/90 transition-colors"
            >
              Book A Call
            </Link>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12"
          >
            {footerLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-400 text-lg hover:text-[#FFA500] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-base"
          >
            &copy; {new Date().getFullYear()} Syncfusion AI. All right reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 