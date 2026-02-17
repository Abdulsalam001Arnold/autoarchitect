"use client";

import { Youtube, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-neon-blue flex items-center justify-center">
                        <span className="font-bold text-white text-xs">A</span>
                    </div>
                    <span className="text-white font-bold">Automatable</span>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                        <Youtube className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                        <Instagram className="w-5 h-5" />
                    </Link>
                </div>

                <div className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Automatable. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
