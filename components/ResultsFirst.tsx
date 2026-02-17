"use client";

import { motion } from "framer-motion";
import { XCircle, Clock, FileWarning } from "lucide-react";

const chaosItems = [
    { text: "See a prototype (not quite right)", icon: FileWarning, delay: 0 },
    { text: "Add it to backlog", icon: Clock, delay: 1.5 },
    { text: "Wait weeks (or months)", icon: Clock, delay: 0.5 },
    { text: "Follow up (still swamped)", icon: XCircle, delay: 2 },
    { text: "Have an idea", icon: null, delay: 0.2 },
    { text: "Submit ticket to IT", icon: FileWarning, delay: 1 },
];

export function ResultsFirst() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Visual: Chaos */}
                <div className="relative h-[500px] bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent pointer-events-none" />

                    {chaosItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 0 }}
                            animate={{
                                y: [0, -10, 0],
                                x: [0, Math.random() * 10 - 5, 0]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: item.delay
                            }}
                            className="absolute bg-white text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2"
                            style={{
                                top: `${20 + Math.random() * 60}%`,
                                left: `${10 + Math.random() * 60}%`,
                                zIndex: 10
                            }}
                        >
                            {item.icon && <item.icon className="w-4 h-4 text-red-500" />}
                            {item.text}
                        </motion.div>
                    ))}

                    {/* Central Chaos Text/Element could go here if needed, but the floating pills do the job */}
                </div>

                {/* Right Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium">
                        <Clock className="w-4 h-4" />
                        <span>The Old Way</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Results First
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Finding someone good at AI automation is hard... Like really hard.
                        Because you're not actually looking for an automation specialist.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        You're looking for someone who understands how <span className="text-white font-semibold">7-figure businesses actually run.</span>
                        <br /><br />
                        Sales. Marketing. Operations.
                        <br /><br />
                        Someone who's been there, built it, and can rebuild those systems inside
                        <span className="italic text-white"> your business</span> — at the same standard you'd hold yourself to.
                    </p>

                    <div className="pt-4">
                        <button className="bg-white text-black px-8 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors">
                            Book A Strategy Call
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
