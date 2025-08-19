"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Camera, Eye, AlertTriangle, Cloud, Shield, BarChart3 } from "lucide-react"

export default function SurveillancePage() {
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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Advanced AI Surveillance Systems</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Next-generation AI-powered surveillance solutions for comprehensive security monitoring, intelligent
                threat detection, and automated response systems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Deploy Surveillance System
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-300 text-white hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Watch Live Demo
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
                { number: "99.8%", label: "Detection Accuracy" },
                { number: "<1s", label: "Response Time" },
                { number: "10,000+", label: "Cameras Managed" },
                { number: "24/7", label: "Monitoring Coverage" },
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

        {/* Surveillance Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Surveillance Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered surveillance technology that provides intelligent monitoring, real-time threat
                detection, and automated security responses
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Camera,
                  title: "Smart AI Cameras",
                  description:
                    "Intelligent video analytics with object detection, behavior analysis, and automated tracking capabilities",
                  features: [
                    "4K Ultra HD resolution",
                    "Night vision technology",
                    "Weather-resistant design",
                    "Edge AI processing",
                  ],
                },
                {
                  icon: Eye,
                  title: "Facial Recognition",
                  description:
                    "Advanced biometric identification with real-time matching, access control integration, and privacy compliance",
                  features: [
                    "99.9% accuracy rate",
                    "Real-time processing",
                    "Privacy protection",
                    "Access control integration",
                  ],
                },
                {
                  icon: AlertTriangle,
                  title: "Threat Detection",
                  description:
                    "Intelligent threat detection with behavioral analysis, anomaly detection, and automated alert systems",
                  features: ["Behavioral analysis", "Anomaly detection", "Real-time alerts", "Automated responses"],
                },
                {
                  icon: Cloud,
                  title: "Cloud Storage",
                  description:
                    "Secure, scalable video data management with intelligent archiving, search capabilities, and compliance features",
                  features: ["Unlimited storage", "Intelligent search", "Data encryption", "Compliance ready"],
                },
                {
                  icon: Shield,
                  title: "Perimeter Security",
                  description:
                    "Advanced perimeter protection with virtual fencing, intrusion detection, and automated response protocols",
                  features: ["Virtual fencing", "Intrusion detection", "Automated alerts", "Integration ready"],
                },
                {
                  icon: BarChart3,
                  title: "Analytics Dashboard",
                  description:
                    "Comprehensive analytics and reporting with real-time insights, trend analysis, and performance metrics",
                  features: ["Real-time insights", "Custom reports", "Trend analysis", "Performance metrics"],
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <feature.icon className="w-12 h-12 text-blue-400 mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment Process */}
        <section className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Surveillance Deployment Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to deploying comprehensive surveillance systems with minimal disruption
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Site Assessment",
                  description: "Comprehensive security assessment and camera placement planning",
                },
                {
                  step: "02",
                  title: "System Design",
                  description: "Custom surveillance architecture with optimal coverage and performance",
                },
                {
                  step: "03",
                  title: "Installation",
                  description: "Professional installation with minimal business disruption",
                },
                {
                  step: "04",
                  title: "Training & Support",
                  description: "Comprehensive training and ongoing technical support",
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

        {/* Industry Applications */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Industry-Specific Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored surveillance solutions designed for specific industry requirements and compliance standards
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Retail & Commercial",
                  description: "Loss prevention, customer analytics, and staff monitoring",
                  benefits: ["85% reduction in theft", "Improved customer insights", "Enhanced staff productivity"],
                },
                {
                  title: "Manufacturing",
                  description: "Safety monitoring, quality control, and operational efficiency",
                  benefits: ["40% fewer safety incidents", "Improved quality control", "Operational optimization"],
                },
                {
                  title: "Healthcare",
                  description: "Patient safety, asset protection, and HIPAA compliance",
                  benefits: ["Enhanced patient safety", "Asset protection", "Full HIPAA compliance"],
                },
                {
                  title: "Education",
                  description: "Campus security, access control, and emergency response",
                  benefits: ["Safer campus environment", "Controlled access", "Emergency preparedness"],
                },
                {
                  title: "Transportation",
                  description: "Traffic monitoring, incident detection, and passenger safety",
                  benefits: ["Improved traffic flow", "Faster incident response", "Enhanced passenger safety"],
                },
                {
                  title: "Government",
                  description: "Public safety, critical infrastructure protection, and compliance",
                  benefits: ["Enhanced public safety", "Infrastructure protection", "Regulatory compliance"],
                },
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{industry.title}</h3>
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Surveillance Packages</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible surveillance solutions designed to meet different security requirements and budgets
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Essential",
                  price: "$2,500",
                  period: "per month",
                  description: "Basic surveillance for small businesses",
                  features: [
                    "Up to 8 cameras",
                    "720p HD recording",
                    "Basic analytics",
                    "Cloud storage (30 days)",
                    "Email alerts",
                    "Business hours support",
                  ],
                },
                {
                  name: "Professional",
                  price: "$5,000",
                  period: "per month",
                  description: "Advanced surveillance for medium businesses",
                  features: [
                    "Up to 32 cameras",
                    "4K Ultra HD recording",
                    "AI analytics",
                    "Cloud storage (90 days)",
                    "Real-time alerts",
                    "24/7 support",
                    "Mobile app",
                  ],
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "pricing",
                  description: "Comprehensive surveillance for large organizations",
                  features: [
                    "Unlimited cameras",
                    "4K+ recording",
                    "Advanced AI analytics",
                    "Unlimited cloud storage",
                    "Custom integrations",
                    "Dedicated support",
                    "On-site training",
                  ],
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gray-800/50 p-8 rounded-xl border ${plan.popular ? "border-blue-500" : "border-gray-700"} relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "border border-gray-600 text-white hover:bg-gray-800"
                    }`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </motion.button>
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
              <h2 className="text-4xl font-bold text-white mb-6">Secure Your Premises Today</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Deploy advanced AI surveillance systems that provide comprehensive security monitoring and intelligent
                threat detection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Schedule Site Assessment
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Watch Live Demo
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
