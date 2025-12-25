"use client"

import React, { useState } from 'react';
import {
    Upload,
    MessageSquare,
    Brain,
    Target,
    Layers,
    PenTool,
    TrendingUp,
    Lock,
    ChevronRight,
    Menu,
    X,
    Zap,
    FileText,
    Search,
    Command,
    CornerDownLeft,
    Terminal,
    Cpu,
    Shield
} from 'lucide-react';

// --- DESIGN SYSTEM CONSTANTS (STONE / BEIGE THEME) ---
// Canvas: #EFEDE6 (Distinct Stone Beige)
// Surface: #F7F6F2 (Light Parchment)
// Border: #D6D3CD (Stone-300)
// Text Primary: #292524 (Stone-800)
// Text Secondary: #78716C (Stone-500)
// Accent: #EA580C (Burnt Orange)

/**
 * TECHNICAL GRID BACKGROUND
 * Darker stone grid on beige background.
 */
const TechnicalGrid = () => (
    <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
            backgroundImage: `
        linear-gradient(to right, #D6D3CD 1px, transparent 1px),
        linear-gradient(to bottom, #D6D3CD 1px, transparent 1px)
      `,
            backgroundSize: '48px 48px',
            opacity: 0.4
        }}
    />
);

/**
 * INTERACTIVE DEMO COMPONENT
 * "Linear" style adapted for Beige/Stone theme.
 */
const ProductDemo = () => {
    return (
        <div className="relative z-10 w-full max-w-5xl mx-auto mt-16 border border-[#D6D3CD] bg-[#F7F6F2]/60 backdrop-blur-xl rounded-xl overflow-hidden flex flex-col md:flex-row h-[640px] shadow-2xl shadow-[#57534E]/10 ring-1 ring-[#F7F6F2]/50">

            {/* Sidebar: Source Explorer */}
            <div className="hidden md:flex w-64 flex-col border-r border-[#D6D3CD] bg-[#EFEDE6]/40 backdrop-blur-sm">
                <div className="h-10 flex items-center px-4 border-b border-[#D6D3CD] bg-[#F7F6F2]/50">
                    <span className="text-[10px] font-mono font-medium text-[#78716C] uppercase tracking-wider">Explorer</span>
                </div>

                <div className="flex-1 overflow-y-auto py-3 space-y-1">
                    <div className="px-3">
                        <div className="flex items-center gap-2 px-2 py-1.5 bg-[#FDFCFB] border border-[#D6D3CD] rounded-[6px] shadow-sm">
                            <FileText size={14} className="text-[#292524]" strokeWidth={1.5} />
                            <span className="text-xs text-[#292524] font-medium truncate">Physics_Vol_4.pdf</span>
                        </div>
                    </div>

                    <div className="px-3 space-y-0.5">
                        {['Research_Notes.md', 'Thermal_Log_24.csv', 'Q3_Findings.pdf'].map((file, i) => (
                            <div key={i} className="flex items-center gap-2 px-2 py-1.5 rounded-[6px] hover:bg-[#A8A29E]/10 cursor-pointer group transition-colors">
                                <div className="w-3.5 flex justify-center">
                                    <div className="w-1 h-1 rounded-full bg-[#D6D3CD] group-hover:bg-[#EA580C] transition-colors"></div>
                                </div>
                                <span className="text-xs text-[#78716C] group-hover:text-[#292524] transition-colors truncate">{file}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-3 border-t border-[#D6D3CD] bg-[#F7F6F2]/30">
                    <div className="flex items-center gap-2 text-[#EA580C]">
                        <Cpu size={14} strokeWidth={1.5} />
                        <span className="text-[10px] font-mono font-medium">ENGINE ONLINE</span>
                    </div>
                </div>
            </div>

            {/* Main Content: Split View */}
            <div className="flex-1 flex flex-col bg-[#F7F6F2]/30 backdrop-blur-sm">

                {/* Toolbar */}
                <div className="h-10 border-b border-[#D6D3CD] flex items-center justify-between px-4 bg-[#F7F6F2]/50">
                    <div className="flex items-center gap-3">
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#E7E5E4] text-[#292524] border border-[#D6D3CD]">READ-ONLY</span>
                        <span className="text-xs text-[#78716C]">Kinetic Energy Recovery Systems</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                            <Search size={12} className="text-[#78716C]" strokeWidth={1.5} />
                            <span className="text-[10px] font-mono text-[#78716C]">CTRL+F</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex overflow-hidden">

                    {/* PDF Viewer Pane */}
                    <div className="flex-1 p-8 overflow-y-auto relative scrollbar-hide bg-[#EFEDE6]/20">
                        <div className="max-w-[90%] mx-auto space-y-8 font-serif text-[#57534E] leading-relaxed">
                            {/* Mock Content */}
                            <div className="space-y-4">
                                <div className="h-6 w-1/3 bg-[#D6D3CD] rounded-[4px]"></div>
                                <div className="space-y-2.5">
                                    <div className="h-2.5 w-full bg-[#E7E5E4] rounded-[2px]"></div>
                                    <div className="h-2.5 w-full bg-[#E7E5E4] rounded-[2px]"></div>
                                    <div className="h-2.5 w-5/6 bg-[#E7E5E4] rounded-[2px]"></div>
                                </div>
                            </div>

                            <div className="relative pl-6 py-2 border-l-2 border-[#EA580C] bg-[#EA580C]/5 rounded-r-md">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#EFEDE6] border-2 border-[#EA580C] flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"></div>
                                </div>
                                <p className="text-sm font-medium text-[#292524] font-sans">
                                    "The system automatically diverts excess energy to the secondary thermal resistor bank to prevent capacitor overload during rapid deceleration events."
                                </p>
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="text-[10px] font-mono text-[#EA580C] bg-[#EA580C]/10 px-1.5 py-0.5 rounded border border-[#EA580C]/20">REF 3.4.1</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2.5">
                                    <div className="h-2.5 w-11/12 bg-[#E7E5E4] rounded-[2px]"></div>
                                    <div className="h-2.5 w-full bg-[#E7E5E4] rounded-[2px]"></div>
                                    <div className="h-2.5 w-4/5 bg-[#E7E5E4] rounded-[2px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chat / Interaction Pane */}
                    <div className="w-80 border-l border-[#D6D3CD] bg-[#F7F6F2]/60 backdrop-blur-md flex flex-col">
                        <div className="h-10 border-b border-[#D6D3CD] flex items-center justify-between px-4 bg-[#F7F6F2]/40">
                            <span className="text-[10px] font-mono font-medium text-[#78716C] uppercase">Synthesis</span>
                            <div className="w-2 h-2 rounded-full bg-emerald-600 shadow-[0_0_8px_rgba(5,150,105,0.3)]"></div>
                        </div>

                        <div className="flex-1 p-4 space-y-6 overflow-y-auto">
                            {/* User Query */}
                            <div className="flex flex-col gap-1.5">
                                <div className="text-[10px] font-mono text-[#A8A29E]">USER_ID_992</div>
                                <div className="text-sm text-[#292524] font-medium">
                                    How is overflow handled?
                                </div>
                            </div>

                            {/* AI Response */}
                            <div className="relative pl-3 border-l border-[#D6D3CD]">
                                <div className="flex items-center gap-2 mb-2">
                                    <Zap size={12} className="text-[#EA580C]" strokeWidth={2} />
                                    <span className="text-[10px] font-mono text-[#EA580C]">LUMINA_CORE</span>
                                </div>
                                <div className="text-sm text-[#57534E] leading-relaxed">
                                    Excess energy is diverted to the <span className="text-[#292524] font-medium border-b-2 border-[#EA580C]/30 cursor-pointer hover:bg-[#EA580C]/10 transition-colors">secondary thermal resistor bank</span>.
                                </div>

                                {/* Citation Card */}
                                <div className="mt-3 bg-[#FDFCFB] border border-[#D6D3CD] p-2 rounded-lg shadow-sm flex items-start gap-2 cursor-pointer hover:border-[#EA580C] hover:shadow-md transition-all group">
                                    <FileText size={12} className="text-[#78716C] group-hover:text-[#EA580C] mt-0.5" strokeWidth={1.5} />
                                    <div>
                                        <div className="text-[10px] text-[#57534E] font-medium group-hover:text-[#292524]">Physics_Vol_4.pdf</div>
                                        <div className="text-[10px] text-[#A8A29E] font-mono">PAGE 42 • PARA 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-3 border-t border-[#D6D3CD] bg-[#F7F6F2]/80">
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <Terminal size={14} className="text-[#A8A29E] group-focus-within:text-[#EA580C] transition-colors" strokeWidth={1.5} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Interrogate document..."
                                    className="w-full bg-[#FDFCFB] border border-[#D6D3CD] rounded-[8px] py-2.5 pl-9 pr-4 text-xs text-[#292524] placeholder-[#A8A29E] focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-all font-mono shadow-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="group p-6 rounded-lg bg-[#F7F6F2]/40 border border-[#D6D3CD] hover:border-[#EA580C] hover:bg-[#FDFCFB] hover:shadow-lg hover:shadow-[#EA580C]/5 transition-all duration-300 cursor-default backdrop-blur-sm">
        <div className="mb-4 flex items-center justify-between">
            <div className="p-2 bg-[#FDFCFB] rounded-[6px] border border-[#D6D3CD] text-[#78716C] group-hover:text-[#EA580C] group-hover:border-[#EA580C]/30 transition-all duration-300 shadow-sm">
                <Icon size={18} strokeWidth={1.5} />
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ChevronRight size={14} className="text-[#EA580C]" strokeWidth={1.5} />
            </div>
        </div>
        <h3 className="text-sm font-medium text-[#292524] mb-2 font-mono tracking-tight">{title}</h3>
        <p className="text-sm text-[#78716C] leading-relaxed">{description}</p>
    </div>
);

export default function LuminaIQPage() {
    return (
        <div className="min-h-screen bg-[#EFEDE6] text-[#292524] font-sans selection:bg-[#EA580C]/20 selection:text-[#EA580C] overflow-x-hidden">

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-24 border-b border-[#D6D3CD]">
                <TechnicalGrid />

                {/* Subtle Gradient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FDFCFB] via-transparent to-transparent opacity-50 pointer-events-none"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-[#D6D3CD] bg-[#F7F6F2]/60 backdrop-blur-sm rounded-full shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"></div>
                        <span className="text-[10px] font-mono font-medium text-[#78716C] uppercase tracking-wider">System v2.4 Stable</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-[#292524] mb-6 max-w-4xl leading-tight">
                        The operating system for <br className="hidden md:block" />
                        <span className="text-[#78716C]">deep knowledge work.</span>
                    </h1>

                    <p className="mt-2 max-w-2xl mx-auto text-lg text-[#57534E] leading-relaxed font-light">
                        Structure unstructured data. Interrogate documents with precision.
                        <br className="hidden sm:block" />
                        Designed for researchers who require absolute citations.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
                        <button className="h-10 px-6 bg-[#FDFCFB] hover:bg-white text-[#292524] rounded-[6px] text-xs font-medium transition-all flex items-center gap-2 border border-[#D6D3CD] shadow-sm hover:shadow-md">
                            <Terminal size={14} strokeWidth={1.5} />
                            Start Terminal
                        </button>
                        <button className="h-10 px-6 bg-transparent border border-transparent hover:bg-[#A8A29E]/10 text-[#78716C] hover:text-[#292524] rounded-[6px] text-xs font-medium transition-colors flex items-center gap-2">
                            <Command size={14} strokeWidth={1.5} />
                            Read Documentation
                        </button>
                    </div>

                    <ProductDemo />
                </div>
            </section>

            {/* --- WORKFLOW --- */}
            <section className="py-24 border-b border-[#D6D3CD] bg-[#E7E5E4]/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="w-2 h-2 bg-[#EA580C]"></div>
                        <h3 className="text-xs font-mono text-[#EA580C] uppercase tracking-widest">Processing Pipeline</h3>
                        <div className="h-[1px] flex-1 bg-[#D6D3CD]"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {[
                            {
                                step: "001",
                                title: "Ingest",
                                desc: "Upload textbooks, research papers, or manuals. The engine structures unstructured data into a queryable semantic graph."
                            },
                            {
                                step: "002",
                                title: "Interrogate",
                                desc: "Engage the document via natural language. Receive responses explicitly tied to source material through inline citations."
                            },
                            {
                                step: "003",
                                title: "Synthesize",
                                desc: "Convert passive reading into active recall through automated quizzes and structured, cited notes."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group relative pl-4 border-l border-[#D6D3CD] hover:border-[#EA580C] transition-colors duration-300">
                                <div className="text-[10px] font-mono text-[#A8A29E] mb-4 group-hover:text-[#EA580C] transition-colors">{item.step}</div>
                                <h4 className="text-lg font-medium text-[#292524] mb-2">{item.title}</h4>
                                <p className="text-sm text-[#78716C] leading-relaxed max-w-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FEATURES GRID --- */}
            <section id="features" className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <FeatureCard
                            icon={Search}
                            title="SEMANTIC_SEARCH"
                            description="Retrieve specific data points across thousands of pages instantly. Context-aware, not just keyword matching."
                        />
                        <FeatureCard
                            icon={Brain}
                            title="ACTIVE_RECALL"
                            description="Automated generation of flashcards and quizzes based on Spaced Repetition logic."
                        />
                        <FeatureCard
                            icon={Layers}
                            title="GRAPH_SYNTHESIS"
                            description="Connect concepts across multiple documents to reveal hidden correlations in your library."
                        />
                        <FeatureCard
                            icon={PenTool}
                            title="CITED_NOTES"
                            description="Every note you take is hyperlinked to its origin point. Never lose the context of an insight."
                        />
                        <FeatureCard
                            icon={TrendingUp}
                            title="COGNITIVE_METRICS"
                            description="Track reading velocity, retention rates, and knowledge gaps with precise data visualization."
                        />
                        <FeatureCard
                            icon={Shield}
                            title="ENCRYPTED_VAULT"
                            description="AES-256 encryption for all stored documents. Your intellectual property remains strictly yours."
                        />
                    </div>
                </div>
            </section>

            {/* --- AUDIENCE SEGMENTS --- */}
            <section className="py-20 border-y border-[#D6D3CD] bg-[#F7F6F2]/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { role: "ACADEMIA", desc: "Absorb dense coursework faster. Prepare for high-stakes exams." },
                            { role: "ENTERPRISE", desc: "Master technical briefs and compliance documents without fatigue." },
                            { role: "RESEARCH", desc: "Scale learning outcomes and provide infrastructure for deep work." }
                        ].map((segment, i) => (
                            <div key={i} className="pl-6 border-l border-[#D6D3CD]">
                                <h4 className="text-xs font-mono font-medium text-[#EA580C] mb-2">{segment.role}</h4>
                                <p className="text-sm text-[#78716C]">{segment.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PHILOSOPHY --- */}
            <section className="py-24">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="w-8 h-8 mx-auto mb-6 bg-[#FDFCFB] border border-[#D6D3CD] rounded-[6px] flex items-center justify-center shadow-sm">
                        <Shield size={16} className="text-[#292524]" strokeWidth={1.5} />
                    </div>

                    <h2 className="text-2xl font-medium text-[#292524] mb-6">Intelligence, grounded in fact.</h2>

                    <div className="space-y-6 text-base text-[#78716C] leading-relaxed font-light">
                        <p>
                            We do not build generative AI for creative writing. We build cognitive tools for understanding existing information.
                        </p>
                        <p>
                            LuminaIQ provides source-grounded AI assistance, with responses explicitly tied to your documents through inline citations, allowing users to verify every claim. The AI's responses are strictly tethered to your source materials, reducing hallucination risk and ensuring academic rigor.
                        </p>
                    </div>

                    <div className="mt-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDFCFB] border border-[#D6D3CD] rounded-[6px] shadow-sm">
                            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                            <span className="text-[10px] font-mono text-[#57534E]">GENREC SECURE ARCHITECTURE</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-32 border-t border-[#D6D3CD] bg-[#EFEDE6]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-medium text-[#292524] mb-4">Elevate your cognitive capacity.</h2>
                    <p className="text-lg text-[#78716C] mb-10">Begin mastering your documents today.</p>

                    <div className="flex flex-col items-center">
                        <button className="h-10 px-8 bg-[#292524] hover:bg-black text-[#EFEDE6] text-sm rounded-[6px] font-medium transition-all transform active:scale-95 shadow-md">
                            Create Free Account
                        </button>
                        <p className="mt-6 text-[10px] text-[#A8A29E] font-mono uppercase tracking-wide">
                            No credit card required • Secure & Private
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
