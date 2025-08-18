"use client"
import { motion } from "framer-motion"
import {
  Zap,
  Eye,
  ArrowRight,
  Play,
  TrendingUp,
  Globe,
  Brain,
  Phone,
  Mail,
  Cpu,
  Lightbulb,
  Rocket,
  Database,
} from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import VideoHero from "../components/VideoHero"

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Solutions",
      description:
        "Cutting-edge artificial intelligence systems that transform your business operations with intelligent automation and predictive analytics.",
      color: "from-gray-600 to-gray-800",
      delay: 0.1,
    },
    {
      icon: Cpu,
      title: "Machine Learning Platform",
      description:
        "Enterprise-grade ML infrastructure that scales with your needs, delivering real-time insights and automated decision-making capabilities.",
      color: "from-gray-700 to-black",
      delay: 0.2,
    },
    {
      icon: Lightbulb,
      title: "Intelligent Automation",
      description:
        "Smart process automation that learns and adapts, reducing operational costs while increasing efficiency and accuracy across all workflows.",
      color: "from-gray-500 to-gray-700",
      delay: 0.3,
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description:
        "Transform raw data into actionable insights with our advanced analytics platform, enabling data-driven decisions at enterprise scale.",
      color: "from-gray-600 to-gray-900",
      delay: 0.4,
    },
  ]

  const stats = [
    { number: "99.9%", label: "AI Accuracy", icon: TrendingUp, description: "Industry-leading precision" },
    { number: "<1ms", label: "Response Time", icon: Zap, description: "Real-time processing" },
    { number: "1000+", label: "AI Models Deployed", icon: Rocket, description: "Global implementations" },
    { number: "24/7", label: "AI Operations", icon: Eye, description: "Continuous intelligence" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* VideoHero Component */}
      <VideoHero
        headline="Artificial Intelligence Systems - High-End AI Solutions That Transform Your Business"
        subheading="Leading the future with cutting-edge AI technology, intelligent automation, and enterprise-grade machine learning platforms that drive innovation and operational excellence."
        primaryCTA={{
          text: "Explore AI Solutions",
          href: "/solutions",
        }}
        secondaryCTA={{
          text: "Watch Demo",
          href: "#demo",
        }}
      />

      {/* Value Proposition Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">Why Choose AIS?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leading the future of artificial intelligence with innovative solutions that drive business
              transformation, operational excellence, and competitive advantage across industries.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  AI Intelligence Platform
                </h2>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                  Intelligence That Evolves <span className="block text-gray-600">With Your Business</span>
                </h3>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Our advanced AI platform combines machine learning, natural language processing, and predictive
                analytics to deliver intelligent solutions that adapt and scale with your business requirements.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-black rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">ACTIVE</span>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold">AI Intelligence Dashboard</h4>
                  <p className="text-gray-300">Real-time analytics and intelligent insights</p>

                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">AI Processing</span>
                      <span className="text-green-400 font-semibold">OPTIMIZED</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full w-4/5 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Process Steps */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h4 className="text-xl font-bold text-black mb-4 uppercase tracking-wider">ANALYZE</h4>
              <h5 className="text-lg font-semibold text-gray-800 mb-3">Data Intelligence</h5>
              <p className="text-gray-600 leading-relaxed">
                Our AI systems continuously analyze complex data patterns from multiple sources, extracting valuable
                insights and identifying optimization opportunities with unprecedented accuracy and speed.
              </p>
            </motion.div>

            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h4 className="text-xl font-bold text-black mb-4 uppercase tracking-wider">PREDICT</h4>
              <h5 className="text-lg font-semibold text-gray-800 mb-3">Predictive Analytics</h5>
              <p className="text-gray-600 leading-relaxed">
                Advanced machine learning models forecast trends, predict outcomes, and identify future opportunities,
                enabling proactive decision-making and strategic planning for sustainable growth.
              </p>
            </motion.div>

            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h4 className="text-xl font-bold text-black mb-4 uppercase tracking-wider">OPTIMIZE</h4>
              <h5 className="text-lg font-semibold text-gray-800 mb-3">Intelligent Automation</h5>
              <p className="text-gray-600 leading-relaxed">
                Smart automation systems implement optimized solutions and continuously improve processes through
                machine learning, delivering measurable results and enhanced operational efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">Proven Results</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our AI-powered security system delivers measurable results that protect your property and give you peace
              of mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <stat.icon className="w-12 h-12 text-black mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-16 md:py-24 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join 1000+ organizations worldwide who trust Artificial Intelligence Systems to drive innovation, optimize
              operations, and accelerate growth with cutting-edge AI technology and intelligent solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Get Free Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Schedule Demo</span>
              </button>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <Globe className="w-8 h-8 mx-auto text-gray-300" />
              <h4 className="text-lg font-semibold">North America Office</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (778) 668-9399</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Globe className="w-8 h-8 mx-auto text-gray-300" />
              <h4 className="text-lg font-semibold">APAC Office</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+60-38679 3990</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Mail className="w-8 h-8 mx-auto text-gray-300" />
              <h4 className="text-lg font-semibold">Email Addresses</h4>
              <div className="space-y-2 text-gray-300">
                <div>canada@artificialintellegence.ai</div>
                <div>malaysia@artificialintellegence.ai</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
