import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

export default function ProductsPage() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Websites That <span className="text-accent-metal">Grow</span> Your Business
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Stop losing customers to bad design. We build high-performance, conversion-focused websites tailored for your specific industry.
                    </p>
                </div>

                {/* Featured Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Educational */}
                    <ProductCard
                        title="Educational Websites"
                        description="For schools, universities, and training centers."
                        stat="Proven Results"
                        statDesc="Increased inquiry volume"
                        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                        href="/products/educational-website"
                        features={["Student Portals", "Course Management", "Virtual Tours"]}
                    />

                    {/* Card 2: Construction */}
                    <ProductCard
                        title="Construction Websites"
                        description="For contractors, architects, and developers."
                        stat="Stronger Leads"
                        statDesc="Improved lead quality"
                        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop"
                        href="/products/construction-website"
                        features={["Project Portfolio", "Bid Management", "Trust Building"]}
                    />

                    {/* Card 3: Restaurant */}
                    <ProductCard
                        title="Restaurant Websites"
                        description="For fine dining, cafes, and hospitality groups."
                        stat="Direct Bookings"
                        statDesc="Higher reservation traffic"
                        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                        href="/products/restaurant-website"
                        features={["Online Ordering", "Table Booking", "Digital Menus"]}
                    />
                </div>

                {/* Separator */}
                <div className="my-24 border-t border-gray-100" />

                {/* Software Products Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="order-2 lg:order-1">
                        <span className="text-accent-metal font-medium tracking-wider uppercase text-sm mb-2 block">
                            Flagship Product
                        </span>
                        <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">LuminaIQ</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Transform any PDF into a living learning experience. LuminaIQ uses advanced AI to generate quizzes, summaries, and interactive flashcards from your documents instantly.
                        </p>
                        <Button asChild size="lg" className="bg-accent-metal hover:bg-accent-metal-dark text-white">
                            <Link href="/products/lumina-iq">Explore LuminaIQ</Link>
                        </Button>
                    </div>
                    <div className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop"
                            alt="LuminaIQ Interface"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop"
                            alt="Tabble Interface"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <span className="text-accent-metal font-medium tracking-wider uppercase text-sm mb-2 block">
                            Hospitality Solution
                        </span>
                        <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">Tabble</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            The ultimate dining management system for luxury hotels. Handle reservations, staff allocation, and guest preferences with a single, intuitive interface.
                        </p>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/products/tabble">Discover Tabble</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProductCard({ title, description, stat, statDesc, image, href, features }: any) {
    return (
        <div className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">{title}</h3>
                <p className="text-muted-foreground mb-6 text-sm">{description}</p>

                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-accent-metal">{stat}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{statDesc}</p>
                </div>

                <ul className="mb-8 space-y-2 flex-1">
                    {features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <Link href={href} className="inline-flex items-center text-accent-metal font-semibold hover:text-accent-metal-dark mt-auto">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </div>
    )
}
