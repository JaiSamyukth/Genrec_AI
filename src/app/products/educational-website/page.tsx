import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, GraduationCap, Laptop, Users } from "lucide-react"

export default function EducationalWebsitePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-blue-900 text-white py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
                        alt="University Campus"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Purpose-Built Digital Platforms</h1>
                    <p className="text-xl max-w-2xl mx-auto mb-10 text-blue-100">
                        For schools, universities, and training centers that need to attract the best talent.
                    </p>
                    <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-bold h-12 px-8">
                        <Link href="/contact">Get a Quote</Link>
                    </Button>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <Benefit
                            icon={<GraduationCap className="h-10 w-10 text-blue-600" />}
                            title="Increase Enrollments"
                            desc="Optimized user journeys that guide prospective students from 'interested' to 'enrolled'."
                        />
                        <Benefit
                            icon={<Laptop className="h-10 w-10 text-blue-600" />}
                            title="Virtual Campus"
                            desc="Immersive virtual tours and digital course catalogs that showcase your facilities."
                        />
                        <Benefit
                            icon={<Users className="h-10 w-10 text-blue-600" />}
                            title="Alumni Networks"
                            desc="Secure portals for alumni to connect, donate, and mentor current students."
                        />
                    </div>
                </div>
            </section>

            {/* Case Study / Example */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="font-heading text-3xl font-bold mb-6 text-gray-900">Case Study: Riverside Academy</h2>
                            <p className="text-muted-foreground mb-6">
                                Riverside Academy needed a complete digital overhaul. We built a custom platform integrating their LMS, student portal, and admissions system.
                            </p>
                            <div className="space-y-3 mb-8">
                                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Observed Outcomes (Phased Deployment)</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Increased inquiry volume</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Faster internal admissions workflows</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Improved digital visibility</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 relative h-[300px] w-full rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
                                alt="Riverside Case Study"
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
            <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-muted-foreground">{desc}</p>
        </div>
    )
}
