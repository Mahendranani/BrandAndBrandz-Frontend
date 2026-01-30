"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Playball, Raleway } from "next/font/google";

const playball = Playball({ subsets: ["latin"], weight: "400" });
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });

export function HomeHero() {
    // Zoom/Scroll effects
    const { scrollY } = useScroll();
    const heroScale = useTransform(scrollY, [0, 500], [1, 0.9]);
    const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
    const heroY = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <section className={`sticky top-0 h-screen flex flex-col justify-center overflow-hidden z-0 ${raleway.className}`}>
            <motion.div
                style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
                className="w-full h-full flex flex-col justify-between mt-20 items-center relative"
            >
                {/* Interactive Text Layer */}
                <div
                    className="relative z-20 text-center px-4 sm:px-6 lg:px-8"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl font-light tracking-tight text-white">
                        Most brands chase attention.
                    </h1>
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white mt-2">
                        We build credibility.
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80">
                        We partner with founders and businesses to transform ideas into
                        trusted, scalable brands through strategy, technology, products,
                        and intelligent growth as a long-term brand partner, not an
                        agency.
                    </p>
                    <Button className="mt-8 text-white bg-neutral-800 hover:bg-neutral-600 rounded-full border-t-2 border-t-gray-500 px-8 transition-transform hover:scale-105 active:scale-95">
                        Book a Conversation
                    </Button>
                </div>

                {/* City Background Layer */}
                <motion.div
                    className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center"

                >
                    <img src={"/hero-buildings.png"} alt="Buildings" />
                    <div className="absolute bottom-12 w-full text-center">
                        <p className={"italic text-sm text-white/60 " + playball.className}>
                            "Belief is the strongest form of growth."
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}