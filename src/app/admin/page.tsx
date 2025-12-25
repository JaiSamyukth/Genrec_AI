"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShieldCheck, Plus, Image as ImageIcon, FileText, LogOut, Loader2 } from "lucide-react"

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [activeTab, setActiveTab] = useState('blog')

    useEffect(() => {
        // Check session on mount
        const session = sessionStorage.getItem("admin_session")
        if (session === "true") {
            setIsAuthenticated(true)
        }
    }, [])

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        // Simulate API check or use simple client-side check as requested
        setTimeout(() => {
            if (password === "genrec_admin_2025") {
                setIsAuthenticated(true)
                sessionStorage.setItem("admin_session", "true")
            } else {
                alert("Invalid credentials")
            }
            setLoading(false)
        }, 1000)
    }

    const handleLogout = () => {
        setIsAuthenticated(false)
        sessionStorage.removeItem("admin_session")
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
                    <div className="text-center mb-8">
                        <div className="inline-block p-3 bg-red-50 rounded-full mb-4">
                            <ShieldCheck className="h-8 w-8 text-red-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">Restricted Access</h1>
                        <p className="text-muted-foreground">Genrec AI Internal Admin Panel</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="password">Enter Access Key</Label>
                            <Input
                                id="password"
                                type="password"
                                className="h-12 text-lg"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoFocus
                            />
                        </div>
                        <Button type="submit" disabled={loading} className="w-full bg-gray-900 hover:bg-black h-12 text-lg">
                            {loading ? <Loader2 className="animate-spin" /> : "Verify Identity"}
                        </Button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-heading font-bold text-gray-900">Command Center</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">● Live Session</span>
                        <Button variant="outline" onClick={handleLogout} className="text-red-500 hover:text-red-600 hover:bg-red-50 border-red-100">
                            <LogOut className="h-4 w-4 mr-2" /> Logout
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="md:col-span-1 space-y-2">
                        <Button
                            variant={activeTab === 'blog' ? "default" : "ghost"}
                            className="w-full justify-start"
                            onClick={() => setActiveTab('blog')}
                        >
                            <FileText className="h-4 w-4 mr-2" /> Blog Posts
                        </Button>
                        <Button
                            variant={activeTab === 'gallery' ? "default" : "ghost"}
                            className="w-full justify-start"
                            onClick={() => setActiveTab('gallery')}
                        >
                            <ImageIcon className="h-4 w-4 mr-2" /> Media Gallery
                        </Button>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-3 bg-white rounded-xl border border-gray-100 shadow-sm p-6 min-h-[600px]">
                        {activeTab === 'blog' ? <BlogManager /> : <GalleryManager />}
                    </div>
                </div>
            </div>
        </div>
    )
}

function BlogManager() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Manage Articles</h2>
                <Button className="bg-accent-metal hover:bg-accent-metal-dark">
                    <Plus className="h-4 w-4 mr-2" /> New Post
                </Button>
            </div>

            <div className="space-y-4">
                {/* Placeholder Items */}
                {['The Future of AI', 'Why Static PDFs Are Dead', 'Restaurant Tech Stack'].map((title, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div>
                            <h3 className="font-bold">{title}</h3>
                            <p className="text-sm text-muted-foreground">Published • {new Date().toLocaleDateString()}</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm" className="text-red-500">Delete</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function GalleryManager() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Media Library</h2>
                <Button>
                    <Plus className="h-4 w-4 mr-2" /> Upload Image
                </Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200">
                        <span className="text-gray-400 text-sm">Image {i}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
