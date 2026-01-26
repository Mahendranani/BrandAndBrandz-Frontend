"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface VideoItemProps {
    src: string;
    align: "left" | "right";
}

// Reusable Video Component with Floating Animation & In-View Playback
function VideoItem({ src, align }: VideoItemProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.5 }); // Play when 50% seen

    useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                videoRef.current.play().catch(() => { });
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView]);

    return (
        <div ref={containerRef} className={`w-1/2 flex ${align === 'right' ? 'justify-end pr-12' : 'justify-start pl-12'}`}>
            <motion.div
                animate={{ y: [-15, 15, -15] }} // Antigravity Sine Wave
                transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                }}
            >
                <video
                    ref={videoRef}
                    src={src}
                    muted
                    loop
                    playsInline
                    className="max-w-50 w-full h-auto object-contain mix-blend-screen rounded-xl"
                />
            </motion.div>
        </div>
    );
}

// Reusable Step Text Component
function StepInfo({ title, desc, align }: { title: string; desc: string; align: "left" | "right" }) {
    return (
        <div className={`w-1/2 ${align === 'right' ? 'text-right pr-12' : 'text-left pl-12'}`}>
            <h3 className="text-xl md:text-3xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/70 text-md md:text-lg">{desc}</p>
        </div>
    );
}

export function HowWeWork() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const steps = [
        {
            title: "Understand",
            desc: "We dive deep into your business ecosystem.",
            video: "/plan.mp4",
        },
        {
            title: "Design",
            desc: "We craft systems with long-term intent.",
            video: "/Bird.mp4",
        },
        {
            title: "Build",
            desc: "We architect scalable, robust solutions.",
            video: "/Bear.mp4",
        },
        {
            title: "Scale",
            desc: "We grow with intelligence and data.",
            video: "/Eagle.mp4",
        },
    ];

    return (
        <section ref={containerRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
            <h2 className="text-center text-4xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-center text-lg mb-20 text-white/60">
                Understand → Design → Build → Scale
            </p>

            <div className="container mx-auto max-w-5xl relative">

                {/* Background Line (Gray) */}
                <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-white/10 top-0 z-0" />

                {/* Glowing Progress Line (Blue) */}
                <motion.div
                    style={{ height: lineHeight }}
                    className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-blue-500 shadow-[0_0_10px_#3b82f6] top-0 z-10 origin-top"
                />

                <div className="space-y-16 relative z-20">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="flex items-center w-full"
                            >
                                {/* Left Side (Video or Text) */}
                                {isEven ? (
                                    <VideoItem src={step.video} align="right" />
                                ) : (
                                    <StepInfo title={step.title} desc={step.desc} align="right" />
                                )}

                                {/* Center Dot */}
                                <div className="relative z-30 flex-shrink-0">
                                    <div className="w-4 h-4 bg-black border-2 border-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                </div>

                                {/* Right Side (Text or Video) */}
                                {isEven ? (
                                    <StepInfo title={step.title} desc={step.desc} align="left" />
                                ) : (
                                    <VideoItem src={step.video} align="left" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
