'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Brain, Code, Sun, Building, Newspaper, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Header from '../components/Header'
import InstancingHero from '../components/instancing-hero'


const industries = [
  {
    name: "News Media",
    description: "India-first, multilingual digital news aggregator and platform for regional journalism.",
    features: ["AI-personalized newsfeeds", "Local reporter network", "Mobile-first news apps"],
    icon: Newspaper,
    href: "/news-media",
    gradient: "from-red-500 to-rose-500",
    color: "red"
  },
  {
    name: "AI & Tech Services",
    description: "AI innovation lab delivering GPT integrations, enterprise automation, and custom AI products for India.",
    features: ["AI automation for GovTech, FinTech, EduTech", "Chatbots and NLP tools", "Data & ML strategy"],
    icon: Brain,
    href: "/ai-tech-services",
    gradient: "from-purple-500 to-pink-500",
    color: "purple"
  },
  {
    name: "Niche SaaS Products",
    description: "We build industry-specific SaaS solutions that fill technology gaps in underserved Indian sectors.",
    features: ["EduPro – Education SaaS", "LegalMate – Legal automation SaaS", "SolarSaaS Suite – SaaS for solar EPCs"],
    icon: Code,
    href: "/niche-saas",
    gradient: "from-green-500 to-emerald-500",
    color: "green"
  },
  {
    name: "Solar Startups",
    description: "Democratizing solar energy through agrivoltaics, community solar, and tech-enabled energy platforms.",
    features: ["Investor-driven solar projects", "Solar-as-a-service models", "Solar grid monitoring SaaS"],
    icon: Sun,
    href: "/solar-startups",
    gradient: "from-yellow-500 to-orange-500",
    color: "yellow"
  },
  {
    name: "Building Construction",
    description: "Reimagining construction with smart, green, and tech-integrated buildings across India.",
    features: ["Commercial infra development", "Smart home tech integration", "Solar-ready building design"],
    icon: Building,
    href: "/building-construction",
    gradient: "from-red-500 to-rose-500",
    color: "red"
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <InstancingHero />



      {/* Industries Grid */}
      <section id="industries" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">Our Industries</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-rose-500 mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Five key industries driving transformation across critical sectors of the Indian economy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card-hover glow-border rounded-2xl p-8 group relative overflow-hidden ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${industry.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
                    {industry.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm lg:text-base">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={industry.href}
                    className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-300 group-hover:translate-x-2 transform font-medium"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/30 to-black/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-rose-900/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5", label: "Key Industries", color: "from-red-400 to-rose-400" },
              { number: "50+", label: "Team Members", color: "from-purple-400 to-pink-400" },
              { number: "₹100Cr+", label: "Portfolio Value", color: "from-green-400 to-emerald-400" },
              { number: "10+", label: "Cities Served", color: "from-yellow-400 to-orange-400" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pulse-glow p-6 lg:p-8"
              >
                <div className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-rose-900/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                Ready to Shape the Future?
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-rose-500 mx-auto rounded-full"></div>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              Join us in building the next generation of Indian businesses across these transformative industries
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/about" className="glow-button px-8 py-4 text-lg font-semibold">
                  Explore Opportunities
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300 font-semibold text-lg"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Future Wave Labs</h3>
              <p className="text-gray-400 max-w-md leading-relaxed">
                Accelerating India&apos;s future through innovation, intelligence, and impact across multiple industries.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Industries</h4>
              <ul className="space-y-2">
                {industries.map((industry) => (
                  <li key={industry.name}>
                    <Link href={industry.href} className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-red-400 transition-colors duration-300">About</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Careers</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Future Wave Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg z-50 hover:shadow-red-500/25 transition-all duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronDown className="w-6 h-6 rotate-180 text-white" />
      </motion.button>
    </div>
  )
}
