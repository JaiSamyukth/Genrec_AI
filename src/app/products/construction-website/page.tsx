import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, HardHat, Building2, FileText } from "lucide-react"

export default function ConstructionWebsitePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-zinc-900 text-white py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop"
                        alt="Construction Site"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Digital Foundations Built Strong</h1>
                    <p className="text-xl max-w-2xl mx-auto mb-10 text-zinc-200">
                        Professional websites for contractors, architects, and developers that win high-value bids.
                    </p>
                    <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold h-12 px-8">
                        <Link href="/contact">Start Your Project</Link>
                    </Button>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <Benefit
                            icon={<HardHat className="h-10 w-10 text-yellow-600" />}
                            title="Project Showcases"
                            desc="High-fidelity galleries with before/after sliders to demonstrate your craftsmanship."
                        />
                        <Benefit
                            icon={<Building2 className="h-10 w-10 text-yellow-600" />}
                            title="Service Integrity"
                            desc="Clear, trust-building sections detailing capabilities, safety records, and certifications."
                        />
                        <Benefit
                            icon={<FileText className="h-10 w-10 text-yellow-600" />}
                            title="Bid Automation"
                            desc="Integrated forms to capture project specs and qualify leads automatically."
                        />
                    </div>
                </div>
            </section>

            {/* Case Study / Example */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="font-heading text-3xl font-bold mb-6 text-gray-900">Case Study: SitePilot Construction</h2>
                            <p className="text-muted-foreground mb-6">
                                SitePilot was losing large commercial contracts due to a poor online presence. We built a robust, authority-driving site that strengthened their market positioning.
                            </p>
                            <div className="space-y-3 mb-8">
                                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Observed Outcomes (Pilot Engagements)</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-600 mt-1">•</span>
                                        <span>Improved lead quality</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-600 mt-1">•</span>
                                        <span>Clearer project positioning</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-600 mt-1">•</span>
                                        <span>Increased inbound commercial inquiries</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 relative h-[300px] w-full rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                                alt="Construction Case Study"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

function Benefit({ icon, title, desc }: any) {
    return (
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="inline-block p-4 bg-yellow-50 rounded-full mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-muted-foreground">{desc}</p>
        </div>
    )
}
