import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface DynamicTextProps {
    words: string[];
    delay: number;
}

const DynamicText: React.FC<DynamicTextProps> = ({ words, delay }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, delay); // Change word every 2 seconds

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <motion.span
            key={index} // Key to trigger animation on change
            initial={{ opacity: 0, y: -10 }} // Start with opacity 0 and slightly above
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
            exit={{ opacity: 0, y: 10 }} // Exit animation
            transition={{ duration: 0.5 }} // Duration of the animation
            className="text-[#FFA500] font-bold capitalize"
        >
            {words[index]}
        </motion.span>
    );
};

export default DynamicText;