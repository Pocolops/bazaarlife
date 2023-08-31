import './globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from '../app/components/navigation/navbar/index'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GlobalState from '../app/components/Context';
import Footer from '../app/components/Footer/Footer';



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
      <head>
        <link rel='icon' href='/assets/logo/favicon.png'/>
      </head>
      
      <body className={inter.className}>
        <GlobalState>
          <Navbar />
          <main>{children}</main>
          </GlobalState>
          <Footer/>
          </body>

    </html>
  )
}
