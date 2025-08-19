"use client"

import { motion } from "framer-motion"
import { Users, Target, Lightbulb, TrendingUp, CheckCircle, Brain, Zap, Shield, BarChart3, Clock } from "lucide-react"
import Footer from "../../components/Footer"

export default function ConsultingPage() {
  const services = [
    {
      icon: Target,
      title: "AI Strategy Development",
      description: "Comprehensive AI roadmap and implementation planning tailored to your business objectives.",
      features: ["Strategic planning", "ROI analysis", "Risk assessment", "Implementation roadmap"],
      benefits: ["Clear AI vision", "Measurable outcomes", "Risk mitigation", "Competitive advantage"],
    },
    {
      icon: Users,
      title: "Team Training & Development",
      description: "Upskill your workforce for successful AI adoption with hands-on training programs.",
      features: ["Custom curricula", "Hands-on workshops", "Certification programs", "Ongoing support"],
      benefits: ["Skilled workforce", "Faster adoption", "Reduced resistance", "Internal expertise"],
    },
    {
      icon: Lightbulb,
      title: "Innovation Labs",
      description: "Prototype and test AI solutions in controlled environments before full deployment.",
      features: ["Rapid prototyping", "Proof of concepts", "Testing frameworks", "Validation processes"],
      benefits: ["Reduced risk", "Faster innovation", "Validated solutions", "Cost optimization"],
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Maximize AI system efficiency and ROI through continuous monitoring and optimization.",
      features: ["Performance monitoring", "System optimization", "Cost analysis", "Scalability planning"],
      benefits: ["Improved efficiency", "Cost reduction", "Better ROI", "Scalable solutions"],
    },
  ]

  const expertise = [
    {
      icon: Brain,
      title: "Machine Learning Architecture",
      description: "Design and implement scalable ML systems that grow with your business needs.",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "MLflow"],
    },
    {
      icon: Shield,
      title: "AI Security & Compliance",
      description: "Ensure your AI systems meet security standards and regulatory requirements.",
      technologies: ["GDPR", "HIPAA", "SOC 2", "ISO 27001"],
    },
    {
      icon: BarChart3,
      title: "Data Engineering",
      description: "Build robust data pipelines and infrastructure for AI-powered applications.",
      technologies: ["Apache Spark", "Kafka", "Airflow", "Snowflake"],
    },
    {
      icon: Zap,
      title: "AI Model Deployment",
      description: "Deploy and scale AI models in production environments with confidence.",
      technologies: ["Kubernetes", "Docker", "AWS", "Azure"],
    },
  ]

  const pricingPlans = [
    {
      name: "Strategic Assessment",
      price: "$5,000",
      period: "one-time",
      description: "Comprehensive AI readiness evaluation",
      features: [
        "Current state analysis",
        "AI opportunity identification",
        "Strategic roadmap",
        "ROI projections",
        "Risk assessment",
      ],
      duration: "2-3 weeks",
      popular: false,
    },
    {
      name: "Implementation Support",
      price: "$15,000",
      period: "/month",
      description: "Ongoing consulting and support",
      features: [
        "Dedicated consultant",
        "Weekly strategy sessions",
        "Implementation guidance",
        "Team training",
        "Performance monitoring",
        "Monthly reports",
      ],
      duration: "3-12 months",
      popular: true,
    },
    {
      name: "Enterprise Partnership",
      price: "Custom",
      period: "",
      description: "Comprehensive AI transformation",
      features: [
        "Full consulting team",
        "Custom AI solutions",
        "24/7 support",
        "Executive briefings",
        "Compliance assistance",
        "Long-term partnership",
      ],
      duration: "12+ months",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Brain className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                AI Consulting
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Strategic AI consulting to transform your business with intelligent solutions, data-driven insights, and
              expert guidance for successful AI adoption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                View Case Studies
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
              { number: "200+", label: "AI Projects", description: "Successfully delivered" },
              { number: "40%", label: "Average ROI", description: "Within 12 months" },
              { number: "95%", label: "Client Satisfaction", description: "Proven track record" },
              { number: "24/7", label: "Expert Support", description: "Always available" },
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

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Comprehensive AI Consulting</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              End-to-end AI consulting services to guide your organization through successful AI transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Features</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
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
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
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

      {/* Expertise Areas */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Expertise Areas</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Deep technical expertise across all aspects of AI implementation and deployment.
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
                className="bg-black p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <area.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Consulting Packages</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Flexible consulting options designed to meet your specific AI transformation needs.
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
                className={`bg-gray-900 p-8 rounded-2xl border ${plan.popular ? "border-blue-500 relative" : "border-gray-800"} hover:border-gray-700 transition-colors`}
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
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-400 text-sm">{plan.duration}</span>
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
                  {plan.name === "Enterprise Partnership" ? "Contact Sales" : "Get Started"}
                </button>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Consulting Process</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A proven methodology that ensures successful AI transformation from strategy to implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                description: "Analyze current systems, identify AI opportunities, and assess organizational readiness",
                icon: Target,
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Develop comprehensive AI roadmap with clear milestones, timelines, and success metrics",
                icon: Brain,
              },
              {
                step: "03",
                title: "Implementation Support",
                description: "Guide execution with hands-on support, training, and continuous optimization",
                icon: Zap,
              },
              {
                step: "04",
                title: "Continuous Optimization",
                description: "Monitor performance, optimize systems, and scale solutions for maximum impact",
                icon: TrendingUp,
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get started with a free consultation to discover how AI can drive growth and innovation in your
              organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                Schedule Free Consultation
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                Download AI Strategy Guide
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
