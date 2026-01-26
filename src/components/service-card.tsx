"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

interface ImageConfig {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    position?: string;
}

interface ServiceCardProps {
    index: number;
    title: string;
    description: string;
    images: ImageConfig[];
    href?: string;
}

export function ServiceCard({ index, title, description, images, href }: ServiceCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Mouse position for desktop tilt effect (normalized -1 to 1)
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    // Smooth spring animations for tilt (10-15 degree range)
    const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), {
        stiffness: 80,
        damping: 15,
    });
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), {
        stiffness: 80,
        damping: 15,
    });

    // Shine gradient follows cursor
    const gradientX = useTransform(mouseX, [0, 1], [0, 100]);
    const gradientY = useTransform(mouseY, [0, 1], [0, 100]);
    const shineGradient = useMotionTemplate`radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)`;

    // Inner assets move 10% slower for depth
    const innerX = useTransform(mouseX, [0, 1], [-5, 5]);
    const innerY = useTransform(mouseY, [0, 1], [-5, 5]);

    // Scroll-based parallax for mobile
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    // Mobile: inner images shift at different speed
    const mobileImageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isMobile || !cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();

        // Normalize mouse position to 0 to 1 range
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        // Reset to center
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    const cardContent = (
        <div
            style={{
                perspective: "1200px",
                transformStyle: "preserve-3d",
            }}
        >
            <motion.div
                ref={cardRef}
                className="relative h-[400px] bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 overflow-hidden border border-white/10 group cursor-pointer"
                style={{
                    rotateX: isMobile ? 0 : rotateX,
                    rotateY: isMobile ? 0 : rotateY,
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                    duration: 0.6,
                    delay: index * 0.15, // Stagger effect
                    ease: [0.22, 1, 0.36, 1], // Smooth easing
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={!isMobile ? {
                    scale: 1.02,
                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                } : {}}
                // FLIP animation support
                layoutId={href ? `card-${index}` : undefined}
            >
                {/* Background Image Layer (cards.webp) - Static */}
                {images.map((image, imgIndex) => {
                    if (imgIndex === 0) {
                        return (
                            <div
                                key={imgIndex}
                                className={image.position || "absolute inset-0"}
                                style={{
                                    zIndex: 0,
                                    transform: "translateZ(0px)",
                                }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={image.width}
                                    height={image.height}
                                    className={image.className || "object-contain"}
                                />
                            </div>
                        );
                    }
                    return null;
                })}

                {/* Content Images Layer - with Depth Parallax (Desktop) or Scroll Parallax (Mobile) */}
                {images.map((image, imgIndex) => {
                    if (imgIndex > 0) {
                        return (
                            <motion.div
                                key={imgIndex}
                                className={image.position || "absolute bottom-0 left-1/2 transform -translate-x-1/2"}
                                style={{
                                    zIndex: 10,
                                    // Desktop: 10% slower movement for depth
                                    x: isMobile ? 0 : innerX,
                                    y: isMobile ? mobileImageY : innerY,
                                    transform: isMobile ? undefined : "translateZ(20px)",
                                    willChange: "transform",
                                }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={image.width}
                                    height={image.height}
                                    className={image.className || "object-contain"}
                                />
                            </motion.div>
                        );
                    }
                    return null;
                })}

                {/* Text Content - Always on top */}
                <div
                    className="relative z-20 h-full flex flex-col"
                    style={{
                        transform: "translateZ(30px)",
                    }}
                >
                    <motion.h3
                        layoutId={href ? `service-title-${index}` : undefined}
                        className="text-2xl font-semibold text-white mb-3"
                        style={{
                            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                            fontWeight: 600,
                        }}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <p
                        className="text-white/70 text-sm leading-relaxed"
                        style={{
                            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                            lineHeight: "1.6",
                        }}
                    >
                        {description}
                    </p>
                </div>

                {/* Desktop: Premium Glass Shine Effect - Follows Cursor */}
                {!isMobile && (
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: shineGradient,
                            opacity: 0,
                            zIndex: 30,
                            mixBlendMode: "overlay",
                        }}
                        whileHover={{
                            opacity: 1,
                            transition: { duration: 0.3 }
                        }}
                    />
                )}

                {/* Subtle gradient glow base */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="block">
                {cardContent}
            </Link>
        );
    }

    return cardContent;
}
