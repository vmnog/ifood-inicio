import type { Metadata } from "next";
import "./globals.css";
import { iFoodFonts } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Delivery de Comida e Mercado em Sao Paulo - iFood",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      suppressHydrationWarning
      lang="pt"
      className={`${iFoodFonts} overflow-x-hidden`}>
      <body>{children}</body>
    </html>
  )
}
