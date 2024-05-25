import { NavigationLink } from "@/app/api/navigation-links/route"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface NavLinkProps {
  content: string
  isActive?: boolean
}

function NavLink({
  content,
  isActive
}: NavLinkProps) {
  return <Link className={cn(
    'hover:text-ifood-red hover:cursor-pointer',
    isActive && 'text-ifood-red'
  )} href="#"
  >{content}</Link>
}

export function HeaderNavigationLinksSkeleton() {
  return (
    <Skeleton className="w-[460px] h-12 rounded-lg" />
  )
}

export async function HeaderNavigationLinks() {
  const response = await fetch(`${process.env.URL}/api/navigation-links`, { cache: 'no-cache' });
  if (!response.ok) {
    throw new Error('Failed to fetch navigation links');
  }
  const links: NavigationLink[] = await response.json();

  return (
    <nav className="flex items-center justify-center font-ifood-titulos-regular">
      <ul className="flex gap-4 text-sm text-ifood-gray">
        {links.map((link, index) => (
          <li key={link.id}><NavLink content={link.title} isActive={index === 0} /></li>
        ))}
      </ul>
    </nav>
  )
}
