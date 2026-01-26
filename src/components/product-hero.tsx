"use client";

import { motion } from "framer-motion";

export function ProductHero() {
    return (
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-16">
            {/* Main Title with Antigravity Float */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                    opacity: 1,
                    y: [0, -10, 0]
                }}
                transition={{
                    opacity: { duration: 1, ease: "easeOut" },
                    y: {
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut",
                        delay: 1 // Start floating after fade in
                    }
                }}
                className="relative z-10 max-w-5xl mx-auto"
            >
                <div className="inline-block px-4 py-1.5 mb-6 border border-white/20 rounded-full bg-white/5 backdrop-blur-md">
                    <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Product</span>
                </div>

                <h1
                    className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight"
                    style={{
                        fontFamily: "'Inter', sans-serif",
                    }}
                >
                    Platforms built to solve
                    <br />
                    <span className="font-semibold text-white/90">trust at scale.</span>
                </h1>

                <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                    At Brand & Brandz, products aren't experiments; they're intentional systems built to solve real-world problems where trust and execution matter.
                </p>
            </motion.div>
        </section>
    );
}
