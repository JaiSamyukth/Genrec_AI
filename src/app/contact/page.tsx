"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info Side */}
                    <div>
                        <h1 className="font-heading text-5xl font-bold text-gray-900 mb-6">Let&apos;s Build the Future</h1>
                        <p className="text-xl text-muted-foreground mb-12">
                            Have a project in mind? Want to discuss a partnership? We&apos;re ready to listen.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="bg-accent-metal/10 p-3 rounded-full">
                                    <Mail className="h-6 w-6 text-accent-metal" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                    <p className="text-muted-foreground">contact@genrecai.com</p>
                                    <p className="text-sm text-gray-400">Response time: &lt; 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-accent-metal/10 p-3 rounded-full">
                                    <Phone className="h-6 w-6 text-accent-metal" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                    <p className="text-muted-foreground">+91 98765 43210</p>
                                    <p className="text-sm text-gray-400">Mon-Fri, 9am - 6pm IST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-accent-metal/10 p-3 rounded-full">
                                    <MapPin className="h-6 w-6 text-accent-metal" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                    <p className="text-muted-foreground">
                                        Genrec AI Headquarters<br />
                                        Bangalore, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h2 className="font-heading text-2xl font-bold mb-6">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" placeholder="John" className="bg-white" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" placeholder="Doe" className="bg-white" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" placeholder="john@company.com" className="bg-white" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input id="subject" placeholder="Project Inquiry" className="bg-white" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your project requirements..."
                                    className="min-h-[150px] bg-white"
                                />
                            </div>

                            <Button className="w-full bg-accent-metal hover:bg-accent-metal-dark text-white text-lg h-12">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
