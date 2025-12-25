import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="text-center max-w-md">
                <h1 className="text-9xl font-bold text-gray-100 font-heading mb-4">404</h1>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
                <p className="text-muted-foreground mb-8">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Button asChild className="bg-accent-metal hover:bg-accent-metal-dark text-white">
                    <Link href="/">Return Home</Link>
                </Button>
            </div>
        </div>
    )
}
