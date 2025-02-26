"use client"
import { Footer } from '@/app/components/Footer'
import { Mission } from '@/app/components/Mission'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Team } from '../components/Team'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Enterprise Clients' },
  { value: '100+', label: 'Expert Staff' },
  { value: '24/7', label: 'Technical Support' }
]

const values = [
  {
    title: 'Commitment',
    description: 'Committing to great product, service, and other initiatives that impact our customers.',
    icon: '🎯'
  },
  {
    title: 'Team work',
    description: 'Working together in harmony to achieve goals with each individual member equally important.',
    icon: '🤝'
  },
  {
    title: 'Innovation',
    description: 'Pursuing new creative ideas that have the potential to change the technology landscape.',
    icon: '💡'
  },
  {
    title: 'Accountability',
    description: 'Acknowledging and assuming responsibility for actions, products, decisions, and policies.',
    icon: '✅'
  },
  {
    title: 'Honesty',
    description: 'Being trustworthy, loyal, and fair in all our dealings with stakeholders.',
    icon: '🤲'
  },
  {
    title: 'Integrity',
    description: 'Acting with honesty and honor without compromising our principles.',
    icon: '⭐'
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
                maskImage: 'radial-gradient(circle at center, transparent 10%, black 90%)',
                WebkitMaskImage: 'radial-gradient(circle at center, transparent 10%, black 90%)'
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
                  <span className="text-[12px] text-gray-300">About Us</span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className=" text-5xl md:text-5xlfont-medium mb-6"
                >
                  Leading IT Solutions Provider
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-400 text-lg leading-relaxed mb-8"
                >
                  With over 15 years of experience, we've been at the forefront of providing innovative IT solutions
                  that transform businesses across Africa. Our comprehensive range of services and dedication to
                  excellence has made us a trusted partner for enterprises of all sizes.
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
                <span className="text-[12px] text-gray-300">Our Values</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-medium mb-6"
              >
                What Drives Us
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gray-400 text-lg max-w-2xl mx-auto"
              >
                Our core values guide everything we do, from how we serve our clients
                to how we work together as a team.
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