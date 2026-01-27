'use client';

import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';
import { useRef } from 'react';

export function RefinedBrandSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Weighted Floating Motion (Parallax)
    // Slower speed for the main headline (heavier feel)
    const yHeadline = useTransform(scrollYProgress, [0, 1], [100, -50]);
    // Faster speed for secondary lines (weightless drift)
    const yLines = useTransform(scrollYProgress, [0, 1], [150, -150]);

    // Spring smoothing for smoother parallax
    const smoothYHeadline = useSpring(yHeadline, { stiffness: 100, damping: 20 });
    const smoothYLines = useSpring(yLines, { stiffness: 100, damping: 20 });

    // Scroll-Linked Color Reveal & Blur
    // As we scroll through, text goes from dim/blurred to sharp/white
    const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0.2, 1, 0.2]); // Adjusted range
    const blurValue = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [8, 0, 8]); // Blur amount in px
    const blurFilter = useMotionTemplate`blur(${blurValue}px)`;

    return (
        <section
            ref={containerRef}
            className="py-32 sm:py-40 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden min-h-[80vh] flex flex-col items-center justify-center"
        >
            {/* Main Headline - Heavy & Deliberate */}
            <motion.div
                style={{ y: smoothYHeadline, opacity, filter: blurFilter }}
                className="mb-12 relative z-10"
            >
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                    Strong brands <br className="hidden sm:block" /> are not rushed.
                </h2>
                <p className="text-xl sm:text-2xl mt-4 text-white/60 font-light tracking-wide">
                    They are designed with intention.
                </p>
            </motion.div>

            {/* Floating Values - Weightless & Glowing */}
            <motion.div
                style={{ y: smoothYLines }}
                className="space-y-6 sm:space-y-8 relative z-10"
            >
                <FloatingLine
                    textBefore="We focus on"
                    highlight="clarity"
                    textAfter="before creativity"
                    delay={0}
                />
                <FloatingLine
                    textBefore=""
                    highlight="systems"
                    textAfter="before scale"
                    delay={0.1}
                />
                <FloatingLine
                    textBefore=""
                    highlight="trust"
                    textAfter="before attention"
                    delay={0.2}
                />
            </motion.div>

            {/* Footer Text */}
            <motion.p
                style={{ opacity: useTransform(scrollYProgress, [0.6, 0.8], [0, 1]) }}
                className="mt-16 text-lg text-white/40 italic font-light"
            >
                This is how enduring brands are built.
            </motion.p>

            {/* Background Atmosphere - Optional subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />
        </section>
    );
}

// Sub-component for individual floating lines with scroll reveals
function FloatingLine({ textBefore, highlight, textAfter, delay }: { textBefore: string, highlight: string, textAfter: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className="text-2xl sm:text-4xl md:text-5xl font-light text-white/30 flex items-center justify-center gap-3 flex-wrap"
        >
            {textBefore && <span>{textBefore}</span>}

            <motion.span
                className="font-bold text-white relative inline-block"
                whileHover={{ scale: 1.05 }}
                style={{
                    textShadow: "0 0 20px rgba(59, 130, 246, 0.6), 0 0 10px rgba(59, 130, 246, 0.4)" // Neon Blue Glow
                }}
            >
                {highlight}
            </motion.span>

            <span>{textAfter}</span>
        </motion.div>
    );
}
