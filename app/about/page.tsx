"use client"
import { motion } from "framer-motion"
import { Users, Target, Award, Lightbulb, Globe, Zap } from "lucide-react"

export default function About() {
  const team = [
    {
      name: "Sharil",
      role: "Group CEO",
      gender: "male",
      bio: "Visionary leader driving strategic growth and innovation in AI-powered security solutions across global markets.",
    },
    {
      name: "Mohammad Kayser Khan",
      role: "Director",
      gender: "male",
      bio: "Strategic director overseeing corporate governance and operational excellence in AI security implementations.",
    },
    {
      name: "Nisha Kaur",
      role: "Director of Finance Officer",
      gender: "female",
      bio: "Financial strategist ensuring sustainable growth and optimal resource allocation for AI security initiatives.",
    },
    {
      name: "Anusha",
      role: "Head of Finance",
      gender: "female",
      bio: "Finance leader managing fiscal operations and investment strategies for AI security technology development.",
    },
    {
      name: "Muhammad Fazir",
      role: "Director of Operations",
      gender: "male",
      bio: "Operations expert optimizing AI security service delivery and ensuring exceptional client satisfaction.",
    },
    {
      name: "Ishpreet Singh Dhanoa",
      role: "Chief Business Officer",
      gender: "male",
      bio: "Business development leader driving market expansion and strategic partnerships in AI security solutions.",
    },
    {
      name: "Paramveer Singh Dhanoa",
      role: "Head of Education",
      gender: "male",
      bio: "Education specialist developing comprehensive AI security training programs and certification pathways.",
    },
  ]

  // Gender diversity component
  const GenderIcon = ({ gender }: { gender: "male" | "female" }) => {
    if (gender === "female") {
      return (
        <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
        </svg>
      )
    } else {
      return (
        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
        </svg>
      )
    }
  }

  const teamStats = {
    total: team.length,
    male: team.filter((member) => member.gender === "male").length,
    female: team.filter((member) => member.gender === "female").length,
  }

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We continuously push the boundaries of AI and cybersecurity to stay ahead of emerging threats.",
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Our clients' security and success drive every decision we make and solution we develop.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service.",
    },
    {
      icon: Lightbulb,
      title: "Transparency",
      description: "We believe in open communication and clear insights into how our AI systems protect you.",
    },
  ]

  const stats = [
    { number: "2019", label: "Founded" },
    { number: "500+", label: "Enterprise Clients" },
    { number: "50+", label: "Security Experts" },
    { number: "99.9%", label: "Uptime Guaranteed" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              About Artificial Intelligence Systems
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're pioneering the future of intelligent security by combining cutting-edge artificial intelligence with
              deep cybersecurity expertise to protect organizations from sophisticated digital and physical threats.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our Mission</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              At Artificial Intelligence Systems, we understand that modern security challenges require intelligent,
              adaptive solutions. Our mission is to provide comprehensive AI-powered security services that combine
              cutting-edge artificial intelligence with professional expertise, delivering reliable protection for
              organizations of all sizes across diverse industries.
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Through our integrated approach of AI-driven threat detection, intelligent monitoring systems, and
              automated response capabilities, we create adaptive security solutions that evolve with your unique
              operational requirements while maintaining the highest standards of technological innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800"
            >
              <Globe className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Global Reach</h3>
              <p className="text-gray-400">Serving clients across North America and APAC with localized expertise.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800"
            >
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">AI Innovation</h3>
              <p className="text-gray-400">Cutting-edge artificial intelligence powering next-generation security.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800"
            >
              <Users className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Expert Team</h3>
              <p className="text-gray-400">Diverse leadership with deep expertise in AI and security.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to AI security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <value.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the experts leading the charge in AI-powered cybersecurity innovation.
            </p>
          </motion.div>

          {/* Team Diversity Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Leadership Diversity</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-black p-6 rounded-xl border border-gray-800 text-center">
                <div className="flex justify-center mb-3">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-1">{teamStats.male}</div>
                <div className="text-gray-400">Male Leaders</div>
              </div>

              <div className="bg-black p-6 rounded-xl border border-gray-800 text-center">
                <div className="flex justify-center mb-3">
                  <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-pink-400 mb-1">{teamStats.female}</div>
                <div className="text-gray-400">Female Leaders</div>
              </div>

              <div className="bg-black p-6 rounded-xl border border-gray-800 text-center">
                <div className="flex justify-center mb-3">
                  <Users className="w-8 h-8 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-green-400 mb-1">{teamStats.total}</div>
                <div className="text-gray-400">Total Leaders</div>
              </div>
            </div>

            <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
              Our diverse leadership team brings together expertise from technology, finance, operations, and education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <GenderIcon gender={member.gender as "male" | "female"} />
                  <div className="ml-3">
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  </div>
                </div>
                <div className="text-blue-400 font-medium mb-3">{member.role}</div>
                <p className="text-gray-400 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
                <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-800">
                  <Zap className="w-16 h-16 text-yellow-400 mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Cutting-Edge Technology</h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Our proprietary artificial intelligence algorithms are built on advanced machine learning models
                    that continuously learn from global threat intelligence, adapting to emerging attack patterns and
                    security challenges in real-time.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                      <span className="text-gray-300">Global AI threat intelligence network</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-4"></div>
                      <span className="text-gray-300">Real-time AI threat detection and automated response</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></div>
                      <span className="text-gray-300">Industry-leading AI accuracy rates (99.9%)</span>
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
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-black p-8 rounded-2xl border border-gray-800">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                    <div className="text-gray-400">AI Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">&lt;10ms</div>
                    <div className="text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                    <div className="text-gray-400">Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                    <div className="text-gray-400">Clients Protected</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
