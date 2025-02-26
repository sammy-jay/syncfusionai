'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ContactInfo } from './ContactInfo'

const services = [
  'Enterprise Software Solutions',
  'Hardware Procurement',
  'Network Infrastructure',
  'IT Security Audits',
  'Web Development',
  'Technical Support',
  'Cloud Solutions',
  'Data Recovery'
]

const budgetRanges = [
  'Under $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+'
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    details: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section className="relative  pt-32 pb-24">
      {/* Background Pattern */}
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
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-gray-800 rounded-full">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2" />
            <span className="text-[12px] text-gray-300">Let's Talk</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xlmx-auto md:text-5xl lg:text-5xl  font-medium">
            We're Here To Help
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div className="text-center mb-20">
          <p className="max-w-4xl mx-auto text-gray-400 text-lg md:text-xl">
            Our team of IT experts is ready to help you transform your business with
            cutting-edge technology solutions. Let's discuss your requirements and
            create a customized plan for your success.
          </p>
        </motion.div>



        {/* Form Container */}
        <div className="max-w-3xl mx-auto mb-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-[#0A0A0A] rounded-[32px] p-8 space-y-8">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-xl mb-3">
                    Full Name <span className="text-[#FFA500]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="David Johnson"
                    required
                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-[#FFA500] transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-xl mb-3">
                    Email <span className="text-[#FFA500]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    required
                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-[#FFA500] transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </motion.div>
              </div>

              {/* Company Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-xl mb-3">
                  Company Name <span className="text-[#FFA500]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex. Company Name"
                  required
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-[#FFA500] transition-colors"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </motion.div>

              {/* Service and Budget Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-xl mb-3">
                    Select Service <span className="text-[#FFA500]">*</span>
                  </label>
                  <select
                    required
                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-[#FFA500] transition-colors appearance-none"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">Select Your Service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-xl mb-3">
                    Project Budget <span className="text-[#FFA500]">*</span>
                  </label>
                  <select
                    required
                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-[#FFA500] transition-colors appearance-none"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="">Select Your Range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              {/* Project Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-xl mb-3">Project Details</label>
                <textarea
                  placeholder="Tell us more about your project"
                  rows={6}
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-[#FFA500] transition-colors resize-none"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                />
              </motion.div>

              {/* Submit Button and Message */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto bg-[#FFA500] text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-[#FFA500]/90 transition-colors"
                >
                  Submit
                </motion.button>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-gray-400 text-lg"
                >
                  We will contact you within 24 business hours.
                </motion.p>
              </div>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <ContactInfo />
      </div>
    </section>
  )
} 