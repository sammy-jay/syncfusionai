'use client'

import { motion } from 'framer-motion'
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons

const phases = [
  {
    title: "Phase 1: Discovery",
    description: "The foundation of any successful engagement begins with alignment. In this first phase, we focus on understanding your business from the inside out and determining if we're the right fit to work together.",
    details: [
      "Conduct a comprehensive review of your workflows, processes, and operational challenges.",
      "Identify opportunities for optimization and discuss your goals, constraints, and vision for success.",
      "Ensure alignment between your needs and our capabilities, building a foundation of transparency and trust."
    ],
  },
  {
    title: "Phase 2: System Design & Concept Validation",
    description: "After establishing alignment, we shift into a strategic design phase. This step is all about creating a clear, actionable orangeprint for the systems we propose, while also providing upfront value to demonstrate feasibility.",
    details: [
      "Create a detailed system architecture and design.",
      "Validate the concept with stakeholders to ensure alignment.",
      "Provide a roadmap for implementation."
    ],
  },
  {
    title: "Phase 3: Implementation",
    description: "With a proven concept in hand, we bring the full solution to life. This is where strategy becomes execution, and your custom system is integrated seamlessly into your operations.",
    details: [
      "Develop and deploy the solution according to the agreed-upon specifications.",
      "Conduct thorough testing to ensure quality and performance.",
      "Provide training and support to your team."
    ],
  },
  {
    title: "Phase 4: Continued Partnership",
    description: "Our work doesn't stop at implementation. We see this as the start of an ongoing partnership, where we work together to ensure your systems evolve with your business.",
    details: [
      "Regularly review system performance and make necessary adjustments.",
      "Provide ongoing support and updates.",
      "Collaborate on future enhancements and innovations."
    ],
  },
];

export function OurProcess() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="process" className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-gray-800 rounded-full items-center"
          ><span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2" />
            <span className="text-[13px] text-gray-300">Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white  "
          >
            Our Proven Process
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className="bg-[#0a0a0a] border-l-4 border-[#FFA500] p-6 rounded-lg flex"
            >

              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                <p className="text-gray-400 mt-2">{phase.description}</p>
                <button
                  onClick={() => toggleDetails(index)}
                  className="mt-4 text-[#FFA500] flex items-center"
                >
                  {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  <span className="ml-2">{expandedIndex === index ? "Hide Details" : "Show Details"}</span>
                </button>
                {expandedIndex === index && (
                  <ul className="mt-2 list-disc list-inside text-gray-400 pl-5">
                    {phase.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}