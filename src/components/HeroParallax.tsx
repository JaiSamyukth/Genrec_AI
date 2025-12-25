"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export function HeroParallax() {
    const containerRef = useRef<HTMLDivElement>(null)

    // Parallax animation
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 250])
    const opacity = useTransform(scrollY, [0, 300], [1, 0])
    const scale = useTransform(scrollY, [0, 500], [1, 1.1])

    // Horizontal centering for scroll indicator (using transform to work with animation)
    const x = '-50%'

    const scrollToWork = () => {
        const workSection = document.getElementById('work-showcase')
        workSection?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-black">
            {/* Single Hero Background - Founder-Led Engineering Studio */}
            <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2134&auto=format&fit=crop"
                    alt="Founder-Led Engineering Studio"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center pb-16"
            >
                <motion.div
                    className="max-w-5xl space-y-6 md:space-y-8"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight tracking-tight">
                        We design and build production-grade software without theatrics.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-4">
                        Performance is not an add-on. It's the baseline.
                    </p>

                    <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mb-10">
                        Founder-led engineering for systems that must work under real constraints: scale, unreliable networks, and real users under pressure.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                        <Button
                            size="lg"
                            className="h-12 px-8 text-sm font-semibold bg-white hover:bg-gray-100 text-black rounded-md transition-all"
                            onClick={scrollToWork}
                        >
                            View Work
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="h-12 px-8 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all"
                        >
                            <Link href="/contact">
                                Start Project
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity, x }}
                className="absolute bottom-8 left-1/2 z-20 cursor-pointer"
                onClick={scrollToWork}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-300">SCROLL TO NAVIGATE</span>
                    <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-gray-300" />
                </div>
            </motion.div>
        </div>
    )
}
