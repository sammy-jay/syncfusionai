'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const benefits = [
  {
    title: 'Innovative Approach',
    description: 'Look for works that reflect a unique character and differentiate in a crowded marketplace.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z" fill="white" />
        <path d="M12 6.75C9.1005 6.75 6.75 9.1005 6.75 12C6.75 14.8995 9.1005 17.25 12 17.25C14.8995 17.25 17.25 14.8995 17.25 12C17.25 9.1005 14.8995 6.75 12 6.75Z" fill="white" />
      </svg>
    )
  },
  {
    title: 'Seamless Experience',
    description: 'A seamless user experience across all devices, ensuring every interaction connects with the user.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 9V5L21 12L14 19V15L17 12L14 9Z" fill="white" />
        <path d="M3 12H15M3 12L6 9M3 12L6 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'Ongoing Partnership',
    description: 'Find a new partner easily, not just providers, who offer ongoing support even after the project ends.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" fill="white" />
        <path d="M19 9.75C19 13.47 12 20.25 12 20.25C12 20.25 5 13.47 5 9.75C5 6.02944 8.13401 3 12 3C15.866 3 19 6.02944 19 9.75Z" stroke="white" strokeWidth="2" />
      </svg>
    )
  }
]

export function Benefits() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card with Grid Background */}
              <div className="relative rounded-[32px] p-8 overflow-hidden bg-[#0A0A0A] border border-gray-800/30">
                {/* Grid Background */}
                <div
                  className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.8),rgba(17,17,17,0.8))]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0h1v1H1V0zm1 1h1v1H2V1zM1 2h1v1H1V2zm2-1h1v1H3V1zM3 2h1v1H3V2zm0-2h1v1H3V0zM0 3h1v1H0V3zm1 1h1v1H1V4zM0 5h1v1H0V5zm2-1h1v1H2V4zm0 2h1v1H2V6zm1-1h1v1H3V5z' fill='rgba(255,255,255,0.05)'/%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                  }}
                />

                {/* Content */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-[#FFA500] flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-medium mb-4">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="/#pricing"
            className="inline-block px-8 py-4 bg-[#FFA500] text-white rounded-2xl text-lg font-medium hover:bg-[#FFA500]/90 transition-colors"
          >
            See Pricing
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 