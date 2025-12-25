'use client'

import { Button } from "@/components/ui/button"

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
            <body>
                <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Something went wrong!</h2>
                    <p className="text-gray-500 mb-8 max-w-md">
                        A critical error occurred. Please try refreshing the page.
                    </p>
                    <Button
                        onClick={() => reset()}
                        className="bg-accent-metal text-white hover:bg-accent-metal-dark"
                    >
                        Try again
                    </Button>
                </div>
            </body>
        </html>
    )
}
