"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WebsiteDesignPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
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
                ease: [0.4, 0, 0.2, 1] as const,
            },
        },
    };

    const checkmarkVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1] as const,
            },
        }),
    };

    const whatWeDo = [
        "Information architecture and content structure planning",
        "UX/UI design focused on usability and conversion",
        "Custom website development (performance-first)",
        "SEO-driven site architecture and content hierarchy",
        "Speed, security, and scalability optimization",
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            <div
                className="fixed inset-0 z-0"
                style={{
                    backgroundImage: "url('/servicespage/cards%20click%20bg.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <motion.div
                className="relative z-10 container mx-auto px-6 py-16 max-w-5xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-12"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-sm font-medium">Back to Services</span>
                    </Link>
                </motion.div>

                <motion.h1
                    layoutId="service-title-4"
                    className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-tight"
                    style={{
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                        fontWeight: 600,
                    }}
                    variants={itemVariants}
                >
                    Website Design & SEO-Driven Digital Presence
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl text-white/80 mb-6 leading-relaxed"
                    style={{ lineHeight: "1.6" }}
                    variants={itemVariants}
                >
                    We design and build digital experiences that function as trust-building business systems, not just marketing assets.
                </motion.p>

                <motion.p
                    className="text-lg sm:text-xl text-white/80 mb-12 leading-relaxed"
                    style={{ lineHeight: "1.6" }}
                    variants={itemVariants}
                >
                    Every website is designed to communicate clarity, credibility, and intent within seconds.
                </motion.p>

                <motion.div variants={itemVariants} className="mb-12">
                    <div className="inline-block px-6 py-3 bg-white rounded-full mb-8">
                        <span className="text-black font-medium text-sm">What we do:</span>
                    </div>

                    <div className="space-y-4">
                        {whatWeDo.map((item, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={checkmarkVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex items-start gap-4"
                            >
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mt-1">
                                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                </div>
                                <p
                                    className="text-white/90 text-lg leading-relaxed"
                                    style={{ lineHeight: "1.6" }}
                                >
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <div className="inline-block px-6 py-3 bg-white rounded-full mb-8">
                        <span className="text-black font-medium text-sm">What you get:</span>
                    </div>

                    <motion.p
                        className="text-white/80 text-lg leading-relaxed pl-10"
                        style={{ lineHeight: "1.6" }}
                        variants={itemVariants}
                    >
                        A high-performing digital presence that earns trust before attention and supports long-term growth.
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    );
}
