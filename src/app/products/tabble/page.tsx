"use client"

import React from 'react';
import Image from 'next/image';
import { Check, Globe, Utensils, Smartphone, BarChart3, Star, Award, Zap } from 'lucide-react';

export default function TabblePage() {
    return (
        <div className="min-h-screen bg-black text-white">

            {/* Hero Section - Premium Black/Gold */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"></div>

                {/* Ambient Gold Glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#C9A66B]/10 rounded-full blur-[120px] pointer-events-none"></div>

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #C9A66B 1px, transparent 1px),
                             linear-gradient(to bottom, #C9A66B 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />

                <div className="relative z-10 text-center max-w-6xl px-4 py-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#C9A66B]/30 bg-[#C9A66B]/5 backdrop-blur-sm rounded-full">
                        <Star className="w-4 h-4 text-[#C9A66B]" fill="#C9A66B" />
                        <span className="text-xs font-medium text-[#C9A66B] tracking-wider uppercase">Hospitality Operations System</span>
                    </div>

                    <h1 className="font-heading text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                        Tabble
                    </h1>

                    <p className="text-xl md:text-2xl font-light text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Tabble is a tablet-first hospitality operations system designed to reduce coordination friction between guests, staff, and kitchen teams.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-[#C9A66B] hover:bg-[#B89558] text-black text-base font-semibold h-12 px-8 rounded-md transition-all shadow-lg shadow-[#C9A66B]/20">
                            Request Demo
                        </button>
                        <button className="border border-[#C9A66B]/30 bg-[#C9A66B]/5 hover:bg-[#C9A66B]/10 text-[#C9A66B] text-base font-semibold h-12 px-8 rounded-md transition-all">
                            View Features
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Value Proposition - Black/Gold Theme */}
            <section className="py-24 bg-zinc-950 border-t border-zinc-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-heading text-4xl font-bold text-white mb-6">
                                Seamless Dining, <br />
                                <span className="text-[#C9A66B]">Flawless Operation</span>
                            </h2>
                            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                                Tabble isn't just a POS. It's a complete ecosystem that connects your kitchen, your staff, and your guests.
                                Eliminate communication errors and elevate the guest experience.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-base text-zinc-300">
                                    <div className="bg-[#C9A66B]/10 border border-[#C9A66B]/20 p-2 rounded-full mr-4">
                                        <Check className="h-5 w-5 text-[#C9A66B]" strokeWidth={2.5} />
                                    </div>
                                    Manage inventory in real-time
                                </li>
                                <li className="flex items-center text-base text-zinc-300">
                                    <div className="bg-[#C9A66B]/10 border border-[#C9A66B]/20 p-2 rounded-full mr-4">
                                        <Check className="h-5 w-5 text-[#C9A66B]" strokeWidth={2.5} />
                                    </div>
                                    Real-time inventory management
                                </li>
                                <li className="flex items-center text-base text-zinc-300">
                                    <div className="bg-[#C9A66B]/10 border border-[#C9A66B]/20 p-2 rounded-full mr-4">
                                        <Check className="h-5 w-5 text-[#C9A66B]" strokeWidth={2.5} />
                                    </div>
                                    40+ Language Support
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-[500px] w-full rounded-xl overflow-hidden border border-[#C9A66B]/20 shadow-2xl shadow-black/50">
                            <Image
                                src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop"
                                alt="Tabble Dashboard"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid - Black/Gold */}
            <section className="py-24 bg-black border-y border-zinc-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                            Everything you need for efficient operations
                        </h2>
                        <div className="w-24 h-1 bg-[#C9A66B] mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Globe, title: "Multi-language Support", desc: "40+ languages with automatic translation for international guests" },
                            { icon: Utensils, title: "Kitchen Display System", desc: "Real-time order tracking from table to kitchen" },
                            { icon: Smartphone, title: "Mobile Ordering", desc: "Guest-facing app for seamless tableside ordering" },
                            { icon: BarChart3, title: "Analytics Dashboard", desc: "Track peak hours, popular items, and revenue in real-time" }
                        ].map((feature, i) => (
                            <div key={i} className="group p-6 bg-zinc-900 border border-zinc-800 hover:border-[#C9A66B]/30 rounded-lg transition-all hover:bg-zinc-900/80">
                                <div className="mb-4 p-3 bg-[#C9A66B]/10 border border-[#C9A66B]/20 rounded-lg inline-block group-hover:bg-[#C9A66B]/15 transition-all">
                                    <feature.icon className="h-6 w-6 text-[#C9A66B]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-zinc-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial / Social Proof */}
            <section className="py-24 bg-zinc-950 border-b border-zinc-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-[#C9A66B]" fill="#C9A66B" />
                            ))}
                        </div>
                        <blockquote className="text-2xl md:text-3xl font-light text-zinc-300 mb-8 italic leading-relaxed">
                            "Tabble improved service coordination during peak hours and reduced operational friction."
                        </blockquote>
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-12 h-12 bg-[#C9A66B]/10 border border-[#C9A66B]/30 rounded-full flex items-center justify-center">
                                <Award className="w-6 h-6 text-[#C9A66B]" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-semibold text-white">Hospitality Operations Team</p>
                                <p className="text-xs text-zinc-400">Multi-Location Restaurant Group</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA - Premium Black/Gold */}
            <section className="py-32 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A66B]/5 via-transparent to-transparent"></div>
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #C9A66B 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Elevate your hospitality.
                    </h2>
                    <p className="text-xl text-zinc-400 mb-10">
                        Join hospitality venues running on Tabble.
                    </p>

                    <div className="flex flex-col items-center">
                        <button className="h-12 px-10 bg-[#C9A66B] hover:bg-[#B89558] text-black text-base font-semibold rounded-md transition-all shadow-lg shadow-[#C9A66B]/20">
                            Request a Demo
                        </button>
                        <p className="mt-6 text-xs text-zinc-500 uppercase tracking-wider">
                            Custom setup • White-glove onboarding
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
