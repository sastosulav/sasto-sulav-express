import { Image } from '@/components/ui/image'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { NAV_LINKS } from '@/constants/data'
import { useLanguage } from '@/providers/hook'
import { LANGUAGE_KEY } from '@/providers/types'
import { Link } from '@tanstack/react-router'
import { ChevronDown } from 'lucide-react'
import { CategoriesAccrodion } from '../categories-accrodion'
import { ScrollArea } from '../ui/scroll-area'
import { LocationSelector } from './location-selector'

export const MobileSidebar = (
  props: React.ComponentProps<typeof SheetTrigger>,
) => {
  const { language, setLanguage } = useLanguage()
  return (
    <Sheet>
      <SheetTrigger {...props} />
      <SheetContent side="left" className="flex flex-col p-0 pb-20">
        <Link to="/">
          <SheetHeader className="p-6 pb-4 flex-row items-center gap-3">
            <Image src="/logo.png" alt="logo" className="size-8 rounded-lg" />
            <SheetTitle className="font-bold font-dosis text-tertiary text-2xl">
              Sasto Sulav
            </SheetTitle>
          </SheetHeader>
        </Link>
        <ScrollArea className="flex-1 h-full">
          <div className="px-8 mb-4">
            <LocationSelector className="w-full justify-between rounded-sm px-6 py-3" />
          </div>
          <CategoriesAccrodion />
          <section>
            <h3 className="font-dosis text-[15px] font-semibold uppercase px-6 pt-8 pb-4 text-gray-400">
              Site Navigation
            </h3>
            <a
              href={'/'}
              className="flex items-center gap-3 justify-between py-3 font-dosis text-[15px] font-semibold text-muted-foreground capitalize px-6 border-b"
            >
              <p>Home</p> <ChevronDown className="size-4" />
            </a>
            <a
              href={'/'}
              className="flex items-center gap-3 justify-between py-3 font-dosis text-[15px] font-semibold text-muted-foreground capitalize px-6 border-b"
            >
              <p>Shop</p> <ChevronDown className="size-4" />
            </a>
            {NAV_LINKS.map((l, index) => (
              <a
                href={l.href}
                key={index}
                className="flex items-center gap-3 py-3 font-dosis text-[15px] font-semibold text-muted-foreground capitalize px-6 border-b"
              >
                {l.icon && l.icon} {l.label}
              </a>
            ))}
          </section>
          <SheetFooter>
            <small className="text-xs text-gray-400 pb-6 pt-12 block px-6">
              Copyright 2025 © Sasto Sulav Express. All rights reserved.
            </small>
            <RadioGroup
              value={language}
              onValueChange={(lan: LANGUAGE_KEY) => {
                setLanguage(lan)
              }}
              className="gap-0"
            >
              <div className="flex items-center justify-between border-y py-3 px-6 relative overflow-hidden">
                <Label htmlFor="en" className="absolute inset-0" />
                <p className="font-dosis font-semibold text-muted-foreground text-[15px]">
                  English
                </p>
                <RadioGroupItem
                  value="en"
                  id="en"
                  className="[&_svg]:fill-tertiary size-6 [&_svg]:size-4"
                />
              </div>
              <div className="flex items-center justify-between border-b py-3 px-6 relative overflow-hidden">
                <Label htmlFor="jp" className="absolute inset-0" />
                <p className="font-dosis font-semibold text-muted-foreground text-[15px]">
                  日本
                </p>
                <RadioGroupItem
                  value="jp"
                  id="jp"
                  className="[&_svg]:fill-tertiary size-6 [&_svg]:size-4"
                />
              </div>
            </RadioGroup>
          </SheetFooter>
          <div className="h-10" />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
