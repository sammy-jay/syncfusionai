'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    logo: 'Acme Corp',
    quote: "Teros AI's sales solutions have generated a massive ROI for our company. We're closing deals faster and more efficiently than ever before.",
    author: {
      name: 'Sarah Johnson',
      role: 'VP of Sales'
    }
  },
  {
    logo: 'GlobalTech Solutions',
    quote: "Their AI-powered customer support has transformed our business, providing exceptional service and boosting customer loyalty.",
    author: {
      name: 'Michael Chen',
      role: 'Customer Success Manager'
    }
  },
  {
    logo: 'Innovate Marketing',
    quote: "Teros AI's marketing solutions have helped us laser-target our audience and achieve explosive revenue growth. Highly recommended!",
    author: {
      name: 'David Williams',
      role: 'Marketing Director'
    }
  }
]

const StarIcon = () => (
  <svg className="w-5 h-5 text-[#FFA500]" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

export function TestimonialGrid() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0A0A0A] rounded-[32px] p-8 border border-gray-800/30 text-center"
            >
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <span className="text-2xl font-medium">{testimonial.logo}</span>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-gray-500 leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div>
                <div className="text-xl font-medium mb-2">
                  {testimonial.author.name}
                </div>
                <div className="text-gray-400 text-lg">
                  {testimonial.author.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}