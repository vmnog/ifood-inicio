import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { IconSearchSVG } from "../icons/icon-search";
import { IconChevronDownSVG } from "../icons/icon-chevron-down";
import { IconIFoodLogoSVG } from "../icons/icon-ifood-logo";
import { IconExitSVG } from "../icons/icon-exit";
import { IconBagSVG } from "../icons/icon-bag";

interface NavLinkProps {
  content: string
  isActive?: boolean
}

function NavLink({
  content,
  isActive
}: NavLinkProps) {
  return <Link className={twMerge(
    'hover:text-ifood-red hover:cursor-pointer',
    isActive && 'text-ifood-red'
  )} href="#"
  >{content}</Link>
}

function HeaderNavigation() {
  return (
    <nav className="flex items-center justify-center font-ifood-titulos-regular">
      <ul className="flex gap-4 text-sm text-ifood-gray">
        <li>
          <NavLink content="Início" isActive />
        </li>
        <li><NavLink content="Restaurantes" /></li>
        <li><NavLink content="Mercados" /></li>
        <li><NavLink content="Bebidas" /></li>
        <li><NavLink content="Farmácias" /></li>
        <li><NavLink content="Pets" /></li>
        <li><NavLink content="Shopping" /></li>
      </ul>
    </nav>
  )
}

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
    <header className='flex items-center justify-between gap-7 border-b border-ifood-border px-[37px] py-[14px]'>
      <div className="flex gap-7">
        <IconIFoodLogoSVG />
        <HeaderNavigation />
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
