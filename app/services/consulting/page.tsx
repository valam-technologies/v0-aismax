"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Users, Target, Lightbulb, TrendingUp } from "lucide-react"

export default function ConsultingPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Consulting Services</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Strategic AI consulting to transform your business with intelligent solutions and data-driven insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Schedule Consultation
                </button>
                <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  View Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Target, title: "Strategy Development", desc: "AI roadmap and implementation planning" },
                { icon: Users, title: "Team Training", desc: "Upskill your workforce for AI adoption" },
                { icon: Lightbulb, title: "Innovation Labs", desc: "Prototype and test AI solutions" },
                { icon: TrendingUp, title: "Performance Optimization", desc: "Maximize AI system efficiency" },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors"
                >
                  <service.icon className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Our Consulting Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Assessment", desc: "Analyze current systems and identify AI opportunities" },
                { step: "02", title: "Strategy", desc: "Develop comprehensive AI implementation roadmap" },
                {
                  step: "03",
                  title: "Implementation",
                  desc: "Execute solutions with ongoing support and optimization",
                },
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-white mb-4">{phase.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
                  <p className="text-gray-400">{phase.desc}</p>
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
