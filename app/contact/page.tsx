"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Send, CheckCircle, Sparkles, Shield } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        })
      }, 5000)
      setIsSubmitting(false)
    }, 1000)
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setSubmitError("")
    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "North America Office",
      details: "+1 (778) 668-9399",
      subtitle: "153 Sackville Dr, Lower Sackville, NS B4C 2S9, Canada",
    },
    {
      icon: Phone,
      title: "APAC Office",
      details: "+60-38679 3990",
      subtitle: "41-2, Jalan PJU 5/20E, Kota Damansara, 47810 Petaling Jaya, Selangor, Malaysia",
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: "canada@artificialintelligence.ai | malaysia@artificialintelligence.ai",
      subtitle: "North America & APAC Offices - We respond within 2 hours",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-slate-900/20 to-gray-800/20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Shield className="w-16 h-16 text-gray-400" />
                <Sparkles className="w-6 h-6 text-emerald-400 absolute -top-2 -right-2" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Connect with AI
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
                Systems Experts
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-gray-600 bg-clip-text text-transparent">
                Transform Your Enterprise
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Partner with Artificial Intelligence Systems - the leading provider of enterprise AI solutions. Our
              advanced machine learning, computer vision, and intelligent automation technologies deliver measurable ROI
              and competitive advantage across industries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <div className="text-emerald-400 text-2xl font-bold mb-2">99.7%</div>
                <div className="text-gray-300 text-sm">AI Model Accuracy</div>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <div className="text-emerald-400 text-2xl font-bold mb-2">24/7</div>
                <div className="text-gray-300 text-sm">AI-Powered Support</div>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <div className="text-emerald-400 text-2xl font-bold mb-2">500+</div>
                <div className="text-gray-300 text-sm">Enterprise Deployments</div>
              </div>
            </div>
            {/* </CHANGE> */}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Send Us a Message</h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for your inquiry. We'll get back to you within 2 hours.
                  </p>
                  <button
                    onClick={resetForm}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="bg-red-900/20 border border-red-500 text-red-400 p-4 rounded-xl">{submitError}</div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your technology needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-600 hover:bg-gray-700 disabled:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="w-5 h-5 ml-2" />}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Connect with our AI Systems engineering team. We specialize in deploying enterprise-grade artificial
                  intelligence solutions including machine learning models, computer vision systems, natural language
                  processing, and intelligent automation platforms.
                </p>
                {/* </CHANGE> */}
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const isPhone = info.icon === Phone
                  const isEmail = info.icon === Mail

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors"
                    >
                      <div className="flex items-start">
                        <div className="bg-gray-600 p-3 rounded-xl mr-4">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                          {isPhone && info.title === "North America Office" ? (
                            <a
                              href={`tel:${info.details}`}
                              className="text-gray-300 hover:text-gray-200 font-medium text-lg"
                            >
                              {info.details}
                            </a>
                          ) : isPhone && info.title === "APAC Office" ? (
                            <a
                              href={`tel:${info.details}`}
                              className="text-gray-300 hover:text-gray-200 font-medium text-lg"
                            >
                              {info.details}
                            </a>
                          ) : isEmail ? (
                            <div className="space-y-2">
                              <div>
                                <a
                                  href="mailto:canada@artificialintelligence.ai"
                                  className="text-gray-300 hover:text-gray-200 font-medium"
                                >
                                  canada@artificialintelligence.ai
                                </a>
                              </div>
                              <div>
                                <a
                                  href="mailto:malaysia@artificialintelligence.ai"
                                  className="text-gray-300 hover:text-gray-200 font-medium"
                                >
                                  malaysia@artificialintelligence.ai
                                </a>
                              </div>
                            </div>
                          ) : (
                            <div className="text-white font-medium text-lg">{info.details}</div>
                          )}
                          <p className="text-gray-400 mt-2">{info.subtitle}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}

                {/* Emergency Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-red-900/20 border border-red-500 p-6 rounded-2xl"
                >
                  <div className="flex items-start">
                    <div className="bg-red-600 p-3 rounded-xl mr-4">
                      <Shield className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">Technology Emergency?</h3>
                      <p className="text-gray-300 mb-4">
                        Critical AI system failure or security breach? Our emergency response team provides immediate
                        technical support for mission-critical artificial intelligence infrastructure.
                      </p>
                      {/* </CHANGE> */}

                      <div className="space-y-2">
                        <div>
                          <span className="text-gray-400">Canada: </span>
                          <a href="tel:+17786689399" className="text-red-400 hover:text-red-300 font-medium">
                            +1 (778) 668-9399
                          </a>
                        </div>
                        <div>
                          <span className="text-gray-400">APAC: </span>
                          <a
                            href="mailto:malaysia@artificialintelligence.ai"
                            className="text-red-400 hover:text-red-300 font-medium"
                          >
                            malaysia@artificialintelligence.ai
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">AI Systems FAQ</h2>
            <p className="text-xl text-gray-300">
              Technical answers about our artificial intelligence systems and enterprise AI deployment process.
            </p>
            {/* </CHANGE> */}
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can Artificial Intelligence Systems deploy AI technology solutions?",
                answer:
                  "We can deploy basic AI technology solutions within 24-48 hours for urgent needs. Comprehensive AI implementations typically require 1-2 weeks for proper planning, system integration, and AI model training to ensure optimal performance and reliability.",
              },
              {
                question: "Do your AI technology systems integrate with existing infrastructure?",
                answer:
                  "Yes, our AI technology solutions are designed to integrate seamlessly with existing infrastructure, network systems, and monitoring equipment. We work with all major technology platforms and can enhance your current setup with intelligent capabilities.",
              },
              {
                question: "What level of AI training and support do you provide?",
                answer:
                  "Artificial Intelligence Systems provides comprehensive support including 24/7 AI-powered monitoring, dedicated account management, regular system optimization, and complete training for your staff on AI technology systems and intelligent response procedures.",
              },
              {
                question: "How does Artificial Intelligence Systems ensure AI accuracy and compliance?",
                answer:
                  "Artificial Intelligence Systems maintains rigorous quality standards through continuous AI model training, performance monitoring, and compliance with industry regulations. Our AI systems meet or exceed accuracy standards for various industries including healthcare, finance, and government sectors.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-2xl border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
