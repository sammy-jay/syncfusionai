"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export function Mission() {
  return (
    <section className="py-16   relative overflow-hidden">
      {/* Background Pattern */}
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
        {/* Section Header */}
        <motion.div className="text-center mb-20">
          <motion.div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-gray-800 rounded-full">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2" />
            <span className="text-[12px] text-gray-300">Our Foundation</span>
          </motion.div>
          <h2 className="text-3xlmd: text-5xl font-medium mb-6 ">What We're Building</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[800px] mx-auto gap-12">


          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
                alt="Future technology concept"
                width={400}
                height={300}
                className="rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-medium mb-4">Our Vision</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To be the premier AI solution provider, transforming B2B businesses into revenue-generating powerhouses across the globe.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                width={400}
                height={300}
                className="rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-medium mb-4">Our Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To empower B2B companies with cutting-edge AI systems that drive explosive growth, maximize efficiency, and create lasting customer relationships.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}