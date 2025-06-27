'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react'
import Header from '../../components/Header'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with your preferred form handling service
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen animated-bg">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to accelerate your business with cutting-edge technology? Let's discuss how Future Wave Labs can help transform your vision into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="card-hover glow-border rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="investment">Investment Inquiries</option>
                    <option value="services">Service Inquiries</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="media">Media & Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 resize-none"
                    placeholder="Tell us about your project, requirements, or how we can help..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full glow-button flex items-center justify-center space-x-2 text-lg py-4"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 gradient-text">Contact Information</h2>
                <p className="text-gray-300 text-lg mb-8">
                  We're here to help you navigate the future of technology. Reach out to us through any of the channels below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="card-hover glow-border rounded-xl p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                    <p className="text-gray-400 mb-2">Get in touch via email</p>
                    <a href="mailto:hello@futurewavelabs.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      hello@futurewavelabs.com
                    </a>
                  </div>
                </div>

                <div className="card-hover glow-border rounded-xl p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                    <p className="text-gray-400 mb-2">Speak directly with our team</p>
                    <a href="tel:+911234567890" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      +91 12345 67890
                    </a>
                  </div>
                </div>

                <div className="card-hover glow-border rounded-xl p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                    <p className="text-gray-400 mb-2">Our headquarters</p>
                    <p className="text-cyan-400">
                      Future Wave Labs<br />
                      Innovation Hub, Sector 44<br />
                      Gurugram, Haryana 122003<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="card-hover glow-border rounded-xl p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                    <p className="text-gray-400 mb-2">When we're available</p>
                    <p className="text-cyan-400">
                      Monday - Friday: 9:00 AM - 7:00 PM IST<br />
                      Saturday: 10:00 AM - 4:00 PM IST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="card-hover glow-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span>Quick Links</span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    → Careers
                  </Link>
                  <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    → About Us
                  </Link>
                  <Link href="/wave-media" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    → Wave Media
                  </Link>
                  <Link href="/futuremind-ai" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    → FutureMind AI
                  </Link>
                  <Link href="/wavesaas" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    → WaveSaaS
                  </Link>
                  <Link href="/solarnest" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    → SolarNest
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold gradient-text mb-4">Future Wave Labs</div>
          <p className="text-gray-400 mb-6">
            Accelerating India's Future Through Innovation, Intelligence & Impact
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <span>© 2024 Future Wave Labs. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
} 