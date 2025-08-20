"use client"

import { motion } from "framer-motion"
import { Network, Code, Database, Monitor, Zap, Shield, Cpu, Cloud } from "lucide-react"
import Footer from "../../components/Footer"

export default function TechnologyIntegrationPage() {
  const integrationServices = [
    {
      icon: Network,
      title: "Network Architecture",
      description:
        "Design and implement robust network infrastructures that seamlessly connect all your AI systems and devices.",
      features: ["High-performance networking", "Scalable architecture", "Security-first design", "24/7 monitoring"],
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Unify disparate data sources into cohesive, intelligent systems that drive actionable insights.",
      features: ["Real-time data processing", "Multi-source integration", "Data quality assurance", "Analytics ready"],
    },
    {
      icon: Code,
      title: "API Development",
      description: "Create custom APIs and integration interfaces that enable seamless communication between systems.",
      features: [
        "RESTful API design",
        "GraphQL implementation",
        "Microservices architecture",
        "Documentation included",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description:
        "Migrate and integrate your systems with leading cloud solutions for enhanced scalability and performance.",
      features: ["Multi-cloud strategy", "Hybrid deployments", "Cost optimization", "Security compliance"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "System Assessment",
      description: "Comprehensive analysis of your current technology landscape and integration requirements",
      icon: Monitor,
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Custom integration architecture tailored to your specific business needs and scalability goals",
      icon: Cpu,
    },
    {
      step: "03",
      title: "Implementation",
      description: "Expert deployment with minimal disruption to your existing operations and workflows",
      icon: Zap,
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring and optimization to ensure peak performance and reliability",
      icon: Shield,
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
              Technology Integration Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Seamlessly connect, optimize, and scale your technology infrastructure with our expert integration
              services that transform complex systems into unified, intelligent solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Start Integration Project
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Integration Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive integration services ensure your technology ecosystem works as one cohesive, intelligent
              system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrationServices.map((service, index) => (
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

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Integration Process</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A proven methodology that ensures seamless integration with minimal disruption to your operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 p-8 rounded-2xl border border-gray-800 text-center group hover:border-gray-700 transition-colors"
              >
                <div className="bg-white/10 p-4 rounded-lg inline-flex mb-6 group-hover:bg-white/20 transition-colors">
                  <phase.icon className="w-8 h-8 text-white" />
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Integrate Your Systems?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our experts design and implement a custom integration solution that transforms your technology
              infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Download Integration Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
