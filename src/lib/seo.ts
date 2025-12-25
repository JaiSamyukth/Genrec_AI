export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Genrec AI',
        url: 'https://genrecai.com',
        logo: 'https://genrecai.com/logo.png', // Replace with actual logo URL
        sameAs: [
            'https://twitter.com/genrecai',
            'https://linkedin.com/company/genrecai',
            'https://github.com/genrecai'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-98765-43210',
            contactType: 'customer service',
            areaServed: ['IN', 'US', 'GB'],
            availableLanguage: ['en']
        }
    }
}

export function generateSoftwareApplicationSchema(name: string, description: string, image: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: name,
        description: description,
        image: image,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
        }
    }
}
