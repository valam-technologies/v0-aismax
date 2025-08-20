"use client"
import { motion } from "framer-motion"
import { Shield, Eye, Lock, AlertTriangle, BarChart3, Camera, CheckCircle, ArrowRight, Play, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Camera,
      title: "AI Video Surveillance",
      description:
        "Transform your security cameras into intelligent monitoring systems with advanced AI that detects threats, analyzes behavior, and protects your assets.",
      features: ["Real-time object detection", "Facial recognition", "Behavioral analysis", "Automated alerts"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      benefits: [
        "95% reduction in false alarms",
        "24/7 automated monitoring",
        "Instant threat notifications",
        "Scalable across locations",
      ],
      pricing: "Starting at $299/month",
    },
    {
      icon: Lock,
      title: "Intelligent Access Control",
      description:
        "Secure your facilities and assets with AI-enhanced access control systems that learn user patterns and detect unauthorized access attempts.",
      features: ["Biometric authentication", "Pattern recognition", "Remote management", "Audit trails"],
      image:
        "https://images.pexels.com/photos/60626/security-protection-anti-virus-software-60626.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      benefits: [
        "99.8% authentication accuracy",
        "Seamless user experience",
        "Complete access analytics",
        "Real-time monitoring",
      ],
      pricing: "Starting at $199/month",
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
      benefits: [
        "85% threat prediction accuracy",
        "Proactive risk mitigation",
        "Comprehensive reporting",
        "Data-driven insights",
      ],
      pricing: "Starting at $399/month",
    },
    {
      icon: Shield,
      title: "AI Perimeter Protection",
      description:
        "Advanced perimeter security solutions with AI-driven threat detection and automated response to protect your property boundaries.",
      features: ["Intelligent fence monitoring", "Thermal imaging", "Motion detection", "Automated lighting"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      benefits: [
        "Early threat detection",
        "Weather-independent monitoring",
        "Automated response systems",
        "Comprehensive coverage",
      ],
      pricing: "Starting at $499/month",
    },
    {
      icon: AlertTriangle,
      title: "Automated Threat Detection",
      description:
        "Protect your assets with intelligent threat detection systems that automatically identify, classify, and respond to security threats.",
      features: ["Machine learning detection", "Real-time processing", "Threat classification", "Automated response"],
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      benefits: [
        "Sub-second threat detection",
        "Automated incident response",
        "Continuous learning",
        "Multi-threat classification",
      ],
      pricing: "Starting at $349/month",
    },
    {
      icon: Eye,
      title: "Smart Asset Monitoring",
      description:
        "Protect and optimize your valuable assets with AI-powered monitoring systems that provide real-time tracking and theft prevention.",
      features: ["RFID/IoT tracking", "Theft prevention", "Lifecycle management", "Location intelligence"],
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      benefits: [
        "Real-time asset visibility",
        "Theft prevention alerts",
        "Optimized asset utilization",
        "Comprehensive tracking",
      ],
      pricing: "Starting at $249/month",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Chief Security Officer",
      company: "TechCorp Industries",
      content:
        "The AI video surveillance system has transformed our security operations. We've seen a 95% reduction in false alarms and our response times have improved dramatically.",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    },
    {
      name: "Michael Rodriguez",
      role: "Facilities Manager",
      company: "Global Manufacturing",
      content:
        "The predictive analytics have been game-changing. We can now identify potential security issues before they become problems, saving us significant costs.",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    },
    {
      name: "Emily Johnson",
      role: "Operations Director",
      company: "Retail Solutions Inc",
      content:
        "Smart asset monitoring has given us complete visibility into our inventory and equipment. The theft prevention features alone have paid for the system.",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    },
  ]

  const stats = [
    { number: "500+", label: "Clients Protected", description: "Trusted worldwide" },
    { number: "99.9%", label: "Uptime Guarantee", description: "Always operational" },
    { number: "24/7", label: "Support Available", description: "Round-the-clock assistance" },
    { number: "<2min", label: "Average Response", description: "Lightning-fast support" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
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
                Professional Security
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Our comprehensive suite of AI-powered security services provides end-to-end intelligent protection for
              organizations of all sizes, from innovative startups to enterprise-level corporations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center">
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-900">
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

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Security Services</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive AI-powered security solutions designed to protect your assets and enhance your operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.pricing}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-white">Key Features</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-white">Benefits</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Hear from security professionals who trust our AI-powered solutions to protect their organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-2xl border border-gray-800"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
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
                icon: BarChart3,
              },
              {
                step: "02",
                title: "Asset Protection Strategy",
                description: "Custom AI security strategy focused on protecting your valuable assets and property",
                icon: Shield,
              },
              {
                step: "03",
                title: "AI System Deployment",
                description: "Expert deployment of AI-powered security systems for comprehensive asset protection",
                icon: Zap,
              },
              {
                step: "04",
                title: "Continuous Monitoring",
                description: "Ongoing AI-powered monitoring and optimization for evolving asset protection needs",
                icon: Eye,
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 text-center hover:border-gray-700 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <phase.icon className="w-12 h-12 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{phase.title}</h3>
                <p className="text-gray-400 leading-relaxed">{phase.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Secure Your Organization?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get started with our AI-powered security services today. Our experts are ready to design a custom solution
              for your needs.
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
    </div>
  )
}
