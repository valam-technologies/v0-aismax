"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { CheckCircle, Brain, Users, Award, Target, TrendingUp, Shield } from "lucide-react"

export default function ConsultingEngineer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">AI Security Consulting Engineers</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Expert AI security consulting and engineering solutions with certified professionals delivering tailored
                strategies for enterprise-grade protection
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Schedule Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-300 text-white hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "15+", label: "Years Experience" },
                { number: "24/7", label: "Support Available" },
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

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Consulting Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our certified engineers provide end-to-end AI security consulting with proven methodologies and industry
                best practices
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Security Risk Assessment",
                  description:
                    "Comprehensive evaluation of your current security posture with detailed vulnerability analysis and risk mitigation strategies",
                  features: ["Threat modeling", "Vulnerability scanning", "Risk prioritization", "Compliance audit"],
                },
                {
                  icon: Brain,
                  title: "AI System Architecture",
                  description:
                    "Custom AI security architecture design optimized for your specific requirements and industry standards",
                  features: ["System design", "Technology selection", "Scalability planning", "Integration strategy"],
                },
                {
                  icon: Target,
                  title: "Implementation Planning",
                  description:
                    "Detailed project roadmaps with timeline, resource allocation, and milestone tracking for successful deployment",
                  features: ["Project planning", "Resource allocation", "Timeline management", "Quality assurance"],
                },
                {
                  icon: TrendingUp,
                  title: "Performance Optimization",
                  description:
                    "Continuous monitoring and optimization of AI security systems for maximum efficiency and effectiveness",
                  features: ["Performance tuning", "System monitoring", "Optimization strategies", "ROI analysis"],
                },
                {
                  icon: Users,
                  title: "Team Training & Support",
                  description:
                    "Comprehensive training programs and ongoing support to ensure your team can effectively manage AI security systems",
                  features: ["Technical training", "Best practices", "Documentation", "Ongoing support"],
                },
                {
                  icon: Award,
                  title: "Compliance & Certification",
                  description:
                    "Ensure your AI security systems meet industry standards and regulatory requirements with our compliance expertise",
                  features: [
                    "Regulatory compliance",
                    "Industry standards",
                    "Certification support",
                    "Audit preparation",
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
                  <service.icon className="h-12 w-12 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-blue-400" />
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Consulting Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful AI security implementation from initial assessment to
                ongoing optimization
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Assessment",
                  description: "Comprehensive analysis of current systems and requirements",
                },
                {
                  step: "02",
                  title: "Strategy Development",
                  description: "Custom AI security strategy aligned with business objectives",
                },
                {
                  step: "03",
                  title: "Implementation Support",
                  description: "Hands-on guidance throughout the deployment process",
                },
                {
                  step: "04",
                  title: "Optimization & Support",
                  description: "Continuous monitoring and performance optimization",
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
                  <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                  <p className="text-gray-300">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Client Success Stories</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "The consulting team transformed our security infrastructure with their AI expertise. We've seen a 75% reduction in false positives and significantly improved threat detection.",
                  author: "Sarah Johnson",
                  title: "CTO, TechCorp Industries",
                  company: "Fortune 500 Manufacturing",
                },
                {
                  quote:
                    "Their strategic approach and technical expertise helped us implement a comprehensive AI security solution that scales with our business growth.",
                  author: "Michael Chen",
                  title: "Security Director",
                  company: "Global Financial Services",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
                >
                  <p className="text-gray-300 text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.author}</div>
                      <div className="text-gray-400">{testimonial.title}</div>
                      <div className="text-gray-500 text-sm">{testimonial.company}</div>
                    </div>
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Security?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get expert AI security consulting tailored to your specific needs. Schedule a consultation with our
                certified engineers today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Schedule Free Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Download Service Guide
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
