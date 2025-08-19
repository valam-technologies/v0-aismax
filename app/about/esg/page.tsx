"use client"
import { motion } from "framer-motion"
import { Leaf, Users, Shield, TrendingUp, Award, Globe, Target, CheckCircle } from "lucide-react"

export default function ESG() {
  const esgPillars = [
    {
      icon: Leaf,
      title: "Environmental",
      description: "Sustainable technology solutions that minimize environmental impact while maximizing efficiency",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20",
    },
    {
      icon: Users,
      title: "Social",
      description: "Fostering inclusive communities and empowering stakeholders through responsible AI innovation",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
    },
    {
      icon: Shield,
      title: "Governance",
      description: "Transparent, ethical leadership ensuring accountability and sustainable business practices",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20",
    },
  ]

  const initiatives = [
    {
      category: "Environmental",
      items: [
        "Carbon-neutral cloud infrastructure by 2025",
        "Energy-efficient AI algorithms reducing computational waste",
        "Green technology partnerships and sustainable supply chain",
        "Digital transformation reducing paper consumption by 90%",
      ],
    },
    {
      category: "Social",
      items: [
        "Diverse workforce with 40% female leadership representation",
        "AI ethics training for all technical staff",
        "Community technology education programs",
        "Accessibility-first design in all solutions",
      ],
    },
    {
      category: "Governance",
      items: [
        "Independent ESG oversight committee",
        "Transparent AI decision-making processes",
        "Regular third-party ESG audits and reporting",
        "Ethical AI guidelines and compliance frameworks",
      ],
    },
  ]

  const metrics = [
    { value: "40%", label: "Female Leadership", icon: Users },
    { value: "90%", label: "Carbon Reduction", icon: Leaf },
    { value: "100%", label: "Ethical AI Compliance", icon: Shield },
    { value: "500+", label: "Community Impact", icon: Globe },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700 mb-8">
              <Award className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-sm font-medium text-slate-300">ESG Excellence in AI Innovation</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent">
              Environmental, Social & Governance
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Leveraging ESG principles to create sustainable value through responsible AI innovation, transparent
              governance, and positive community impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our ESG Framework</h2>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
              We firmly believe that a strong commitment to Environmental, Social, and Governance practices not only
              drives sustainable growth but also enhances long-term value creation for all stakeholders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {esgPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`${pillar.bgColor} ${pillar.borderColor} p-8 rounded-2xl border backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
              >
                <pillar.icon className={`w-16 h-16 ${pillar.color} mb-6`} />
                <h3 className="text-2xl font-bold mb-4 text-white">{pillar.title}</h3>
                <p className="text-slate-300 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">ESG Impact Metrics</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Measurable outcomes demonstrating our commitment to sustainable and responsible business practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-black/50 p-6 rounded-2xl border border-slate-800"
              >
                <metric.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-slate-400 text-lg">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our ESG Initiatives</h2>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Concrete actions and programs that demonstrate our commitment to environmental stewardship, social
              responsibility, and transparent governance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
              >
                <h3 className="text-2xl font-bold mb-6 text-white">{initiative.category}</h3>
                <div className="space-y-4">
                  {initiative.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Creation */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur-xl opacity-20"></div>
                <div className="relative bg-black p-8 rounded-2xl border border-slate-800">
                  <TrendingUp className="w-16 h-16 text-green-400 mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Creating Sustainable Value</h2>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    By embedding ESG principles into our AI innovation strategy, we create enduring value for
                    stakeholders while generating positive impact for the communities in which we operate.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-4"></div>
                      <span className="text-slate-300">Long-term sustainable growth and profitability</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                      <span className="text-slate-300">Enhanced stakeholder trust and brand reputation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                      <span className="text-slate-300">Risk mitigation and operational efficiency</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
                <div className="relative bg-black p-8 rounded-2xl border border-slate-800">
                  <Target className="w-16 h-16 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-6 text-white">Transparency & Accountability</h3>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Transparency and accountability are cornerstones of our responsible innovation approach. We deliver
                    comprehensive ESG reporting and maintain continuous improvement practices.
                  </p>

                  <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <h4 className="text-lg font-semibold text-white mb-3">Annual ESG Reporting</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      We provide detailed annual reports on our ESG activities and performance, aligned with global
                      standards and best practices for responsible AI development.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Partner with Purpose</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us in building a sustainable future through responsible AI innovation. Together, we can create
              technology solutions that benefit both business and society.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Download ESG Report
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-slate-600 text-white font-semibold rounded-xl hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
              >
                Contact ESG Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
