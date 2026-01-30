'use client'

import { motion } from 'framer-motion'
import { Award, Target, Users, Zap, Heart, Shield, TrendingUp, Code2, Sparkles, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Müşteri Odaklılık',
      description: 'Müşterilerimizin ihtiyaçlarını anlamak ve beklentilerinin ötesinde çözümler sunmak en önceliğimizdir.',
      color: 'from-[#ff9625] to-orange-600'
    },
    {
      icon: Award,
      title: 'Kalite Garantisi',
      description: 'Her projede en yüksek kalite standartlarını uygular, profesyonel ve hatasız çözümler üretiriz.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Hız ve Verimlilik',
      description: 'Projelerinizi hızlı bir şekilde teslim eder, sürekli iletişim halinde kalarak verimli çalışırız.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Tutkulu Ekip',
      description: 'İşimizi tutkuyla yapan, teknolojiyi seven ve sürekli kendini geliştiren bir ekiple çalışıyoruz.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Güvenilirlik',
      description: 'Projeleriniz bizimle güvende. Güvenli kodlama standartları ve veri koruması önceliğimizdir.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Sürekli Gelişim',
      description: 'En yeni teknolojileri takip eder, kendimizi sürekli geliştirerek size en iyisini sunarız.',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const team = [
    {
      name: 'DodsGudinne',
      role: 'Kurucu & Lead Developer',
      image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/web_developerskills.jpg',
      description: '10+ yıl deneyimli full-stack geliştirici'
    },
    {
      name: 'Yahya S.',
      role: 'Project Leader & Customer Support',
      image: 'https://www.invensislearning.com/blog/wp-content/uploads/2025/11/project-leader-roles-responsibilities-banner-image.jpg',
      description: 'Müşteri Destek Ekibi Yöneticisi'
    },
    {
      name: 'Arda D.',
      role: 'Support Leader',
      image: 'https://cozumbelgelendirme.com.tr/wp-content/uploads/2021/08/musteri-hizmetleri.jpg',
      description: 'Genel Destek Yöneticisi'
    }
  ]

  const stats = [
    { number: '75+', label: 'Tamamlanan Proje' },
    { number: '50+', label: 'Mutlu Müşteri' },
    { number: '5+', label: 'Yıllık Deneyim' },
    { number: '24/7', label: 'Destek' }
  ]

  const achievements = [
    'Türkiye\'nin önde gelen FiveM web tasarım hizmet sağlayıcısı',
    '10+ başarılı Minecraft web mağaza projesi',
    '20+ kurumsal web sitesi geliştirme deneyimi',
    'Yüksek müşteri memnuniyeti oranı (95%)',
    '7/24 teknik destek ve bakım hizmeti',
    'En güncel teknolojiler ile geliştirme'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#ff9625] rounded-full filter blur-[128px] opacity-20"
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
                Hakkımızda
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            >
              Dijital Dünyada
              <span className="block text-[#ff9625]">Sizin Yanınızdayız</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 leading-relaxed"
            >
              PhobeuS Web Yazılım olarak, modern web teknolojileri ile işinizi dijital dünyada zirveye taşıyoruz.
              FiveM, Minecraft ve kurumsal projeleriniz için profesyonel çözümler sunuyoruz.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
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
                variants={fadeInUp}
                className="text-center"
              >
                <h3 className="text-5xl md:text-6xl font-bold text-[#ff9625] mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#ff9625] rounded-full filter blur-[128px] opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Misyonumuz
                </span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                PhobeuS Web Yazılım olarak misyonumuz, müşterilerimize en yüksek kalitede web çözümleri sunarak
                dijital dünyada başarılarına katkıda bulunmaktır. Modern teknolojiler kullanarak, kullanıcı dostu,
                hızlı ve güvenli web siteleri geliştiriyoruz.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                FiveM sunucuları, Minecraft oyun platformları ve kurumsal işletmeler için özel tasarlanmış
                profesyonel web çözümleri ile sektörde fark yaratıyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/5257005/pexels-photo-5257005.jpeg"
                  alt="Takım Çalışması"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#ff9625] to-orange-600 rounded-2xl blur-2xl opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Değerlerimiz</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Çalışmalarımızı yönlendiren temel değerler ve prensiplerimiz
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-[#ff9625] transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} shadow-lg mb-6`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Başarılarımız
                </span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                Yıllardır sürdürdüğümüz profesyonel hizmet anlayışımız ile elde ettiğimiz başarılar ve referanslarımız.
              </p>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-[#ff9625] transition-all duration-300"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#ff9625] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1713557112617-e12d67bddc3a"
                  alt="Başarılar"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Profesyonel Ekip</h3>
                  <p className="text-gray-300">Deneyimli ve tutkulu geliştiriciler</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff9625] rounded-full filter blur-[128px] opacity-10" />
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Ekibimiz</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Profesyonel ve deneyimli ekibimiz ile projelerinizi hayata geçiriyoruz
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-[#ff9625] transition-all duration-300 overflow-hidden">
                  <div className="relative h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>
                  <CardContent className="p-6 relative -mt-20">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-[#ff9625] font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
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
              Birlikte Çalışalım!
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Hayalinizdeki projeyi gerçeğe dönüştürmek için profesyonel ekibimizle tanışın.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/iletisim">
                <Button size="lg" className="bg-black hover:bg-gray-900 text-white px-10 py-6 text-lg font-semibold rounded-full shadow-2xl hover:scale-105 transition-all duration-300">
                  İletişime Geçin
                </Button>
              </Link>
              <Link href="/hizmetler">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#ff9625] px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                  Hizmetlerimiz
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
