"use client"

import { Footer } from '@/app/components/Footer'
import { Mission } from '@/app/components/Mission'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Team } from '../components/Team'

const stats = [
  { value: "3X+", label: "Revenue Growth for Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "24/7", label: "Lead Qualification" },
  { value: "100% ", label: "Personalized AI Solutions" }
]

const values = [
  {
    title: "Obsession",
    description: "We're obsessed with transforming B2B businesses with AI. We're not satisfied until you see measurable results.",
    icon: "🎯"
  },
  {
    title: "Results-Driven",
    description: "We don't just automate; we engineer AI systems that generate high-quality leads and convert them into paying customers.",
    icon: "🤝"
  },
  {
    title: "Innovation",
    description: "We constantly explore the cutting edge of AI to deliver solutions that give you an unfair advantage in the marketplace.",
    icon: "💡"
  },
  {
    title: "Transparency",
    description: "We believe in open communication and honest partnerships. You'll always know exactly what we're doing and why.",
    icon: "✅"
  },
  {
    title: "Client-Focused",
    description: "Your success is our success. We’re dedicated to maximizing the long-term ROI of your AI investment.",
    icon: "🤲"
  },
  {
    title: "Relentless Improvement",
    description: "We never settle for \"good enough.\" We’re committed to continuous refinement and ongoing optimization.",
    icon: "⭐"
  }
]

export default function AboutUs() {
  return (
    <>
      <main className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:24px_24px] opacity-25"
              style={{
                maskImage: "radial-gradient(circle at center, transparent 10%, black 90%)",
                WebkitMaskImage: "radial-gradient(circle at center, transparent 10%, black 90%)"
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-gray-800 rounded-full"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2" />
                  <span className="text-[12px] text-gray-300">About Your Growth Partners</span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className=" text-5xl md:text-5xlfont-medium mb-6"
                >
                  The AI Revenue Acceleration Experts
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-400 text-lg leading-relaxed mb-8"
                >
                  We're not just another AI company. We're a team obsessed with transforming B2B businesses into lead-generating, revenue-exploding machines. We engineer AI systems that deliver measurable results and a tangible ROI.
                </motion.p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <div className="text-3xl font-medium mb-2 text-[#FFA500]">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                  alt="Our Team"
                  width={600}
                  height={400}
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-black/50 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <Mission />

        {/* Our Team Section */}
        <section className="py-16 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <Team />
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-gray-800 rounded-full"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2" />
                <span className="text-[12px] text-gray-300">What Drives Our Unfair Advantage</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-medium mb-6"
              >
                Our Core Beliefs
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gray-400 text-lg max-w-2xl mx-auto"
              >
                These aren't just words; they're the driving forces behind everything we do, from our AI solutions to our client relationships.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-[#0a0a0a] border border-gray-800/30"
                >
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-medium mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}