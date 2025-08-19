"use client"
import { motion } from "framer-motion"
import { Camera, Eye, Shield, Zap, CheckCircle, BarChart3, Lock, AlertTriangle, Play } from "lucide-react"
import Footer from "../../components/Footer"

export default function AIVideoSurveillance() {
  const features = [
    {
      icon: Eye,
      title: "Real-time Object Detection",
      description:
        "Advanced AI algorithms identify and track objects, people, and vehicles in real-time with 99.9% accuracy.",
      benefits: ["99.9% detection accuracy", "Multi-object tracking", "Real-time processing", "Custom object training"],
    },
    {
      icon: Shield,
      title: "Behavioral Analysis",
      description:
        "Intelligent behavior recognition detects suspicious activities and potential security threats automatically.",
      benefits: ["Anomaly detection", "Pattern recognition", "Crowd behavior analysis", "Predictive alerts"],
    },
    {
      icon: Zap,
      title: "Instant Alerts",
      description: "Immediate notifications sent to security teams when threats are detected, enabling rapid response.",
      benefits: ["Sub-second alerts", "Multi-channel notifications", "Priority classification", "Mobile integration"],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics to optimize security operations and identify trends.",
      benefits: ["Custom dashboards", "Trend analysis", "Performance metrics", "ROI tracking"],
    },
    {
      icon: Lock,
      title: "Secure Cloud Storage",
      description: "Enterprise-grade cloud storage with encryption and compliance for all video data.",
      benefits: ["End-to-end encryption", "GDPR compliant", "Scalable storage", "Backup redundancy"],
    },
    {
      icon: AlertTriangle,
      title: "Threat Classification",
      description: "AI-powered threat assessment and classification for prioritized security responses.",
      benefits: ["Risk scoring", "Threat categorization", "False positive reduction", "Automated escalation"],
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses",
      features: ["Up to 10 cameras", "Basic AI detection", "Mobile alerts", "Cloud storage (30 days)", "Email support"],
      popular: false,
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 50 cameras",
        "Advanced AI analytics",
        "Real-time alerts",
        "Cloud storage (90 days)",
        "Priority support",
        "Custom reporting",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited cameras",
        "Full AI suite",
        "24/7 monitoring",
        "Unlimited storage",
        "Dedicated support",
        "Custom integrations",
        "On-premise options",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative px-4 overflow-hidden pt-12 pb-20">
        <div className="absolute inset-0">
          <video autoPlay muted loop className="w-full h-full object-cover opacity-20">
            <source
              src="https://videos.pexels.com/video-files/3196284/3196284-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Camera className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                AI Video
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Surveillance
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your security cameras into intelligent monitoring systems with advanced AI that detects threats,
              analyzes behavior, and protects your assets with unprecedented accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                Get Free Trial
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "99.9%", label: "Detection Accuracy", description: "Industry-leading precision" },
              { number: "<1s", label: "Response Time", description: "Real-time processing" },
              { number: "95%", label: "False Alarm Reduction", description: "Smart filtering" },
              { number: "24/7", label: "Monitoring", description: "Continuous protection" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Advanced AI Features</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive AI-powered surveillance capabilities designed to provide maximum security coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose the perfect plan for your security needs. All plans include our core AI features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-black p-8 rounded-2xl border ${plan.popular ? "border-blue-500 relative" : "border-gray-800"} hover:border-gray-700 transition-colors`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-colors ${plan.popular ? "bg-blue-600 hover:bg-blue-700 text-white" : "border border-gray-600 hover:border-gray-500 text-white"}`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Upgrade Your Video Security?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Contact our AI experts to learn how intelligent video surveillance can transform your security operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                Get Free Consultation
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                Contact Sales Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
