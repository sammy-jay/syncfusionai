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
                >
                    <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2" />
                    <span className="text-[13px] text-gray-300">Dominate With AI</span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center mx-auto"
                >
                    <p className="mt-4 leading-10 text-3xl md:text-4xl lg:text-5xl text-gray-300">
                        Teros AI✨ engineers AI systems that transform B2B businesses into revenue-generating machines. We deliver real results, not hype. Gain your unfair advantage today.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};