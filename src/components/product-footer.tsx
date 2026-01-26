"use client";

import { motion } from "framer-motion";

export function ProductFooter() {
    return (
        <section className="relative py-32 px-4 mt-20 overflow-hidden">
            {/* Pulsing Gradient Background */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/productpage/bg.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                animate={{
                    opacity: [0.8, 1, 0.8],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Our products are not extensions of our services.
                    <br />
                    <span className="text-white/90">They are proof of our thinking.</span>
                </motion.h2>

                <motion.p
                    className="text-xl text-white/80 mb-12 font-light"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    When trust is built into the platform,
                    <br />
                    growth becomes natural.
                </motion.p>

                <motion.p
                    className="text-lg text-white/60 italic"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    "Systems earn trust when they are designed with intention."
                </motion.p>
            </div>
        </section>
    );
}
