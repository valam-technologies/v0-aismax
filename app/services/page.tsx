"use client"
import { motion } from "framer-motion"
import { Shield, Eye, Lock, AlertTriangle, BarChart3, Camera } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Camera,
      title: "AI Video Surveillance",
      description:
        "Transform your security cameras into intelligent monitoring systems with advanced AI that detects threats, analyzes behavior, and protects your assets.",
      features: ["Real-time object detection", "Facial recognition", "Behavioral analysis", "Automated alerts"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    },
    {
      icon: Lock,
      title: "Intelligent Access Control",
      description:
        "Secure your facilities and assets with AI-enhanced access control systems that learn user patterns and detect unauthorized access attempts.",
      features: ["Biometric authentication", "Pattern recognition", "Remote management", "Audit trails"],
      image:
        "https://images.pexels.com/photos/60626/security-protection-anti-virus-software-60626.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    },
    {
      icon: BarChart3,
      title: "Predictive Security Analytics",
      description:
        "Harness AI to predict security threats and protect your assets before incidents occur with advanced predictive analytics.",
      features: [
        "Predictive threat modeling",
        "Risk assessment",
        "Asset vulnerability analysis",
        "Automated reporting",
      ],
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    },
    {
      icon: Shield,
      title: "AI Perimeter Protection",
      description:
        "Advanced perimeter security solutions with AI-driven threat detection and automated response to protect your property boundaries.",
      features: ["Intelligent fence monitoring", "Thermal imaging", "Motion detection", "Automated lighting"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    },
    {
      icon: AlertTriangle,
      title: "Automated Threat Detection",
      description:
        "Protect your assets with intelligent threat detection systems that automatically identify, classify, and respond to security threats.",
      features: ["Machine learning detection", "Real-time processing", "Threat classification", "Automated response"],
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    },
    {
      icon: Eye,
      title: "Smart Asset Monitoring",
      description:
        "Protect and optimize your valuable assets with AI-powered monitoring systems that provide real-time tracking and theft prevention.",
      features: ["RFID/IoT tracking", "Theft prevention", "Lifecycle management", "Location intelligence"],
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Comprehensive Security Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive suite of AI-powered security services provides end-to-end intelligent protection for
              organizations of all sizes, from innovative startups to enterprise-level corporations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Professional Service Approach</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Artificial Intelligence Systems follows a proven AI-driven methodology to deliver intelligent security
              solutions that adapt to your specific requirements and exceed industry standards through continuous
              learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "AI Security Assessment",
                description:
                  "Comprehensive AI-powered evaluation of your current security posture and threat landscape",
              },
              {
                step: "02",
                title: "Asset Protection Strategy",
                description: "Custom AI security strategy focused on protecting your valuable assets and property",
              },
              {
                step: "03",
                title: "AI System Deployment",
                description: "Expert deployment of AI-powered security systems for comprehensive asset protection",
              },
              {
                step: "04",
                title: "Continuous Monitoring",
                description: "Ongoing AI-powered monitoring and optimization for evolving asset protection needs",
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-2xl border border-gray-800 text-center"
              >
                <div className="text-4xl font-bold text-white mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{phase.title}</h3>
                <p className="text-gray-400 leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
