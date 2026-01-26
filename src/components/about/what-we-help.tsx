"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function WhatWeHelp() {
    const services = [
        {
            title: "Clarity-driven brand systems.",
            description: "We build brands that communicate trust and scale with purpose.",
            image: "/aboutpage/Clarity-driven.webp",
        },
        {
            title: "Strategy before creativity.",
            description: "Clear positioning, messaging, and direction that guide every decision.",
            image: "/aboutpage/Stratergy before Creativity.webp",
        },
        {
            title: "Intentional brand & digital experience.",
            description: "Visual identity and user experiences designed for credibility and consistency.",
            image: "/aboutpage/Intentional brand .webp",
        },
        {
            title: "Growth with structure.",
            description: "Marketing and growth systems aligned with clear brand foundations.",
            image: "/aboutpage/Growth and structure.webp",
        },
        {
            title: "Intelligent technology integration.",
            description: "AI-assisted tools that improve efficiency and decision-making.",
            image: "/aboutpage/Intelligent technology integration.webp",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Staggered animation
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60, // Slide up from below
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
            },
        },
    };

    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: 0.2, // Fade in after card appears
            },
        },
    };

    const textVariants = {
        hidden: {
            opacity: 0,
            y: 20, // Reveal from bottom
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.1,
            },
        },
    };

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1111] text-white">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        What We Can Help You With
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
                        Whether you need a new visual identity, a high-performing website, or
                        a design system. We offer creative services tailored to help your brand
                        grow with clarity and confidence.
                    </p>
                </div>

                {/* Cards Grid */}
                <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* First Row - 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.slice(0, 3).map((service, idx) => (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    boxShadow: '0px 8px 30px rgba(255, 255, 255, 0.15), 0px 4px 20px rgba(0, 0, 0, 0.5)',
                                    borderColor: 'rgba(255, 255, 255, 0.4)',
                                    transition: { duration: 0.3 }
                                }}
                                className="group relative rounded-[31px] bg-[#101010] border border-white/20 p-8 overflow-hidden backdrop-blur-sm transition-all duration-300 flex flex-col"
                                style={{
                                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                {/* Card Content */}
                                <motion.div
                                    className="relative z-10 mb-6"
                                    variants={textVariants}
                                >
                                    <h3 className="text-2xl font-bold mb-3 leading-tight text-white">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </motion.div>

                                {/* Image */}
                                <motion.div
                                    className="relative z-10 mt-auto rounded-2xl overflow-hidden"
                                    variants={imageVariants}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                        quality={100}
                                        priority={idx === 0}
                                    />
                                </motion.div>

                                {/* Subtle gradient glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Second Row - 2 Wider Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {services.slice(3, 5).map((service, idx) => (
                            <motion.div
                                key={idx + 3}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    boxShadow: '0px 8px 30px rgba(255, 255, 255, 0.15), 0px 4px 20px rgba(0, 0, 0, 0.5)',
                                    borderColor: 'rgba(255, 255, 255, 0.4)',
                                    transition: { duration: 0.3 }
                                }}
                                className="group relative rounded-[31px] bg-[#101010] border border-white/20 p-8 overflow-hidden backdrop-blur-sm transition-all duration-300 flex flex-col"
                                style={{
                                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                {/* Card Content */}
                                <motion.div
                                    className="relative z-10 mb-6"
                                    variants={textVariants}
                                >
                                    <h3 className="text-2xl font-bold mb-3 leading-tight text-white">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </motion.div>

                                {/* Image */}
                                <motion.div
                                    className="relative z-10 mt-auto rounded-2xl overflow-hidden"
                                    variants={imageVariants}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={1000}
                                        height={600}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                        quality={100}
                                    />
                                </motion.div>

                                {/* Subtle gradient glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
