'use client'

import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa'; // Import checkmark icon

const pricingPlans = [
  {
    title: "Basic",
    price: "$997/month",
    description: "For organizations looking to get started with AI & automations.",
    features: [
      "1 dedicated developer",
      "Custom workflow automations",
      "AI business consulting",
      "Chatbot & LLM development",
      "Voice Assistant development",
      "Cancel & pause anytime"
    ]
  },
  {
    title: "Professional",
    price: "$3997/month",
    description: "For organizations looking to unlock the full power of AI & automations.",
    features: [
      "2 dedicated developers",
      "Custom workflow automations",
      "AI business consulting",
      "Chatbot & LLM development",
      "Voice Assistant development",
      "Cancel & pause anytime"
    ]
  },
  {
    title: "Enterprise",
    price: "Custom/month",
    description: "For large organizations requiring advanced AI solutions.",
    features: [
      "X dedicated developers",
      "Custom workflow automations",
      "AI business consulting",
      "Chatbot & LLM development",
      "Voice Assistant development",
      "Cancel & pause anytime"
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
            <span className="text-[13px] text-gray-300">Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white  "
          >
            Pricing Plans
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-400"
          >
            Three flexible plans designed to fit your needs. Whether you're just starting with AI & automations, or scaling advanced solutions          </motion.p>
        </motion.div>



        <div className="mt-12 flex flex-col items-center lg:flex-row justify-center gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className='rounded-lg p-3 bg-transparent border-[1px] border-gray-800 w-[380px] md:max-w-[350px]'>
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
                  Book a Call
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}