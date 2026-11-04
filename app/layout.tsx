import type { Metadata } from 'next'
import { Syne, Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const syne = Syne({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-syne',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Thidas Wickramasinghe - Portfolio',
  description:
    'Software Engineer & Full-Stack Developer | MERN Stack | React.js | Node.js | TypeScript | ERP & Web Applications',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${outfit.variable} font-body antialiased`}>
        <ThemeProvider>
          <div className="site-shell min-h-screen">
            <div className="site-content">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
