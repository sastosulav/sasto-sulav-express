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
    'a one-stop-shop for all your South Asian grocery needs.'
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
