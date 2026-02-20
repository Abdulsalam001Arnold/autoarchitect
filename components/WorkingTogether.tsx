"use client";

import { motion } from "framer-motion";
import { Database, Mail, FileSpreadsheet, MessageSquare, Globe, Zap } from "lucide-react";

export function WorkingTogether() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Visual: Orbiting Integration */}
                <div className="relative h-[500px] flex items-center justify-center">
                    {/* Central Node */}
                    <div className="z-10 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(109,40,217,0.5)]">
                        <span className="text-2xl font-bold text-white">n8n</span>
                    </div>

                    {/* Orbit Rings */}
                    <div className="absolute border border-white/5 rounded-full w-[300px] h-[300px]" />
                    <div className="absolute border border-white/5 rounded-full w-[450px] h-[450px]" />

                    {/* Orbiting Icons */}
                    {[
                        { icon: FileSpreadsheet, color: "text-green-500", delay: 0, radius: 150 },
                        { icon: Mail, color: "text-blue-500", delay: 2, radius: 150 },
                        { icon: Database, color: "text-yellow-500", delay: 4, radius: 150 },
                        { icon: MessageSquare, color: "text-purple-500", delay: 1, radius: 225 },
                        { icon: Globe, color: "text-cyan-500", delay: 3, radius: 225 },
                        { icon: Zap, color: "text-orange-500", delay: 5, radius: 225 },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 20 + i * 2,
                                repeat: Infinity,
                                ease: "linear",
                                delay: item.delay * -1
                            }}
                            className="absolute inset-0"
                        >
                            <div
                                className="absolute bg-[#111] p-3 rounded-xl border border-white/10 shadow-lg"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    transform: `translate(-50%, -50%) translateX(${item.radius}px) rotate(-${0}deg)` // Counter-rotate logic would be complex here without custom component, simplified for now
                                }}
                            >
                                {/* Counter-rotate the icon to keep it upright */}
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 20 + i * 2, repeat: Infinity, ease: "linear", delay: item.delay * -1 }}
                                >
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Content */}
                <div className="space-y-12">
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mb-4">
                            <Zap className="w-6 h-6 text-neon-purple" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            What It Looks Like <br /> Working Together
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Chances are, the exact painpoints you want to automate we've done countless times before...
                        </p>
                    </div>

                    <div className="grid gap-6">
                        <div className="flex gap-6 p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-primary/50 transition-colors group">
                            <div className="text-sm font-mono text-muted-foreground pt-1">01</div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Analyze & Architect</h4>
                                <p className="text-muted-foreground">We map your entire business logic and design a full-spectrum system.</p>
                            </div>
                        </div>

                        <div className="flex gap-6 p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-primary/50 transition-colors group">
                            <div className="text-sm font-mono text-muted-foreground pt-1">02</div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Build & Connect</h4>
                                <p className="text-muted-foreground">We connect your software, backend, and build custom interfaces.</p>
                            </div>
                        </div>

                        <div className="flex gap-6 p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-primary/50 transition-colors group">
                            <div className="text-sm font-mono text-muted-foreground pt-1">03</div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Launch & Optimize</h4>
                                <p className="text-muted-foreground">You get a fully documented, scaling system that evolves with you.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
