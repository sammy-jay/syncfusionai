import React from 'react';
import { motion } from 'framer-motion'

export const WhoAreWe = () => {
    return (
        <section id="who-we-are" className="py-16 bg-black/50">
            <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center justify-center px-4 py-1.5 mb-8 border border-gray-800 rounded-full items-center"
                >                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2" />

                    <span className="text-[13px] text-gray-300">Who Are We?</span>
                </motion.div>
                {/* <h2 className="text-3xlmd:text-5xlfont-bold text-white">About Us</h2> */}
                <p className="mt-4 leading-10 text-3xl md:text-4xl lg:text-5xl text-gray-300">
                    Hi, we're Syncfusion AI ✨ We craft cutting edge AI solutions to make organizations more effective and competitive. We do so with a motivated team of 9 experts focused on building world-class solutions.
                </p>

            </div>
        </section>
    );
};