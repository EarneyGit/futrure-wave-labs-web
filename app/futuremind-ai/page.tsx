'use client'

import { motion } from 'framer-motion'
import { Brain, Bot, Database, Zap, Code, Cpu, Network, Shield } from 'lucide-react'
import Header from '../../components/Header'

export default function FutureMindAIPage() {
  const services = [
    {
      icon: Bot,
      title: "AI Automation for GovTech",
      description: "Streamlining government processes with intelligent automation and citizen service chatbots"
    },
    {
      icon: Database,
      title: "FinTech AI Solutions",
      description: "Risk assessment, fraud detection, and personalized financial services powered by AI"
    },
    {
      icon: Code,
      title: "EduTech Innovation",
      description: "Personalized learning platforms and AI tutors for Indian educational institutions"
    },
    {
      icon: Network,
      title: "Chatbots & NLP Tools",
      description: "Multilingual conversational AI supporting 15+ Indian languages"
    },
    {
      icon: Cpu,
      title: "Data & ML Strategy",
      description: "End-to-end machine learning implementation and data strategy consulting"
    },
    {
      icon: Shield,
      title: "Enterprise AI Security",
      description: "Secure AI deployment with privacy-first architecture for Indian enterprises"
    }
  ]

  const technologies = [
    "GPT Integration", "Computer Vision", "Natural Language Processing", 
    "Machine Learning", "Deep Learning", "Predictive Analytics",
    "Robotic Process Automation", "AI Ethics & Governance"
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
              <div className="w-20 h-20 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-8">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                FutureMind AI
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                AI innovation lab delivering GPT integrations, enterprise automation, and custom AI products for India.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Transforming Indian businesses with cutting-edge artificial intelligence solutions tailored for local needs.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glow-button"
              >
                Explore FutureMind AI
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
                    <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
                    <div className="text-gray-400 text-sm">AI Models Deployed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                    <div className="text-gray-400 text-sm">Enterprise Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                    <div className="text-gray-400 text-sm">Languages Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                    <div className="text-gray-400 text-sm">Uptime SLA</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">AI Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI solutions designed for the unique challenges of Indian businesses
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
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Technology Stack</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leveraging the latest in AI and machine learning technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pulse-glow rounded-lg p-4 text-center"
              >
                <div className="text-purple-400 font-semibold">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real impact across government, finance, and education sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "State Government Portal",
                description: "Reduced citizen service time by 70% with AI-powered document processing",
                impact: "2M+ Citizens Served",
                sector: "GovTech"
              },
              {
                title: "Banking Fraud Detection",
                description: "Prevented ₹500Cr+ in fraudulent transactions with real-time AI monitoring",
                impact: "99.8% Accuracy Rate",
                sector: "FinTech"
              },
              {
                title: "Educational AI Tutor",
                description: "Improved student performance by 40% with personalized learning paths",
                impact: "100K+ Students",
                sector: "EduTech"
              }
            ].map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover glow-border rounded-xl p-8"
              >
                <div className="text-sm text-purple-400 font-semibold mb-2">{study.sector}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{study.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{study.impact}</div>
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
            <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Transform with AI?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's build the future of your business with intelligent automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glow-button"
              >
                Start Your AI Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 