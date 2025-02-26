'use client'

import { motion } from 'framer-motion'

const stats = [
  {
    value: '500+',
    label: 'Enterprise Clients'
  },
  {
    value: '15+',
    label: 'Years Experience'
  },
  {
    value: '24/7',
    label: 'Technical Support'
  },
  {
    value: '99.9%',
    label: 'Service Uptime'
  }
]

export function Stats() {
  return (
    <section className="pt-4 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="text-3xl text-gray-200 md:text-5xl font-medium mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 