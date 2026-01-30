'use client'

import { motion } from 'framer-motion'
import { Globe, Gamepad2, ShoppingCart, Code, Sparkles, Check, ArrowRight, Zap, Shield, TrendingUp, Smartphone, Database, Cloud } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Services() {
  const services = [
    {
      id: 'kurumsal',
      icon: Globe,
      title: 'Kurumsal Web Siteleri',
      description: 'Markanızı en iyi şekilde yansıtan, profesyonel ve modern kurumsal web siteleri ile dijital dünyada fark yaratın.',
      image: 'https://mericreative.com/wp-content/uploads/2025/05/Bordum-ahsap-Web-Site-tasarimi-kurumsal-web-site.jpg',
      color: 'from-[#ff9625] to-orange-600',
      features: [
        'Kurumsal Kimliğe Özel Tasarım',
        'Responsive (Mobil Uyumlu) Tasarım',
        'SEO Optimizasyonu ve Google Sıralaması',
        'Hızlı Yükleme Süreleri',
        'Kolay Yönetim Paneli',
        'SSL Sertifikası ve Güvenlik',
        'İletişim Formları ve Entegrasyonlar',
        '7/24 Teknik Destek'
      ],
      packages: [
        {
          name: 'Başlangıç',
          price: '₺2.999',
          features: ['5 Sayfa', 'Temel SEO', 'İletişim Formu', '1 Ay Destek']
        },
        {
          name: 'Profesyonel',
          price: '₺3.999',
          features: ['10 Sayfa', 'Gelişmiş SEO', 'Blog Sistemi', '3 Ay Destek', 'Admin Paneli'],
          popular: true
        },
        {
          name: 'Premium',
          price: '₺6.999',
          features: ['Sınırsız Sayfa', 'Pro SEO', 'Özel Özellikler', '6 Ay Destek', 'Özel Tasarım', 'Web Güvenliği']
        }
      ]
    },
    {
      id: 'fivem',
      icon: Gamepad2,
      title: 'FiveM Web Tasarımları',
      description: 'FiveM sunucunuz için özel tasarlanmış, modern ve işlevsel web siteleri. Oyuncu paneli, market sistemi ve daha fazlası.',
      image: 'https://forum-cfx-re.akamaized.net/original/5X/a/0/1/a/a01a2e505162a6a26dfa33810447a44e82a96a99.jpeg',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Sunucuya Özel Tema Tasarımı',
        'Oyuncu Paneli ve Profil Sistemi',
        'Market/Donation Sistemi',
        'Whitelist Başvuru Formu',
        'Discord Bot Entegrasyonu',
        'Canlı Sunucu Durumu',
        'Kadro ve Yönetim Sayfası',
        'İstatistik ve Liderlik Tabloları'
      ],
      packages: [
        {
          name: 'Temel',
          price: '₺3.999',
          features: ['Ana Sayfa', 'Kadro Sayfası', 'İletişim', 'Discord Entegrasyonu']
        },
        {
          name: 'Gelişmiş',
          price: '₺7.999',
          features: ['Oyuncu Paneli', 'Market Sistemi', 'Whitelist', 'Sunucu İstatistikleri', 'Admin Panel'],
          popular: true
        },
        {
          name: 'Ultimate',
          price: '₺9.999',
          features: ['Tüm Özellikler', 'Özel Eklentiler', 'API Geliştirme', '1 Yıl Destek', 'Benzersiz Tasarım', 'Web Güvenliği']
        }
      ]
    },
    {
      id: 'minecraft',
      icon: ShoppingCart,
      title: 'Minecraft Web Mağaza',
      description: 'Minecraft sunucunuz için profesyonel e-ticaret çözümleri. Otomatik ürün teslimatı ve detaylı raporlama sistemi.',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/748091153672005.63340787de7e3.jpg',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Otomatik Ürün Teslimat Sistemi',
        'Güvenli Ödeme Entegrasyonu',
        'Rank ve Paket Satış Sistemi',
        'Detaylı İstatistik Paneli',
        'Kupon ve İndirim Kodları',
        'Oyuncu Paneli ve Satın Alma Geçmişi',
        'Mobil Uyumlu Tasarım',
        'Çoklu Sunucu Desteği'
      ],
      packages: [
        {
          name: 'Starter',
          price: '₺5.999',
          features: ['Mağaza Sistemi', 'Ödeme Entegrasyonu', 'Temel Admin Panel', '2 Ay Destek']
        },
        {
          name: 'Pro',
          price: '₺8.999',
          features: ['Gelişmiş Mağaza', 'Oyuncu Paneli', 'İstatistikler', 'Kupon Sistemi', '4 Ay Destek'],
          popular: true
        },
        {
          name: 'Enterprise',
          price: '₺11.999',
          features: ['Çoklu Sunucu', 'API Entegrasyonu', 'Özel Özellikler', '1 Yıl Destek', 'Priority Support', 'Web Güvenliği']
        }
      ]
    },
    {
      id: 'ozel',
      icon: Code,
      title: 'Özel Web Uygulamaları',
      description: 'İhtiyaçlarınıza özel geliştirilmiş, ölçeklenebilir web uygulamaları. API entegrasyonları ve özel çözümler.',
      image: 'https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'İhtiyaca Özel Tasarım ve Geliştirme',
        'RESTful API Geliştirme',
        'Veritabanı Tasarımı ve Yönetimi',
        'Üçüncü Parti API Entegrasyonları',
        'Güvenlik ve Performans Optimizasyonu',
        'Ölçeklenebilir Mimari',
        'Dokümantasyon ve Eğitim',
        'Sürekli Bakım ve Güncelleme'
      ],
      packages: [
        {
          name: 'Danışmanlık',
          price: '₺1.999',
          features: ['Proje Analizi', 'Teknik Danışmanlık', 'Maliyet Hesaplama', 'Yol Haritası']
        },
        {
          name: 'Özel Proje',
          price: 'Teklif Alın',
          features: ['Tam Özelleştirilebilir', 'Sınırsız Özellik', 'Özel Geliştirme', 'Uzun Süreli Destek'],
          popular: true
        },
        {
          name: 'Full-Stack',
          price: 'Teklif Alın',
          features: ['Frontend + Backend', 'Mobil Uygulama', 'API Geliştirme', 'DevOps', 'Premium Support']
        }
      ]
    }
  ]

  const technologies = [
    { name: 'Next.js', icon: Code },
    { name: 'React', icon: Code },
    { name: 'Node.js', icon: Database },
    { name: 'Tailwind CSS', icon: Sparkles },
    { name: 'AWS', icon: Cloud },
    { name: 'TypeScript', icon: Code },
    { name: 'Docker', icon: Cloud }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Hızlı Teslimat',
      description: 'Projelerinizi zamanında ve kaliteli bir şekilde teslim ediyoruz.'
    },
    {
      icon: Shield,
      title: 'Güvenli Kodlama',
      description: 'En güncel güvenlik standartları ile geliştirme yapıyoruz.'
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimizasyonu',
      description: 'Arama motorlarında üst sıralarda yer almanız için çalışıyoruz.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Tasarım',
      description: 'Tüm cihazlarda mükemmel görünen tasarımlar.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff9625] rounded-full filter blur-[128px] opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-[#ff9625] to-orange-600 rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg shadow-orange-500/50">
                Hizmetlerimiz
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            >
              Profesyonel Web
              <span className="block text-[#ff9625]">Çözümlerimiz</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 leading-relaxed"
            >
              İhtiyaçlarınıza özel, modern teknolojilerle geliştirilmiş web çözümleri ile
              dijital dünyada fark yaratın.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#ff9625] to-orange-600 mb-4 shadow-lg shadow-orange-500/50">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              className="mb-32 last:mb-0"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <motion.div
                  variants={fadeInUp}
                  className={index % 2 === 1 ? 'md:order-2' : ''}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{service.title}</h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#ff9625] flex-shrink-0 mt-1" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/iletisim">
                    <Button size="lg" className={`bg-gradient-to-r ${service.color} text-white hover:scale-105 transition-all duration-300 shadow-lg`}>
                      Teklif Alın
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>

                {/* Image */}
                <motion.div
                  variants={fadeInUp}
                  className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}
                >
                  <div className="relative h-[500px] rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>
                  <div className={`absolute -bottom-8 ${index % 2 === 0 ? '-right-8' : '-left-8'} w-32 h-32 bg-gradient-to-br ${service.color} rounded-2xl blur-2xl opacity-50`} />
                </motion.div>
              </div>

              {/* Pricing Packages */}
              <motion.div
                variants={fadeInUp}
                className="mt-16"
              >
                <h3 className="text-3xl font-bold text-center text-white mb-12">Paketlerimiz</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {service.packages.map((pkg, pkgIndex) => (
                    <Card
                      key={pkgIndex}
                      className={`relative bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-[#ff9625] transition-all duration-300 ${
                        pkg.popular ? 'border-[#ff9625] shadow-lg shadow-orange-500/20 scale-105' : ''
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-[#ff9625] to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                            Popüler
                          </span>
                        </div>
                      )}
                      <CardContent className="p-8">
                        <h4 className="text-2xl font-bold text-white mb-2">{pkg.name}</h4>
                        <div className="mb-6">
                          <span className="text-4xl font-bold text-[#ff9625]">{pkg.price}</span>
                          {pkg.price !== 'Teklif Alın' && <span className="text-gray-400 ml-2">/proje</span>}
                        </div>
                        <ul className="space-y-3 mb-8">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-300">
                              <Check className="w-4 h-4 text-[#ff9625]" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link href="/iletisim">
                          <Button className="w-full bg-gradient-to-r from-[#ff9625] to-orange-600 hover:from-[#ff9625] hover:to-orange-700 text-white">
                            Başlayın
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff9625] rounded-full filter blur-[128px] opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Kullandığımız Teknolojiler</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              En güncel ve güvenilir teknolojiler ile projelerinizi geliştiriyoruz
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl hover:border-[#ff9625] transition-all duration-300"
              >
                <tech.icon className="w-12 h-12 text-[#ff9625] mb-4" />
                <span className="text-white font-semibold">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#ff9625] via-orange-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Projenize Hemen Başlayalım!
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Ücretsiz teklif alın ve hayalinizdeki web sitesini birlikte oluşturalım.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/iletisim">
                <Button size="lg" className="bg-black hover:bg-gray-900 text-white px-10 py-6 text-lg font-semibold rounded-full shadow-2xl hover:scale-105 transition-all duration-300">
                  Ücretsiz Teklif Alın
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="https://discord.gg/kAuEdr7pmf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#ff9625] px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                  Discord'a Katılın
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
