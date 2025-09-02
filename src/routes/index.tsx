import { DashainOffer } from '@/components/dashain-offer'
import { CategoriesCarousel } from '@/components/home/categories-carousel'
import { Categoryitems } from '@/components/home/category-items'
import { HomeBanner } from '@/components/home/home-banner'
import { WeekendDiscountBannersTwo } from '@/components/home/weekend-discount-banners-two'
import { WeekendDiscountedItems } from '@/components/home/weekend-discounted-items'
import { Container } from '@/components/ui/container'
import {
  ALCOHOL_CATEGORIES,
  ALCOHOL_CATEGORY_ITEMS,
  FRUITS_CATEGORIES,
  FRUITS_CATEGORY_ITEMS,
} from '@/constants/data'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <Container className="pt-8 pb-16 space-y-8">
        <DashainOffer />
        {/* <ShopOffersBanner /> */}
        <HomeBanner />
        <CategoriesCarousel />
        {/* <ShopOfferTimer /> */}
        <WeekendDiscountedItems />
        {/* <WeekendDiscountBannersOne /> */}
        <Categoryitems
          categories={FRUITS_CATEGORIES}
          href="https://tetoteto.co.jp/category/vegetables-and-fruits-np"
          items={FRUITS_CATEGORY_ITEMS}
          imageURL="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-17.jpg"
          title="FRUIT & VEGETABLES"
          subtitle="The freshest greengrocer products are waiting for you"
        />
        <WeekendDiscountBannersTwo />
        <Categoryitems
          href="https://tetoteto.co.jp/category/alcohol-np"
          categories={ALCOHOL_CATEGORIES}
          items={ALCOHOL_CATEGORY_ITEMS}
          title="DRINKS & ALCOHOL"
          subtitle="The freshest greengrocer products are waiting for you"
          imageURL="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-16.jpg"
        />
        {/* <ShopBlogList /> */}
      </Container>
      {/* <ShopCallToAction /> */}
      {/* <BottomNav /> */}
    </div>
  )
}
