"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { CheckCircle, Brain } from "lucide-react"

export default function ConsultingEngineer() {
  return (
    <div className="min-h-screen bg-white">
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Consulting Engineer Services</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert AI security consulting and engineering solutions tailored to your specific requirements
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content sections */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional AI Security Consulting</h2>
                <p className="text-gray-600 mb-8">
                  Our certified consulting engineers provide comprehensive AI security assessments, system design, and
                  implementation strategies for organizations of all sizes.
                </p>
                <div className="space-y-4">
                  {[
                    "Security Risk Assessment",
                    "AI System Architecture Design",
                    "Implementation Planning",
                    "Performance Optimization",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-100 p-8 rounded-2xl"
              >
                <Brain className="h-12 w-12 text-gray-700 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Analysis</h3>
                <p className="text-gray-600">
                  Our team of AI security experts provides detailed analysis and recommendations to optimize your
                  security infrastructure and maximize protection effectiveness.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
