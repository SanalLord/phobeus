'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Gamepad2, ShoppingCart, Globe, Zap, Award, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

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

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
}

export default function Home() {
  const services = [
    {
      icon: Globe,
      title: 'Kurumsal Web Siteleri',
      description: 'Markanızı en iyi şekilde yansıtan, profesyonel ve modern kurumsal web siteleri. SEO uyumlu, hızlı ve güvenli çözümler.',
      color: 'from-orange-500 to-red-500',
      features: ['Responsive Tasarım', 'SEO Optimizasyonu', 'Yönetim Paneli', 'Hızlı Yükleme']
    },
    {
      icon: Gamepad2,
      title: 'FiveM Web Tasarımları',
      description: 'FiveM sunucunuz için özel tasarlanmış, modern ve işlevsel web siteleri. Oyuncu paneli, market sistemi ve daha fazlası.',
      color: 'from-purple-500 to-pink-500',
      features: ['Oyuncu Paneli', 'Market Sistemi', 'Discord Entegrasyonu', 'Canlı Sunucu Durumu']
    },
    {
      icon: ShoppingCart,
      title: 'Minecraft Web Mağaza',
      description: 'Minecraft sunucunuz için profesyonel e-ticaret çözümleri. Otomatik ürün teslimatı, ödeme entegrasyonu ve detaylı raporlama.',
      color: 'from-green-500 to-emerald-500',
      features: ['Otomatik Teslimat', 'Ödeme Entegrasyonu', 'İstatistikler', 'Rank Sistemi']
    },
    {
      icon: Code,
      title: 'Özel Web Uygulamaları',
      description: 'İhtiyaçlarınıza özel geliştirilmiş, ölçeklenebilir web uygulamaları. API entegrasyonları, veritabanı yönetimi ve daha fazlası.',
      color: 'from-blue-500 to-cyan-500',
      features: ['Özel Tasarım', 'API Geliştirme', 'Veritabanı Yönetimi', 'Bakım Desteği']
    }
  ]

  const stats = [
    { icon: Users, number: '50+', label: 'Mutlu Müşteri' },
    { icon: Award, number: '75+', label: 'Tamamlanan Proje' },
    { icon: TrendingUp, number: '95%', label: 'Müşteri Memnuniyeti' },
    { icon: Zap, number: '7/24', label: 'Destek Hizmeti' }
  ]

  const portfolio = [
    {
      title: 'FiveM Roleplay Sunucusu',
      category: 'FiveM Web Tasarım',
      image: 'https://mir-s3-cdn-cf.behance.net/projects/404/ddfd3e218542209.Y3JvcCwxOTIwLDE1MDEsMCww.jpg',
      description: 'Tam özellikli FiveM roleplay sunucusu web sitesi'
    },
    {
      title: 'E-Ticaret Platformu',
      category: 'Kurumsal Web',
      image: 'https://www.pixelturk.net/assets/images/media/e-ticaret-sitesi-3.jpg',
      description: 'Modern ve kullanıcı dostu e-ticaret çözümü'
    },
    {
      title: 'Minecraft Survival Mağaza',
      category: 'Minecraft Web',
      image: 'https://i.ytimg.com/vi/u5F0UCSfJIc/maxresdefault.jpg',
      description: 'Otomatik teslimat sistemli Minecraft mağazası'
    }
  ]

  const testimonials = [
    {
      name: 'Serkan Y.',
      role: 'FiveM Sunucu Sahibi',
      content: 'PhobeuS ekibi ile çalışmak harikaydı. FiveM sitemiz tam istediğimiz gibi oldu. Profesyonel ve hızlı hizmet!',
      rating: 5
    },
    {
      name: 'Bora S.',
      role: 'Minecraft Sunucu Yöneticisi',
      content: 'Minecraft mağazamız için yaptıkları site muhteşem. Otomatik teslimat sistemi sorunsuz çalışıyor. Teşekkürler!',
      rating: 5
    },
    {
      name: 'Engin Ş.',
      role: 'İşletme Sahibi',
      content: 'Kurumsal web sitemiz çok profesyonel görünüyor. SEO çalışmaları sayesinde Google\'da üst sıralardayız!',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff9625] rounded-full filter blur-[128px] opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-[128px] opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 150, 37, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 150, 37, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-[#ff9625] to-orange-600 rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg shadow-orange-500/50">
                Profesyonel Web Çözümleri
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white">
                PhobeuS
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff9625] via-orange-500 to-[#ff9625] animate-pulse">
                Web Yazılım
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              FiveM, Minecraft ve Kurumsal web siteleri ile özel yazılım projeleriniz için
              <span className="text-[#ff9625] font-semibold"> profesyonel, modern ve yüksek performanslı </span>
              çözümler sunuyoruz.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-6 justify-center items-center"
            >
              <Link href="/iletisim">
                <Button size="lg" className="bg-gradient-to-r from-[#ff9625] to-orange-600 hover:from-[#ff9625] hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 hover:scale-105">
                  Hemen Başlayın
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/hizmetler">
                <Button size="lg" variant="outline" className="border-2 border-[#ff9625] text-[#ff9625] hover:bg-[#ff9625] hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                  Hizmetlerimiz
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-16 flex justify-center"
            >
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff9625] to-orange-600 border-2 border-black flex items-center justify-center text-sm font-bold">
                      {i}K+
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-300">Mutlu müşterilerimize katılın</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#ff9625] rounded-full flex justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-[#ff9625] rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ff9625 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#ff9625] to-orange-600 mb-4 shadow-lg shadow-orange-500/50">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-[#ff9625] mb-2">{stat.number}</h3>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#ff9625] rounded-full filter blur-[128px] opacity-10" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-orange-500 rounded-full filter blur-[128px] opacity-10" />
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              İhtiyaçlarınıza özel, profesyonel web çözümleri ile işinizi dijital dünyada zirveye taşıyoruz
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-[#ff9625] transition-all duration-300 overflow-hidden h-full">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#ff9625] transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#ff9625]" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link href="/hizmetler">
                        <Button variant="ghost" className="text-[#ff9625] hover:text-white hover:bg-[#ff9625] w-full group-hover:translate-x-2 transition-transform duration-300">
                          Detaylı Bilgi
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Projelerimiz</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Başarıyla tamamladığımız projelerden örnekler
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="relative h-64 bg-gray-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-[#ff9625] text-white text-xs font-semibold rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff9625] rounded-full filter blur-[128px] opacity-10" />
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Müşterilerimiz Ne Diyor?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Bizimle çalışan mutlu müşterilerimizin yorumları
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-[#ff9625] transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-[#ff9625] text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#ff9625] via-orange-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
            animate={{ backgroundPosition: ['0px 0px', '50px 50px'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Projenizi Hayata Geçirelim!
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Hayalinizdeki web sitesini birlikte inşa edelim. Profesyonel ekibimiz sizin için burada!
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
                  Discord'a Katıl
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
