"use client";

import { motion } from "framer-motion";

export function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Define the Direction",
            description: "We understand your business, goals, and challenges, then establish clear strategy, positioning, and priorities.",
        },
        {
            number: "02",
            title: "Design & Build",
            description: "We design the brand, digital experience and underlying systems, from identity to platforms and intelligent integrations.",
        },
        {
            number: "03",
            title: "Grow with Structure",
            description: "We apply growth and marketing only after the foundation is in place, supported by ongoing guidance and refinement.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white relative flex items-center justify-center min-h-screen">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Main Container Card with Background Image */}
                <div
                    className="rounded-[2.5rem] p-12 sm:p-16 lg:p-20 relative overflow-hidden"
                    style={{
                        backgroundImage: "url('/aboutpage/How it works.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-block mb-8"
                        >
                            <span className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium">
                                How It Works
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            From Vision to Growth, We <br /> Make It Happen
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg sm:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed"
                        >
                            Turn your ideas into impactful digital solutions that drive efficiency,
                            revenue, and customer trust.
                        </motion.p>
                    </div>

                    {/* Cards */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3 },
                                }}
                                className="group relative rounded-[28px] bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 border border-zinc-700/30 p-8 overflow-hidden backdrop-blur-md transition-all duration-300"
                                style={{
                                    boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                {/* Number Badge */}
                                <div className="flex justify-center mb-6">
                                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-500 text-white font-bold text-sm">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold mb-4 text-white text-center">
                                    {step.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed font-light text-center text-sm">
                                    {step.description}
                                </p>

                                {/* Subtle gradient glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[28px]" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
