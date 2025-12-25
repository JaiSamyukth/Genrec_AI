// Page configuration and header variant system
export type HeaderVariant = 'dark' | 'light'
export type PageType = 'marketing' | 'informational'

interface PageConfig {
    headerVariant: HeaderVariant
    pageType: PageType
}

// Page-specific configurations
const pageConfigs: Record<string, PageConfig> = {
    '/': {
        headerVariant: 'dark',
        pageType: 'marketing'
    },
    '/products/tabble': {
        headerVariant: 'dark',
        pageType: 'marketing'
    },
    '/products/lumina-iq': {
        headerVariant: 'light',
        pageType: 'marketing'
    },
    '/products/construction-website': {
        headerVariant: 'light',
        pageType: 'marketing'
    },
    '/products/restaurant-website': {
        headerVariant: 'light',
        pageType: 'marketing'
    },
    '/products/educational-website': {
        headerVariant: 'light',
        pageType: 'marketing'
    },
    '/about': {
        headerVariant: 'light',
        pageType: 'informational'
    },
    '/blog': {
        headerVariant: 'light',
        pageType: 'informational'
    },
    '/case-studies': {
        headerVariant: 'light',
        pageType: 'informational'
    },
    '/divisions': {
        headerVariant: 'light',
        pageType: 'informational'
    },
    '/contact': {
        headerVariant: 'light',
        pageType: 'informational'
    },
}

// Default config for unlisted pages
const defaultConfig: PageConfig = {
    headerVariant: 'light',
    pageType: 'informational'
}

// Header styles by variant
interface HeaderStyles {
    bg: string
    bgScrolled: string
    text: string
    logo: string
    logoAccent: string
    button: string
    border: string
}

const headerVariants: Record<HeaderVariant, HeaderStyles> = {
    dark: {
        bg: 'bg-transparent',
        bgScrolled: 'bg-black/95 backdrop-blur-md',
        text: 'text-white',
        logo: 'text-white',
        logoAccent: 'text-[#C9A66B]', // Standard gold
        button: 'bg-white hover:bg-gray-100 text-black',
        border: 'border-gray-800',
    },
    light: {
        bg: 'bg-white/95 backdrop-blur-md',
        bgScrolled: 'bg-white backdrop-blur-md',
        text: 'text-gray-900',
        logo: 'text-gray-900',
        logoAccent: 'text-[#B8860B] font-semibold', // Darker gold with weight boost
        button: 'bg-accent-metal hover:bg-accent-metal-dark text-white',
        border: 'border-gray-200',
    }
}

export function getPageConfig(pathname: string): PageConfig {
    // Check for exact match
    if (pageConfigs[pathname]) {
        return pageConfigs[pathname]
    }

    // Check for blog post pages
    if (pathname.startsWith('/blog/')) {
        return pageConfigs['/blog'] || defaultConfig
    }

    // Check for product pages
    if (pathname.startsWith('/products/')) {
        return defaultConfig
    }

    return defaultConfig
}

export function getHeaderStyles(variant: HeaderVariant, isScrolled: boolean): HeaderStyles {
    const styles = headerVariants[variant]
    return {
        ...styles,
        bg: isScrolled ? styles.bgScrolled : styles.bg
    }
}

// For backward compatibility with footer
export const pageThemes = {
    default: {
        footer: {
            bg: 'bg-white',
            border: 'border-gray-200',
            text: 'text-gray-900',
            textSecondary: 'text-gray-600',
            accent: 'text-accent-metal hover:text-accent-metal-dark',
            logo: 'text-gray-900',
            logoAccent: 'text-accent-metal',
        }
    }
}

export function getPageTheme() {
    return pageThemes.default
}
