"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Playball } from "next/font/google";

const playball = Playball({ subsets: ["latin"], weight: "400" });

export function HomeHero() {
    const [isMobile, setIsMobile] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Mouse coords (0-1)
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    // Smoothed spring values for Desktop Parallax (Lag effect)
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Text moves slightly (2% lag feel)
    const textX = useTransform(smoothX, [0, 1], [-15, 15]);
    const textY = useTransform(smoothY, [0, 1], [-15, 15]);

    // Background moves oppositely for depth
    const bgX = useTransform(smoothX, [0, 1], [10, -10]);
    const bgY = useTransform(smoothY, [0, 1], [10, -10]);

    // Zoom/Scroll effects
    const { scrollY } = useScroll();
    const heroScale = useTransform(scrollY, [0, 500], [1, 0.9]);
    const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
    const heroY = useTransform(scrollY, [0, 500], [0, 100]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }

        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);

        const handleMouseMove = (e: MouseEvent) => {
            if (window.innerWidth >= 768) {
                mouseX.set(e.clientX / window.innerWidth);
                mouseY.set(e.clientY / window.innerHeight);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", checkMobile);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <section className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden z-0">
            <motion.div
                style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
                className="w-full h-full flex flex-col justify-between mt-20 items-center relative"
            >
                {/* Interactive Text Layer */}
                <motion.div
                    className="relative z-20 text-center px-4 sm:px-6 lg:px-8"
                    style={{
                        x: isMobile ? 0 : textX,
                        y: isMobile ? 0 : textY
                    }}
                    animate={isMobile ? {
                        y: [0, -10, 0],
                        rotateX: [0, 2, 0] // Subtle tilt
                    } : undefined}
                    transition={isMobile ? {
                        repeat: Infinity,
                        duration: 6,
                        ease: "easeInOut"
                    } : undefined}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
                        Most brands chase attention.
                    </h1>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-2">
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
                </motion.div>

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