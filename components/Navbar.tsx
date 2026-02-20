"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/70 border-b border-white/10"
        >
            <div className="flex items-center gap-2">
                <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-neon-blue flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 text-white"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <span className="text-white">AutoArchitect</span>
                </Link>
            </div>



            <div className="flex items-center gap-4">
                {/* Mobile Menu Trigger could go here */}
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6">
                    Book Strategy Call
                </Button>
            </div>
        </motion.nav>
    );
}
