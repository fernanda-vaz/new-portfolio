import type React from 'react'
import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Portfólio | Fernanda Vaz',
    template: '%s | Fernanda Vaz',
  },
  description:
    'Desenvolvedora web front-end criando interfaces modernas com React, Next.js e animações com Motion e GSAP.',
  metadataBase: new URL('https://fevaz.com.br'),
  openGraph: {
    title: 'Portfólio | Fernanda Vaz',
    description:
      'Projetos, habilidades e experiências em desenvolvimento front-end com foco em performance e design.',
    url: 'https://fevaz.com.br',
    siteName: 'Fernanda Vaz | Desenvolvedora Web',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://fevaz.com.br/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Imagem de preview do portfólio de Fernanda Vaz',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfólio | Fernanda Vaz',
    description:
      'Conheça os projetos e habilidades de Fernanda Vaz, desenvolvedora web focada em experiências incríveis com React e Next.js.',
    creator: '@fevaz',
    images: ['https://fevaz.com.br/og-image.png'],
  },
  keywords: [
    'portfólio desenvolvedora web',
    'desenvolvedora front-end',
    'React',
    'Next.js',
    'Tailwind CSS',
    'GSAP',
    'Motion Dev',
  ],
  authors: [{ name: 'Fernanda Vaz', url: 'https://fevaz.com.br' }],
  creator: 'Fernanda Vaz',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/favicon.ico' />
      </Head>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
