"use client";

import { motion } from "framer-motion";

const logos = [
    "Microsoft", "Samsung", "Adobe", "Discord", "Linear", "Notion", "OpenAI",
    "Google", "HubSpot", "Salesforce"
];

export function Logos() {
    return (
        <section className="py-20 border-y border-white/5 bg-black/20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-10">
                <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                    Companies We've Worked With
                </p>
            </div>

            <div className="relative flex w-full overflow-hidden mask-linear-fade">
                <div className="flex animate-marquee whitespace-nowrap">
                    {logos.concat(logos).map((logo, i) => (
                        <div
                            key={i}
                            className="mx-12 text-2xl font-bold text-white/30 hover:text-white transition-colors cursor-default"
                        >
                            {logo}
                        </div>
                    ))}
                </div>
                <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
                    {logos.concat(logos).map((logo, i) => (
                        <div
                            key={i}
                            className="mx-12 text-2xl font-bold text-white/30 hover:text-white transition-colors cursor-default"
                        >
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
