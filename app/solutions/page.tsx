"use client"
import { motion } from "framer-motion"
import {
  Camera,
  Eye,
  Shield,
  CheckCircle,
  Play,
  ArrowRight,
  Users,
  Lock,
  AlertTriangle,
  Monitor,
  Smartphone,
} from "lucide-react"

export default function Solutions() {
  const heroSolutions = [
    {
      title: "AI-Powered Video Analytics",
      description:
        "Advanced computer vision and AI algorithms analyze video feeds in real-time to detect threats, anomalies, and security incidents.",
      icon: Camera,
      video: "https://videos.pexels.com/video-files/3196284/3196284-uhd_2560_1440_25fps.mp4",
      features: ["Real-time threat detection", "Facial recognition", "Behavioral analysis", "Automated alerts"],
    },
    {
      title: "Intelligent Monitoring Systems",
      description:
        "Comprehensive monitoring solutions that use AI to provide 24/7 surveillance and instant threat response.",
      icon: Monitor,
      video: "https://videos.pexels.com/video-files/3196285/3196285-uhd_2560_1440_25fps.mp4",
      features: ["24/7 monitoring", "Multi-location support", "Real-time alerts", "Mobile notifications"],
    },
    {
      title: "Smart Access Control",
      description:
        "AI-enhanced access control systems that learn user patterns and detect unauthorized access attempts.",
      icon: Lock,
      video: "https://videos.pexels.com/video-files/3196286/3196286-uhd_2560_1440_25fps.mp4",
      features: ["Biometric authentication", "Pattern recognition", "Remote management", "Audit trails"],
    },
  ]

  const solutions = [
    {
      category: "Video Intelligence",
      title: "AI-Powered Video Analytics",
      description: "Transform your security cameras into intelligent monitoring systems with advanced AI capabilities.",
      icon: Camera,
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      features: [
        "Real-time object and person detection",
        "Behavioral anomaly analysis",
        "Facial recognition and identification",
        "License plate recognition",
        "Crowd density monitoring",
        "Perimeter breach detection",
        "Weapon detection algorithms",
        "Integration with existing camera systems",
      ],
      benefits: [
        "Reduce false alarms by 95%",
        "Instant threat notifications",
        "Automated incident reporting",
        "Scalable across multiple locations",
      ],
      useCases: [
        "Retail theft prevention",
        "Corporate security monitoring",
        "Public safety surveillance",
        "Industrial site protection",
      ],
    },
    {
      category: "Access Control",
      title: "Smart Identity Management",
      description: "AI-enhanced identity and access management with biometric authentication and behavioral analysis.",
      icon: Lock,
      image:
        "https://images.pexels.com/photos/60626/security-protection-anti-virus-software-60626.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      features: [
        "Multi-factor biometric authentication",
        "Behavioral pattern recognition",
        "Risk-based access control",
        "Visitor management systems",
        "Mobile device authentication",
        "Time-based access restrictions",
        "Anti-tailgating detection",
        "Audit trail and compliance reporting",
      ],
      benefits: [
        "Eliminate unauthorized access by 98%",
        "Streamlined user experience",
        "Comprehensive access analytics",
        "Real-time security monitoring",
      ],
      useCases: [
        "Corporate office security",
        "Data center access control",
        "Healthcare facility management",
        "Government building security",
      ],
    },
    {
      category: "Perimeter Security",
      title: "AI Perimeter Protection",
      description: "Advanced perimeter security solutions with AI-driven threat detection and automated response.",
      icon: Shield,
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      features: [
        "Intelligent fence line monitoring",
        "Thermal imaging integration",
        "Motion detection and tracking",
        "Weather-resistant sensors",
        "Automated lighting control",
        "Drone detection capabilities",
        "Integration with alarm systems",
        "Mobile patrol coordination",
      ],
      benefits: [
        "Early threat detection",
        "Reduced security personnel costs",
        "Weather-independent monitoring",
        "Comprehensive perimeter coverage",
      ],
      useCases: [
        "Industrial facility protection",
        "Critical infrastructure security",
        "Residential community safety",
        "Government facility perimeters",
      ],
    },
    {
      category: "Physical Asset Protection",
      title: "Asset Monitoring & Protection",
      description: "Comprehensive physical asset protection with real-time monitoring and theft prevention.",
      icon: Eye,
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      features: [
        "RFID and GPS asset tracking",
        "Tamper detection sensors",
        "Environmental monitoring",
        "Asset movement alerts",
        "Inventory management integration",
        "Theft prevention systems",
        "Maintenance scheduling",
        "Asset lifecycle tracking",
      ],
      benefits: [
        "Prevent asset theft and loss",
        "Optimize asset utilization",
        "Reduce insurance costs",
        "Improve operational efficiency",
      ],
      useCases: [
        "Equipment and machinery protection",
        "Vehicle fleet security",
        "High-value inventory monitoring",
        "Construction site security",
      ],
    },
    {
      category: "Emergency Response",
      title: "AI Emergency Management",
      description: "Intelligent emergency response systems with automated threat assessment and response coordination.",
      icon: AlertTriangle,
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      features: [
        "Automated threat assessment",
        "Emergency notification systems",
        "Evacuation route optimization",
        "First responder coordination",
        "Mass notification capabilities",
        "Incident command integration",
        "Real-time situation awareness",
        "Post-incident analysis",
      ],
      benefits: [
        "Faster emergency response times",
        "Improved safety outcomes",
        "Coordinated response efforts",
        "Comprehensive incident documentation",
      ],
      useCases: [
        "Corporate emergency management",
        "Educational institution safety",
        "Healthcare facility emergencies",
        "Public venue security",
      ],
    },
    {
      category: "Mobile Security",
      title: "Mobile Patrol Management",
      description: "AI-enhanced mobile security patrol management with route optimization and incident response.",
      icon: Smartphone,
      image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      features: [
        "GPS patrol tracking",
        "Route optimization algorithms",
        "Incident reporting tools",
        "Real-time communication",
        "Guard tour verification",
        "Checkpoint management",
        "Performance analytics",
        "Client reporting portals",
      ],
      benefits: [
        "Optimized patrol efficiency",
        "Verified security coverage",
        "Improved response times",
        "Enhanced accountability",
      ],
      useCases: [
        "Large facility security",
        "Multi-site patrol management",
        "Construction site monitoring",
        "Retail chain security",
      ],
    },
  ]

  const industries = [
    {
      name: "Retail & Commercial",
      description:
        "Protect retail stores and commercial properties with AI-powered loss prevention and customer safety solutions.",
      icon: Users,
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      solutions: ["Loss prevention", "Customer analytics", "Inventory protection", "Staff safety"],
    },
    {
      name: "Industrial & Manufacturing",
      description:
        "Secure industrial facilities and manufacturing plants with comprehensive physical security solutions.",
      icon: Shield,
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      solutions: ["Perimeter security", "Asset protection", "Safety compliance", "Access control"],
    },
    {
      name: "Healthcare Facilities",
      description: "Protect patients, staff, and sensitive areas in hospitals and medical facilities.",
      icon: Users,
      image: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      solutions: ["Patient safety", "Restricted area access", "Asset tracking", "Emergency response"],
    },
    {
      name: "Educational Institutions",
      description:
        "Create safe learning environments with comprehensive security solutions for schools and universities.",
      icon: Shield,
      image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      solutions: ["Campus security", "Student safety", "Access management", "Emergency procedures"],
    },
    {
      name: "Government & Public Safety",
      description: "Advanced physical security solutions for government facilities and public safety applications.",
      icon: Lock,
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      solutions: ["Facility protection", "Public safety", "Critical infrastructure", "Emergency management"],
    },
    {
      name: "Residential Communities",
      description: "Comprehensive security solutions for residential communities, condominiums, and gated communities.",
      icon: Users,
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      solutions: ["Community access control", "Visitor management", "Perimeter monitoring", "Emergency response"],
    },
  ]

  const stats = [
    { number: "99.9%", label: "Threat Detection Rate", description: "Industry-leading accuracy" },
    { number: "<10ms", label: "Response Time", description: "Real-time protection" },
    { number: "500+", label: "Protected Properties", description: "Trusted worldwide" },
    { number: "24/7", label: "Monitoring", description: "Always protected" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Video */}
      <section className="relative py-20 px-4 overflow-hidden">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Physical Security Solutions
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                That Protect
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive AI-powered security solutions that protect your digital assets, infrastructure, and data
              from sophisticated cyber threats across all environments and platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center">
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Hero Solutions with Videos */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Intelligent Physical Security Solutions</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Experience the future of physical security with our AI-powered solutions that provide real-time protection
              and insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {heroSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="relative h-48">
                  <video autoPlay muted loop className="w-full h-full object-cover">
                    <source src={solution.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{solution.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{solution.description}</p>

                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
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

      {/* Detailed Solutions */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Comprehensive Physical Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore our full range of AI-powered security solutions designed to protect every aspect of your digital
              organization.
            </p>
          </motion.div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <img
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="bg-black p-8 rounded-2xl border border-gray-800">
                    <div className="flex items-center mb-4">
                      <solution.icon className="w-8 h-8 text-white mr-3" />
                      <span className="text-white font-medium">{solution.category}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white">{solution.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{solution.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">Key Features</h4>
                        <div className="space-y-2">
                          {solution.features.slice(0, 4).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">Benefits</h4>
                        <div className="space-y-2">
                          {solution.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                              <span className="text-gray-300 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3 text-white">Use Cases</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase, useCaseIndex) => (
                          <span key={useCaseIndex} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Tailored AI security solutions designed to meet the unique challenges and requirements of different
              industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
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
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{industry.name}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{industry.description}</p>

                  <div className="space-y-2">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span className="text-gray-300 text-sm">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Secure Your Physical Assets?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how our AI-powered security solutions can protect your organization and enhance your security
              operations with intelligent automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                Schedule a Demo
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
