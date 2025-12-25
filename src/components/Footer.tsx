"use client"

import Link from "next/link"
import { Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-950 border-t-4 border-[#B8860B] py-16 mt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Main footer grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <span className="text-2xl font-bold font-heading tracking-tight uppercase">
                            GENREC <span className="text-[#B8860B]">AI</span>
                        </span>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            High-reliability systems. Thoughtful engineering. No noise.
                        </p>
                    </div>

                    {/* Products Column */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Products</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="/products/lumina-iq" className="hover:text-[#B8860B] transition-colors">
                                    LuminaIQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/tabble" className="hover:text-[#B8860B] transition-colors">
                                    Tabble
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/construction-website" className="hover:text-[#B8860B] transition-colors">
                                    SitePilot
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/educational-website" className="hover:text-[#B8860B] transition-colors">
                                    Riverside Academy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="/about" className="hover:text-[#B8860B] transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/divisions" className="hover:text-[#B8860B] transition-colors">
                                    Divisions
                                </Link>
                            </li>
                            <li>
                                <Link href="/case-studies" className="hover:text-[#B8860B] transition-colors">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-[#B8860B] transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Connect</h4>
                        <div className="flex space-x-4">
                            <Link href="https://linkedin.com" className="text-gray-400 hover:text-[#B8860B] transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="https://github.com" className="text-gray-400 hover:text-[#B8860B] transition-colors">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="mailto:contact@genrecai.com" className="text-gray-400 hover:text-[#B8860B] transition-colors">
                                <Mail className="h-5 w-5" />
                            </Link>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">
                            Email: contact@genrecai.com<br />
                            Response: Within 24 hours
                        </p>
                    </div>

                </div>

                {/* Copyright bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} Genrec AI. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-xs text-gray-500">
                            <Link href="/privacy" className="hover:text-[#B8860B] transition-colors">
                                Privacy
                            </Link>
                            <Link href="/terms" className="hover:text-[#B8860B] transition-colors">
                                Terms
                            </Link>
                            <Link href="/sitemap.xml" className="hover:text-[#B8860B] transition-colors">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}
