"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Network, Code, Database, Monitor, Cloud, Shield } from "lucide-react"

export default function EngineerSystemIntegratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">System Integration Engineering</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Expert system integration services to seamlessly connect, optimize, and scale your AI security
                infrastructure with enterprise-grade reliability
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Start Integration Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-300 text-white hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  View Integration Portfolio
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "1000+", label: "Systems Integrated" },
                { number: "99.99%", label: "Uptime Achieved" },
                { number: "200+", label: "Technology Partners" },
                { number: "24/7", label: "Monitoring & Support" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-white"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Integration Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end system integration services that connect disparate technologies into unified, efficient, and
                scalable solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Network,
                  title: "Network Integration",
                  description:
                    "Seamless connectivity solutions with advanced networking protocols, security layers, and performance optimization",
                  features: ["Multi-protocol support", "Network security", "Load balancing", "Redundancy planning"],
                },
                {
                  icon: Database,
                  title: "Data Integration",
                  description:
                    "Unified data management systems with real-time synchronization, data quality assurance, and scalable architecture",
                  features: ["Real-time sync", "Data quality checks", "ETL processes", "Scalable storage"],
                },
                {
                  icon: Code,
                  title: "API Development",
                  description:
                    "Custom integration interfaces with RESTful APIs, microservices architecture, and comprehensive documentation",
                  features: ["RESTful APIs", "Microservices", "API documentation", "Version control"],
                },
                {
                  icon: Monitor,
                  title: "System Monitoring",
                  description:
                    "Real-time performance tracking with advanced analytics, predictive maintenance, and automated alerting",
                  features: [
                    "Real-time monitoring",
                    "Predictive analytics",
                    "Automated alerts",
                    "Performance optimization",
                  ],
                },
                {
                  icon: Cloud,
                  title: "Cloud Integration",
                  description:
                    "Hybrid and multi-cloud integration solutions with seamless migration, security, and cost optimization",
                  features: ["Multi-cloud support", "Hybrid solutions", "Cloud migration", "Cost optimization"],
                },
                {
                  icon: Shield,
                  title: "Security Integration",
                  description:
                    "Comprehensive security layer integration with identity management, encryption, and compliance frameworks",
                  features: [
                    "Identity management",
                    "End-to-end encryption",
                    "Compliance frameworks",
                    "Security monitoring",
                  ],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <service.icon className="w-12 h-12 text-blue-400 mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Process */}
        <section className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Integration Methodology</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven approach to system integration that ensures seamless connectivity and optimal performance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "Comprehensive analysis of existing systems and requirements",
                },
                {
                  step: "02",
                  title: "Design",
                  description: "Custom integration architecture and technical specifications",
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Build and configure integration components and interfaces",
                },
                {
                  step: "04",
                  title: "Testing",
                  description: "Rigorous testing and validation of all integration points",
                },
                {
                  step: "05",
                  title: "Deployment",
                  description: "Seamless deployment with monitoring and ongoing support",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{process.title}</h3>
                  <p className="text-gray-300 text-sm">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Technology Expertise</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with leading technologies and platforms to deliver robust integration solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: "Cloud Platforms",
                  technologies: ["AWS", "Microsoft Azure", "Google Cloud", "IBM Cloud", "Oracle Cloud"],
                },
                {
                  category: "Integration Tools",
                  technologies: ["MuleSoft", "Apache Kafka", "RabbitMQ", "Apache Camel", "Dell Boomi"],
                },
                {
                  category: "Databases",
                  technologies: ["PostgreSQL", "MongoDB", "Oracle", "SQL Server", "Redis"],
                },
                {
                  category: "Security",
                  technologies: ["OAuth 2.0", "SAML", "JWT", "SSL/TLS", "PKI"],
                },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
                >
                  <h3 className="text-lg font-bold text-white mb-4">{tech.category}</h3>
                  <ul className="space-y-2">
                    {tech.technologies.map((technology, idx) => (
                      <li key={idx} className="text-gray-300 text-sm">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Integration Success Stories</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Global Manufacturing Integration",
                  challenge: "Integrate 50+ legacy systems across 15 countries",
                  solution: "Implemented microservices architecture with API gateway",
                  results: ["99.9% system uptime", "60% faster data processing", "50% reduction in integration costs"],
                },
                {
                  title: "Financial Services Modernization",
                  challenge: "Modernize core banking systems while maintaining compliance",
                  solution: "Phased integration approach with zero-downtime deployment",
                  results: [
                    "100% compliance maintained",
                    "40% performance improvement",
                    "Real-time transaction processing",
                  ],
                },
              ].map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                  <div className="mb-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Integrate Your Systems?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our expert engineers design and implement a seamless integration solution tailored to your specific
                requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Start Integration Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Download Integration Guide
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
