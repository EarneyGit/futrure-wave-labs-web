'use client'

import { motion } from 'framer-motion'
import { Code, GraduationCap, Scale, Sun, Users, Zap, BarChart, Shield } from 'lucide-react'
import Header from '../../components/Header'

export default function WaveSaaSPage() {
  const products = [
    {
      icon: GraduationCap,
      name: "EduPro",
      description: "Comprehensive education management SaaS for schools, colleges, and coaching institutes",
      features: ["Student Management", "Online Classes", "Assessment Tools", "Parent Portal"],
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Scale,
      name: "LegalMate",
      description: "Legal automation SaaS streamlining case management and document generation",
      features: ["Case Tracking", "Document Automation", "Client Portal", "Billing Integration"],
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Sun,
      name: "SolarSaaS Suite",
      description: "Complete SaaS platform for solar EPCs and O&M companies",
      features: ["Project Management", "Performance Monitoring", "Maintenance Scheduling", "ROI Analytics"],
      gradient: "from-yellow-500 to-orange-500"
    }
  ]

  const features = [
    {
      icon: Users,
      title: "Industry-Specific Solutions",
      description: "Tailored SaaS products designed for unique challenges in underserved Indian sectors"
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Quick setup and onboarding with minimal technical expertise required"
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Built-in reporting and analytics to drive data-informed decisions"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with compliance to Indian data protection regulations"
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
              <div className="w-20 h-20 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-8">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                WaveSaaS
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We build industry-specific SaaS solutions that fill technology gaps in underserved Indian sectors.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Empowering traditional industries with modern software solutions designed for the Indian market.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glow-button"
              >
                Browse Our SaaS Products
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
                    <div className="text-3xl font-bold text-green-400 mb-2">25+</div>
                    <div className="text-gray-400 text-sm">SaaS Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">10K+</div>
                    <div className="text-gray-400 text-sm">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                    <div className="text-gray-400 text-sm">Industries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">99.5%</div>
                    <div className="text-gray-400 text-sm">Customer Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Products</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Flagship SaaS solutions transforming key sectors of the Indian economy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover glow-border rounded-xl p-8"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${product.gradient} flex items-center justify-center mb-6`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{product.name}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{product.description}</p>
                
                <div className="space-y-2 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Why Choose WaveSaaS?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built for India, by Indians - understanding local needs and challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Industries We Serve</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized solutions across diverse sectors of the Indian economy
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Education", "Legal Services", "Solar Energy", "Healthcare", "Agriculture",
              "Manufacturing", "Retail", "Real Estate", "Logistics", "Finance"
            ].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pulse-glow rounded-lg p-6 text-center"
              >
                <div className="text-green-400 font-semibold">{industry}</div>
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
            <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Digitize Your Business?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of businesses already using our SaaS solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glow-button"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300"
              >
                Request Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 