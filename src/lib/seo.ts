// SEO configuration for Sasto Sulav Express
export const seo = ({
  title,
  description,
  keywords,
  image,
  url,
}: {
  title?: string
  description?: string
  image?: string
  keywords?: string
  url?: string
}) => {
  const defaultImage = '/logo.png'
  const defaultDescription =
    'Your premier destination for authentic South Asian groceries in Japan. We bring the flavors of Nepal and South Asia directly to your doorstep.'
  const defaultTitle = 'Sasto Sulav Express'
  const defaultKeywords =
    'Sasto Sulav Express, South Asian groceries, Nepal, Japan'
  const defaultUrl = 'https://sasto-sulav-express.vercel.app/'

  const tags = [
    { title },
    { name: 'description', content: description || defaultDescription },
    { name: 'keywords', content: keywords || defaultKeywords },
    { name: 'twitter:title', content: title || defaultTitle },
    { name: 'twitter:description', content: description || defaultDescription },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: title || defaultTitle },
    { name: 'og:description', content: description || defaultDescription },
    { name: 'og:image', content: image || defaultImage },
    { name: 'og:url', content: defaultUrl + url || defaultUrl },
    { name: 'twitter:image', content: image || defaultImage },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: image || defaultImage },
  ]

  return tags
}
