import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'

const HeaderEnhanced = dynamic(() => import('@/components/HeaderEnhanced'), {
    ssr: true,
})
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import { CookieBannerEnhanced } from '@/components/CookieBannerEnhanced'
import { generateOrganizationSchema } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather({
    weight: ['300', '400', '700', '900'],
    subsets: ['latin'],
    variable: '--font-merriweather'
})

export const metadata: Metadata = {
    title: 'Genrec AI | Founder-Led Engineering Studio',
    description: 'Genrec AI builds high-performance websites and AI-powered software for construction, education, and hospitality industries.',
    icons: {
        icon: '/favicon.ico', // Ensure this file exists in public/
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://genrecai.com',
        siteName: 'Genrec AI',
        images: [
            {
                url: 'https://genrecai.com/og-image.jpg', // Ensure this file exists
                width: 1200,
                height: 630,
                alt: 'Genrec AI - Building the Future',
            },
        ],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const schema = generateOrganizationSchema()

    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </head>
            <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased bg-white text-gray-900`}>
                <HeaderEnhanced />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
                <CookieBannerEnhanced />
                <Toaster />
            </body>
        </html>
    )
}
