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
import Link from "next/link" // Import Link from next/link for navigation
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
      title: "Machine Learning Solutions",
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
        "Transform raw data into actionable insights with our advanced analytics solutions, enabling data-driven decisions at enterprise scale.",
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
      {/* VideoHero Component */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gray-400 rounded-full animate-pulse"></div>
          <div
            className="absolute top-32 right-20 w-24 h-24 bg-gray-300 rounded-full animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-40 h-40 bg-gray-500 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-32 right-1/3 w-28 h-28 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-gray-300 rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <VideoHero
          headline="Artificial Intelligence Systems - High-End Advanced Technology Solutions That Transform Your Business"
          subheading="Leading the future with cutting-edge AI technology, intelligent automation, and enterprise-grade machine learning platforms that drive innovation and operational excellence."
          primaryCTA={{
            text: "Explore AI Solutions",
            href: "/solutions",
          }}
          secondaryCTA={{
            text: "Contact Us", // Changed from "Watch Demo" to "Contact Us"
            href: "/contact", // Updated href to contact page
          }}
        />
      </div>
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
                  AI Intelligence Solutions
                </h2>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                  Intelligence That Evolves <span className="block text-gray-600">With Your Business</span>
                </h3>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Our advanced AI solutions combine machine learning, natural language processing, and predictive
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
              Our AI-powered platform delivers measurable results that transform your business operations and drive
              sustainable growth through intelligent automation.
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
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Get Free Assessment</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center space-x-2">
                <Link href="/contact" className="flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Connect With Us</span>
                </Link>
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
      {/* Drone Technology Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 border border-white/30 rounded-full animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-600/20 to-slate-800/20 backdrop-blur-sm border border-slate-400/30 rounded-full px-4 py-2 mb-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-semibold tracking-wide">ADVANCED DRONE TECHNOLOGY</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Autonomous Aerial
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Intelligence Systems
                  </span>
                </h2>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Revolutionary drone technology powered by advanced AI algorithms, delivering unprecedented precision in
                surveillance, monitoring, and autonomous operations for enterprise-grade applications.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">360°</div>
                  <div className="text-gray-400 text-sm">Omnidirectional Coverage</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">4K+</div>
                  <div className="text-gray-400 text-sm">Ultra HD Resolution</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">50km</div>
                  <div className="text-gray-400 text-sm">Operational Range</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-gray-400 text-sm">Autonomous Operation</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Link href="/solutions" className="flex items-center space-x-2">
                    <span>Explore Drone Solutions</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Link href="/contact" className="flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Contact Us</span>
                  </Link>
                </button>
              </div>
            </motion.div>

            {/* Right Content - Video/Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Main Video Container */}
              <div className="relative bg-gradient-to-br from-gray-800 to-black rounded-2xl overflow-hidden shadow-2xl">
                {/* Drone Technology Video/Image */}
                <div
                  className="w-full h-80 lg:h-96 bg-cover bg-center relative group cursor-pointer"
                  style={{
                    backgroundImage: `url(/placeholder.svg?height=400&width=600&query=advanced%20military%20drone%20surveillance%20night%20vision)`,
                  }}
                >
                  {/* Video Flash Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 group-hover:from-black/40 transition-all duration-500">
                    <div className="absolute inset-0 bg-blue-500/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Live Status with Flash Effect */}
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                      <span className="text-white text-sm font-bold bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                        LIVE DRONE FEED
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 space-y-2">
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1 border border-blue-400/30 animate-pulse">
                        <span className="text-blue-300 text-xs font-semibold">● SCANNING</span>
                      </div>
                      <div
                        className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1 border border-cyan-400/30 animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      >
                        <span className="text-cyan-300 text-xs font-semibold">● ANALYZING</span>
                      </div>
                      <div
                        className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1 border border-green-400/30 animate-pulse"
                        style={{ animationDelay: "1s" }}
                      >
                        <span className="text-green-300 text-xs font-semibold">● TRACKING</span>
                      </div>
                    </div>

                    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 space-y-2">
                      <div
                        className="w-16 h-12 bg-cover bg-center rounded border-2 border-white/50 shadow-lg animate-pulse hover:scale-110 transition-transform cursor-pointer"
                        style={{
                          backgroundImage: `url(/placeholder.svg?height=60&width=80&query=drone%20thermal%20imaging%20night)`,
                        }}
                      >
                        <div className="w-full h-full bg-red-500/30 rounded flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                        </div>
                      </div>
                      <div
                        className="w-16 h-12 bg-cover bg-center rounded border-2 border-white/50 shadow-lg animate-pulse hover:scale-110 transition-transform cursor-pointer"
                        style={{
                          backgroundImage: `url(/placeholder.svg?height=60&width=80&query=drone%20aerial%20surveillance%20city)`,
                          animationDelay: "0.3s",
                        }}
                      >
                        <div className="w-full h-full bg-blue-500/30 rounded flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                        </div>
                      </div>
                      <div
                        className="w-16 h-12 bg-cover bg-center rounded border-2 border-white/50 shadow-lg animate-pulse hover:scale-110 transition-transform cursor-pointer"
                        style={{
                          backgroundImage: `url(/placeholder.svg?height=60&width=80&query=drone%20security%20monitoring%20infrared)`,
                          animationDelay: "0.6s",
                        }}
                      >
                        <div className="w-full h-full bg-green-500/30 rounded flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Info with Flash Effect */}
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-white font-semibold mb-1 bg-black/50 px-3 py-1 rounded backdrop-blur-sm">
                        Autonomous Drone Fleet
                      </h4>
                      <p className="text-gray-300 text-sm bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
                        AI-Powered Surveillance & Monitoring
                      </p>
                    </div>

                    <div className="absolute bottom-4 right-4 space-y-2">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-blue-200 hover:scale-105 transition-transform">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <div>
                            <div className="text-black font-bold text-sm">GPS Lock</div>
                            <div className="text-gray-600 text-xs">±1m Accuracy</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-green-200 hover:scale-105 transition-transform">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <div>
                            <div className="text-black font-bold text-sm">Signal Strong</div>
                            <div className="text-gray-600 text-xs">5G Connected</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 hover:scale-110 transition-transform cursor-pointer">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Border with Flash Effect */}
                <div className="absolute -top-4 -left-4 w-full h-full border border-blue-400/30 rounded-2xl animate-pulse"></div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-4 shadow-2xl border border-gray-200 hover:scale-105 transition-transform">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center relative">
                    <Eye className="w-6 h-6 text-white" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <div className="text-black font-bold">AI Vision</div>
                    <div className="text-gray-600 text-sm">Object Recognition</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-black rounded-lg p-2 shadow-xl border border-gray-600">
                <div
                  className="w-24 h-16 bg-cover bg-center rounded relative"
                  style={{
                    backgroundImage: `url(/placeholder.svg?height=80&width=120&query=drone%20cockpit%20view%20hud%20interface)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded">
                    <div className="absolute top-1 left-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1 left-1 text-white text-xs font-bold">HUD</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Drone Features Grid */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Intelligent Navigation</h3>
              <p className="text-gray-300 leading-relaxed">
                Advanced AI algorithms enable autonomous flight paths, obstacle avoidance, and adaptive route
                optimization for maximum efficiency and safety.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Surveillance</h3>
              <p className="text-gray-300 leading-relaxed">
                Multi-spectrum imaging, thermal detection, and real-time analytics provide comprehensive monitoring
                capabilities for critical infrastructure protection.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rapid Deployment</h3>
              <p className="text-gray-300 leading-relaxed">
                Quick-response deployment systems with automated launch sequences enable immediate operational readiness
                for emergency and security scenarios.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
