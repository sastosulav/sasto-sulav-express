import { LanguageSelector } from '@/components/layout/language-selector'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Image } from '@/components/ui/image'
import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { MobileSidebar } from '../mobile-sidebar'

type Posts = {
  userId: number
  id: number
  title: string
  body: string
}

export const HeaderOptions = () => {
  return (
    <Container className="flex items-center justify-between">
      <section className="flex items-center gap-3">
        <div className="xl:hidden block">
          <MobileSidebar asChild>
            <Button variant="ghost" size="icon">
              <Menu className="text-muted-foreground size-6" />
              <span className="sr-only">Toggle Mobile Sidebar</span>
            </Button>
          </MobileSidebar>
        </div>
        <Link to="/">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="logo"
              className="size-10 rounded-lg lg:block hidden"
            />
            <h3 className="text-3xl font-bold font-dosis text-tertiary">
              Sasto Sulav
            </h3>
          </div>
          <small className="text-xs text-gray-400 text-center sm:block hidden">
            Online Grocery Shopping Center
          </small>
        </Link>
      </section>
      <LanguageSelector />
      {/* <section className="md:flex-1 flex items-center gap-6">
        <div className="hidden xl:block">
          <LocationSelector />
        </div>
        <div className="md:flex hidden bg-muted rounded-sm items-center px-3 flex-1">
          <AutoComplete
            className="[&_svg]:hidden rounded-sm border-none bg-muted py-7 [&>div]:px-0"
            options={CATEGORIES.map((c) => ({
              value: c.href,
              label: c.title,
            }))}
            loadingText="Searching..."
            placeholder="Search for products..."
            onSelect={(c) => {
              if (CAN_USE_DOM) {
                window.open(c, "_blank", "noopener noreferrer");
              }
            }}
          />
          <button>
            <Search className="text-muted-foreground size-8" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full sm:flex hidden items-center justify-center border">
            <UserRound className="size-5 " />
          </div>
          <p className="font-semibold text-sm">$0.00</p>
        </div>
        <Indicator label="1">
          <ShoppingBag className="size-5 text-red-500" />
        </Indicator>
      </section> */}
    </Container>
  )
}
