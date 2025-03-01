'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: "What results can I expect from Teros AI Solutions?",
    answer: "Our clients typically experience a 3x increase in qualified leads, a 50% reduction in sales cycle time, and a significant boost in overall revenue. We engineer AI systems that deliver measurable ROI."
  },
  {
    question: "What makes Teros AI different from other AI companies?",
    answer: "We're not just AI consultants; we're builders. We don't just recommend solutions, we engineer custom AI systems tailored to your specific business needs. Our focus is on driving tangible results, not just implementing the latest technology."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have a proven track record of success across a range of B2B industries, including Tech, Healthcare, Finance, Manufacturing, and Professional Services. Our expertise is in applying AI to solve common B2B challenges, regardless of industry."
  },
  {
    question: "Can I integrate Teros AI Solutions with my existing systems?",
    answer: "Yes! Our AI systems are designed to seamlessly integrate with your existing CRM, marketing automation, and other critical business tools. We handle the entire integration process, ensuring a smooth transition and minimal disruption."
  },
  {
    question: "How do you ensure the security of my data?",
    answer: "Data security is our top priority. We employ industry-leading security protocols, conduct regular security audits, and adhere to strict data privacy standards to protect your sensitive information."
  },
  {
    question: "How much does it cost?",
    answer: "Our pricing varies depending on the complexity of the AI system and the level of ongoing support required. We offer tiered pricing plans to fit different budgets and needs. Contact us for a custom quote."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer comprehensive support, including dedicated account managers, ongoing system monitoring, and rapid response times for critical issues. We're committed to your long-term success."
  },
  {
    question: "How long does it take to see results?",
    answer: "While the exact timeline varies depending on the scope of the project, many of our clients begin seeing positive results within the first few months of implementation. We focus on delivering quick wins and demonstrable ROI."
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
            <span className="text-[12px] text-gray-300">Still Have Questions?</span>
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