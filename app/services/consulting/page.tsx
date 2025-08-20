"use client"

import { motion } from "framer-motion"
import { Link } from "next/link"
import {
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  Brain,
  Zap,
  Shield,
  BarChart3,
  Award,
  ArrowRight,
} from "lucide-react"
import Footer from "../../components/Footer"

export default function ConsultingServicesPage() {
  const services = [
    {
      icon: Target,
      title: "AI Strategy Development",
      description:
        "Comprehensive AI roadmap and implementation planning tailored to your business objectives and industry requirements.",
      features: ["Strategic planning", "ROI analysis", "Risk assessment", "Implementation roadmap"],
      benefits: ["Clear AI vision", "Measurable outcomes", "Risk mitigation", "Competitive advantage"],
    },
    {
      icon: Users,
      title: "Team Training & Development",
      description:
        "Upskill your workforce for successful AI adoption with hands-on training programs and certification paths.",
      features: ["Custom curricula", "Hands-on workshops", "Certification programs", "Ongoing support"],
      benefits: ["Skilled workforce", "Faster adoption", "Reduced resistance", "Internal expertise"],
    },
    {
      icon: Lightbulb,
      title: "Innovation Labs",
      description:
        "Prototype and test AI solutions in controlled environments before full deployment to minimize risks.",
      features: ["Rapid prototyping", "Proof of concepts", "Testing frameworks", "Validation processes"],
      benefits: ["Reduced risk", "Faster innovation", "Validated solutions", "Cost optimization"],
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description:
        "Maximize AI system efficiency and ROI through continuous monitoring, optimization, and scaling strategies.",
      features: ["Performance monitoring", "System optimization", "Cost analysis", "Scalability planning"],
      benefits: ["Improved efficiency", "Cost reduction", "Better ROI", "Scalable solutions"],
    },
  ]

  const expertise = [
    {
      icon: Brain,
      title: "Machine Learning Architecture",
      description:
        "Design and implement scalable ML systems that grow with your business needs and handle enterprise workloads.",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "MLflow"],
    },
    {
      icon: Shield,
      title: "AI Security & Compliance",
      description: "Ensure your AI systems meet security standards and regulatory requirements across all industries.",
      technologies: ["GDPR", "HIPAA", "SOC 2", "ISO 27001"],
    },
    {
      icon: BarChart3,
      title: "Data Engineering",
      description:
        "Build robust data pipelines and infrastructure for AI-powered applications with enterprise-grade reliability.",
      technologies: ["Apache Spark", "Kafka", "Airflow", "Snowflake"],
    },
    {
      icon: Zap,
      title: "AI Model Deployment",
      description:
        "Deploy and scale AI models in production environments with confidence and enterprise-level support.",
      technologies: ["Kubernetes", "Docker", "AWS", "Azure"],
    },
  ]

  const testimonials = [
    {
      quote:
        "Their AI consulting transformed our business operations, delivering 40% efficiency gains within 6 months.",
      author: "Sarah Chen",
      title: "CTO, TechCorp",
      rating: 5,
    },
    {
      quote: "Exceptional expertise and guidance throughout our AI transformation journey. Highly recommended.",
      author: "Michael Rodriguez",
      title: "VP of Innovation, DataFlow",
      rating: 5,
    },
    {
      quote: "Professional, knowledgeable, and results-driven. They exceeded our expectations in every aspect.",
      author: "Emily Johnson",
      title: "CEO, InnovateLabs",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden consulting-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Brain className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
              AI Consulting
              <br />
              <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Strategic AI consulting to transform your business with intelligent solutions, data-driven insights, and
              expert guidance for successful AI adoption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="professional-cta px-8 py-4 rounded-xl font-semibold">
                Discover Our Expertise
              </Link>
              <Link
                href="/contact"
                className="border border-primary-foreground/30 hover:border-primary-foreground/50 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 expertise-section">
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
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-primary font-semibold mb-1">{stat.label}</div>
                <div className="text-muted-foreground text-sm">{stat.description}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Comprehensive AI Consulting</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
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
                className="consulting-card"
              >
                <service.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Features</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          <span className="text-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Benefits</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                          <span className="text-foreground text-sm">{benefit}</span>
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
      <section className="py-20 px-4 expertise-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Expertise Areas</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
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
                className="consulting-card"
              >
                <area.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">{area.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 expertise-section">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Consulting Process</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
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
                className="consulting-card text-center"
              >
                <div className="flex justify-center mb-4">
                  <phase.icon className="w-12 h-12 text-accent" />
                </div>
                <div className="text-4xl font-bold text-primary mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-4 text-primary">{phase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Award className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get started with a comprehensive consultation to discover how AI can drive growth and innovation in your
              organization. Our experts are ready to guide your transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="professional-cta px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border border-border hover:border-accent text-primary px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Download AI Strategy Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
