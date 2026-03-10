import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Eastcoast AVL — Audio · Video · Lighting',
    template: '%s | Eastcoast AVL',
  },
  description: 'Professional Audio, Video, and Lighting services for churches, live events, and broadcast production. Based in Jacksonville, NC.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    siteName: 'Eastcoast AVL',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
