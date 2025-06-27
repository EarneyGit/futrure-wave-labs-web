'use client'

import { motion } from 'framer-motion'
import { Building, Home, Zap, Leaf, Users, Shield, TrendingUp, MapPin } from 'lucide-react'
import Header from '../../components/Header'

export default function WaveBuildInfraPage() {
  const services = [
    {
      icon: Building,
      title: "Commercial Infra Development",
      description: "Modern commercial buildings with integrated smart technology and sustainable design"
    },
    {
      icon: Home,
      title: "Smart Home Tech Integration",
      description: "IoT-enabled residential solutions for modern Indian households"
    },
    {
      icon: Leaf,
      title: "Solar-Ready Building Design",
      description: "Future-proof construction with built-in solar infrastructure and energy efficiency"
    },
    {
      icon: Shield,
      title: "Green Building Certification",
      description: "LEED and IGBC certified sustainable construction practices"
    },
    {
      icon: TrendingUp,
      title: "PropTech Solutions",
      description: "Technology-driven property management and construction optimization"
    },
    {
      icon: MapPin,
      title: "Urban Planning Consultancy",
      description: "Smart city planning and infrastructure development consulting"
    }
  ]

  return (
    <div className="min-h-screen animated-bg">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 flex items-center justify-center mb-8">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                WaveBuild Infra
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Reimagining construction with smart, green, and tech-integrated buildings across India.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Building the infrastructure of tomorrow with sustainable practices and cutting-edge technology.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glow-button"
              >
                Discover WaveBuild Projects
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glow-border rounded-2xl p-8 bg-gradient-to-br from-gray-900/50 to-black/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">50+</div>
                    <div className="text-gray-400 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">₹500Cr+</div>
                    <div className="text-gray-400 text-sm">Project Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">15+</div>
                    <div className="text-gray-400 text-sm">Cities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
                    <div className="text-gray-400 text-sm">Green Certified</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Construction Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive infrastructure solutions for modern India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover glow-border rounded-xl p-8"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-rose-500 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Build the Future with Us</h2>
            <p className="text-xl text-gray-400 mb-8">
              Partner with us for your next construction project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glow-button"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-black transition-all duration-300"
              >
                Get Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
