"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

export function ContactGrid() {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Our Address",
            content: "1st Floor, Palmarcade, Horamavu Main Road, Kalkere, Bengaluru - 560043",
            href: "https://maps.google.com/?q=1st+Floor,Palmarcade,Horamavu+Main+Road,Kalkere,Bengaluru-560043"
        },
        {
            icon: Mail,
            title: "Email Us",
            content: "contact@brandandbrandz.com",
            href: "mailto:contact@brandandbrandz.com"
        },
        {
            icon: Phone,
            title: "Call Us",
            content: "+91 91588 57575",
            href: "tel:+919158857575"
        }
    ];

    const inputClasses = "w-full bg-[#0A0A0A] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-300";

    return (
        <section className="container mx-auto px-4 max-w-6xl py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                {/* Contact Info Cards (Left Column) */}
                <div className="lg:col-span-1 space-y-6">
                    {contactInfo.map((info, idx) => (
                        <motion.a
                            key={idx}
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.5, ease: "easeOut" }}
                            className="block p-8 rounded-2xl bg-gradient-to-b from-[#1e3a5f]/40 to-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors group"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <info.icon className="w-5 h-5 text-white/80" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-white font-medium mb-2">{info.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">
                                    {info.content}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Form Container (Right Column - Spans 2) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="lg:col-span-2 bg-[#121212] border border-[#333] rounded-2xl p-8 lg:p-10"
                >
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-1">Get in Touch — Brand & Brandz</h2>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-white/80 ml-1">First Name *</label>
                                <input type="text" placeholder="John" className={inputClasses} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-white/80 ml-1">Last Name *</label>
                                <input type="text" placeholder="Doe" className={inputClasses} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-white/80 ml-1">Business Email *</label>
                            <input type="email" placeholder="life@company.com" className={inputClasses} />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-white/80 ml-1">Company Name *</label>
                            <input type="text" placeholder="Your Company Name" className={inputClasses} />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-white/80 ml-1">Phone Number</label>
                            <input type="tel" placeholder="+91 123-456-7890" className={inputClasses} />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-white/80 ml-1">How can we help? *</label>
                            <textarea
                                rows={4}
                                placeholder="Tell us about your IT challenges and objectives..."
                                className={inputClasses}
                            />
                        </div>

                        <button
                            type="button"
                            className="w-full py-4 mt-2 bg-gradient-to-r from-[#2d5a7b] to-[#4a6b8a] hover:from-[#3a6b8f] hover:to-[#5a7b9a] text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-900/20"
                        >
                            Schedule Meeting
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}
