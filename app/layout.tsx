import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '💕 Will You Be My Valentine? | A Tangled Love Story 💕',
  description: 'A magical Valentine\'s Day proposal inspired by Rapunzel and Flynn - Made with love ✨',
  keywords: 'valentine, love, rapunzel, tangled, romantic, proposal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
