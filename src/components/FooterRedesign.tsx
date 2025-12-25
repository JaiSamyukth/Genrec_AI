"use client"

import { motion } from "framer-motion"

export function FooterRedesign() {
    return (
        <footer className="bg-gradient-to-b from-gray-50 to-white py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-24 h-1 bg-accent-metal/40 mx-auto mb-8 rounded-full"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4"
                >
                    Built with purpose. Designed for performance.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-xs text-muted-foreground/60"
                >
                    &copy; {new Date().getFullYear()} Genrec AI. All rights reserved.
                </motion.p>
            </div>
        </footer>
    )
}
