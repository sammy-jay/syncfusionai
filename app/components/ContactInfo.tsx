'use client'

import { motion } from 'framer-motion'

const contactInfo = [
  {
    title: 'Schedule a Strategy Session',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    details: [
      'Discover how AI can transform your B2B business.'
    ]
  },
  {
    title: 'Call Us To Dominate',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    details: [
      'Talk to our experts.',
      'Get your questions answered.'
    ]
  },
  {
    title: 'Email Us',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    details: [
      'Get AI-powered leads today!',
      'info@Teros AI.com'
    ]
  }
]

export function ContactInfo() {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {contactInfo.map((info, index) => (
        <motion.div
          key={info.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mb-6">
            {info.icon}
          </div>
          <h3 className="text-2xl font-medium mb-4">{info.title}</h3>
          {info.details.map((detail, i) => (
            <p key={i} className="text-gray-400 text-lg">
              {detail}
            </p>
          ))}
        </motion.div>
      ))}
    </div>
  )
}