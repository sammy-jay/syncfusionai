'use client'

import { motion } from 'framer-motion'
import { WorkShowcase } from './WorkShowcase'

const ArrowIcon = () => (
  <motion.svg
    width="80"
    height="120"
    viewBox="0 0 80 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ y: 0 }}
    animate={{ y: [0, 20, 0] }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <path
      d="M37.5 2.5L37.5 95M37.5 95L5 62.5M37.5 95L70 62.5"
      stroke="#FFA500"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.24, 0.25, 0.25, 0.75]
    }
  }
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: [0.24, 0.25, 0.25, 0.75]
    }
  })
}

export function RecentWorks() {
  return (
    <motion.section
    id="works"
      className="py-16 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered Arrow */}

        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-gray-800 rounded-full items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2" />
            <motion.span
              variants={textVariants}
              custom={0.4}
              className="text-[12px] text-gray-300 "
            >
              Work That Make Us Proud
            </motion.span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white  "
          >
            Use Cases We've Supported
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-400"
          >
            A systematic approach to transforming your business operations with AI
          </motion.p>
        </motion.div>

        {/* Work Showcase */}
        <WorkShowcase />
      </div>
    </motion.section>
  )
} 