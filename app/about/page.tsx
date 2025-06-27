'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Users, Award, TrendingUp, Globe } from 'lucide-react'
import Header from '../../components/Header'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We prioritize cutting-edge solutions that address real-world challenges in the Indian market"
    },
    {
      icon: Users,
      title: "People Centric",
      description: "Our solutions are designed with the end user in mind, ensuring accessibility and usability"
    },
    {
      icon: Globe,
      title: "Local Impact",
      description: "Building businesses that create meaningful impact in local communities across India"
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "Long-term thinking with sustainable business practices and environmental responsibility"
    }
  ]

  return (
    <div className="min-h-screen animated-bg">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              About Future Wave Labs
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are a visionary Indian parent company managing disruptive businesses across multiple sectors, 
              accelerating India's future through innovation, intelligence, and impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glow-border rounded-2xl p-8"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                To be India's leading innovation catalyst, creating businesses that solve critical challenges 
                in technology, energy, media, and infrastructure while generating sustainable value for all stakeholders.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glow-border rounded-2xl p-8"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                To incubate, build, and scale innovative businesses that address India's unique challenges 
                through technology, sustainable practices, and deep market understanding.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2030 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 gradient-text">Vision 2030</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              By 2030, we aim to be operating 25+ businesses across 10+ sectors, 
              directly impacting 100 million Indians through our products and services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="pulse-glow rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
                <div className="text-gray-400">Active Businesses</div>
              </div>
              <div className="pulse-glow rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-400">Industry Sectors</div>
              </div>
              <div className="pulse-glow rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100M+</div>
                <div className="text-gray-400">Lives Impacted</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
