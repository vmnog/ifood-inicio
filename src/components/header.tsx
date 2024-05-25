import Link from "next/link";
import { IconSearchSVG } from "./icons/icon-search";
import { IconChevronDownSVG } from "./icons/icon-chevron-down";
import { IconIFoodLogoSVG } from "./icons/icon-ifood-logo";
import { IconExitSVG } from "./icons/icon-exit";
import { IconBagSVG } from "./icons/icon-bag";
import { Suspense } from "react";
import { HeaderNavigationLinks, HeaderNavigationLinksSkeleton } from "./header-navigation-links";

function SearchItemOrStoreInput() {
  return (
    <div className="bg-ifood-input-bg flex items-center gap-3 px-4 h-12 rounded-lg w-full max-w-[680px]">
      <IconSearchSVG />
      <input
        className="bg-transparent font-ifood-regular placeholder:font-ifood-light placeholder:text-ifood-light-gray w-full focus-visible:outline-none"
        name="search" placeholder="Busque por item ou loja" />
    </div>
  )
}

function CurrentLocation() {
  return (
    <button className="flex items-center gap-2">
      <span className="text-sm font-ifood-medium text-ifood-gray whitespace-nowrap">R. Martins Fontes, 330</span>
      <IconChevronDownSVG />
    </button>
  )
}

function LogoutButton() {
  return (
    <Link href="#">
      <IconExitSVG />
    </Link>
  )
}

function CartHeaderButton() {
  return (
    <button className="flex items-center">
      <IconBagSVG />
      <div className="flex flex-col text-[11px] text-ifood-gray leading-tight text-left">
        <span className="whitespace-nowrap">R$ 0,00</span>
        <span className="whitespace-nowrap text-[10px]">0 itens</span>
      </div>
    </button>
  )
}

export function Header() {
  return (
    <header className='flex items-center justify-between gap-7 px-[37px] py-[14px] border-b border-b-ifood-border'>
      <div className="flex gap-7">
        <IconIFoodLogoSVG />
        <Suspense fallback={<HeaderNavigationLinksSkeleton />}>
          <HeaderNavigationLinks />
        </Suspense>
      </div>

      <SearchItemOrStoreInput />

      <div className="flex gap-7">
        <CurrentLocation />
        <LogoutButton />
        <CartHeaderButton />
      </div>
    </header>
  )
}
