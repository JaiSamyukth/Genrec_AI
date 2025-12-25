"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
    {
        title: "LuminaIQ",
        category: "EdTech Platform",
        description: "Adaptive learning engine that converts PDFs into interactive learning flows using semantic search, contextual Q&A, and AI-generated assessments.",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop",
        link: "/products/lumina-iq",
        color: "from-blue-500/20 to-purple-500/20",
        tags: ["Semantic document understanding", "AI-generated quizzes", "Context-aware learning flow"]
    },
    {
        title: "Tabble",
        category: "Hospitality Operations Platform",
        description: "Tablet-first dining and service system built for high-volume restaurants and hotels.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
        link: "/products/tabble",
        color: "from-orange-500/20 to-red-500/20",
        tags: ["Offline-tolerant workflows", "Order and service coordination", "Designed for real dining environments where speed and clarity matter"]
    },
    {
        title: "SitePilot",
        category: "Construction Analytics (Pilot Stage)",
        description: "Progress tracking and reporting system designed to reduce manual overhead in construction workflows.",
        image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=2073&auto=format&fit=crop",
        link: "/products/construction-website",
        color: "from-yellow-500/20 to-amber-500/20",
        tags: ["Structured progress logging", "Resource and timeline visibility", "Built for future sensor integration"]
    },
    {
        title: "Riverside Academy",
        category: "Education Infrastructure",
        description: "Custom digital platform for managing student-facing services and internal workflows.",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
        link: "/products/educational-website",
        color: "from-green-500/20 to-emerald-500/20",
        tags: ["Student information systems", "Role-based access", "Administrative efficiency tools"]
    }
]

export function WorkShowcase() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    return (
        <section id="work-showcase" ref={containerRef} className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="mb-10 max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                    >
                        Production systems built for real users and real workflows, shaped through pilots, iteration, and operational feedback.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-gray-700 leading-relaxed"
                    >
                        Architected for reliability, optimized for clarity, tested beyond demos. We don't ship features that collapse outside ideal conditions.
                    </motion.p>
                </div>

                <div className="space-y-20 md:space-y-32">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
                        <Link href="/case-studies">Verify Our Results <ArrowRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return

        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center lg:items-stretch`}
        >
            {/* Image Card */}
            <div className="w-full lg:w-3/5 perspective-1000 relative z-10">
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
                >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/20 backdrop-blur-sm">
                        <Button variant="outline" className="bg-white/90 text-black border-transparent">
                            View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                    <span className="text-accent-metal font-medium tracking-wider uppercase text-sm">
                        {project.category}
                    </span>
                    <h3 className="text-3xl font-bold font-heading text-gray-900">{project.title}</h3>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                </p>

                <ul className="space-y-4">
                    {project.tags.map((tag: string, i: number) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="flex items-center text-sm md:text-base font-medium text-gray-700"
                        >
                            <span className="w-2 h-2 rounded-full bg-accent-metal mr-3 shadow-sm" />
                            {tag}
                        </motion.li>
                    ))}
                </ul>

                <div className="pt-4">
                    <Button asChild variant="link" className="pl-0 text-accent-metal hover:text-accent-metal-dark group">
                        <Link href={project.link}>
                            Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}
