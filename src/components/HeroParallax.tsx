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
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center pb-16"
            >
                <motion.div
                    className="max-w-6xl mx-auto space-y-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight mx-auto max-w-5xl drop-shadow-2xl">
                        We design and build production-grade software without theatrics.
                    </h1>

                    {/* Subheadline */}
                    <p className="-mt-2 text-xl md:text-2xl lg:text-3xl text-gray-100 font-medium leading-relaxed mx-auto max-w-3xl drop-shadow-lg">
                        Performance is not an add-on. It's the baseline.
                    </p>

                    {/* Supporting Text */}
                    <p className="text-base md:text-lg lg:text-xl text-gray-300/90 leading-relaxed mx-auto max-w-3xl drop-shadow-md">
                        Engineering ownership from scoping through deployment — for systems that must work under real constraints.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 pt-4">
                        <Button
                            size="lg"
                            className="h-14 px-10 text-base font-semibold bg-white hover:bg-gray-100 text-black rounded-md transition-all shadow-lg hover:shadow-xl"
                            onClick={scrollToWork}
                        >
                            View Work
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="h-14 px-10 text-base font-semibold bg-accent-metal hover:bg-accent-metal-dark text-white rounded-md transition-all shadow-lg hover:shadow-xl"
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
