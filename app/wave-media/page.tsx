'use client'

import { motion } from 'framer-motion'
import { Newspaper, Globe, Smartphone, Users, TrendingUp, MapPin } from 'lucide-react'
import Header from '../../components/Header'

export default function WaveMediaPage() {
  const features = [
    {
      icon: Globe,
      title: "AI-Personalized Newsfeeds",
      description: "Advanced algorithms curate news based on user preferences, location, and reading patterns"
    },
    {
      icon: Users,
      title: "Local Reporter Network",
      description: "Extensive network of regional journalists covering hyperlocal stories across India"
    },
    {
      icon: Smartphone,
      title: "Mobile-First News Apps",
      description: "Optimized mobile experience with offline reading and push notifications"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      description: "Live tracking of news trends and reader engagement across different regions"
    },
    {
      icon: MapPin,
      title: "Hyperlocal Coverage",
      description: "District and city-level news coverage in multiple Indian languages"
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
              <div className="w-20 h-20 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-8">
                <Newspaper className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Wave Media
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                India-first, multilingual digital news aggregator and platform for regional journalism.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Democratizing news consumption and creation across India's diverse linguistic and cultural landscape.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glow-button"
              >
                Visit Wave Media
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
                    <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                    <div className="text-gray-400 text-sm">Languages Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                    <div className="text-gray-400 text-sm">Local Reporters</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">50M+</div>
                    <div className="text-gray-400 text-sm">Monthly Readers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">28</div>
                    <div className="text-gray-400 text-sm">States Covered</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Platform Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technology meets grassroots journalism to deliver news that matters
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover glow-border rounded-xl p-8"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              To bridge the information gap between urban and rural India by providing accessible, 
              accurate, and locally relevant news content in native languages.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="pulse-glow rounded-lg p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Accessibility</h3>
                <p className="text-gray-400">Making news accessible to every Indian, regardless of language or location</p>
              </div>
              <div className="pulse-glow rounded-lg p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Accuracy</h3>
                <p className="text-gray-400">Fact-checked, verified news from trusted local sources</p>
              </div>
              <div className="pulse-glow rounded-lg p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Relevance</h3>
                <p className="text-gray-400">Hyperlocal content that matters to specific communities</p>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-6 gradient-text">Join the News Revolution</h2>
            <p className="text-xl text-gray-400 mb-8">
              Be part of India's most comprehensive multilingual news platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glow-button"
              >
                Download App
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Partner with Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 