'use client'

import { motion } from 'framer-motion'
import { Briefcase, Users, TrendingUp, Award, MapPin, Clock } from 'lucide-react'
import Header from '../../components/Header'

export default function CareersPage() {
  const openings = [
    {
      title: "Senior AI Engineer",
      company: "FutureMind AI",
      location: "Bangalore",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["Python", "TensorFlow", "NLP", "Machine Learning"]
    },
    {
      title: "Full Stack Developer",
      company: "WaveSaaS",
      location: "Mumbai",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      title: "Solar Project Manager",
      company: "SolarNest",
      location: "Delhi",
      type: "Full-time",
      experience: "4-6 years",
      skills: ["Project Management", "Solar Technology", "Team Leadership"]
    },
    {
      title: "Content Editor",
      company: "Wave Media",
      location: "Pune",
      type: "Full-time",
      experience: "2-3 years",
      skills: ["Content Writing", "Hindi/English", "Digital Media"]
    },
    {
      title: "Construction Manager",
      company: "WaveBuild Infra",
      location: "Hyderabad",
      type: "Full-time",
      experience: "5-8 years",
      skills: ["Construction Management", "Green Building", "Team Leadership"]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Rapid career advancement in a fast-growing company"
    },
    {
      icon: Award,
      title: "Competitive Compensation",
      description: "Industry-leading salaries with performance bonuses"
    },
    {
      icon: Users,
      title: "Learning & Development",
      description: "Continuous learning opportunities and skill development programs"
    },
    {
      icon: MapPin,
      title: "Flexible Work",
      description: "Hybrid work options and flexible schedules"
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
              Join Our Mission
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Be part of building the future of India across technology, energy, media, and infrastructure sectors.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glow-button"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Why Work With Us?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join a team that's shaping India's future across multiple industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Open Positions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Exciting opportunities across all our business units
            </p>
          </motion.div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover glow-border rounded-xl p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {job.company}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full lg:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </div>
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
            <h2 className="text-4xl font-bold mb-6 gradient-text">Don't See Your Role?</h2>
            <p className="text-xl text-gray-400 mb-8">
              We're always looking for exceptional talent. Send us your resume and let's talk!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glow-button"
            >
              Send Your Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
