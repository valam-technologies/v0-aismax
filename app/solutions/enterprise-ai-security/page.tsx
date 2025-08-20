"use client"
import { motion } from "framer-motion"
import {
  Building,
  Shield,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Eye,
  Database,
  Cpu,
  Network,
} from "lucide-react"
import Footer from "../../components/Footer"

export default function EnterpriseAISecurity() {
  const features = [
    {
      icon: Shield,
      title: "Multi-Layer Protection",
      description:
        "Comprehensive security architecture with AI-powered threat detection across all enterprise systems.",
      details: [
        "Advanced threat intelligence",
        "Real-time vulnerability assessment",
        "Automated incident response",
        "Continuous security monitoring",
      ],
    },
    {
      icon: Users,
      title: "Scalable Solutions",
      description: "Enterprise-grade AI security that scales with your organization's growth and evolving needs.",
      details: [
        "Supports 10,000+ users",
        "Multi-location deployment",
        "Cloud and on-premise options",
        "Flexible licensing models",
      ],
    },
    {
      icon: Zap,
      title: "Real-time Intelligence",
      description: "Instant threat detection and automated response systems powered by advanced machine learning.",
      details: [
        "Sub-second threat detection",
        "Predictive analytics",
        "Automated remediation",
        "Intelligent alert prioritization",
      ],
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Advanced data loss prevention and encryption systems to protect sensitive enterprise information.",
      details: ["End-to-end encryption", "Data classification", "Access control policies", "Compliance reporting"],
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Comprehensive network protection with AI-powered traffic analysis and threat detection.",
      details: ["Network segmentation", "Traffic analysis", "Intrusion detection", "Bandwidth optimization"],
    },
    {
      icon: Cpu,
      title: "AI-Powered Analytics",
      description: "Advanced analytics and machine learning to identify patterns and predict security threats.",
      details: ["Behavioral analysis", "Anomaly detection", "Risk scoring", "Predictive modeling"],
    },
  ]

  const benefits = [
    {
      title: "99.9% Threat Detection Rate",
      description: "Industry-leading accuracy in identifying and preventing security threats",
      icon: Shield,
    },
    {
      title: "75% Reduction in Security Incidents",
      description: "Proactive threat prevention significantly reduces security breaches",
      icon: BarChart3,
    },
    {
      title: "24/7 Automated Monitoring",
      description: "Continuous protection with intelligent automation and human oversight",
      icon: Eye,
    },
    {
      title: "Enterprise-Grade Compliance",
      description: "Meet regulatory requirements with comprehensive audit trails and reporting",
      icon: CheckCircle,
    },
  ]

  const useCases = [
    {
      title: "Financial Services",
      description: "Protect sensitive financial data and ensure regulatory compliance",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      challenges: ["Data breaches", "Regulatory compliance", "Fraud detection", "Customer trust"],
    },
    {
      title: "Healthcare Organizations",
      description: "Secure patient data and medical systems with HIPAA-compliant solutions",
      image: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      challenges: ["Patient privacy", "Medical device security", "Ransomware protection", "Compliance requirements"],
    },
    {
      title: "Manufacturing",
      description: "Protect industrial systems and intellectual property from cyber threats",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      challenges: ["Industrial espionage", "Supply chain security", "Operational continuity", "IP protection"],
    },
    {
      title: "Government Agencies",
      description: "Secure critical infrastructure and sensitive government data",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      challenges: ["National security", "Classified data", "Cyber warfare", "Public safety"],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop className="w-full h-full object-cover opacity-20">
            <source
              src="https://videos.pexels.com/video-files/3196285/3196285-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Building className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Enterprise AI
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Security Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive AI-powered security solutions designed for large enterprises, providing intelligent
              protection across all business operations, data, and digital assets with unmatched scalability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center">
                <Shield className="w-5 h-5 mr-2" />
                Request Demo
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center">
                Enterprise Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Enterprise Security Benefits</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Measurable results that protect your organization and enhance operational efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-2xl border border-gray-800 text-center"
              >
                <benefit.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Comprehensive Security Features</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Advanced AI-powered security capabilities designed specifically for enterprise environments.
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
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>

                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      <span className="text-gray-300 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Industry Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Tailored enterprise security solutions for different industries and their unique challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="relative h-48">
                  <img
                    src={useCase.image || "/placeholder.svg"}
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{useCase.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{useCase.description}</p>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Key Challenges Addressed</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {useCase.challenges.map((challenge, challengeIndex) => (
                        <div key={challengeIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          <span className="text-gray-300 text-sm">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Transform Your Enterprise Security</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how AI-powered enterprise security can protect your organization at scale. Our security experts
              are ready to design a custom solution that meets your specific requirements and compliance needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                Download Enterprise Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
