'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TestimonialGrid } from './TestimonialGrid'

const testimonial = {
  company: {
    name: 'Stanbic IBTC Bank',
    logo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop'
  },
  quote: "SyncspaceHQ has transformed our IT infrastructure with their comprehensive solutions and exceptional support.",
  author: {
    name: 'James Anderson',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop'
  },
  stats: [
    {
      value: '40%',
      label: 'Reduction in IT costs'
    },
    {
      value: '99.9%',
      label: 'System uptime achieved'
    }
  ]
}

const clientTestimonials = [
  {
    logo: 'NMRC',
    quote: "Their expertise in IT infrastructure management has been invaluable to our operations.",
    author: {
      name: 'Sarah Johnson',
      role: 'IT Director'
    }
  },
  {
    logo: 'DeltaTek Global',
    quote: "Exceptional service delivery and technical support that keeps our systems running smoothly.",
    author: {
      name: 'Michael Chen',
      role: 'Operations Manager'
    }
  },
  {
    logo: 'Chevron',
    quote: "A reliable technology partner that understands enterprise-level IT requirements.",
    author: {
      name: 'David Williams',
      role: 'Infrastructure Lead'
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
              <span className="text-[12px] text-gray-300">What Our Users Say</span>
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
              Trusted By Businesses Like Yours
            </h2>
          </motion.div>

          {/* Main Testimonial */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Left - Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] lg:aspect-auto rounded-[32px] overflow-hidden gradient-border"
              >
                <Image
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                  fill
                  className="object-cover"
                  priority
                />
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
                  <span className="text-xl font-medium">{testimonial.company.name}</span>
                </motion.div>

                {/* Quote */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl font-medium leading-tight mb-12"
                >
                  "{testimonial.quote}"
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
                    {testimonial.author.name}
                  </div>
                  <div className="text-gray-400">
                    {testimonial.author.role}
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
                  {testimonial.stats.map((stat, index) => (
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