import './globals.css'

import Navbar from '../app/components/navigation/navbar/index'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BazaarLife',
  description: 'Discover, Shop, and Connect – Your Ultimate Ecommerce Experience with BazaarLive!"enerated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
