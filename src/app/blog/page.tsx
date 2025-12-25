import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/lib/blog"
import { formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function BlogIndexPage() {
    const posts = getAllPosts()

    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="font-heading text-5xl font-bold text-gray-900 mb-6">Insights & Intel</h1>
                    <p className="text-xl text-muted-foreground">
                        Thoughts on AI, engineering, and the future of industry from our team.
                    </p>
                </div>

                {/* Featured Post (First one) */}
                {posts.length > 0 && (
                    <Link href={`/blog/${posts[0].slug}`} className="block group mb-16 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={posts[0].coverImage}
                            alt={posts[0].title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
                            <span className="inline-block px-3 py-1 bg-accent-metal text-white text-xs font-bold uppercase tracking-wider mb-4 rounded-sm">
                                {posts[0].category}
                            </span>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 group-hover:text-gray-200 transition-colors">
                                {posts[0].title}
                            </h2>
                            <p className="text-lg text-gray-200 line-clamp-2 mb-6">
                                {posts[0].excerpt}
                            </p>
                            <div className="flex items-center text-sm text-gray-300 gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="relative h-6 w-6 rounded-full overflow-hidden">
                                        <Image src={posts[0].author.picture} alt={posts[0].author.name} fill className="object-cover" />
                                    </div>
                                    <span>{posts[0].author.name}</span>
                                </div>
                                <span>•</span>
                                <span>{formatDate(posts[0].date)}</span>
                                <span>•</span>
                                <span>{posts[0].readTime}</span>
                            </div>
                        </div>
                    </Link>
                )}

                {/* Recent Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.slice(1).map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all">
                            <div className="relative h-60 w-full overflow-hidden">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider text-accent-metal">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-accent-metal transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto flex items-center justify-between text-xs text-gray-500 border-t pt-4">
                                    <span>{formatDate(post.date)}</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg">View All Posts</Button>
                </div>
            </div>
        </div>
    )
}
