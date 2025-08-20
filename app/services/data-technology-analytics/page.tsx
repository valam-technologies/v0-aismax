"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { BarChart3, TrendingUp, Brain, Target, Database, Activity } from "lucide-react"

export default function DataTechnologyAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Data Technology & Analytics</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform raw security data into actionable insights with advanced analytics, AI-driven intelligence,
                and comprehensive business intelligence solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Start Analytics Journey
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-300 text-white hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  View Demo Dashboard
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "10TB+", label: "Data Processed Daily" },
                { number: "99.9%", label: "Analytics Accuracy" },
                { number: "50+", label: "Data Sources Integrated" },
                { number: "Real-time", label: "Insights Delivery" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-white"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Analytics Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced data analytics and business intelligence solutions designed to unlock the full potential of
                your security data
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart3,
                  title: "Data Visualization",
                  description:
                    "Interactive dashboards and reports with real-time data visualization, custom charts, and executive summaries",
                  features: [
                    "Real-time dashboards",
                    "Custom visualizations",
                    "Executive reporting",
                    "Mobile-responsive design",
                  ],
                },
                {
                  icon: Brain,
                  title: "Predictive Analytics",
                  description:
                    "AI-powered forecasting models that predict security threats, system performance, and resource requirements",
                  features: ["Threat prediction", "Capacity planning", "Risk forecasting", "Anomaly detection"],
                },
                {
                  icon: TrendingUp,
                  title: "Business Intelligence",
                  description:
                    "Strategic data insights that drive informed decision-making and optimize security operations",
                  features: ["Strategic insights", "Performance metrics", "ROI analysis", "Trend identification"],
                },
                {
                  icon: Target,
                  title: "Performance Metrics",
                  description:
                    "Comprehensive KPI tracking and optimization with automated alerts and performance benchmarking",
                  features: ["KPI monitoring", "Performance benchmarks", "Automated alerts", "Goal tracking"],
                },
                {
                  icon: Database,
                  title: "Data Integration",
                  description:
                    "Seamless integration of multiple data sources into unified analytics platform with data quality assurance",
                  features: ["Multi-source integration", "Data quality checks", "ETL processes", "Data governance"],
                },
                {
                  icon: Activity,
                  title: "Real-time Monitoring",
                  description:
                    "Continuous monitoring and analysis of security systems with instant alerts and automated responses",
                  features: ["Live monitoring", "Instant alerts", "Automated responses", "System health checks"],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <service.icon className="w-12 h-12 text-blue-400 mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Process */}
        <section className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Analytics Methodology</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to transforming your data into actionable business intelligence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Data Discovery",
                  description: "Identify and catalog all available data sources and quality assessment",
                },
                {
                  step: "02",
                  title: "Integration & Processing",
                  description: "Clean, transform, and integrate data from multiple sources",
                },
                {
                  step: "03",
                  title: "Analysis & Modeling",
                  description: "Apply advanced analytics and machine learning models",
                },
                {
                  step: "04",
                  title: "Visualization & Insights",
                  description: "Create interactive dashboards and actionable insights",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                  <p className="text-gray-300">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Industry Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored analytics solutions for specific industry requirements and compliance standards
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Financial Services",
                  description: "Fraud detection, risk assessment, and regulatory compliance analytics",
                  metrics: [
                    "95% fraud detection accuracy",
                    "50% faster compliance reporting",
                    "Real-time risk monitoring",
                  ],
                },
                {
                  title: "Healthcare",
                  description: "Patient safety analytics, operational efficiency, and HIPAA compliance monitoring",
                  metrics: ["99.9% data security", "40% operational efficiency gain", "Complete HIPAA compliance"],
                },
                {
                  title: "Manufacturing",
                  description: "Predictive maintenance, quality control, and supply chain optimization",
                  metrics: [
                    "30% reduction in downtime",
                    "25% quality improvement",
                    "Real-time supply chain visibility",
                  ],
                },
                {
                  title: "Retail",
                  description: "Customer behavior analysis, inventory optimization, and loss prevention",
                  metrics: ["20% increase in sales", "35% inventory optimization", "60% loss reduction"],
                },
                {
                  title: "Government",
                  description: "Public safety analytics, resource optimization, and citizen service improvement",
                  metrics: ["Enhanced public safety", "30% resource optimization", "Improved citizen satisfaction"],
                },
                {
                  title: "Education",
                  description: "Campus security analytics, student performance tracking, and resource management",
                  metrics: ["Safer campus environment", "Improved student outcomes", "Optimized resource allocation"],
                },
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{industry.title}</h3>
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Transform Your Data Into Intelligence</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Unlock the power of your security data with our advanced analytics platform. Get started with a free
                consultation and demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Schedule Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Download Analytics Guide
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
