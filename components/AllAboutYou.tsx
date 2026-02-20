"use client";

import { Check } from "lucide-react";
import Image from "next/image";

const benefits = [
    "Turn manual tasks into reliable Systems",
    "End-to-End Architecture (Backend + Frontend)",
    "Systems Thinking applied to your specific business logic",
    "Custom Interface Development for your automation",
    "We build complete ecosystems, not just scripts",
    "First automation live in 7 days or less",
    "30-day money back guarantee, no questions"
];

export function AllAboutYou() {
    return (
        <section className="py-24 bg-[#050505] relative">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="space-y-8 order-2 lg:order-1">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-blue-500">
                            <path d="M12 2v20M2 12h20" />
                        </svg>
                        {/* Simple lightbulb icon replacement or similar */}
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        All About You
                    </h2>

                    <h3 className="text-xl font-medium text-white/80">
                        What You Can Expect Working With Us:
                    </h3>

                    <ul className="space-y-4">
                        {benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-lg text-muted-foreground">{benefit}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-6">
                        <button className="bg-white text-black px-8 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors">
                            Book A Strategy Call
                        </button>
                    </div>
                </div>

                {/* Right Visual Placeholder */}
                <div className="order-1 lg:order-2 relative h-[500px] bg-[#111] rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center group">
                    {/* Mockup of Interface */}
                    <div className="absolute inset-4 bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden">
                        <div className="h-8 bg-[#252525] border-b border-white/5 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="p-4 grid grid-cols-4 gap-4 opacity-50">
                            {/* Skeleton Loading UI */}
                            <div className="h-20 bg-white/5 rounded-lg col-span-1" />
                            <div className="h-20 bg-white/5 rounded-lg col-span-1" />
                            <div className="h-20 bg-white/5 rounded-lg col-span-2" />
                            <div className="h-40 bg-white/5 rounded-lg col-span-4" />
                        </div>

                        {/* Overlay Text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <img
                            src={"https://res.cloudinary.com/dqpbdik90/image/upload/v1771364494/Screenshot_366_ecsp8d.png"}
                            alt="Automation Flow"
                            className="object-cover"
                            />

                            <img
                            src={"https://res.cloudinary.com/dqpbdik90/image/upload/v1771364725/Screenshot_365_wzg7i8.png"}
                            alt="Automation Flow"
                            className="object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
