import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { formatDate } from "@/lib/utils"
import { ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default function BlogPostPage({ params }: PageProps) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="min-h-screen bg-white">
            {/* Header Image */}
            <div className="relative h-[60vh] w-full bg-gray-900">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-4 pb-16">
                    <div className="max-w-4xl mx-auto w-full">
                        <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
                            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-white/90">
                            <div className="flex items-center gap-3">
                                <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-white/20">
                                    <Image src={post.author.picture} alt={post.author.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="font-semibold">{post.author.name}</p>
                                    <p className="text-xs opacity-70">Author</p>
                                </div>
                            </div>
                            <div className="h-8 w-px bg-white/20" />
                            <div>
                                <p className="font-semibold">{formatDate(post.date)}</p>
                                <p className="text-xs opacity-70">Published</p>
                            </div>
                            <div className="h-8 w-px bg-white/20" />
                            <div>
                                <p className="font-semibold">{post.readTime}</p>
                                <p className="text-xs opacity-70">Read Time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-lg prose-gray max-w-none">
                        {/* Note: In a real app we'd use a markdown parser here like react-markdown or next-mdx-remote */}
                        {post.content.split('\n').map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="mt-16 pt-8 border-t flex justify-between items-center">
                        <div className="text-muted-foreground text-sm">
                            Tags: <span className="text-accent-metal font-medium">{post.category}</span>
                        </div>
                        <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-2" /> Share Article
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    )
}
