'use client'

import { motion } from 'framer-motion'
import { Check, Shield, Clock, Headphones, Code, Rocket, Sparkles, TrendingUp } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function NedenBizPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-950"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#ff9625] rounded-full blur-[128px] opacity-20 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
<h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
  Neden{' '}
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff9625] to-orange-600">
    Phobeus?
  </span>
</h2>

            <p className="text-xl text-zinc-400 leading-relaxed">
              Yüzlerce web tasarım ajansı arasından bizi seçmeniz için <span className="text-[#ff9625] font-semibold">güçlü sebepler</span> var. Farkımızı keşfedin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Shield,
                title: 'Güvenilir Hizmet',
                description: 'Projeleriniz güvenli ellerde. Taaهhüt ettiğimiz kalite ve süreye uyuyoruz.',
                color: 'text-blue-400'
              },
              {
                icon: Clock,
                title: 'Hızlı Teslimat',
                description: 'Zamanın değerini biliyoruz. Projelerinizi hızlı ama kaliteli teslim ediyoruz.',
                color: 'text-green-400'
              },
              {
                icon: Headphones,
                title: '7/24 Destek',
                description: 'Discord üzerinden kesintisiz destek. Her zaman yanınızdayız.',
                color: 'text-purple-400'
              },
              {
                icon: Sparkles,
                title: 'Premium Kalite',
                description: 'Hazır tema değil, sizin için tasarlanmış özgün çözümler.',
                color: 'text-[#ff9625]'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-zinc-900 border-zinc-800 hover:border-[#ff9625]/50 transition-all duration-300 h-full group hover:shadow-lg hover:shadow-[#ff9625]/10">
                  <CardContent className="p-6 text-center">
                    <item.icon className={`w-12 h-12 ${item.color} mb-4 mx-auto group-hover:scale-110 transition-transform`} />
                    <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
  {item.title}
</h3>

                    <p className="text-zinc-400">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Detailed Advantages */}
          <div className="space-y-16">
            {/* Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff9625]/10 border border-[#ff9625]/20 mb-4">
                  <Code className="w-4 h-4 text-[#ff9625]" />
                  <span className="text-sm text-[#ff9625] font-medium">Uzmanlık</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  En Son Teknolojiler
                </h2>
                <p className="text-zinc-400 text-lg mb-6">
                  React, Next.js, Node.js gibi modern teknolojileri kullanarak hızlı, güvenli ve ölçeklenebilir web uygulamaları geliştiriyoruz.
                </p>
                <ul className="space-y-3">
                  {[
                    'Modern ve responsive tasarımlar',
                    'Hızlı yüklenme süreleri',
                    'SEO optimizasyonu',
                    'Güvenli ve temiz kod yapısı'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#ff9625] flex-shrink-0" />
                      <span className="text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5fGVufDB8fHxibGFja3wxNzY5NzU2MDY0fDA&ixlib=rb-4.1.0&q=85"
                  alt="Modern Technology"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Gaming Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1 relative">
                <img
                  src="https://images.unsplash.com/photo-1729520126776-2235a6baa1f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwzfHxnYW1pbmclMjBzZXJ2ZXJ8ZW58MHx8fHwxNzY5NzU2MDkwfDA&ixlib=rb-4.1.0&q=85"
                  alt="Gaming Setup"
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff9625]/10 border border-[#ff9625]/20 mb-4">
                  <Rocket className="w-4 h-4 text-[#ff9625]" />
                  <span className="text-sm text-[#ff9625] font-medium">Oyun Toplulukları</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  FiveM ve Minecraft Uzmanlığı
                </h2>
                <p className="text-zinc-400 text-lg mb-6">
                  Oyun topluluklarının özel ihtiyaçlarını anlayan, entegre mağaza sistemleri ve yönetim panelleri geliştiren bir ekibiz.
                </p>
                <ul className="space-y-3">
                  {[
                    'FiveM sunucuları için özel web tasarımları',
                    'Minecraft için entegre mağaza sistemleri',
                    'Oyuncu yönetim panelleri',
                    'Discord entegrasyonları'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#ff9625] flex-shrink-0" />
                      <span className="text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Custom Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff9625]/10 border border-[#ff9625]/20 mb-4">
                  <TrendingUp className="w-4 h-4 text-[#ff9625]" />
                  <span className="text-sm text-[#ff9625] font-medium">Özelleştirme</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  Sizin İçin Tasarım
                </h2>
                <p className="text-zinc-400 text-lg mb-6">
                  Hazır tema kullanmıyoruz. Her proje, markanızın özgün kimliğine ve iş hedeflerinize özel olarak tasarlanıyor.
                </p>
                <ul className="space-y-3">
                  {[
                    'Marka kimliğinize özel tasarım',
                    'Kullanıcı deneyimi odaklı arayüz',
                    'Mobil uyumlu ve responsive',
                    'İşletmenize özel özellikler'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#ff9625] flex-shrink-0" />
                      <span className="text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1759836096317-e746643cc277?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXJ2ZXJ8ZW58MHx8fHwxNzY5NzU2MDkwfDA&ixlib=rb-4.1.0&q=85"
                  alt="Custom Solutions"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hala İkna Olmadınız mı?
            </h2>
            <p className="text-xl text-zinc-400 mb-8">
              Projenizi tartışmak ve nasıl yardımcı olabileceğimizi öğrenmek için bizimle iletişime geçin.
            </p>
            <Link href="/iletisim">
              <Button size="lg" className="bg-[#ff9625] hover:bg-[#ff9625]/90 text-white px-8 py-6 text-lg font-semibold rounded-lg">
                İletişime Geçin
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
