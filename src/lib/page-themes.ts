// Theme configuration for product pages
export const pageThemes = {
    '/products/lumina-iq': {
        name: 'lumina',
        header: {
            bg: 'bg-[#EFEDE6]/80',
            border: 'border-[#D6D3CD]',
            text: 'text-[#292524]',
            textSecondary: 'text-[#78716C]',
            logo: 'text-[#292524]',
            logoAccent: 'from-[#EA580C] to-[#EA580C]',
            button: 'bg-[#292524] hover:bg-black text-[#EFEDE6]',
            menuHover: 'hover:text-[#292524]',
        },
        footer: {
            bg: 'bg-[#FDFCFB]',
            border: 'border-[#D6D3CD]',
            text: 'text-[#292524]',
            textSecondary: 'text-[#78716C]',
            accent: 'text-[#EA580C] hover:text-[#292524]',
            logo: 'text-[#292524]',
            logoAccent: 'from-[#EA580C] to-[#EA580C]',
        }
    },
    '/products/tabble': {
        name: 'tabble',
        header: {
            bg: 'bg-black/90',
            border: 'border-zinc-800',
            text: 'text-white',
            textSecondary: 'text-zinc-400',
            logo: 'text-white',
            logoAccent: 'from-[#C9A66B] to-[#D4B47E]',
            button: 'bg-[#C9A66B] hover:bg-[#B89558] text-black',
            menuHover: 'hover:text-[#C9A66B]',
        },
        footer: {
            bg: 'bg-zinc-950',
            border: 'border-zinc-800',
            text: 'text-white',
            textSecondary: 'text-zinc-400',
            accent: 'text-[#C9A66B] hover:text-[#D4B47E]',
            logo: 'text-white',
            logoAccent: 'from-[#C9A66B] to-[#D4B47E]',
        }
    },
    // Default theme for all other pages
    default: {
        name: 'default',
        header: {
            bg: 'bg-black/80',
            border: 'border-gray-800',
            text: 'text-white',
            textSecondary: 'text-gray-300',
            logo: 'text-white',
            logoAccent: 'from-accent-metal to-accent-metal-light',
            button: 'bg-white hover:bg-gray-100 text-black',
            menuHover: 'hover:text-accent-metal',
        },
        footer: {
            bg: 'bg-white',
            border: 'border-gray-200',
            text: 'text-gray-900',
            textSecondary: 'text-gray-600',
            accent: 'text-accent-metal hover:text-accent-metal-dark',
            logo: 'text-gray-900',
            logoAccent: 'from-accent-metal to-accent-metal-light',
        }
    }
};

export function getPageTheme(pathname: string) {
    return pageThemes[pathname as keyof typeof pageThemes] || pageThemes.default;
}
