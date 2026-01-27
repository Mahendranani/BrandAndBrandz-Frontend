'use client';

import { motion } from 'framer-motion';

// Tech stack with requested icons + generic/colored versions
const techStack = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    // Power BI often lacks a dedicated devicon. Using a reliable SVG URL or generic chart if needed. 
    // Found Microsoft Power BI icon via generic web search pattern for reliable CDNs or using a proxy. 
    // Using a known SVG for Power BI from a reputable icon CDN or fallback.
    { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    // Machine Learning: Using TensorFlow as the representative icon for ML
    { name: 'Machine Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
];

// Duplicate for infinite loop
const infiniteStack = [...techStack, ...techStack, ...techStack]; // Tripled to ensure very smooth long-scroll on super-wide screens if needed, or double is usually fine. Let's start with double as CSS keyframe is 0->50%.

// Actually, for 0->50% logic, we need exactly two sets if we scroll 50% of the total width (which is 1 full set width).
// So double is correct.
const displayStack = [...techStack, ...techStack];

export function TechStack() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Header Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <span className="text-sm font-medium text-white/80">Tech Stack</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    A performance-driven technology stack for <br className="hidden md:block" />
                    modern brands and scalable digital products.
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-white/60 font-light">
                    BrandandBrandz uses reliable, industry-proven tools to deliver fast performance,
                    clean user experiences, and long-term reliability.
                </p>
            </div>

            {/* Antigravity Slider */}
            <div className="relative w-full max-w-[98vw] mx-auto">
                {/* Fading Edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

                {/* Infinite Loop Track - CSS Animation based for pause on hover */}
                <div className="flex overflow-hidden">
                    <div className="flex gap-4 md:gap-16 items-center animate-scroll w-max">
                        {displayStack.map((tech, index) => (
                            <motion.div
                                key={`${tech.name}-${index}`}
                                className="relative flex flex-col items-center justify-center group flex-shrink-0 mx-2 md:mx-0"
                                whileHover={{ y: -10 }} // Antigravity Lift
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            >
                                {/* Icon Container - Smaller on mobile (w-12 h-12), Larger on desktop (w-24 h-24) */}
                                <div className="w-16 h-16 md:w-24 md:h-24 relative flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 p-3 md:p-6 backdrop-blur-sm transition-colors duration-300 group-hover:border-white/30 group-hover:bg-white/10">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className={`w-full h-full object-contain transition-all duration-300 ${tech.name === 'Next.js' ? 'invert' : ''
                                            }`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
