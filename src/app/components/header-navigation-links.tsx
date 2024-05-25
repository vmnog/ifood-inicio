import { twMerge } from "tailwind-merge";

import Link from "next/link"

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

interface NavigationLink {
  id: string
  title: string
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getNavigationLinks(): Promise<NavigationLink[]> {
  const response = await fetch('http://localhost:3001/navigation-links', { cache: 'no-cache' });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  await delay(2000);

  return await response.json();
}

export async function HeaderNavigationLinks() {
  const links = await getNavigationLinks()

  return (
    <nav className="flex items-center justify-center font-ifood-titulos-regular">
      <ul className="flex gap-4 text-sm text-ifood-gray">
        {links.map(link => (
          <li key={link.id}><NavLink content={link.title} isActive /></li>
        ))}
      </ul>
    </nav>
  )
}
