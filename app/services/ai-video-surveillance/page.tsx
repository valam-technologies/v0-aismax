"use client"
import { motion } from "framer-motion"
import { Camera, Eye, Shield, Zap, ArrowRight } from "lucide-react"

export default function AIVideoSurveillance() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Camera className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              AI Video Surveillance
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your security cameras into intelligent monitoring systems with advanced AI that detects threats,
              analyzes behavior, and protects your assets with unprecedented accuracy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Real-time Object Detection",
                description:
                  "Advanced AI algorithms identify and track objects, people, and vehicles in real-time with 99.9% accuracy.",
              },
              {
                icon: Shield,
                title: "Behavioral Analysis",
                description:
                  "Intelligent behavior recognition detects suspicious activities and potential security threats automatically.",
              },
              {
                icon: Zap,
                title: "Instant Alerts",
                description:
                  "Immediate notifications sent to security teams when threats are detected, enabling rapid response.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800"
              >
                <feature.icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Upgrade Your Video Security?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our AI experts to learn how intelligent video surveillance can transform your security operations.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2 mx-auto">
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
