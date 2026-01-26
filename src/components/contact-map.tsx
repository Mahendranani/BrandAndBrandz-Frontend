"use client";

import { motion } from "framer-motion";

export function ContactMap() {
    return (
        <section className="relative w-full py-20 pb-0 bg-[#0A0A0A]">
            <div className="container mx-auto px-4 text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold text-white mb-4"
                >
                    Find Us Here
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-white/60 max-w-xl mx-auto"
                >
                    Visit our office or get direction. We're centrally located for your convenience.
                </motion.p>
            </div>

            <motion.div
                className="w-full h-[400px] lg:h-[500px] grayscale invert delay-150 transition-all duration-700 hover:grayscale-0 hover:invert-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Google Maps Embed */}
                <iframe
                    src="https://maps.google.com/maps?q=Brand%20%26%20Brandz%20Horamavu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Brand and Brandz Location"
                    className="w-full h-full"
                ></iframe>
            </motion.div>
        </section>
    );
}
