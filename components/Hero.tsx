"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen pt-32 pb-16 flex items-center overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-blue/10 blur-[120px] rounded-full opacity-30 pointer-events-none" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
                        Stop Doing Things <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Manually.</span> <br />
                        Your Competitors Aren’t.
                    </h1>

                    <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                        We build AI automation systems for 7-figure businesses — so growth doesn’t depend on more hires or tools.
                        We’ll build you a solution in 7 days that you’ll love — otherwise you don’t pay.
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm font-medium text-white/80">
                        {["5-Star Rated", "Money-Back Guarantee", "1,000+ Clients"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-neon-purple" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <Button className="h-14 px-8 text-lg bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 rounded-full font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Book A Strategy Call
                        </Button>
                    </div>
                </motion.div>

                {/* Right Visual Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 backdrop-blur-sm group">
                        {/* Abstract Gradient Mesh Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-neon-blue/10 animate-pulse-slow" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform cursor-pointer">
                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 overflow-hidden">
                                {/* Avatar Placeholder */}
                                <div className="w-full h-full bg-gray-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">Automatable</p>
                                <p className="text-xs text-muted-foreground">Intro to Automation</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
