'use client'

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaCheck } from 'react-icons/fa'; // Import checkmark icon

const pricingPlans = [
  {
    title: "AI Pilot Program",
    price: "$4,997/month",
    description: "Test the waters and experience the power of AI with a focused, high-impact solution. Ideal for proving ROI and getting quick wins.",
    features: [
      "Dedicated AI Specialist (Part-Time)",
      "1 Core AI-Powered Automation",
      "Lead Qualification & Prioritization",
      "Weekly Performance Reporting",
      "Month-to-Month Flexibility"
    ]
  },
  {
    title: "AI Growth Engine",
    price: "$9,997/month",
    description: "Fuel explosive growth with a comprehensive AI system designed to outpace your competition.",
    features: [
      "Dedicated AI Specialist (Full-Time)",
      "Up to 3 AI-Powered Automations",
      "Voice AI Agents for Lead Qualification",
      "Personalized Email Nurturing Campaigns",
      "A/B Testing & Optimization"
    ]
  },
  {
    title: "AI Enterprise Domination",
    price: "Custom Pricing",
    description: "Dominate your industry with a fully customized AI system tailored to your unique needs and scale.",
    features: [
      "Dedicated AI Team (Scalable)",
      "Unlimited AI-Powered Automations",
      "Custom AI Agent Development",
      "Predictive Analytics & Reporting",
      "Priority Support & Implementation"
    ]
  },
];

export function Pricing() {
  return (
    <section className="py-16">
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
            <span className="text-[13px] text-gray-300">Dominate the Market</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white  "
          >
            Choose Your AI Domination Plan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-400"
          >
            Three strategic tiers designed to catapult your business ahead of the competition. Scale AI solutions as you grow.  All plans offer great value and ROI.        </motion.p>
        </motion.div>



        <div className="mt-12 flex flex-col items-center lg:flex-row justify-center gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className='rounded-lg p-3 bg-transparent border-[1px] border-gray-800 w-[85vw] md:max-w-[350px]'>
              <motion.div
                className="bg-[#0a0a0a]  rounded-lg p-6 flex flex-col shadow-lg transition-transform transform"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                <p className="text-xl text-[#FFA500] mb-6">{plan.price}</p>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <ul className="list-disc list-inside text-gray-400 mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <FaCheck className="text-[#FFA500] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`mt-3 text-white px-4 py-2 rounded-lg hover:bg-[#FFA500]/90 transition-colors border-[1px] ${index == 1 ? "bg-[#FFA500] hover:bg-transparent border-transparent hover:border-[#FFA500]" : "bg-transparent border-[#FFA500]"}`}>
                  Schedule a Strategy Call
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}