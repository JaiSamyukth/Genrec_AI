import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts()
    const baseUrl = 'https://genrecai.com' // Replace with actual domain

    // Static pages
    const routes = [
        '',
        '/about',
        '/products',
        '/products/lumina-iq',
        '/products/tabble',
        '/products/educational-website',
        '/products/construction-website',
        '/products/restaurant-website',
        '/divisions',
        '/case-studies',
        '/careers',
        '/contact',
        '/blog',
        '/privacy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    // Blog posts
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date,
    }))

    return [...routes, ...blogRoutes]
}
