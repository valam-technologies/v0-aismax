"use client"

import { motion } from "framer-motion"
import {
  Brain,
  Target,
  TrendingUp,
  Users,
  Code,
  Database,
  Shield,
  CheckCircle,
  ArrowRight,
  Eye,
  Lightbulb,
  Settings,
  Globe,
} from "lucide-react"

export default function AISolutionsArchitecturePage() {
  const architectureServices = [
    {
      icon: Brain,
      title: "AI Strategy & Planning",
      description: "Comprehensive AI roadmaps that align with your business objectives and drive measurable outcomes.",
      features: ["Strategic planning", "ROI analysis", "Risk assessment", "Implementation timeline"],
    },
    {
      icon: Target,
      title: "Solution Design",
      description:
        "Custom AI architectures designed for your specific use cases, scalability requirements, and performance goals.",
      features: ["Custom architecture", "Scalable design", "Performance optimization", "Future-ready solutions"],
    },
    {
      icon: Code,
      title: "Technical Implementation",
      description: "Expert development and deployment of AI solutions with best practices and industry standards.",
      features: ["Clean code practices", "Automated testing", "CI/CD pipelines", "Documentation"],
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Ensure your AI solutions meet the highest security standards and regulatory compliance requirements.",
      features: ["Data protection", "Privacy compliance", "Security audits", "Risk mitigation"],
    },
  ]

  const expertise = [
    {
      title: "Machine Learning Architecture",
      description: "Design and implement ML pipelines that scale with your data and business needs.",
      icon: Database,
    },
    {
      title: "AI Model Development",
      description: "Create custom AI models tailored to your specific business challenges and requirements.",
      icon: Brain,
    },
    {
      title: "Data Engineering",
      description: "Build robust data infrastructure that powers your AI initiatives with clean, reliable data.",
      icon: TrendingUp,
    },
    {
      title: "Team Training & Support",
      description: "Empower your team with the knowledge and skills needed to maintain and evolve AI solutions.",
      icon: Users,
    },
  ]

  const stats = [
    { number: "500+", label: "AI Projects Delivered", description: "Successful implementations" },
    { number: "98%", label: "Client Satisfaction", description: "Proven track record" },
    { number: "60%", label: "Average ROI Increase", description: "Measurable business impact" },
    { number: "24/7", label: "AI System Monitoring", description: "Continuous optimization" },
  ]

  const solutionPackages = [
    {
      name: "AI Strategy & Roadmap",
      description: "Comprehensive AI strategy development and implementation planning",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      features: [
        "AI readiness assessment",
        "Strategic roadmap development",
        "ROI analysis and projections",
        "Risk assessment and mitigation",
        "Technology stack recommendations",
        "Implementation timeline planning",
      ],
      benefits: [
        "Clear AI transformation path",
        "Reduced implementation risks",
        "Optimized resource allocation",
        "Faster time to market",
      ],
      timeline: "4-6 weeks",
      deliverables: ["AI Strategy Document", "Implementation Roadmap", "ROI Analysis", "Risk Assessment"],
    },
    {
      name: "Custom AI Development",
      description: "End-to-end AI solution development tailored to your specific needs",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      features: [
        "Custom model development",
        "Data pipeline architecture",
        "ML ops implementation",
        "API development and integration",
        "Performance optimization",
        "Scalability planning",
      ],
      benefits: [
        "Tailored to your use case",
        "Production-ready solutions",
        "Scalable architecture",
        "Ongoing support included",
      ],
      timeline: "12-16 weeks",
      deliverables: ["Custom AI Models", "API Endpoints", "Documentation", "Training Materials"],
    },
    {
      name: "AI Infrastructure Setup",
      description: "Complete AI infrastructure design and deployment for enterprise scale",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      features: [
        "Cloud infrastructure design",
        "Data lake architecture",
        "Model serving infrastructure",
        "Monitoring and logging setup",
        "Security implementation",
        "Cost optimization",
      ],
      benefits: [
        "Enterprise-grade reliability",
        "Auto-scaling capabilities",
        "Cost-effective operations",
        "Security compliance",
      ],
      timeline: "8-10 weeks",
      deliverables: ["Infrastructure Setup", "Monitoring Dashboard", "Security Protocols", "Cost Analysis"],
    },
  ]

  const industryUseCases = [
    {
      industry: "Healthcare",
      title: "Medical AI Solutions",
      description: "AI-powered diagnostic tools and patient care optimization systems",
      image: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      applications: [
        "Medical imaging analysis",
        "Drug discovery acceleration",
        "Patient risk prediction",
        "Treatment optimization",
      ],
      results: "40% faster diagnosis, 25% improved patient outcomes",
    },
    {
      industry: "Finance",
      title: "Financial AI Systems",
      description: "Advanced fraud detection and algorithmic trading solutions",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      applications: ["Fraud detection", "Risk assessment", "Algorithmic trading", "Customer insights"],
      results: "95% fraud detection accuracy, 30% risk reduction",
    },
    {
      industry: "Manufacturing",
      title: "Industrial AI Solutions",
      description: "Predictive maintenance and quality control automation",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      applications: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Production planning"],
      results: "50% reduction in downtime, 35% quality improvement",
    },
    {
      industry: "Retail",
      title: "Retail AI Solutions",
      description: "Personalized recommendations and inventory optimization",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      applications: ["Recommendation engines", "Inventory optimization", "Price optimization", "Customer analytics"],
      results: "45% increase in sales, 20% inventory cost reduction",
    },
  ]

  const testimonials = [
    {
      quote: "Their AI architecture transformed our operations, delivering 60% efficiency gains within 6 months.",
      author: "Sarah Chen",
      position: "CTO, TechCorp Industries",
      company: "Fortune 500 Manufacturing",
    },
    {
      quote:
        "The custom AI solution they built increased our fraud detection rate to 98% while reducing false positives.",
      author: "Michael Rodriguez",
      position: "Head of Security, FinanceFirst",
      company: "Leading Financial Institution",
    },
    {
      quote: "Their strategic approach to AI implementation gave us a clear roadmap and measurable ROI from day one.",
      author: "Dr. Emily Watson",
      position: "Chief Innovation Officer",
      company: "Healthcare Systems Group",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Video Background */}
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
            <Brain className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                AI Solutions
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Architecture
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your business with expertly designed AI solutions that deliver measurable results, sustainable
              competitive advantages, and revolutionary operational efficiency across all business functions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Start AI Project
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center">
                View AI Portfolio
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

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

      {/* Enhanced Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Comprehensive AI Architecture Services</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              From strategy to implementation, we provide end-to-end AI solutions that drive innovation, growth, and
              measurable business transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architectureServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors group"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600/20 p-3 rounded-lg mr-4 group-hover:bg-blue-600/30 transition-colors">
                    <service.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">AI Solution Packages</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive AI solution packages designed to meet different business needs and implementation
              requirements.
            </p>
          </motion.div>

          <div className="space-y-16">
            {solutionPackages.map((package_, index) => (
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
                    src={package_.image || "/placeholder.svg"}
                    alt={package_.name}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="bg-black p-8 rounded-2xl border border-gray-800">
                    <h3 className="text-3xl font-bold mb-4 text-white">{package_.name}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{package_.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">Key Features</h4>
                        <div className="space-y-2">
                          {package_.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">Benefits</h4>
                        <div className="space-y-2">
                          {package_.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                              <span className="text-gray-300 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-1">Timeline</h4>
                        <p className="text-white font-semibold">{package_.timeline}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-1">Deliverables</h4>
                        <p className="text-white font-semibold">{package_.deliverables.length} key items</p>
                      </div>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Expertise Areas */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our AI Expertise</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Deep technical expertise across the full spectrum of AI technologies and implementation approaches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 text-center group hover:border-gray-700 transition-colors"
              >
                <div className="bg-blue-600/20 p-4 rounded-lg inline-flex mb-6 group-hover:bg-blue-600/30 transition-colors">
                  <area.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{area.title}</h3>
                <p className="text-gray-400 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Industry AI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Specialized AI architectures tailored to industry-specific challenges and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryUseCases.map((useCase, index) => (
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
                    alt={useCase.industry}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {useCase.industry}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{useCase.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{useCase.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-white">Applications</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {useCase.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          <span className="text-gray-300 text-sm">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">Results Achieved</h4>
                    <p className="text-white font-semibold">{useCase.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Client Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Hear from industry leaders who have transformed their businesses with our AI solutions.
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
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800"
              >
                <div className="text-4xl text-blue-400 mb-4">"</div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">{testimonial.quote}</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.position}</div>
                  <div className="text-blue-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our AI Development Process</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A proven methodology that ensures successful AI implementation from concept to production with measurable
              results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description:
                  "Deep dive into your business needs, data landscape, and AI opportunities with comprehensive assessment",
                icon: Eye,
              },
              {
                step: "02",
                title: "Architecture Design",
                description:
                  "Create comprehensive AI solution architecture tailored to your requirements and scalability needs",
                icon: Settings,
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build and rigorously test AI models and systems for optimal performance and reliability",
                icon: Code,
              },
              {
                step: "04",
                title: "Deployment & Support",
                description:
                  "Deploy solutions with ongoing monitoring, optimization, and 24/7 support for continuous improvement",
                icon: Globe,
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-2xl border border-gray-800 text-center group hover:border-gray-700 transition-colors"
              >
                <div className="bg-blue-600/20 p-4 rounded-lg inline-flex mb-6 group-hover:bg-blue-600/30 transition-colors">
                  <phase.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{phase.title}</h3>
                <p className="text-gray-400 leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Your AI Solution?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let our AI architects design and implement a solution that transforms your business capabilities, drives
              measurable ROI, and positions you as an industry leader in the AI revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center">
                <Brain className="w-5 h-5 mr-2" />
                Schedule AI Consultation
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center">
                Download AI Guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
