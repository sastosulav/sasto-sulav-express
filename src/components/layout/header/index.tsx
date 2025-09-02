import { LanguageSelector } from '@/components/layout/language-selector'
import { Container } from '@/components/ui/container'
import { Image } from '@/components/ui/image'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [scrolly, setScrolly] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return
      setScrolly(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header
      className={cn(
        'md:pt-6 md:pb-2 pt-3 pb-3 md:shadow-none shadow-sm border-b border-b-border md:space-y-6',
        scrolly > 300
          ? 'animate-slide-in-down w-full top-0 z-50 fixed left-1/2 -translate-x-1/2 bg-background'
          : '',
      )}
    >
      {/* <ShopUserNav /> */}
      <Container className="flex items-center justify-between">
        <section className="flex items-center gap-3">
          {/* <div className="xl:hidden block">
              <ShopMobileSidebar asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="text-muted-foreground size-6" />
                  <span className="sr-only">Toggle Mobile Sidebar</span>
                </Button>
              </ShopMobileSidebar>
            </div> */}
          <Link to="/">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="logo"
                className="size-10 rounded-lg"
              />
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl font-bold font-dosis sm:block hidden text-tertiary"
              >
                Sasto Sulav
              </motion.h3>
            </div>
            <small className="text-xs text-gray-400 text-center sm:block hidden">
              Online Grocery Shopping Center
            </small>
          </Link>
        </section>
        <div className="flex items-center gap-3">
          <a
            href={process.env.NEPALI_DINING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold font-dosis relative h-8 rounded-md border-2 border-dashed overflow-hidden gap-x-3 flex items-center border-black group"
          >
            <Image
              src="/momo.png"
              className="w-8 h-full rounded-l-md group-hover:w-10 transition-all duration-300"
              alt="nepali cuisine"
            />
            <div className="absolute inset-0 left-8 group-hover:scale-x-100 -z-10 scale-x-0 bg-black transition-all duration-300 origin-left" />
            <p className="pr-6 group-hover:text-white">Nepali Cuisine</p>
          </a>

          <LanguageSelector />
        </div>
      </Container>
      {/* <ShopMainNav /> */}
    </header>
  )
}
