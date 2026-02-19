import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://blauconsultoria.com.br';

interface SEOProps {
    title: string;
    description?: string;
    canonical?: string;
    type?: string;
    name?: string;
    image?: string;
    jsonLd?: Record<string, any>;
}

export const SEO = ({
    title,
    description,
    canonical,
    type = 'website',
    name = 'Blau Consultoria',
    image = '/og-image.png',
    jsonLd
}: SEOProps) => {
    const siteTitle = 'Blau Consultoria | Educação Corporativa que Transforma';
    const fullTitle = title === 'Blau Consultoria' ? siteTitle : `${title} | Blau Consultoria`;
    const absoluteCanonical = canonical ? `${SITE_URL}${canonical}` : undefined;
    const absoluteImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            {description && <meta name='description' content={description} />}
            {absoluteCanonical && <link rel="canonical" href={absoluteCanonical} />}

            {/* Facebook / Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:site_name" content={name} />
            <meta property="og:image" content={absoluteImage} />
            {absoluteCanonical && <meta property="og:url" content={absoluteCanonical} />}
            <meta property="og:locale" content="pt_BR" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            {description && <meta name="twitter:description" content={description} />}
            <meta name="twitter:image" content={absoluteImage} />

            {/* Structured Data */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    );
};
