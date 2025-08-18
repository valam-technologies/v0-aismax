"use client"

import { motion } from "framer-motion"
import { Brain, Target, TrendingUp, Users, Code, Database, Shield } from "lucide-react"

export default function AISolutionsArchitecturePage() {
  const architectureServices = [
    {
      icon: Brain,
      title: "AI Strategy & Planning",
      description: "Comprehensive AI roadmaps that align with your business objectives and drive measurable outcomes.",
      features: ["Strategic planning", "ROI analysis", "Risk assessment", "Implementation timeline"],
    },
    {
      icon: Target,
      title: "Solution Design",
      description:
        "Custom AI architectures designed for your specific use cases, scalability requirements, and performance goals.",
      features: ["Custom architecture", "Scalable design", "Performance optimization", "Future-ready solutions"],
    },
    {
      icon: Code,
      title: "Technical Implementation",
      description: "Expert development and deployment of AI solutions with best practices and industry standards.",
      features: ["Clean code practices", "Automated testing", "CI/CD pipelines", "Documentation"],
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Ensure your AI solutions meet the highest security standards and regulatory compliance requirements.",
      features: ["Data protection", "Privacy compliance", "Security audits", "Risk mitigation"],
    },
  ]

  const expertise = [
    {
      title: "Machine Learning Architecture",
      description: "Design and implement ML pipelines that scale with your data and business needs.",
      icon: Database,
    },
    {
      title: "AI Model Development",
      description: "Create custom AI models tailored to your specific business challenges and requirements.",
      icon: Brain,
    },
    {
      title: "Data Engineering",
      description: "Build robust data infrastructure that powers your AI initiatives with clean, reliable data.",
      icon: TrendingUp,
    },
    {
      title: "Team Training & Support",
      description: "Empower your team with the knowledge and skills needed to maintain and evolve AI solutions.",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              AI Solutions Architecture
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your business with expertly designed AI solutions that deliver measurable results and
              sustainable competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Start AI Project
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                View AI Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive AI Architecture Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From strategy to implementation, we provide end-to-end AI solutions that drive innovation and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architectureServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors group"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 group-hover:bg-white/20 transition-colors">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our AI Expertise</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Deep technical expertise across the full spectrum of AI technologies and implementation approaches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 p-8 rounded-2xl border border-gray-800 text-center group hover:border-gray-700 transition-colors"
              >
                <div className="bg-white/10 p-4 rounded-lg inline-flex mb-6 group-hover:bg-white/20 transition-colors">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{area.title}</h3>
                <p className="text-gray-400 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our AI Development Process</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A proven methodology that ensures successful AI implementation from concept to production.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Deep dive into your business needs, data landscape, and AI opportunities",
              },
              {
                step: "02",
                title: "Architecture Design",
                description: "Create comprehensive AI solution architecture tailored to your requirements",
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build and rigorously test AI models and systems for optimal performance",
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Deploy solutions with ongoing monitoring, optimization, and support",
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 text-center group hover:border-gray-700 transition-colors"
              >
                <div className="text-3xl font-bold text-white mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{phase.title}</h3>
                <p className="text-gray-400 leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-900 to-black p-12 rounded-3xl border border-gray-800"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your AI Solution?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our AI architects design and implement a solution that transforms your business capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Schedule AI Consultation
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Download AI Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
