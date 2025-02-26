'use client'

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaShoppingCart, FaHome, FaBriefcase, FaPiggyBank, FaPlus } from 'react-icons/fa'; // Import necessary icons

const works = [
  {
    title: "Sales",
    description: "Automate lead generation and scoring based on CRM data.",
    icon: "📈",
    details: [
      "Generate sales pitches and prepare meeting notes automatically.",
      "Track progress through the pipeline and provide real-time analytics.",
      "Schedule reminders to reduce no-shows and increase conversions.",
      "Handle outbound sales calls to qualify leads."
    ]
  },
  {
    title: "Customer Success",
    description: "Automate onboarding workflows for new customers.",
    icon: "🤝",
    details: [
      "Send proactive notifications for upselling or renewals.",
      "Monitor customer feedback and suggest improvements.",
      "Provide tailored recommendations based on user behavior.",
      "Track customer health scores to reduce churn risk."
    ]
  },
  {
    title: "Human Resources",
    description: "Automate job postings and manage applicant tracking systems (ATS).",
    icon: "👥",
    details: [
      "Screen resumes and rank candidates based on requirements.",
      "Schedule interviews and coordinate with managers seamlessly.",
      "Generate onboarding checklists for new employees.",
      "Create and share employee engagement and retention strategies."
    ]
  },
  {
    title: "Operations",
    description: "Keep workflows and data processes running smoothly with automation.",
    icon: "⚙️",
    details: [
      "Track project milestones and send real-time status updates.",
      "Provide performance summaries for departments and teams.",
      "Automate routine tasks like reporting and system backups.",
      "Identify inefficiencies and recommend optimized workflows."
    ]
  },
  {
    title: "Executive Support",
    description: "Create daily schedules with tasks, deadlines, and meeting reminders.",
    icon: "📅",
    details: [
      "Manage inboxes and ensure critical messages are prioritized.",
      "Coordinate meeting schedules and handle follow-ups.",
      "Automate report generation for key business performance metrics.",
      "Retrieve and organize data for executive decision-making."
    ]
  },
  {
    title: "Finance and Admin",
    description: "Automate invoice generation and payment reminders.",
    icon: "💰",
    details: [
      "Track expenses, profits, and budget forecasts in real time.",
      "Prepare financial reports and provide tax-related summaries.",
      "Monitor cash flow and alert for unusual activity.",
      "Set up workflows for approvals and expense reimbursements."
    ]
  },
  {
    title: "Marketing",
    description: "Conduct in-depth audience and competitor research 24/7.",
    icon: "📊",
    details: [
      "Create, schedule, and post engaging content tailored to your brand.",
      "Respond instantly to customer messages on social media or email.",
      "Generate innovative campaign ideas to stay ahead of market trends.",
      "Provide detailed performance reports with suggestions for improvement."
    ]
  },
];

export function WorkShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust scroll amount as needed
      }
    }, 2500); // Adjust the interval as needed

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-8 px-8"
            animate={{
              x: [0, -1935]
            }}
            transition={{
              x: {
                duration: 50,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {/* First set of logos */}
            {works.map((work, index) => (
              <motion.div
                key={index}
                className="bg-[#0a0a0a] py-6 px-3 md:p-6 rounded-lg flex flex-col w-[370px] md:min-w-[350px]" // Increased width
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
            {/* Duplicate set for seamless loop */}
            {works.map((work, index) => (
              <motion.div
                key={index}
                className="bg-[#0a0a0a] p-6 rounded-lg flex flex-col min-w-[350px]" // Increased width
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
                <FaHome className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">Real Estate</span>
          </div>
          <div className="flex items-center text-gray-300 flex-col">
            <div className='p-2 rounded-lg border-gray-900 border-[1px] cursor-pointer hover:scale-105 transition duration-300'>
              <div className='bg-[#0a0a0a] rounded-lg p-4 border-gray-900 border-[1px]'>
                <FaBriefcase className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">Legal</span>
          </div>
          <div className="flex items-center text-gray-300 flex-col">
            <div className='p-2 rounded-lg border-gray-900 border-[1px] cursor-pointer hover:scale-105 transition duration-300'>
              <div className='bg-[#0a0a0a] rounded-lg p-4 border-gray-900 border-[1px]'>
                <FaPiggyBank className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">Finance</span>
          </div>
          <div className="flex items-center text-gray-300 flex-col">
            <div className='p-2 rounded-lg border-gray-900 border-[1px] cursor-pointer hover:scale-105 transition duration-300'>
              <div className='bg-[#0a0a0a] rounded-lg p-4 border-gray-900 border-[1px]'>
                <FaPlus className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">Healthcare</span>
          </div>
        </div>
      </div>
    </section>
  );
}