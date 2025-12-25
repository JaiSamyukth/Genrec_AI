import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const caseStudies = [
    {
        title: "SitePilot Construction",
        category: "Construction workflows",
        summary: "Internal dashboard replacing manual reporting and fragmented tools.",
        outcomes: ["Reduced coordination overhead", "Improved project visibility", "Pilot-stage deployment"],
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Hotel Azure",
        category: "Hospitality operations",
        summary: "Tablet-based service coordination using Tabble.",
        outcomes: ["Faster request handling", "Reduced operational friction", "Early-stage rollout"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Riverside Academy",
        category: "Education infrastructure",
        summary: "Custom digital systems for internal operations and student-facing workflows.",
        outcomes: ["Streamlined administration", "Improved information access", "Phased deployment"],
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
    }
]

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-4xl mb-20">
                    <h1 className="font-heading text-5xl font-bold text-gray-900 mb-6">Proven Work</h1>
                    <p className="text-xl text-muted-foreground">
                        We don't publish inflated ROI claims. We document what changed, how it changed, and what we learned.
                    </p>
                    <p className="text-base text-gray-600 mt-4">
                        We focus on measurable improvements, not vanity metrics.
                    </p>
                </div>

                {/* Case Studies */}
                <div className="space-y-32">
                    {caseStudies.map((study, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                            <div className="flex-1 w-full h-[400px] relative rounded-2xl overflow-hidden shadow-xl group">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex-1 w-full">
                                <span className="text-accent-metal text-sm font-bold uppercase tracking-wider mb-2 block">{study.category}</span>
                                <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">{study.title}</h2>

                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    {study.summary}
                                </p>

                                <div className="mb-8">
                                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Outcomes</h3>
                                    <ul className="space-y-2">
                                        {study.outcomes.map((outcome, i) => (
                                            <li key={i} className="text-gray-600 flex items-start">
                                                <span className="text-accent-metal mr-2">•</span>
                                                <span>{outcome}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button variant="outline" className="group">
                                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-32 text-center bg-gray-900 text-white rounded-3xl p-16">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Start Your Project</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        We work with teams that need engineering ownership, not vendors.
                    </p>
                    <Button className="bg-accent-metal hover:bg-accent-metal-dark text-white h-14 px-8 text-lg">
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
