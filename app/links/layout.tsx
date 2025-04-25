// app/links/layout.tsx
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/footer'
import { ThemeWrapper } from '@/components/theme-wrapper'
import '@/app/links/links.css'

const inter = Inter({ subsets: ['latin'] })

interface LinksLayoutProps {
  children: ReactNode
}

export default function LinksLayout({ children }: LinksLayoutProps) {
  return (
    <html lang='pt-BR' className='links-page' suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground`}
      >
        <ThemeWrapper>
          <main>{children}</main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  )
}
