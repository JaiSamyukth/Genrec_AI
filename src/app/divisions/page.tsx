import { Code2, Video, PenTool, Database } from "lucide-react"

export default function DivisionsPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h1 className="font-heading text-5xl font-bold text-gray-900 mb-6">Our Ecosystem</h1>
                    <p className="text-xl text-muted-foreground">
                        Genrec AI is structured around focused capability groups.
                    </p>
                    <p className="text-base text-gray-600 mt-4">
                        Each division exists to support one goal: building reliable, usable systems that survive real-world constraints.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {/* Division 1: Software */}
                    <DivisionCard
                        icon={<Code2 className="h-10 w-10 text-accent-metal" />}
                        name="Genrec AI"
                        specialty="Software & Automation"
                        description="The core engineering unit. We design and build web platforms, AI-powered systems, and internal tools with a focus on performance, maintainability, and clarity."
                        services={["Full-stack web systems", "Applied AI and automation", "System integration and deployment"]}
                    />

                    {/* Division 2: Studios */}
                    <DivisionCard
                        icon={<Video className="h-10 w-10 text-accent-metal" />}
                        name="Genrec Studios"
                        specialty="Branding & Media"
                        description="Communication support for products we build. Studios exists to ensure that engineering output is represented clearly, not cosmetically."
                        services={["Product storytelling", "Video and visual assets", "Brand systems for digital products"]}
                    />

                    {/* Division 3: Design */}
                    <DivisionCard
                        icon={<PenTool className="h-10 w-10 text-accent-metal" />}
                        name="Genrec Design"
                        specialty="UI/UX & Technical Design"
                        description="Design focused on function first. Interfaces, workflows, and technical drawings built to reduce friction, not decorate screens."
                        services={["UI/UX systems", "Workflow and interaction design", "Technical drafting and prototyping"]}
                    />

                    {/* Division 4: Data */}
                    <DivisionCard
                        icon={<Database className="h-10 w-10 text-accent-metal" />}
                        name="Genrec Data"
                        specialty="Analytics & Operations"
                        description="Decision support through structured data, models, and internal tooling."
                        services={["Data analysis and dashboards", "Financial and operational models", "Process optimization support"]}
                    />
                </div>

                {/* Tech Stack Visual */}
                <div className="border-t border-gray-100 pt-24">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Our Tooling Philosophy</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We select tools based on stability, ecosystem maturity, and long-term maintainability. No framework is used unless it has proven production value.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <TechList
                            title="Frontend"
                            items={['Next.js', 'React', 'Tailwind', 'Framer Motion']}
                        />
                        <TechList
                            title="Backend"
                            items={['Node.js', 'Python', 'PostgreSQL']}
                        />
                        <TechList
                            title="AI"
                            items={['OpenAI APIs', 'Open-source ML tooling where appropriate']}
                        />
                        <TechList
                            title="Design"
                            items={['Figma', 'Industry-standard creative tools']}
                        />
                    </div>

                    <p className="text-center text-sm text-gray-500 mt-12 italic">
                        Tools change. Principles don't.
                    </p>
                </div>
            </div>
        </div>
    )
}

function DivisionCard({ icon, name, specialty, description, services }: any) {
    return (
        <div className="group p-8 md:p-12 border border-gray-100 rounded-2xl bg-white hover:border-accent-metal/50 transition-colors shadow-sm hover:shadow-lg">
            <div className="mb-6">{icon}</div>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">{name}</h2>
            <p className="text-accent-metal font-medium uppercase tracking-wide text-sm mb-6">{specialty}</p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{description}</p>

            <div className="border-t pt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Core capabilities</h3>
                <ul className="space-y-2">
                    {services.map((service: string) => (
                        <li key={service} className="text-sm text-gray-600 flex items-start">
                            <span className="mr-2">•</span>
                            <span>{service}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function TechList({ title, items }: { title: string, items: string[] }) {
    return (
        <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-3 text-center">{title}</h3>
            <ul className="space-y-2">
                {items.map((item: string) => (
                    <li key={item} className="text-sm text-gray-600 text-center">{item}</li>
                ))}
            </ul>
        </div>
    )
}
