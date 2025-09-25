interface SEOProps {
	title: string
	description: string
	canonical?: string
	ogImage?: string
}

const SEO = ({ title, description, canonical, ogImage }: SEOProps) => {
	const siteUrl = 'https://gandini.vercel.app/'
	const defaultImage = `${siteUrl}/og-image.jpg`

	return (
		<>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<link rel='icon' href='/favicon.ico' />
			<link rel='manifest' href='/manifest.json' />

			{/* Canonical URL */}
			{canonical && <link rel='canonical' href={canonical} />}

			{/* Open Graph */}
			<meta property='og:type' content='website' />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={ogImage || defaultImage} />
			<meta property='og:url' content={canonical || siteUrl} />

			{/* Twitter */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={ogImage || defaultImage} />

			{/* PWA */}
			<meta name='theme-color' content='#000000' />
			<meta name='mobile-web-app-capable' content='yes' />
			<meta name='apple-mobile-web-app-capable' content='yes' />
			<meta name='apple-mobile-web-app-status-bar-style' content='default' />
			<meta name='apple-mobile-web-app-title' content='Gandini' />

			{/* Schema.org markup */}
			<script type='application/ld+json'>
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'Organization',
					name: 'Gandini',
					url: siteUrl,
					logo: `${siteUrl}/logo.png`,
					contactPoint: {
						'@type': 'ContactPoint',
						telephone: '+54-011-50208890',
						contactType: 'customer service',
					},
				})}
			</script>
		</>
	)
}

export default SEO
