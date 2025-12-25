import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Zap, Heart, Monitor } from "lucide-react"

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-accent-metal font-medium uppercase tracking-wide text-sm mb-4 block">Careers</span>
                    <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">We Hire Conviction, Not Résumés</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We don&apos;t care where you went to school. We care about what you&apos;ve built, how you think, and your obsession with quality.
                    </p>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <BenefitCard
                        icon={<Zap className="h-6 w-6 text-accent-metal" />}
                        title="High Impact"
                        desc="No bureaucracy. Ship code on day one. Your work directly affects revenue."
                    />
                    <BenefitCard
                        icon={<Monitor className="h-6 w-6 text-accent-metal" />}
                        title="Deep Work"
                        desc="We respect flow state. Minimal meetings, asynchronous communication, maximizing focus."
                    />
                    <BenefitCard
                        icon={<Heart className="h-6 w-6 text-accent-metal" />}
                        title="Wellness"
                        desc="Competitive market salary. Comprehensive health coverage. Flexible hours."
                    />
                </div>

                {/* Life at Genrec Visuals */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Life at Genrec</h2>
                        <p className="text-muted-foreground">More than just a job. A collective obsession.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
                        <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
                            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="relative rounded-2xl overflow-hidden group">
                            <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Collaboration" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="relative rounded-2xl overflow-hidden group">
                            <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" alt="Office" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="col-span-2 relative rounded-2xl overflow-hidden group">
                            <Image src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?q=80&w=2070&auto=format&fit=crop" alt="Brainstorming" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </div>
                </div>

                {/* Open Roles */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-heading text-3xl font-bold mb-8">Open Positions</h2>

                    <div className="space-y-4">
                        <JobCard
                            title="Senior Frontend Engineer"
                            type="Remote / Hybrid"
                            dept="Engineering"
                            link="/careers/senior-frontend"
                        />
                        <JobCard
                            title="AI Research Lead"
                            type="On-site (Bangalore)"
                            dept="Research"
                            link="/careers/ai-research"
                        />
                        <JobCard
                            title="Full Stack Developer"
                            type="Remote"
                            dept="Engineering"
                            link="/careers/full-stack"
                        />
                        <JobCard
                            title="Product Designer"
                            type="Hybrid"
                            dept="Design"
                            link="/careers/product-design"
                        />
                    </div>

                    <div className="mt-12 p-8 bg-gray-50 rounded-xl text-center">
                        <h3 className="text-xl font-bold mb-2">Don&apos;t see your role?</h3>
                        <p className="text-muted-foreground mb-6">
                            We&apos;re always looking for exceptional talent. If you think you belong here, pitch us.
                        </p>
                        <Button variant="outline">Email Founders</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function BenefitCard({ icon, title, desc }: any) {
    return (
        <div className="p-6 border border-gray-100 rounded-xl bg-white hover:border-gray-200 transition-colors">
            <div className="mb-4 bg-gray-50 inline-block p-3 rounded-lg">{icon}</div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
    )
}

function JobCard({ title, type, dept, link }: any) {
    return (
        <Link href="#" className="flex items-center justify-between p-6 border border-gray-200 rounded-xl hover:border-accent-metal/50 hover:bg-gray-50 transition-all group">
            <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent-metal transition-colors">{title}</h3>
                <div className="flex gap-4 mt-2 text-sm text-gray-500">
                    <span>{dept}</span>
                    <span>•</span>
                    <span>{type}</span>
                </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-accent-metal transition-colors" />
        </Link>
    )
}
