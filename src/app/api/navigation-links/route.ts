import { delay } from '@/utils/delay';
import { NextResponse } from 'next/server';

export interface NavigationLink {
  id: number
  title: string
}

export async function GET() {
  const navigationLinks: NavigationLink[] = [
    { id: 1, title: 'Início' },
    { id: 2, title: 'Restaurantes' },
    { id: 3, title: 'Mercados' },
    { id: 4, title: 'Bebidas' },
    { id: 5, title: 'Farmácias' },
    { id: 6, title: 'Pets' },
    { id: 7, title: 'Shopping' },
  ];

  await delay(2000);

  return NextResponse.json(navigationLinks);
}
