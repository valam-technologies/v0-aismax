"use client"
import { motion } from "framer-motion"
import { Building2, Shield, Cpu, Globe2, Users, TrendingUp, Award, Lightbulb, ArrowRight } from "lucide-react"

export default function About() {
  const leadership = [
    {
      name: "Mohammad Kayser Khan",
      role: "Director",
      bio: "Strategic director overseeing corporate governance and operational excellence in AI technology implementations.",
    },
    {
      name: "TH. Tan",
      role: "Chief Compliance Officer, Finance",
      bio: "Compliance expert ensuring regulatory adherence and financial governance across all AI technology operations.",
    },
    {
      name: "Nisha Kaur",
      role: "Director of Finance Officer",
      bio: "Financial strategist ensuring sustainable growth and optimal resource allocation for AI technology initiatives.",
    },
    {
      name: "Anusha",
      role: "Head of Finance",
      bio: "Finance leader managing fiscal operations and strategic financial planning for AI technology investments.",
    },
    {
      name: "Sharil",
      role: "Group CEO",
      bio: "Visionary leader driving strategic growth and innovation in AI-powered technology solutions across global markets.",
    },
    {
      name: "Muhammad Fazir",
      role: "Director of Operations",
      bio: "Operations expert optimizing AI technology service delivery and ensuring exceptional client satisfaction.",
    },
    {
      name: "Ishpreet Singh Dhanoa",
      role: "Chief Business Officer",
      bio: "Business development leader driving market expansion and strategic partnerships in AI technology solutions.",
    },
    {
      name: "Paramveer Singh Dhanoa",
      role: "Head of Education",
      bio: "Education specialist developing comprehensive training programs and knowledge transfer initiatives for AI technologies.",
    },
  ]

  const capabilities = [
    {
      icon: Cpu,
      title: "AI Innovation",
      description:
        "Cutting-edge artificial intelligence and machine learning technologies driving next-generation business solutions.",
      metrics: "99.9% Accuracy",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Advanced cybersecurity frameworks protecting critical business infrastructure and sensitive data assets.",
      metrics: "24/7 Protection",
    },
    {
      icon: Globe2,
      title: "Global Scale",
      description: "Worldwide deployment capabilities with localized expertise across North America and APAC regions.",
      metrics: "500+ Clients",
    },
    {
      icon: TrendingUp,
      title: "Performance Excellence",
      description: "Industry-leading performance metrics with guaranteed uptime and rapid response capabilities.",
      metrics: "<10ms Response",
    },
  ]

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "Maintaining the highest standards in technology development, service delivery, and client satisfaction.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously pushing boundaries in AI and technology to solve complex business challenges.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "Building long-term strategic relationships with clients through collaborative solution development.",
    },
    {
      icon: Building2,
      title: "Integrity",
      description: "Operating with transparency, accountability, and ethical responsibility in all business practices.",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium mb-8">
              <Building2 className="w-4 h-4 mr-2" />
              Corporate Excellence Since 2019
            </div>

            <h1 className="text-7xl md:text-8xl font-black mb-8 text-gray-900 leading-tight tracking-tight">
              Artificial Intelligence
              <span className="block text-gray-600">Systems</span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light mb-12">
              We architect the future of intelligent business solutions through advanced AI technologies, delivering
              transformative outcomes for global enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                Connect With Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-gray-900">Core Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
              Comprehensive AI-powered solutions designed for enterprise-scale challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-8">
                  <capability.icon className="w-16 h-16 text-gray-900" />
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Performance</div>
                    <div className="text-2xl font-bold text-gray-900">{capability.metrics}</div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-6 text-gray-900">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
              The foundational principles that drive our commitment to technological excellence and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-gray-900 transition-colors duration-300">
                  <value.icon className="w-10 h-10 text-gray-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-gray-900">Leadership</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
              Experienced executives driving innovation and strategic growth in AI technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-gray-600 font-medium text-lg">{member.role}</div>
                </div>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-12 font-light">
              Partner with us to unlock the full potential of AI-powered solutions for your enterprise.
            </p>
            <button className="inline-flex items-center px-10 py-5 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
              Connect With Us
              <ArrowRight className="w-6 h-6 ml-3" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
