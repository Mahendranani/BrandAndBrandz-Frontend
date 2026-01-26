
"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function EngagementCovers() {
    const items = [
        {
            title: "Strategy & Positioning",
            desc: "detailed business clarity and messaging",
        },
        {
            title: "Brand & Digital Experience",
            desc: "identity, design and user experience",
        },
        {
            title: "Systems & Intelligence",
            desc: "websites, platforms, custom tools and AI tools",
        },
        {
            title: "Growth & Guidance",
            desc: "structured growth and ongoing support",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Delay between each item
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white relative flex flex-col items-center">
            <div className="text-center mb-16 max-w-3xl">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                    What Our Engagement Covers
                </h2>
                <p className="text-xl text-gray-300 font-light">
                    We work across the full lifecycle of a business or product:
                </p>
            </div>

            <div
                className="w-full max-w-6xl rounded-[2rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden"
                style={{
                    backgroundImage: "url('/aboutpage/Card.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Subtle gradient glow at bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-zinc-800/30 blur-[100px] pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 relative z-10 items-center">
                    {/* Left Side */}
                    <div className="space-y-8">
                        <h3 className="text-2xl sm:text-3xl font-medium leading-relaxed">
                            Each stage builds on the previous one, ensuring nothing is executed
                            in isolation.
                        </h3>
                        <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-medium">
                            Get started
                        </Button>
                    </div>

                    {/* Right Side */}
                    <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {items.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-start gap-4"
                                variants={itemVariants}
                            >
                                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-white flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                </div>
                                <div>
                                    <span className="font-bold text-lg">{item.title}</span>{" "}
                                    <span className="text-gray-400 text-lg font-light">
                                        {item.desc}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
