import type { Metadata } from 'next'
import '../styles/globals.css'
import '../styles/output.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'grape farm',
  description: '다함께 코테 공부를 시작해봅시다🎶',
  icons: {
    icon: '/icons/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
