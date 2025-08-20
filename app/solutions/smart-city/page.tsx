"use client"
import { motion } from "framer-motion"
import {
  Building2,
  TrafficConeIcon as Traffic,
  Zap,
  Droplets,
  Shield,
  Wifi,
  Camera,
  BarChart3,
  Leaf,
  ArrowRight,
  CheckCircle,
  Globe2,
  Smartphone,
  Car,
  Home,
} from "lucide-react"
import Footer from "../../components/Footer"

export default function SmartCitySolutions() {
  const smartCityFeatures = [
    {
      icon: Traffic,
      title: "Intelligent Traffic Management",
      description:
        "AI-powered traffic optimization systems that reduce congestion by up to 40% through real-time analysis and adaptive signal control.",
      benefits: [
        "Real-time traffic flow optimization",
        "Reduced emissions and fuel consumption",
        "Emergency vehicle priority routing",
        "Predictive maintenance alerts",
      ],
    },
    {
      icon: Zap,
      title: "Smart Energy Grid",
      description:
        "Advanced energy management systems that optimize power distribution, integrate renewable sources, and reduce energy waste by 30%.",
      benefits: [
        "Dynamic load balancing",
        "Renewable energy integration",
        "Predictive demand forecasting",
        "Grid fault detection and recovery",
      ],
    },
    {
      icon: Droplets,
      title: "Water Management Systems",
      description:
        "IoT-enabled water infrastructure monitoring that prevents waste, detects leaks early, and ensures optimal water quality.",
      benefits: [
        "Leak detection and prevention",
        "Water quality monitoring",
        "Usage optimization",
        "Predictive maintenance scheduling",
      ],
    },
    {
      icon: Shield,
      title: "Public Safety Network",
      description:
        "Integrated security systems combining AI surveillance, emergency response coordination, and predictive crime analytics.",
      benefits: [
        "24/7 AI-powered monitoring",
        "Automated emergency response",
        "Crime prediction and prevention",
        "Multi-agency coordination platform",
      ],
    },
    {
      icon: Wifi,
      title: "Connected Infrastructure",
      description:
        "Comprehensive IoT network connecting all city systems for seamless data sharing and coordinated operations.",
      benefits: [
        "Unified communication platform",
        "Real-time data analytics",
        "Cross-system integration",
        "Scalable IoT architecture",
      ],
    },
    {
      icon: BarChart3,
      title: "Data Analytics Platform",
      description:
        "Advanced analytics dashboard providing city officials with actionable insights for informed decision-making.",
      benefits: [
        "Real-time city metrics",
        "Predictive analytics",
        "Performance benchmarking",
        "Citizen satisfaction tracking",
      ],
    },
  ]

  const implementations = [
    {
      icon: Building2,
      title: "Downtown Core Transformation",
      description: "Complete smart city implementation for urban centers",
      features: [
        "Smart parking systems",
        "Digital signage networks",
        "Environmental monitoring",
        "Pedestrian flow optimization",
      ],
    },
    {
      icon: Home,
      title: "Residential District Solutions",
      description: "Smart neighborhood systems for enhanced living quality",
      features: [
        "Smart street lighting",
        "Waste management optimization",
        "Community safety networks",
        "Energy-efficient buildings",
      ],
    },
    {
      icon: Car,
      title: "Transportation Hubs",
      description: "Intelligent systems for airports, train stations, and bus terminals",
      features: [
        "Passenger flow management",
        "Multi-modal integration",
        "Real-time information systems",
        "Security and surveillance",
      ],
    },
    {
      icon: Leaf,
      title: "Environmental Monitoring",
      description: "Comprehensive environmental health and sustainability systems",
      features: [
        "Air quality monitoring",
        "Noise pollution tracking",
        "Green space optimization",
        "Climate adaptation systems",
      ],
    },
  ]

  const benefits = [
    { metric: "40%", description: "Reduction in traffic congestion" },
    { metric: "30%", description: "Energy consumption savings" },
    { metric: "50%", description: "Faster emergency response times" },
    { metric: "25%", description: "Decrease in crime rates" },
    { metric: "60%", description: "Improved citizen satisfaction" },
    { metric: "35%", description: "Reduction in operational costs" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-medium mb-8">
              <Globe2 className="w-4 h-4 mr-2" />
              Next-Generation Urban Technology
            </div>

            <h1 className="text-6xl md:text-7xl font-black mb-8 text-gray-900 leading-tight">
              Smart City
              <span className="block text-blue-600">Solutions</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Transform urban environments with AI-powered infrastructure that enhances quality of life, optimizes
              resource usage, and creates sustainable, connected communities for the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">{benefit.metric}</div>
                <div className="text-gray-600 text-sm leading-tight">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart City Features */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-gray-900">Core Technologies</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive AI-powered systems that work together to create intelligent, responsive urban environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartCityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 group"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Areas */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-gray-900">Implementation Areas</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Tailored smart city solutions for different urban environments and specific use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {implementations.map((implementation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl border border-blue-100 hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <implementation.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{implementation.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{implementation.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {implementation.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-32 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8">Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Advanced AI and IoT technologies powering the next generation of smart city infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Camera,
                title: "Computer Vision",
                description: "AI-powered visual analysis for traffic, security, and environmental monitoring",
              },
              {
                icon: BarChart3,
                title: "Predictive Analytics",
                description: "Machine learning algorithms for forecasting and optimization",
              },
              {
                icon: Smartphone,
                title: "Mobile Integration",
                description: "Citizen engagement apps and real-time service access",
              },
              {
                icon: Wifi,
                title: "IoT Connectivity",
                description: "Comprehensive sensor networks and device communication",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{tech.title}</h3>
                <p className="text-gray-300 leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8">Build Your Smart City</h2>
            <p className="text-xl text-blue-100 mb-12">
              Partner with us to transform your urban environment with intelligent, sustainable technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
                Start Your Project
                <ArrowRight className="w-6 h-6 ml-3" />
              </button>
              <button className="inline-flex items-center px-10 py-5 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Download Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
