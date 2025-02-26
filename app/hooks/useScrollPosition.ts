import { useEffect, useState } from 'react';

const useScrollPosition = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                    console.log(entry.target.id)
                }
            });
        }, {
            threshold: 0.5 // Adjust this value to determine how much of the section should be visible
        });

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return { activeSection };
};

export default useScrollPosition;