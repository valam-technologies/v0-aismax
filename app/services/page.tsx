"use client"
import { motion } from "framer-motion"
import { Shield, Eye, Lock, AlertTriangle, BarChart3, Camera, CheckCircle, ArrowRight, Play, Zap } from "lucide-react"
import Footer from "../components/Footer"

export default function Services() {
  const services = [
    {
      icon: Camera,
      title: "AI Video Surveillance",
      description:
        "Transform your security cameras into intelligent monitoring systems with advanced AI that detects threats, analyzes behavior, and protects your assets.",
      features: ["Real-time object detection", "Facial recognition", "Behavioral analysis", "Automated alerts"],
      image: "/ai-surveillance-system.png",
      benefits: [
        "95% reduction in false alarms",
        "24/7 automated monitoring",
        "Instant threat notifications",
        "Scalable across locations",
      ],
    },
    {
      icon: Lock,
      title: "Enterprise AI Consulting",
      description:
        "Strategic AI consulting services to help organizations implement intelligent automation, optimize operations, and drive digital transformation.",
      features: ["AI strategy development", "Technology assessment", "Implementation roadmaps", "Change management"],
      image: "/ai-strategy-discussion.png",
      benefits: [
        "Accelerated AI adoption",
        "Reduced implementation risks",
        "Optimized ROI on AI investments",
        "Expert guidance and support",
      ],
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics Solutions",
      description:
        "Harness AI to predict business outcomes, optimize operations, and make data-driven decisions with advanced predictive analytics platforms.",
      features: ["Predictive modeling", "Risk assessment", "Performance optimization", "Automated reporting"],
      image: "/advanced-analytics-dashboard.png",
      benefits: [
        "85% improvement in forecasting accuracy",
        "Proactive risk mitigation",
        "Data-driven decision making",
        "Operational efficiency gains",
      ],
    },
    {
      icon: Shield,
      title: "AI Security Solutions",
      description:
        "Comprehensive AI-powered security solutions that protect digital assets, detect threats, and ensure compliance across enterprise environments.",
      features: ["Threat detection", "Automated response", "Compliance monitoring", "Security analytics"],
      image: "/cybersecurity-operations-center-ai.png",
      benefits: [
        "Advanced threat detection",
        "Automated incident response",
        "Regulatory compliance",
        "Comprehensive protection",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Intelligent Process Automation",
      description:
        "Streamline business operations with AI-powered automation that handles complex workflows, reduces manual effort, and improves efficiency.",
      features: ["Workflow automation", "Document processing", "Decision engines", "Integration platforms"],
      image: "/automated-workflow-ai.png",
      benefits: [
        "60% reduction in processing time",
        "Improved accuracy and consistency",
        "Cost savings through automation",
        "Enhanced employee productivity",
      ],
    },
    {
      icon: Eye,
      title: "AI-Powered Business Intelligence",
      description:
        "Transform raw data into actionable insights with AI-enhanced business intelligence platforms that provide real-time analytics and strategic guidance.",
      features: ["Real-time dashboards", "Automated insights", "Predictive modeling", "Custom reporting"],
      image: "/bi-dashboard-ai-insights.png",
      benefits: [
        "Real-time business visibility",
        "Automated insight generation",
        "Strategic decision support",
        "Competitive advantage",
      ],
    },
  ]

  const stats = [
    { number: "500+", label: "Clients Protected", description: "Trusted worldwide" },
    { number: "99.9%", label: "Uptime Guarantee", description: "Always operational" },
    { number: "24/7", label: "Support Available", description: "Round-the-clock assistance" },
    { number: "<2min", label: "Average Response", description: "Lightning-fast support" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 hero-gradient opacity-10"></div>
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Professional AI</span>
              <br />
              <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Our comprehensive suite of AI-powered services provides end-to-end intelligent solutions for organizations
              of all sizes, from innovative startups to enterprise-level corporations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cta-primary-cyan text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
              <button className="btn-ghost px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center card-primary p-6 rounded-xl"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-foreground font-semibold mb-1">{stat.label}</div>
                <div className="text-muted-foreground text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our AI Services</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Comprehensive AI-powered solutions designed to transform your business operations and drive innovation.
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
                className="card-primary rounded-2xl overflow-hidden elegant-shadow hover:shadow-2xl transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary/20 backdrop-blur-sm p-2 rounded-lg">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Key Features</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Benefits</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-secondary mr-3" />
                          <span className="text-muted-foreground text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full btn-primary py-3 rounded-xl font-semibold transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Professional Service Approach</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
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
                className="card-primary p-8 rounded-2xl text-center elegant-shadow hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <phase.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-primary mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{phase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Ready to Secure Your Organization?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get started with our AI-powered security services today. Our experts are ready to design a custom solution
              for your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cta-primary-cyan text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="cta-secondary-emerald text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
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
