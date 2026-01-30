'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/hizmetler', label: 'Hizmetler' },
    { href: '/neden-biz', label: 'Neden Biz?' },
    { href: '/iletisim', label: 'İletişim' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-lg border-b border-gray-800 shadow-lg shadow-[#ff9625]/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#ff9625] to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/50">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <motion.div
                className="absolute inset-0 bg-[#ff9625] rounded-lg blur-md opacity-0 group-hover:opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-[#ff9625] transition-colors duration-300">
                PhobeuS
              </span>
              <span className="text-xs text-gray-400 group-hover:text-[#ff9625] transition-colors duration-300">
                Web Yazılım
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="px-4 py-2 text-gray-300 hover:text-[#ff9625] hover:bg-[#ff9625]/10 transition-all duration-300 relative group rounded-md"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff9625] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://discord.gg/kAuEdr7pmf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-[#ff9625] text-[#ff9625] hover:bg-[#ff9625] hover:text-white transition-all duration-300"
              >
                Discord
              </Button>
            </a>
            <Link href="/iletisim">
              <Button className="bg-gradient-to-r from-[#ff9625] to-orange-600 hover:from-[#ff9625] hover:to-orange-700 text-white shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 hover:scale-105">
                Teklif Al
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-[#ff9625] transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/98 backdrop-blur-lg border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left text-gray-300 hover:text-[#ff9625] hover:bg-[#ff9625]/10 transition-all duration-300 px-4 py-2 rounded-md"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a href="https://discord.gg/kAuEdr7pmf" target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-[#ff9625] text-[#ff9625] hover:bg-[#ff9625] hover:text-white transition-all duration-300"
                  >
                    Discord
                  </Button>
                </a>
                <Link href="/iletisim" onClick={() => setIsOpen(false)} className="block">
                  <Button className="w-full bg-gradient-to-r from-[#ff9625] to-orange-600 text-white">
                    Teklif Al
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
