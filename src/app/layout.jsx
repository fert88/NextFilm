import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Tabs from '@/components/Tabs'
import React from 'react'
import "./globals.css"
import { Providers } from './providers'

const Layout = ({ children }) => {
  return (
    <html lang='tr'suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <Tabs/>
          {children}
          <Footer />
        </Providers>

      </body>
    </html>
  )
}

export default Layout