import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Shield, Lock, Eye, Database, UserCheck, Clock, Globe } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-16 h-16 text-emerald-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your privacy and data security are fundamental to our AI systems. Learn how we protect and handle your
                information.
              </p>
              <div className="flex items-center justify-center mt-6 text-gray-400">
                <Clock className="w-5 h-5 mr-2" />
                <span>Last updated: January 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Information Collection */}
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <Database className="w-8 h-8 text-emerald-500 mr-4" />
                  <h2 className="text-2xl font-bold">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We collect information to provide better AI security services:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Contact information (name, email, phone) for service delivery</li>
                    <li>Technical data from AI systems for optimization and threat detection</li>
                    <li>Usage analytics to improve our artificial intelligence algorithms</li>
                    <li>Security logs and incident reports for threat analysis</li>
                  </ul>
                </div>
              </div>

              {/* Data Protection */}
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <Lock className="w-8 h-8 text-emerald-500 mr-4" />
                  <h2 className="text-2xl font-bold">Data Protection & Security</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>Our AI systems employ enterprise-grade security measures:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>End-to-end encryption for all data transmission</li>
                    <li>Advanced AI-powered threat detection and prevention</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Compliance with SOC 2, ISO 27001, and GDPR standards</li>
                    <li>Zero-trust architecture with multi-factor authentication</li>
                  </ul>
                </div>
              </div>

              {/* AI Data Processing */}
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-emerald-500 mr-4" />
                  <h2 className="text-2xl font-bold">AI Data Processing</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>Our artificial intelligence systems process data to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Detect and prevent security threats in real-time</li>
                    <li>Optimize system performance and accuracy</li>
                    <li>Generate predictive analytics and insights</li>
                    <li>Improve machine learning models and algorithms</li>
                    <li>Provide automated incident response and remediation</li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <UserCheck className="w-8 h-8 text-emerald-500 mr-4" />
                  <h2 className="text-2xl font-bold">Your Privacy Rights</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and review your personal data</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Delete your data (subject to legal requirements)</li>
                    <li>Opt-out of non-essential data processing</li>
                    <li>Receive data in a portable format</li>
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-r from-emerald-900/20 to-gray-900/20 rounded-2xl p-8 border border-emerald-800/30">
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-emerald-500 mr-4" />
                  <h2 className="text-2xl font-bold">Contact Our Privacy Team</h2>
                </div>
                <div className="text-gray-300">
                  <p className="mb-4">Questions about our privacy practices or AI data processing?</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="mailto:privacy@artificialintelligence.ai"
                      className="text-emerald-400 hover:text-emerald-300"
                    >
                      privacy@artificialintelligence.ai
                    </a>
                    <span className="text-gray-500">|</span>
                    <span>+1 (778) 668-9399</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
