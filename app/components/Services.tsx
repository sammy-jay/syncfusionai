'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Add this type near the top of the file
type ServiceKey = keyof typeof serviceImages;

const services: { title: string; description: string; icon: string; key: ServiceKey }[] = [
  {
    title: 'Chatbot Development',
    description: 'We develop advanced AI-driven chatbots that handle repetitive tasks, manage data, and streamline your internal workflows to drive real results for your business.',
    icon: '💬',
    key: 'chatbot'
  },
  {
    title: 'Voice Assistants',
    description: 'We develop voice assistants that use advanced natural language processing (NLP) to handle inbound and outbound calls for support, scheduling, reminders, and promotions.',
    icon: '🎤',
    key: 'voice'
  },
  {
    title: 'Workflow Automations',
    description: 'We streamline your processes with workflow automations that connect your favourite applications to eliminate repetitive tasks and enhance accuracy.',
    icon: '⚙️',
    key: 'workflow'
  },
  {
    title: 'AI Consulting',
    description: 'We dive into your organization to uncover AI-driven automation opportunities that can elevate your operational efficiency, quality, and speed, and reduce cost.',
    icon: '🤖',
    key: 'consulting'
  },
]

const features = [
  {
    name: 'AI-Driven Solutions',
    icon: (
      <svg className="w-4 h-4 text-[#FFA500]" viewBox="0 0 16 16">
        <path fill="currentColor" d="M8 1l7 4v6l-7 4-7-4V5z" />
      </svg>
    )
  },
  {
    name: 'Serverless Computing',
    icon: (
      <svg className="w-4 h-4 text-[#FFA500]" viewBox="0 0 16 16">
        <path fill="currentColor" d="M2 4h12v8H2z" />
      </svg>
    )
  },
  {
    name: 'Cloud Integration',
    icon: (
      <svg className="w-4 h-4 text-[#FFA500]" viewBox="0 0 16 16">
        <path fill="currentColor" d="M4 10a4 4 0 118 0H4z" />
      </svg>
    )
  },
  {
    name: 'Data Insight',
    icon: (
      <svg className="w-4 h-4 text-[#FFA500]" viewBox="0 0 16 16">
        <path fill="currentColor" d="M2 2h12v12H2z" />
      </svg>
    )
  },
  {
    name: 'Analytics',
    icon: (
      <svg className="w-4 h-4 text-[#FFA500]" viewBox="0 0 16 16">
        <path fill="currentColor" d="M2 14V8h3v6H2zm4 0V2h3v12H6zm4 0V6h3v8h-3z" />
      </svg>
    )
  },
  {
    name: 'API Security',
    icon: (
      <svg className="w-4 h-4 text-[#FFA500]" viewBox="0 0 16 16">
        <path fill="currentColor" d="M8 1L2 4v3c0 4.4 2.6 8.5 6 10 3.4-1.5 6-5.6 6-10V4L8 1z" />
      </svg>
    )
  },
  {
    name: 'Real-Time',
    icon: (
      <svg className="w-4 h-4 text-[#FFA500]" viewBox="0 0 16 16">
        <path fill="currentColor" d="M8 0a8 8 0 100 16A8 8 0 008 0zm1 8V3H7v6h5V7H9z" />
      </svg>
    )
  },
  {
    name: 'Ad Targeting',
    icon: (
      <svg className="w-4 h-4 text-[#FFA500]" viewBox="0 0 16 16">
        <path fill="currentColor" d="M14 8A6 6 0 112 8a6 6 0 0112 0z" />
      </svg>
    )
  }
]

const serviceImages = {
  chatbot: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
  voice: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
  consulting: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
  workflow: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
}


export function Services() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-gray-800 rounded-full items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2" />
            <span className="text-[12px] text-gray-300">Services</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl  font-medium mb-6">
            Expertise That Drives Quality
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            With deep expertise, we deliver quality solutions that drive
            success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-[10px] md:rounded-[24px] overflow-hidden bg-[#0a0a0a] border border-gray-800/30 p-4 py-6 md:p-6"
            >
              <div className="relative h-64 lg:h-72 w-full overflow-hidden rounded-md md:rounded-xl mb-6">
                <Image
                  src={serviceImages[service.key]}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl text-gray-200 font-medium mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-md leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features Grid - Updated with better spacing and container width */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 md:gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="inline-flex items-center gap-3 px-3 py-1.5 md:px-6 md:py-3.5 rounded-full bg-[#0a0a0a] border border-gray-800/30"
            >
              {feature.icon}
              <span className="text-sm md:text-base text-gray-500 whitespace-nowrap">{feature.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 