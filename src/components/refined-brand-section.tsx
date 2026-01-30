'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Character Reveal Component with Bold Support
function RevealChar({ char, progress, isBold }: { char: string, progress: any, isBold?: boolean }) {
    return (
        <span className="relative">
            <span className={`opacity-20 text-gray-500 ${isBold ? "font-bold" : ""}`}>{char}</span>
            <motion.span
                style={{ opacity: progress }}
                className={`absolute left-0 top-0 text-white ${isBold ? "font-bold" : ""}`}
            >
                {char}
            </motion.span>
        </span>
    )
}

function QuoteLine({ segments, progress, range }: { segments: { text: string, bold?: boolean }[], progress: any, range: [number, number] }) {
    // Map global section progress to this line's processing range (0 to 1)
    const lineProgress = useTransform(progress, range, [0, 1]);

    const fullText = segments.map(s => s.text).join("");
    let charGlobalIndex = 0;

    return (
        <p className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
            {segments.map((segment, segmentIndex) => (
                <span key={segmentIndex} className={segment.bold ? "font-bold" : ""}>
                    {segment.text.split("").map((char, charIndex) => {
                        const start = charGlobalIndex / fullText.length;
                        const end = start + (1 / fullText.length);
                        // Character lights up based on line's local progress
                        const charProgress = useTransform(lineProgress, [start, end], [0, 1]);
                        charGlobalIndex++;

                        return (
                            <RevealChar key={`${segmentIndex}-${charIndex}`} char={char} progress={charProgress} isBold={segment.bold} />
                        )
                    })}
                </span>
            ))}
        </p>
    )
}

export function RefinedBrandSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "end 0.6"] // Adjusts when the whole sequence plays
    });

    return (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black text-center">

            {/* Header */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Strong brands are not rushed.
            </h2>
            <p className="text-base sm:text-lg text-white/50 mb-16 uppercase tracking-widest">
                They are designed with intention.
            </p>

            {/* Scroll Reveal Content */}
            <div ref={containerRef} className="max-w-5xl mx-auto">
                <QuoteLine
                    progress={scrollYProgress}
                    range={[0, 1]}
                    segments={[
                        { text: "We focus on " },
                        { text: "clarity", bold: true },
                        { text: " before creativity, " },
                        { text: "systems", bold: true },
                        { text: " before scale, " },
                        { text: "trust", bold: true },
                        { text: " before attention" }
                    ]} />
            </div>

            <p className="mt-16 text-lg text-white/40">This is how enduring brands are built.</p>
        </section>
    );
}
