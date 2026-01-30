'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Hizmetler: [
      { label: 'Kurumsal Web', href: '/hizmetler#kurumsal' },
      { label: 'FiveM Tasarım', href: '/hizmetler#fivem' },
      { label: 'Minecraft Web', href: '/hizmetler#minecraft' },
      { label: 'Özel Yazılım', href: '/hizmetler#ozel' },
    ],
    Kurumsal: [
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'Referanslar', href: '/hakkimizda#referanslar' },
      { label: 'Blog', href: '/blog' },
      { label: 'Kariyer', href: '/kariyer' },
    ],
    Destek: [
      { label: 'İletişim', href: '/iletisim' },
      { label: 'SSS', href: '/sss' },
      { label: 'Dökümanlar', href: '/dokumanlar' },
      { label: 'Discord', href: 'https://discord.gg/kAuEdr7pmf' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black border-t border-gray-800 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#ff9625] rounded-full filter blur-[128px] opacity-5" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-[128px] opacity-5" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff9625] to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/50">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white group-hover:text-[#ff9625] transition-colors duration-300">
                  PhobeuS
                </span>
                <span className="text-sm text-gray-400 group-hover:text-[#ff9625] transition-colors duration-300">
                  Web Yazılım
                </span>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Profesyonel web tasarım ve yazılım çözümleri ile dijital dünyadaki yerinizi alın. 
              FiveM, Minecraft ve kurumsal projeleriniz için modern, hızlı ve güvenli web siteleri.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-[#ff9625] transition-colors duration-300">
                <Mail className="w-5 h-5" />
                <span>info@phobeus.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-[#ff9625] transition-colors duration-300">
                <Phone className="w-5 h-5" />
                <span>+90 (XXX) XXX XX XX</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-[#ff9625] transition-colors duration-300">
                <MapPin className="w-5 h-5" />
                <span>Türkiye</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                {category}
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#ff9625] to-transparent" />
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#ff9625] transition-colors duration-300 inline-flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-[#ff9625] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-[#ff9625] hover:to-orange-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <a
              href="https://discord.gg/kAuEdr7pmf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-[#ff9625] to-orange-600 hover:from-[#ff9625] hover:to-orange-700 text-white font-semibold rounded-full shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 hover:scale-105"
            >
              Discord Topluluğumuza Katılın
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>
              © {currentYear} <span className="text-[#ff9625] font-semibold">PhobeuS Web Yazılım</span>. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6">
              <Link href="/gizlilik" className="hover:text-[#ff9625] transition-colors duration-300">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim" className="hover:text-[#ff9625] transition-colors duration-300">
                Kullanım Şartları
              </Link>
              <Link href="/cerezler" className="hover:text-[#ff9625] transition-colors duration-300">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>

        {/* Made with Love */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-xs">
            Made with <span className="text-[#ff9625] animate-pulse">❤</span> by PhobeuS Team
          </p>
        </div>
      </div>
    </footer>
  )
}
