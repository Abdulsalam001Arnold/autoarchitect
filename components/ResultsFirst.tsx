"use client";

import { useEffect, useRef } from "react";
import { XCircle, Clock, FileWarning } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fixed positions so items don't jump on re-render
const chaosItems = [
    { text: "See a prototype (not quite right)", icon: FileWarning, top: "18%", left: "8%" },
    { text: "Add it to backlog", icon: Clock, top: "38%", left: "42%" },
    { text: "Wait weeks (or months)", icon: Clock, top: "58%", left: "12%" },
    { text: "Follow up (still swamped)", icon: XCircle, top: "72%", left: "38%" },
    { text: "Have an idea", icon: null, top: "28%", left: "55%" },
    { text: "Submit ticket to IT", icon: FileWarning, top: "50%", left: "60%" },
];

export function ResultsFirst() {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];

        // Kill any existing ScrollTriggers belonging to this container to avoid duplication
        const triggers: ScrollTrigger[] = [];

        items.forEach((el, i) => {
            
            const fallHeight = -(280 + i * 40); 

            // Set initial state: high above, invisible
            gsap.set(el, { y: fallHeight, opacity: 0, rotate: gsap.utils.random(-12, 12) });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: 1.4,
                },
            });

            tl.to(el, {
                y: 0,
                opacity: 1,
                rotate: 0,
                ease: "power2.out",
                delay: i * 0.06,
            });

            triggers.push(tl.scrollTrigger as ScrollTrigger);
        });

        return () => {
            triggers.forEach((t) => t?.kill());
        };
    }, []);

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Visual: Chaos */}
                <div
                    ref={containerRef}
                    className="relative h-[500px] bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent pointer-events-none" />

                    {chaosItems.map((item, i) => (
                        <div
                            key={i}
                            ref={(el) => { itemRefs.current[i] = el; }}
                            className="absolute bg-white text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2"
                            style={{
                                top: item.top,
                                left: item.left,
                                zIndex: 10,
                                willChange: "transform, opacity",
                            }}
                        >
                            {item.icon && <item.icon className="w-4 h-4 text-red-500" />}
                            {item.text}
                        </div>
                    ))}
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
                        Because you're not just looking for an automation specialist.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        You need a <span className="text-white font-semibold">System.</span>
                        <br /><br />
                        We apply <span className="text-white font-semibold">Systems Thinking</span> to your business—integrating your unique logic, software, and interfaces into one seamless workflow that actually scales.
                        <br /><br />
                        Not just a quick fix, but a complete ecosystem derived from engineering principles.
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
