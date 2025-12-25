import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Utensils, Calendar, Camera } from "lucide-react"

export default function RestaurantWebsitePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-orange-950 text-white py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                        alt="Luxury Restaurant"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Taste Starts with Vision</h1>
                    <p className="text-xl max-w-2xl mx-auto mb-10 text-orange-100">
                        Stunning websites for fine dining, cafes, and hospitality groups that turn visitors into reservations.
                    </p>
                    <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 font-bold h-12 px-8">
                        <Link href="/contact">Book a Consultation</Link>
                    </Button>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <Benefit
                            icon={<Utensils className="h-10 w-10 text-orange-600" />}
                            title="Digital Menus"
                            desc="Interactive, mouth-watering menus that are easy to update and SEO optimized."
                        />
                        <Benefit
                            icon={<Calendar className="h-10 w-10 text-orange-600" />}
                            title="Direct Reservations"
                            desc="Integrated booking engines (OpenTable, Resy, or custom) to save on commissions."
                        />
                        <Benefit
                            icon={<Camera className="h-10 w-10 text-orange-600" />}
                            title="Visual Storytelling"
                            desc="Photography-first design that captures the ambiance and plating of your venue."
                        />
                    </div>
                </div>
            </section>

            {/* Case Study / Example */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="font-heading text-3xl font-bold mb-6 text-gray-900">Case Study: Metro Grill Chain</h2>
                            <p className="text-muted-foreground mb-6">
                                Metro Grill needed a unified brand presence across 5 locations. We delivered a multi-site system with centralized menu management.
                            </p>
                            <div className="space-y-3 mb-8">
                                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Observed Outcomes</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span>Higher direct reservation traffic</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span>Reduced dependence on third-party platforms</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span>Consistent brand presence across locations</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 relative h-[300px] w-full rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                                alt="Restaurant Case Study"
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
            <div className="inline-block p-4 bg-orange-50 rounded-full mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-muted-foreground">{desc}</p>
        </div>
    )
}
