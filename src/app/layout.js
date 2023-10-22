import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PresiSumm - Elevate Your Presentations with AI Summaries',
  description: 'Unlock the power of concise, AI-generated summaries for your presentations. PresiSumm makes preparing and delivering presentations a breeze. Store, present, and summarize with ease.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
