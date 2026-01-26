"use client";

import { Rocket, Camera, Home, Atom, Repeat2 } from "lucide-react";

const cards = [
    {
        icon: Rocket,
        title: "Understanding First",
        desc: "We begin with deep understanding and clear direction.",
    },
    {
        icon: Repeat2,
        title: "Structure Before Design",
        desc: "We prioritize logical structure over decorative design.",
    },
    {
        icon: Camera,
        title: "Systems Before Promotion",
        desc: "We build the engine before adding the fuel.",
    },
    {
        icon: Home,
        title: "Responsible Growth",
        desc: "Growth that is sustainable and manageable.",
    },
    {
        icon: Atom,
        title: "What Clients Can Expect",
        desc: "Clear decisions, thoughtful timelines and systems built to scale responsibly.",
    },
];

export function ProcessExperience() {
    return (
        <section className="bg-black text-white relative py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side - Sticky Heading */}
                    <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-16rem)] flex flex-col justify-center">
                        <h2 className="text-5xl font-bold leading-tight mb-8">
                            How Clients <br /> Experience the Process
                        </h2>
                        <p className="text-2xl text-gray-300 font-light leading-relaxed max-w-md">
                            Clients can expect thoughtful timelines, clear decision-making, and
                            systems designed to scale responsibly.
                        </p>
                    </div>

                    {/* Right Side - Stacking Cards */}
                    <div className="relative space-y-8 pb-12">
                        {cards.map((card, i) => {
                            // Calculate stacking offset for each card
                            const topOffset = 100 + (i * 20);

                            return (
                                <div
                                    key={i}
                                    className="sticky rounded-2xl border border-zinc-700 bg-zinc-900/90 p-8 flex items-start gap-6 backdrop-blur-md transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800/90 hover:scale-[1.02]"
                                    style={{
                                        top: `${topOffset}px`,
                                    }}
                                >
                                    <div className="flex-shrink-0">
                                        <card.icon className="w-12 h-12 text-white" strokeWidth={1} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
