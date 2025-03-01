'use client'

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaShoppingCart, FaHospital, FaIndustry, FaCode, FaUniversity, FaBriefcase, FaSearchDollar, FaUsers, FaInternetExplorer } from 'react-icons/fa'; // Import necessary icons

const works = [
  {
    title: "AI Sales Domination",
    description: "Turn your sales team into a closing machine. We automatically qualify prospects and deliver high-value leads.",
    icon: "📈",
    details: [
      "Hyper-personalized sales pitches.",
      "Predictive deal scoring.",
      "AI-powered follow-ups (no more missed opportunities).",
      "AI Voice Agents for lead qualification."
    ]
  },
  {
    title: "Revolutionize Customer Success",
    description: "Turn support into a revenue engine. Instant, personalized support boosts satisfaction and reduces churn.",
    icon: "🤝",
    details: [
      "Automated onboarding = immediate customer value.",
      "AI identifies upsell/cross-sell opportunities.",
      "Turn feedback into actionable improvements.",
      "Predict churn + prevent it."
    ]
  },
  {
    title: "Transform Your HR",
    description: "Find top talent faster and slash recruiting costs. Automate hiring & free up your HR team.",
    icon: "👥",
    details: [
      "AI-powered resume screening & ranking.",
      "Seamless interview scheduling.",
      "Personalized onboarding checklists.",
      "Analyze engagement to prevent retention risks."
    ]
  },
  {
    title: "Supercharge Operations",
    description: "Eliminate bottlenecks and unlock unprecedented efficiency. Automate tasks and gain real-time business visibility.",
    icon: "⚙️",
    details: [
      "Automated project status updates.",
      "Performance summaries for every team.",
      "Routine task automation (reporting, backups).",
      "AI-powered workflow optimization."
    ]
  },
  {
    title: "Empower Executives",
    description: "Data-driven insights for confident decisions. Automate data collection and empower executives to focus on growth.",
    icon: "📅",
    details: [
      "Automated daily schedules & reminders.",
      "Prioritized inboxes (never miss what matters).",
      "Seamless meeting coordination.",
      "Real-time performance reports."
    ]
  },
  {
    title: "Revolutionize Finance",
    description: "Automate finance and admin tasks. Reduce errors and free your team for strategic priorities.",
    icon: "💰",
    details: [
      "Automated invoice generation & payment reminders.",
      "Real-time expense, profit, & budget visibility.",
      "Effortless financial reports.",
      "Cash flow monitoring + unusual activity alerts."
    ]
  },
  {
    title: "AI-Powered Marketing Domination",
    description: "Stop guessing and start dominating. We leverage AI to personalize campaigns and drive explosive growth.",
    icon: "📊",
    details: [
      "24/7 audience & competitor research.",
      "Personalized content creation & scheduling.",
      "Instant social & email responses.",
      "Campaign optimization based on real-time data."
    ]
  },
];

export function WorkShowcase() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="flex overflow-auto hide-scrollbar scroll-smooth">
          <motion.div
            className="flex gap-4 md:gap-8 px-2"
          >
            {/* First set of logos */}
            {works.map((work, index) => (
              <motion.div
                key={index}
                className="bg-[#0a0a0a] cursor-pointer py-6 px-3 md:p-6 rounded-lg flex flex-col w-[300px] md:min-w-[330px]" // Increased width
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-2">{work.icon}</div>
                  <h3 className="text-xl font-bold text-white">{work.title}</h3>
                </div>
                <p className="text-gray-400">{work.description}</p>
                <ul className="mt-2 list-disc list-inside text-gray-400 pl-3">
                  {work.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Industries */}
        <div className="mt-24 flex justify-center gap-4 md:gap-8 flex-row flex-wrap">
          <div className="flex items-center text-gray-300 flex-col">
            <div className='p-2 rounded-lg border-gray-900 border-[1px] cursor-pointer hover:scale-105 transition duration-300'>
              <div className='bg-[#0a0a0a] rounded-lg p-4 border-gray-900 border-[1px]'>
                <FaShoppingCart className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">E-commerce</span>
          </div>

          <div className="flex items-center text-gray-300 flex-col">
            <div className='p-2 rounded-lg border-gray-900 border-[1px] cursor-pointer hover:scale-105 transition duration-300'>
              <div className='bg-[#0a0a0a] rounded-lg p-4 border-gray-900 border-[1px]'>
                <FaIndustry className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">Manufacturing</span>
          </div>

          <div className="flex items-center text-gray-300 flex-col">
            <div className='p-2 rounded-lg border-gray-900 border-[1px] cursor-pointer hover:scale-105 transition duration-300'>
              <div className='bg-[#0a0a0a] rounded-lg p-4 border-gray-900 border-[1px]'>
                <FaCode className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">Tech/Software</span>
          </div>

          <div className="flex items-center text-gray-300 flex-col">
            <div className='p-2 rounded-lg border-gray-900 border-[1px] cursor-pointer hover:scale-105 transition duration-300'>
              <div className='bg-[#0a0a0a] rounded-lg p-4 border-gray-900 border-[1px]'>
                <FaUniversity className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">Education</span>
          </div>

          <div className="flex items-center text-gray-300 flex-col">
            <div className='p-2 rounded-lg border-gray-900 border-[1px] cursor-pointer hover:scale-105 transition duration-300'>
              <div className='bg-[#0a0a0a] rounded-lg p-4 border-gray-900 border-[1px]'>
                <FaInternetExplorer className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">Internet</span>
          </div>

          <div className="flex items-center text-gray-300 flex-col">
            <div className='p-2 rounded-lg border-gray-900 border-[1px] cursor-pointer hover:scale-105 transition duration-300'>
              <div className='bg-[#0a0a0a] rounded-lg p-4 border-gray-900 border-[1px]'>
                <FaSearchDollar className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">Finance</span>
          </div>

          <div className="flex items-center text-gray-300 flex-col">
            <div className='p-2 rounded-lg border-gray-900 border-[1px] cursor-pointer hover:scale-105 transition duration-300'>
              <div className='bg-[#0a0a0a] rounded-lg p-4 border-gray-900 border-[1px]'>
                <FaHospital className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">Healthcare</span>
          </div>

          <div className="flex items-center text-gray-300 flex-col">
            <div className='p-2 rounded-lg border-gray-900 border-[1px] cursor-pointer hover:scale-105 transition duration-300'>
              <div className='bg-[#0a0a0a] rounded-lg p-4 border-gray-900 border-[1px]'>
                <FaUsers className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">Recruiting</span>
          </div>
        </div>
      </div>
    </section>
  );
}