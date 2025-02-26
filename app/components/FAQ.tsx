'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: "What IT services do you provide?",
    answer: "At Syncfusion AI, we offer a comprehensive range of IT services including enterprise software solutions, OEM software licensing, hardware procurement, network infrastructure, IT security audits, web development, and ongoing technical support."
  },
  {
    question: "How do you ensure data security?",
    answer: "We implement industry-leading security protocols, regular security audits, and maintain compliance with international data protection standards to ensure your business data remains secure."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve various sectors including Education, Telecommunications, Banking, Insurance, and Small and Medium Scale enterprises, providing tailored IT solutions for each industry's specific needs."
  },
  {
    question: "What is your support process?",
    answer: "We provide 24/7 technical support with dedicated account managers, regular maintenance schedules, and rapid response times for critical issues."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center justify-center items-center px-4 py-1.5 mb-6 border border-gray-800 rounded-full">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2" />
            <span className="text-[12px] text-gray-300">Need to Know</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:4xl lg:text-5xl font-medium">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-6 rounded-[24px] transition-colors ${openIndex === index ? 'bg-[#0a0a0a]' : 'bg-[#0a0a0a] hover:bg-[#161616]'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-medium">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <div className="w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 