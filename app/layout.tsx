import type { Metadata } from 'next'
import { Cinzel_Decorative, Cinzel, IM_Fell_English, Rajdhani } from 'next/font/google'
import './globals.css'

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel-decorative',
  display: 'swap',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

const imFell = IM_Fell_English({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-im-fell',
  display: 'swap',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Compass of Kalachakra — Wheel of Time',
  description: 'Before history. Before civilization. An ancient artifact awakens. A researcher discovers a truth that threatens two universes.',
  openGraph: {
    title: 'The Compass of Kalachakra',
    description: 'An ancient inter-universal navigation artifact. A 36-hour countdown. One man who broke cosmic balance.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cinzelDecorative.variable} ${cinzel.variable} ${imFell.variable} ${rajdhani.variable} scroll-smooth`}
    >
      <body className="bg-deep text-off-white min-h-screen flex flex-col font-im-fell antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
