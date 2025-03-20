import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CF App',
  description: 'Client assignment',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
