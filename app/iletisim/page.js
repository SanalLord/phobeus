'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Sparkles, MessageSquare, Clock, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleServiceChange = (value) => {
    setFormData({
      ...formData,
      service: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: 'Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız.' })
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.error || 'Bir hata oluştu. Lütfen tekrar deneyin.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Bağlantı hatası. Lütfen tekrar deneyin.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-posta',
      value: 'phobeusweb@gmail.com',
      link: 'mailto:phobeusweb@gmail.com',
      color: 'from-[#ff9625] to-orange-600'
    },
    {
      icon: Phone,
      title: 'Telefon',
      value: '+90 530 785 41 66',
      link: 'tel:+90XXXXXXXXXX',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Konum',
      value: 'Türkiye',
      link: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageSquare,
      title: 'Discord',
      value: 'Topluluğumuza katılın',
      link: 'https://discord.gg/kAuEdr7pmf',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const services = [
    'Kurumsal Web Sitesi',
    'FiveM Web Tasarımı',
    'Minecraft Web Mağaza',
    'Özel Web Uygulaması',
    'Diğer'
  ]

  const faqs = [
    {
      question: 'Bir proje ne kadar sürede teslim edilir?',
      answer: 'Proje karmaşıklığına bağlı olarak 1-4 hafta arasında teslimat yapıyoruz.'
    },
    {
      question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
      answer: 'Banka havalesi, EFT, kredi kartı ve kripto para ile ödeme alabiliyoruz.'
    },
    {
      question: 'Destek hizmeti sunuyor musunuz?',
      answer: 'Evet, 7/24 teknik destek hizmeti sunuyoruz. Discord ve e-posta üzerinden ulaşabilirsiniz.'
    },
    {
      question: 'Proje sonrası değişiklik yapabiliyor musunuz?',
      answer: 'Elbette! Proje sonrası değişiklik ve güncelleme hizmetleri sunuyoruz.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
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
                İletişim
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            >
              Projeniz İçin
              <span className="block text-[#ff9625]">Bize Ulaşın</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Projeleriniz hakkında konuşmak ve ücretsiz teklif almak için bize ulaşın.
              Ekibimiz size en kısa sürede dönüş yapacaktır.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-[#ff9625] transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} shadow-lg mb-4`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                    <p className="text-gray-400 text-sm">{info.value}</p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff9625] rounded-full filter blur-[128px] opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Mesaj Gönderin</h2>
              <p className="text-gray-400 mb-8">
                Formu doldurun, size en kısa sürede dönelim. Tüm sorularınızı cevaplayacağız.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Ad Soyad *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-900 border-gray-800 text-white focus:border-[#ff9625]"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">E-posta *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-900 border-gray-800 text-white focus:border-[#ff9625]"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block">Telefon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-900 border-gray-800 text-white focus:border-[#ff9625]"
                    placeholder="+90 (XXX) XXX XX XX"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-white mb-2 block">Hizmet Türü *</Label>
                  <Select value={formData.service} onValueChange={handleServiceChange} required>
                    <SelectTrigger className="bg-gray-900 border-gray-800 text-white focus:border-[#ff9625]">
                      <SelectValue placeholder="Hizmet seçin" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-800">
                      {services.map((service) => (
                        <SelectItem key={service} value={service} className="text-white hover:bg-[#ff9625]">
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">Mesajınız *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-gray-900 border-gray-800 text-white focus:border-[#ff9625] resize-none"
                    placeholder="Projeniz hakkında bize bilgi verin..."
                  />
                </div>

                {status.message && (
                  <div className={`p-4 rounded-lg ${
                    status.type === 'success' 
                      ? 'bg-green-500/10 border border-green-500 text-green-500' 
                      : 'bg-red-500/10 border border-red-500 text-red-500'
                  } flex items-center gap-3`}>
                    {status.type === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span className="text-xl">⚠️</span>
                    )}
                    {status.message}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#ff9625] to-orange-600 hover:from-[#ff9625] hover:to-orange-700 text-white shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      Mesaj Gönder
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Info & FAQs */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Working Hours */}
              <Card className="bg-gradient-to-br from-[#ff9625] to-orange-600 border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">7/24 Destek</h3>
                      <p className="text-white/80">Her zaman yanınızdayız</p>
                    </div>
                  </div>
                  <p className="text-white/90">
                    Discord ve e-posta üzerinden haftanın 7 günü, günün 24 saati bize ulaşabilirsiniz.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Sıkça Sorulan Sorular</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-[#ff9625] transition-all duration-300">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-bold text-white mb-3">{faq.question}</h4>
                          <p className="text-gray-400">{faq.answer}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Discord CTA */}
              <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-0">
                <CardContent className="p-8 text-center">
                  <MessageSquare className="w-16 h-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Discord Topluluğumuz</h3>
                  <p className="text-white/90 mb-6">
                    Daha hızlı yardım almak için Discord sunucumuza katılın!
                  </p>
                  <a href="https://discord.gg/kAuEdr7pmf" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 w-full">
                      Discord'a Katıl
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
