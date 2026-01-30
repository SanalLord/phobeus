import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PhobeuS Web Yazılım - Profesyonel Web Tasarım ve Yazılım Hizmetleri',
  description: 'FiveM, Minecraft, Kurumsal Web Siteleri ve Özel Yazılım Çözümleri. Profesyonel web tasarım ve yazılım hizmetleri.',
  keywords: 'web tasarım, fivem web, minecraft web, kurumsal web, yazılım, PhobeuS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
