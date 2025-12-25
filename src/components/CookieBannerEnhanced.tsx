"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Settings } from "lucide-react"

export function CookieBannerEnhanced() {
    const [isVisible, setIsVisible] = React.useState(false)
    const [showDetails, setShowDetails] = React.useState(false)

    React.useEffect(() => {
        const consent = localStorage.getItem("cookie-consent")
        if (!consent) {
            // Delay showing banner for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "full")
        setIsVisible(false)
    }

    const handleNecessary = () => {
        localStorage.setItem("cookie-consent", "necessary")
        setIsVisible(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 flex justify-center pointer-events-none"
                >
                    <div className="bg-white/90 backdrop-blur-lg border shadow-2xl rounded-xl max-w-2xl w-full pointer-events-auto p-6 overflow-hidden">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            <div className="p-3 bg-accent-metal/10 rounded-full shrink-0 hidden md:block">
                                <ShieldCheck className="w-6 h-6 text-accent-metal" />
                            </div>

                            <div className="flex-1 space-y-3">
                                <h3 className="font-heading font-semibold text-lg">We value your privacy</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                                    We respect your data and never sell it to third parties.
                                </p>

                                {showDetails && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        className="bg-secondary/50 rounded-md p-4 space-y-2 mt-4 text-xs"
                                    >
                                        <div className="flex justify-between items-center">
                                            <span>Essential Cookies</span>
                                            <span className="text-green-600 font-medium">Always Active</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Analytics</span>
                                            <span className="text-muted-foreground">Optional</span>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            <div className="flex flex-col gap-2 shrink-0 w-full md:w-auto mt-4 md:mt-0">
                                <Button onClick={handleAccept} className="w-full bg-accent-metal hover:bg-accent-metal-dark text-white">
                                    Accept All
                                </Button>
                                <Button onClick={handleNecessary} variant="outline" className="w-full">
                                    Necessary Only
                                </Button>
                                <Button
                                    onClick={() => setShowDetails(!showDetails)}
                                    variant="ghost"
                                    size="sm"
                                    className="w-full text-xs text-muted-foreground"
                                >
                                    <Settings className="w-3 h-3 mr-1" />
                                    {showDetails ? "Hide Details" : "Customize"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
