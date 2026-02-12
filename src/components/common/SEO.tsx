import { Helmet } from 'react-helmet-async';

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

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name='description' content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href={canonical} />

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={name} />
            <meta property="og:image" content={image} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    );
};
