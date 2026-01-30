import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm gerekli alanları doldurun.' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi girin.' },
        { status: 400 }
      )
    }

    // Log the contact request (in production, save to database or send email)
    console.log('New contact form submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      service,
      message,
      timestamp: new Date().toISOString()
    })

    // In production, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send auto-reply to customer

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mesajınız başarıyla alındı!' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Sunucu hatası. Lütfen daha sonra tekrar deneyin.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API is working' },
    { status: 200 }
  )
}
