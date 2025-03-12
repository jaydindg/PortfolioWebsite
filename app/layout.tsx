import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CustomCursorDynamic } from '@/components/CustomCursorDynamic'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name - Web Developer Portfolio',
  description: 'A showcase of my web development projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursorDynamic />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
