import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import { DefaultCatchBoundary } from '@/components/default-catch-boundry'
import { Header } from '@/components/layout/header'
import { NotificationBar } from '@/components/layout/header/notification-bar'
import { ScrollUP } from '@/components/layout/scroll-up'
import { Footer } from '@/components/layout/shop-footer'
import { NavigationProgress } from '@/components/navigation-progress'
import { NotFound } from '@/components/not-found'
import { Toaster } from '@/components/ui/sonner'
import { seo } from '@/lib/seo'
import { LANGUAGE_COOKIE_KEY, LanguageProvider } from '@/providers'
import { LANGUAGE_KEY } from '@/providers/types'
import { createServerFn } from '@tanstack/react-start'
import { getCookie } from '@tanstack/react-start/server'
import appCss from '../styles.css?url'

const getLanguage = createServerFn({ method: 'GET' }).handler(() => {
  const cookie = getCookie(LANGUAGE_COOKIE_KEY)
  return {
    language: typeof cookie === 'string' && cookie.length ? cookie : 'jp',
  }
})
export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title: 'Sasto Sulav Express',
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/manifest.json', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: () => <NotFound />,
  errorComponent: DefaultCatchBoundary,
  beforeLoad: async () => await getLanguage(),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const ctx = Route.useRouteContext() as { language: LANGUAGE_KEY }
  const lang = ctx?.language ?? 'jp'
  return (
    <html lang={lang}>
      <head>
        <HeadContent />
      </head>
      <body>
        <LanguageProvider defaultLanguage={lang as LANGUAGE_KEY}>
          <NavigationProgress />
          <NotificationBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollUP />
          <Toaster position="top-center" />
        </LanguageProvider>
       
        <Scripts />
      </body>
    </html>
  )
}
