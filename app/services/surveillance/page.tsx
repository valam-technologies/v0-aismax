"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Camera, Eye, AlertTriangle, Cloud } from "lucide-react"

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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Surveillance Systems</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Advanced AI-powered surveillance solutions for comprehensive security monitoring and threat detection
              </p>
            </motion.div>
          </div>
        </section>

        {/* Surveillance Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Camera, title: "Smart Cameras", desc: "AI-enabled video analytics" },
                { icon: Eye, title: "Facial Recognition", desc: "Advanced biometric identification" },
                { icon: AlertTriangle, title: "Threat Detection", desc: "Real-time security alerts" },
                { icon: Cloud, title: "Cloud Storage", desc: "Secure video data management" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
                >
                  <feature.icon className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
