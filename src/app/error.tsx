"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="text-center max-w-md">
                <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">Something went wrong!</h2>
                <p className="text-muted-foreground mb-8">
                    A critical error occurred. Our engineering team has been notified.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button onClick={() => reset()}>Try again</Button>
                    <Button variant="outline" onClick={() => window.location.href = '/'}>Return Home</Button>
                </div>
            </div>
        </div>
    )
}
