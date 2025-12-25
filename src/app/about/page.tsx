import Image from "next/image"
import { Target, ShieldCheck, History, Users } from "lucide-react"
import { WhoWeAre } from "@/components/WhoWeAre"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-gray-50 pt-20 pb-12 md:pt-24 md:pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                        Engineering AI That <br /><span className="text-[#9D7C4A] font-normal tracking-tight">Actually Works</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Genrec AI was founded on a simple observation: most modern software looks impressive but breaks under real conditions.
                    </p>
                </div>

                {/* Subtle transition divider */}
                <div className="container mx-auto px-4 mt-12">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[500px] w-full bg-gray-200 rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Engineering Team Collaboration"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">Engineers First</h2>
                            <div className="space-y-6 text-lg text-muted-foreground">
                                <p>
                                    We are engineers first. We believe software should be fast, understandable, and resilient. Products should solve real problems with minimal friction, not overwhelm users with features.
                                </p>
                                <p>
                                    Based in India, we work with teams globally who need a technical partner that takes responsibility for outcomes, not just deliverables.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl font-bold mb-4">Core Principles</h2>
                        <p className="text-gray-400">The foundation of how we work.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ValueCard
                            icon={<Target className="h-8 w-8 text-accent-metal" />}
                            title="Precision"
                            desc="Every system is designed with intent. No unnecessary complexity."
                        />
                        <ValueCard
                            icon={<ShieldCheck className="h-8 w-8 text-accent-metal" />}
                            title="Integrity"
                            desc="We don't sell what we can't defend technically."
                        />
                        <ValueCard
                            icon={<History className="h-8 w-8 text-accent-metal" />}
                            title="Long-term thinking"
                            desc="We optimize for maintainability, not short-term demos."
                        />
                        <ValueCard
                            icon={<Users className="h-8 w-8 text-accent-metal" />}
                            title="Transparency"
                            desc="You see the system evolve. No black boxes."
                        />
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">Working Approach</h2>
                        <p className="text-xl text-muted-foreground">
                            How we transform problems into systems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <ApproachStep
                            number="01"
                            title="Problem Deconstruction"
                            desc="We analyze workflows, constraints, and failure points before writing code."
                            image="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"
                        />
                        <ApproachStep
                            number="02"
                            title="Rapid Prototyping"
                            desc="Functional prototypes built early to validate direction, not impress."
                            image="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
                        />
                        <ApproachStep
                            number="03"
                            title="Iterative Hardening"
                            desc="Systems are refined through real usage, feedback, and stress testing."
                            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                        />
                    </div>
                </div>
            </section>

            {/* Founders */}
            <WhoWeAre />
        </div>
    )
}

function ValueCard({ icon, title, desc }: any) {
    return (
        <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    )
}

function ApproachStep({ number, title, desc, image }: any) {
    return (
        <div className="group">
            <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden shadow-md">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xl font-bold font-heading rounded-md z-10">
                    {number}
                </div>
                <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{desc}</p>
        </div>
    )
}
