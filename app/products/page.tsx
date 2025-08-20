"use client"
import { motion } from "framer-motion"
import { Shield, Eye, Camera, Lock, AlertTriangle, Users, Check, Star, Smartphone, Fingerprint } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

const Products = () => {
  const products = [
    {
      name: "AI Asset Protection Platform",
      tagline: "Comprehensive AI-powered asset and property security",
      icon: Camera,
      description:
        "Our flagship AI platform that protects physical and digital assets using advanced computer vision, machine learning, and automated threat detection.",
      features: [
        "Real-time asset monitoring with 99.9% accuracy",
        "AI-powered threat detection and prevention",
        "Automated security response systems",
        "Asset tracking and location intelligence",
        "Predictive analytics for asset protection",
        "Integration with existing security infrastructure",
        "24/7 intelligent monitoring and alerting",
        "Comprehensive asset lifecycle management",
      ],
      popular: true,
      image: "/ai-asset-protection-dashboard.png",
    },
    {
      name: "Intelligent Facility Security System",
      tagline: "AI-enhanced facility and perimeter security solutions",
      icon: Fingerprint,
      description:
        "Comprehensive facility security system that uses AI-powered perimeter protection, access control, and behavioral analysis to secure your property.",
      features: [
        "AI-powered perimeter monitoring",
        "Intelligent access control systems",
        "Biometric authentication technology",
        "Behavioral pattern analysis",
        "Mobile security management",
        "Visitor and contractor management",
        "Emergency response automation",
        "Comprehensive security reporting",
      ],
      popular: false,
      image: "/facility-security-system.png",
    },
    {
      name: "Smart Asset Tracking Platform",
      tagline: "AI-powered asset monitoring and protection system",
      icon: Shield,
      description:
        "Advanced asset tracking platform that uses IoT sensors, AI analytics, and predictive intelligence to monitor and protect valuable assets.",
      features: [
        "Real-time asset location tracking",
        "RFID and IoT sensor integration",
        "Theft and tampering detection",
        "Predictive maintenance alerts",
        "Asset lifecycle management",
        "Environmental monitoring",
        "Mobile fleet tracking",
        "Comprehensive asset analytics",
      ],
      popular: false,
      image: "/smart-asset-tracking.png",
    },
    {
      name: "AI Security Analytics Dashboard",
      tagline: "Intelligent security analytics and reporting solutions",
      icon: Smartphone,
      description:
        "Comprehensive security analytics solutions that transform security data into actionable insights with AI-powered dashboards and predictive intelligence.",
      features: [
        "Real-time security dashboards",
        "Predictive threat analytics",
        "Asset protection insights",
        "Custom report generation",
        "Executive security scorecards",
        "Compliance automation",
        "Mobile security management",
        "Integration with all security systems",
      ],
      popular: false,
      image: "/ai-analytics-dashboard.png",
    },
  ]

  const solutions = [
    {
      name: "AI Asset Protection Solutions",
      icon: Shield,
      description:
        "Comprehensive AI-powered protection for physical and digital assets with real-time monitoring and theft prevention.",
      features: [
        "AI-powered asset tracking",
        "Tamper detection sensors",
        "Predictive threat analysis",
        "Asset movement alerts",
        "Intelligent inventory management",
        "Automated theft prevention",
      ],
    },
    {
      name: "Smart Facility Management",
      icon: Eye,
      description:
        "AI-enhanced facility management with intelligent monitoring, energy optimization, and security integration.",
      features: [
        "Intelligent building automation",
        "Energy optimization algorithms",
        "Security system integration",
        "Predictive maintenance",
        "Environmental monitoring",
        "Access control integration",
      ],
    },
    {
      name: "AI Video Intelligence",
      icon: Camera,
      description:
        "Transform security cameras into intelligent monitoring systems with AI-powered video analytics and threat detection.",
      features: [
        "Real-time video analysis",
        "Object and person detection",
        "Behavioral anomaly detection",
        "Facial recognition technology",
        "License plate recognition",
        "Crowd monitoring and analysis",
      ],
    },
    {
      name: "Perimeter Security AI",
      icon: AlertTriangle,
      description: "AI-powered perimeter security with intelligent boundary monitoring and automated threat response.",
      features: [
        "Intelligent perimeter monitoring",
        "Multi-sensor integration",
        "Automated threat classification",
        "Real-time alert systems",
        "Weather-resistant technology",
        "Integration with security systems",
      ],
    },
    {
      name: "Fleet & Asset Tracking",
      icon: Users,
      description:
        "Comprehensive tracking and management for vehicle fleets and mobile assets with AI-powered optimization.",
      features: [
        "Real-time GPS tracking",
        "Route optimization",
        "Fuel management",
        "Predictive maintenance",
        "Driver behavior analysis",
        "Asset utilization analytics",
      ],
    },
    {
      name: "Drone Security Technology",
      icon: Lock,
      description: "Autonomous aerial security with AI-powered surveillance and perimeter monitoring capabilities.",
      features: [
        "Autonomous aerial surveillance",
        "AI-powered flight planning",
        "Real-time video streaming",
        "Thermal imaging capabilities",
        "Automated patrol routes",
        "Emergency response deployment",
      ],
    },
  ]

  const industries = [
    {
      name: "Retail & Commercial",
      description: "Protect retail stores and commercial properties with AI-powered loss prevention.",
      icon: Users,
      image: "/retail-commercial-security.png",
    },
    {
      name: "Industrial & Manufacturing",
      description: "Secure industrial facilities with comprehensive physical security solutions.",
      icon: Shield,
      image: "/industrial-manufacturing-security.png",
    },
    {
      name: "Healthcare Facilities",
      description: "Protect patients, staff, and sensitive areas in medical facilities.",
      icon: Users,
      image: "/placeholder-tp5uj.png",
    },
    {
      name: "Educational Institutions",
      description: "Create safe learning environments with comprehensive security solutions.",
      icon: Shield,
      image: "/placeholder-4qgbi.png",
    },
    {
      name: "Government & Public Safety",
      description: "Advanced security solutions for government facilities and public safety.",
      icon: Lock,
      image: "/government-public-safety-security.png",
    },
    {
      name: "Residential Communities",
      description: "Comprehensive security for residential communities and gated properties.",
      icon: Users,
      image: "/residential-community-security.png",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-black py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-slate-300 bg-clip-text text-transparent">
              AI Solutions & Products
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI-powered solutions designed to transform your organization's operations with cutting-edge
              artificial intelligence technology and intelligent automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Core AI Products</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our flagship AI products provide comprehensive solutions with cutting-edge artificial intelligence
              technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                {product.popular && (
                  <div className="absolute -top-4 left-8">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-blue-600 p-4 rounded-xl">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-blue-300 font-medium">{product.tagline}</p>
                  </div>
                </div>

                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />

                <p className="text-slate-300 mb-6 leading-relaxed">{product.description}</p>

                <div className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300">
                  <Link href="/contact" className="block w-full">
                    Connect with us
                  </Link>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Comprehensive AI Solutions</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              End-to-end AI solutions tailored to meet your organization's specific needs and requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="bg-blue-600 p-3 rounded-lg w-fit mb-4">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.name}</h3>
                <p className="text-slate-400 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-slate-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Industry-Specific Solutions</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Tailored AI solutions designed to meet the unique challenges and requirements of different industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <img
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <industry.icon className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                  </div>
                  <p className="text-slate-400">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Partner with Artificial Intelligence Systems to develop a comprehensive AI strategy that transforms your
              operations with cutting-edge artificial intelligence and proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-900 font-semibold py-4 px-8 rounded-xl hover:bg-slate-100 transition-colors duration-300">
                <Link href="/contact">Request Consultation</Link>
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-slate-900 transition-colors duration-300">
                <Link href="/contact">Get Quote</Link>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Products
