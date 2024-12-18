import type { Metadata } from 'next'

import '@/styles/globals.css'

import { Archivo } from 'next/font/google'
import type { FC, ReactNode } from 'react'
import { BottomNav } from '@/components/bottom-nav'

export const metadata: Metadata = {
  title: '1 Copa Consagrados',
  description: 'Generated by create next app',
}

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
})

type LayoutProps = {
  children: ReactNode
}

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="pt-BR">
      <body className={`${archivo.variable} antialiased dark flex-1`}>
        <main className="flex-1">{children}</main>
        <BottomNav />
      </body>
    </html>
  )
}

export default RootLayout
