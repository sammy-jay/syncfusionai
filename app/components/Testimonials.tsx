'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TestimonialGrid } from './TestimonialGrid'

const testimonial1 = {
  company: {
    name: 'Acme Corp',
    logo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop'
  },
  quote: "Teros AI revolutionized our lead generation process. We're now swimming in qualified prospects, and our sales team is closing deals faster than ever!",
  author: {
    name: 'Jane Doe',
    role: 'VP of Sales',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop'
  },
  stats: [
    {
      value: '3X',
      label: 'Increase in Qualified Leads'
    },
    {
      value: '50%',
      label: 'Shorter Sales Cycle'
    }
  ]
}

const testimonial2 = {
  company: {
    name: 'TechForward Innovations',
    logo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop'
  },
  quote: "Our customer support is now a revenue-generating asset thanks to Teros AI. Their AI solutions provide instant, personalized assistance, leading to happier customers and increased loyalty.",
  author: {
    name: 'John Smith',
    role: 'Customer Success Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop'
  },
  stats: [
    {
      value: '40%',
      label: 'Reduction in Support Costs'
    },
    {
      value: '25%',
      label: 'Increase in Customer Satisfaction'
    }
  ]
}

const clientTestimonials = [
  {
    logo: 'NMRC',
    quote: "Their AI solutions have revolutionized our customer support, providing 24/7 assistance and dramatically improving customer satisfaction.",
    author: {
      name: 'Sarah Johnson',
      role: 'Customer Support Director'
    }
  },
  {
    logo: 'DeltaTek Global',
    quote: "Teros AI's workflow automation has freed up our team to focus on strategic initiatives, boosting productivity and profitability.",
    author: {
      name: 'Michael Chen',
      role: 'Operations Manager'
    }
  },
  {
    logo: 'Chevron',
    quote: "Thanks to Teros AI, our marketing campaigns are now laser-focused and deliver incredible results. We've seen a huge boost in ROI.",
    author: {
      name: 'David Williams',
      role: 'Marketing Lead'
    }
  }
]

export function Testimonials() {
  return (
    <>
      {/* Featured Testimonial */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-gray-800 rounded-full">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2" />
              <span className="text-[12px] text-gray-300">Real Results, Real Companies</span>
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
              See How We're Transforming B2B Businesses
            </h2>
          </motion.div>

          {/* Main Testimonial */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
              {/* Left - Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center mr-4 pr-1 lg:border-r-[2px] lg:border-gray-800/70"
              >
                {/* Company Logo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-12"
                >
                  <div className="w-8 h-8 bg-[#FFA500] rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-black/90 rounded-sm" />
                  </div>
                  <span className="text-2xl font-medium">{testimonial1.company.name}</span>
                </motion.div>

                {/* Quote */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-xl md:text-2xl font-medium leading-tight mb-12"
                >
                  {testimonial1.quote}
                </motion.blockquote>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mb-12"
                >
                  <div className="text-xl font-medium mb-1">
                    {testimonial1.author.name}
                  </div>
                  <div className="text-gray-400">
                    {testimonial1.author.role}
                  </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-2 gap-8"
                >
                  {testimonial1.stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-3xl font-medium mb-2 text-[#FFA500]">
                        {stat.value}
                      </div>
                      <div className="text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right - Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                {/* Company Logo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-12"
                >
                  <div className="w-8 h-8 bg-[#FFA500] rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-black/90 rounded-sm" />
                  </div>
                  <span className="text-2xl font-medium">{testimonial2.company.name}</span>
                </motion.div>

                {/* Quote */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-xl md:text-2xl font-medium leading-tight mb-12"
                >
                  {testimonial2.quote}
                </motion.blockquote>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mb-12"
                >
                  <div className="text-xl font-medium mb-1">
                    {testimonial2.author.name}
                  </div>
                  <div className="text-gray-400">
                    {testimonial2.author.role}
                  </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-2 gap-8"
                >
                  {testimonial2.stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-3xl font-medium mb-2 text-[#FFA500]">
                        {stat.value}
                      </div>
                      <div className="text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <TestimonialGrid />
    </>
  )
}