export interface BlogPost {
    slug: string
    title: string
    excerpt: string
    content: string
    coverImage: string
    date: string
    author: {
        name: string
        picture: string
    }
    category: string
    readTime: string
}

const posts: BlogPost[] = [
    {
        slug: "future-of-ai-in-construction",
        title: "The Future of AI in Construction Management",
        excerpt: "How computer vision and predictive analytics are reducing delays and saving millions in large-scale infrastructure projects.",
        content: `
      ## The Cost of Delay
      
      In the construction industry, time is literally money. A single day of delay can cost tens of thousands of dollars. Traditionally, project managers relied on manual reports and weekly site visits to track progress.
      
      ## Enter Computer Vision
      
      With Genrec AI's SitePilot, we're using drone footage and site cameras to automatically track progress against the BIM model. This allows for real-time deviation detection.
      
      ### Key Benefits:
      1. **Automated Progress Tracking**: No more manual percentage estimates.
      2. **Safety Monitoring**: Detect potential hazards before accidents happen.
      3. **Material Management**: Automated inventory tracking.
      
      The future isn't just digital; it's autonomous.
    `,
        coverImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop",
        date: "2025-11-01",
        author: {
            name: "Jai Samyukth B U",
            picture: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
        },
        category: "Industry Trends",
        readTime: "5 min read"
    },
    {
        slug: "adaptive-learning-algorithms",
        title: "Why Static PDFs Are Dead: The Rise of Adaptive Learning",
        excerpt: "Static content is passive. We explore how transforming documents into interactive, AI-driven experiences has been shown in studies to significantly improve retention.",
        content: `
      ## The Static Problem
      
      We've all been there: staring at a 400-page PDF textbook, highlighting lines that we'll forget in 10 minutes. The problem isn't the content; it's the medium. PDFs are dead artifacts. They don't react, they don't question, and they don't adapt.

      ## The LuminaIQ Solution
      
      Adaptive learning algorithms change this paradigm. By ingesting the document into a semantic knowledge graph, LuminaIQ transforms passive reading into an active dialogue.

      ### How It Works:
      *   **Concept Extraction**: The AI identifies relationships between topics (e.g., relating "mitochondria" to "energy production").
      *   **Active Recall**: Instead of re-reading, the system quizzes you on weak points.
      *   **Spaced Repetition**: It knows when you're about to forget a concept and brings it back up.

      Early pilots show a **40% increase in retention** compared to standard reading measures. The textbook of the future talks back.
    `,
        coverImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
        date: "2025-10-24",
        author: {
            name: "Harish V",
            picture: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
        },
        category: "EdTech",
        readTime: "7 min read"
    },
    {
        slug: "restaurant-tech-revolution",
        title: "The Restaurant Tech Stack of 2026",
        excerpt: "From kitchen display systems to predictive inventory, here is the software stack that defines the modern, profitable venue.",
        content: `
      ## The New Standard
      
      Hospitality is no longer just about good food; it's about operational precision. Margins are thinner than ever, and labor is scarce. The only lever left to pull is technology.

      ## The 2026 Stack
      
      What does a "smart" restaurant actually look like? It's not about robot waiters. It's about data flow.

      ### 1. Unified KDS (Kitchen Display System)
      Paper tickets are obsolete. A smart KDS routes appetizers to the cold station and steaks to the grill, timing them so they hit the pass simultaneously.

      ### 2. Predictive Inventory
      Your POS should talk to your supplier. If you sell 50 steaks on Friday, the order for next week should be placed automatically, adjusted for weather and holidays.

      ### 3. Guest Profiles
      "The usual?" shouldn't require memory. Tabble recognizes returning guests and flags allergies, preferences, and average spend before they even sit down.

      Technology isn't replacing hospitality; it's enabling it to be consistent, scalable, and profitable.
        `,
        coverImage: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
        date: "2025-10-15",
        author: {
            name: "Shyamnath Sankar",
            picture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
        },
        category: "Hospitality",
        readTime: "4 min read"
    }
]

export function getAllPosts(): BlogPost[] {
    return posts
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return posts.find((post) => post.slug === slug)
}
