"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function OurEthos() {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent-metal rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent-metal-light rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left: Visual Proof - Code Terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-800 shadow-2xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                            alt="Production Code and Testing"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Verification over hype
                        </h2>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
                            We choose technologies for <span className="font-semibold text-white">stability and clarity</span>, not trend alignment. Every architectural decision is tested against failure scenarios, not pitch decks.
                        </p>
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                            If something isn't hardened enough for real usage, it doesn't ship.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
