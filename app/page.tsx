'use client'

import { motion } from 'framer-motion'
import { LogoCloud } from './components/LogoCloud'
import { OurProcess } from './components/OurProcess'
import { WhoAreWe } from './components/WhoAreWe'
import { RecentWorks } from './components/RecentWorks'
import { Stats } from './components/Stats'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import Link from 'next/link'
import DynamicText from './components/DynamicText'

export default function Home() {
  const scrollToWorks = () => {
    const worksSection = document.querySelector('#works')
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
            {/* <div className="circle animate animate-bounce duration-500" style={{ top: '0px', right: '30px' }}></div>
            <div className="circle animate animate-bounce duration-500" style={{ top: '30px', right: '60px' }}></div> */}
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full border border-gray-800">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300 text-center"> Dominate Your Market. Outsmart the Competition.</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-12 text-center space-y-4"
            >

              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="text-white">Stop Leaving Money on the Table.</span>
              </h1>
              <h2 className=" text-5xl md:text-6xl font-bold text-white">
                Unlock Revenue with <DynamicText delay={2500} words={['AI Sales Systems', 'Automated Outreach', 'Qualified Leads',]} />
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-center text-xl text-gray-400">
              Teros AI Solutions builds AI systems that generate qualified leads and convert them to customers.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 md:mt-14 flex justify-center flex-col md:flex-row gap-4"
            >
              <Link
                href="#services"
                className="transition-colors bg-transparent border-[1px] border-[#FFA500] text-white hover:text-black px-8 py-3 rounded-lg font-medium hover:bg-[#FFA500]/90"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-br from-[#FFA500] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#FFA500]/70 "
              >
                Get a Strategy Session
              </Link>
            </motion.div>


          </div>
        </section>

        {/* Logo Cloud Section */}
        <LogoCloud />

        {/* Why Us Section */}
        <section >
          <WhoAreWe />
        </section>


        {/* Services Section */}
        <section>
          <Services />
        </section>


        {/* Why Us Section */}
        <section>
          <OurProcess />
        </section>


        {/* Recent Works Section */}
        <section>
          <RecentWorks />
        </section>

        {/* Stats Section */}
        <Stats />


        {/* Pricing Section */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>


        {/* FAQ Section */}
        <FAQ />
      </main>
      <Footer />
    </>
  )
}