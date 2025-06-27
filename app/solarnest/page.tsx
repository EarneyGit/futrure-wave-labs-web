'use client'

import { motion } from 'framer-motion'
import { Sun, Leaf, TrendingUp, Users, Zap, BarChart, MapPin, Shield } from 'lucide-react'
import Header from '../../components/Header'

export default function SolarNestPage() {
  const services = [
    {
      icon: TrendingUp,
      title: "Investor-Driven Solar Projects",
      description: "Connecting investors with high-yield solar projects across India with guaranteed returns"
    },
    {
      icon: Users,
      title: "Solar-as-a-Service Models",
      description: "Zero upfront cost solar installations for residential and commercial customers"
    },
    {
      icon: BarChart,
      title: "Solar Grid Monitoring SaaS",
      description: "Real-time monitoring and analytics platform for solar installations and performance"
    },
    {
      icon: Leaf,
      title: "Agrivoltaics Solutions",
      description: "Innovative dual-use systems combining solar energy generation with agriculture"
    },
    {
      icon: MapPin,
      title: "Community Solar Programs",
      description: "Shared solar installations enabling multiple households to benefit from clean energy"
    },
    {
      icon: Shield,
      title: "Solar Insurance & Warranties",
      description: "Comprehensive protection plans for solar investments and installations"
    }
  ]

  const stats = [
    { number: "500MW+", label: "Solar Capacity Deployed" },
    { number: "₹2000Cr+", label: "Investment Facilitated" },
    { number: "50K+", label: "Households Powered" },
    { number: "1M+", label: "Tons CO₂ Saved" }
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
              <div className="w-20 h-20 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-8">
                <Sun className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                SolarNest
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Democratizing solar energy through agrivoltaics, community solar, and tech-enabled energy platforms.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Accelerating India's transition to clean energy with innovative financing and technology solutions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glow-button"
              >
                See SolarNest Ventures
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
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Solar Solutions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive solar energy solutions for every need and budget
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
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Environmental Impact</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Creating a sustainable future for India through clean energy adoption
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Carbon Footprint Reduction",
                description: "Our solar installations have prevented over 1 million tons of CO₂ emissions",
                impact: "1M+ Tons CO₂ Saved"
              },
              {
                icon: Zap,
                title: "Clean Energy Generation",
                description: "Generating clean electricity equivalent to powering 50,000+ households",
                impact: "500MW+ Capacity"
              },
              {
                icon: Users,
                title: "Rural Employment",
                description: "Created sustainable employment opportunities in rural areas through solar projects",
                impact: "5K+ Jobs Created"
              }
            ].map((impact, index) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-6">
                  <impact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{impact.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{impact.description}</p>
                <div className="text-2xl font-bold text-yellow-400">{impact.impact}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Smart Solar Technology</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leveraging IoT, AI, and advanced analytics for optimal solar performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white">Advanced Monitoring Platform</h3>
              <div className="space-y-4">
                {[
                  "Real-time performance tracking",
                  "Predictive maintenance alerts",
                  "Weather-based optimization",
                  "Remote diagnostics and control",
                  "ROI and savings analytics"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glow-border rounded-2xl p-8 bg-gradient-to-br from-gray-900/50 to-black/50"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">99.2%</div>
                <div className="text-gray-400 mb-6">System Uptime</div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
                    <div className="text-gray-400 text-sm">Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">15%</div>
                    <div className="text-gray-400 text-sm">Efficiency Boost</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6 gradient-text">Join the Solar Revolution</h2>
            <p className="text-xl text-gray-400 mb-8">
              Be part of India's clean energy future with guaranteed returns and environmental impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glow-button"
              >
                Invest in Solar
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                Get Solar Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 