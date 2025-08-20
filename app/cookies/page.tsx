import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Cookie, Settings, BarChart3, Shield, Clock } from "lucide-react"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Cookie className="w-16 h-16 text-emerald-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Learn how our AI systems use cookies to enhance security and optimize performance.
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
              {/* Essential Cookies */}
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-emerald-500 mr-4" />
                  <h2 className="text-2xl font-bold">Essential AI Security Cookies</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>Required for our AI systems to function securely:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Authentication tokens for secure AI system access</li>
                    <li>Session management for continuous threat monitoring</li>
                    <li>Security preferences and alert configurations</li>
                    <li>Load balancing for optimal AI processing performance</li>
                    <li>CSRF protection for secure API communications</li>
                  </ul>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-8 h-8 text-emerald-500 mr-4" />
                  <h2 className="text-2xl font-bold">AI Analytics & Performance</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>Help us improve our artificial intelligence systems:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>AI model performance metrics and optimization data</li>
                    <li>Threat detection accuracy and response time analytics</li>
                    <li>System usage patterns for capacity planning</li>
                    <li>Error tracking for AI algorithm improvements</li>
                    <li>User experience analytics for interface optimization</li>
                  </ul>
                </div>
              </div>

              {/* Preference Management */}
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <Settings className="w-8 h-8 text-emerald-500 mr-4" />
                  <h2 className="text-2xl font-bold">Cookie Preferences</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>You can control cookie usage:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Essential cookies cannot be disabled for security reasons</li>
                    <li>Analytics cookies can be opted out via browser settings</li>
                    <li>Preference cookies remember your AI system configurations</li>
                    <li>Third-party cookies are minimized for privacy protection</li>
                    <li>Cookie consent can be updated anytime in your account</li>
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-r from-emerald-900/20 to-gray-900/20 rounded-2xl p-8 border border-emerald-800/30">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Cookie Questions?</h2>
                  <p className="text-gray-300 mb-6">
                    Contact us about our AI system cookie usage and privacy practices.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
