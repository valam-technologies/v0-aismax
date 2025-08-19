import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Code, Brain, Database, Cloud, Shield, Zap, CheckCircle } from "lucide-react"

export default function SoftwareSolutionsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              AI Software Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Custom AI software development and enterprise solutions that transform your business operations
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Custom Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Cloud-Native Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Enterprise Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Software Portfolio</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI software solutions built for enterprise scalability and performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Brain className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Machine Learning Platforms</h3>
              <p className="text-gray-400 mb-6">
                End-to-end ML platforms for model development, training, and deployment at enterprise scale.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• MLOps Pipeline Automation</li>
                <li>• Model Versioning & Registry</li>
                <li>• A/B Testing Framework</li>
                <li>• Performance Monitoring</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Database className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Data Analytics Suite</h3>
              <p className="text-gray-400 mb-6">
                Advanced analytics and business intelligence tools powered by artificial intelligence.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Real-time Data Processing</li>
                <li>• Predictive Analytics</li>
                <li>• Interactive Dashboards</li>
                <li>• Automated Reporting</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Shield className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">AI Security Software</h3>
              <p className="text-gray-400 mb-6">
                Intelligent security solutions for threat detection, prevention, and response automation.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Behavioral Anomaly Detection</li>
                <li>• Automated Threat Response</li>
                <li>• Security Orchestration</li>
                <li>• Compliance Monitoring</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Cloud className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Cloud AI Services</h3>
              <p className="text-gray-400 mb-6">
                Scalable cloud-based AI services and APIs for rapid application development.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Computer Vision APIs</li>
                <li>• Natural Language Processing</li>
                <li>• Speech Recognition</li>
                <li>• Recommendation Engines</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Code className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Custom AI Applications</h3>
              <p className="text-gray-400 mb-6">
                Bespoke AI applications tailored to your specific business requirements and workflows.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Requirements Analysis</li>
                <li>• Agile Development</li>
                <li>• Integration Testing</li>
                <li>• Deployment Support</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Zap className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Process Automation</h3>
              <p className="text-gray-400 mb-6">
                Intelligent process automation solutions that streamline operations and reduce costs.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Robotic Process Automation</li>
                <li>• Workflow Optimization</li>
                <li>• Document Processing</li>
                <li>• Decision Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Custom AI Software?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts develop tailored AI solutions that drive your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              Start Project Discussion
            </button>
            <button className="border border-gray-600 hover:border-emerald-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
