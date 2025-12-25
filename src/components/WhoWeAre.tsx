"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Github } from "lucide-react"

const founders = [
    {
        name: "Jai Samyukth B U",
        role: "Co-Founder · Strategy & Product",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        bio: "Aligning engineering decisions with long-term product and business outcomes.",
        linkedin: "#",
        github: "#",
        specialties: ["Product architecture", "Applied AI systems", "System-level thinking"]
    },
    {
        name: "Shyamnath Sankar",
        role: "Co-Founder · Operations",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
        bio: "Ensuring execution, delivery, and operational clarity across projects.",
        linkedin: "#",
        github: "#",
        specialties: ["Delivery systems", "Team coordination", "Process design"]
    },
    {
        name: "Harish V",
        role: "Technical Lead",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
        bio: "Designing scalable, maintainable systems with precision engineering.",
        linkedin: "#",
        github: "#",
        specialties: ["System architecture", "Full-stack execution", "Infrastructure design"]
    }
]

export function WhoWeAre() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle Workspace Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <Image
                    src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop"
                    alt="Engineering Workspace"
                    fill
                    className="object-cover grayscale"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                        Direct engineering collaboration
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        You work directly with the founders and core engineers who design, build, and maintain the system.
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed">
                        No sales handoffs. No account managers. No dilution of responsibility. Ownership stays with the people who write the code.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group text-center"
                        >
                            <div className="relative w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full border-4 border-gray-100 group-hover:border-accent-metal/30 transition-colors">
                                <Image
                                    src={founder.image}
                                    alt={founder.name}
                                    fill
                                    className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                            <p className="text-accent-metal font-medium text-sm mb-3 uppercase tracking-wide">{founder.role}</p>
                            <p className="text-muted-foreground text-sm mb-4 max-w-xs mx-auto">{founder.bio}</p>

                            <div className="flex flex-wrap justify-center gap-2 mb-4">
                                {founder.specialties.map((tech: string) => (
                                    <span key={tech} className="px-2 py-1 bg-gray-50 border border-gray-100 rounded text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <a href={founder.linkedin} className="text-gray-400 hover:text-accent-metal transition-colors">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a href={founder.github} className="text-gray-400 hover:text-accent-metal transition-colors">
                                    <Github className="h-5 w-5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
