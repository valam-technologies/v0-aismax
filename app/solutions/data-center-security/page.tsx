import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Shield, Server, Lock, Eye, Zap, CheckCircle, ArrowRight, BarChart3 } from "lucide-react"

export default function DataCenterSecurityPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('/data-center-security.png')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
              <Server className="w-4 h-4 mr-2" />
              Data Center AI Security Solutions
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Secure Your Data Center with AI-Powered Protection
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Advanced artificial intelligence security systems designed specifically for data centers, providing 24/7
              monitoring, threat detection, and automated response capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                Get Security Assessment
              </button>
              <button className="px-8 py-4 border border-gray-600 hover:border-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-emerald-500/10">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">&lt;1ms</div>
              <div className="text-gray-400">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-gray-400">AI Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-gray-400">Data Centers Secured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Data Center Security</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI-powered security solutions provide complete protection for your critical infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Shield className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Perimeter Security</h3>
              <p className="text-gray-400 mb-6">
                AI-powered perimeter monitoring with facial recognition, behavioral analysis, and automated threat
                detection.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Thermal imaging integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Motion detection algorithms
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Access control automation
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Server className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Server Room Monitoring</h3>
              <p className="text-gray-400 mb-6">
                Real-time monitoring of server environments with predictive maintenance and anomaly detection.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Temperature monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Humidity control
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Equipment health tracking
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Lock className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Access Control</h3>
              <p className="text-gray-400 mb-6">
                Multi-factor authentication with biometric verification and real-time access logging.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Biometric authentication
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Smart card integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Audit trail logging
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Eye className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Video Analytics</h3>
              <p className="text-gray-400 mb-6">
                Advanced video analytics with object detection, behavior analysis, and automated alerting.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Object recognition
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Behavior analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Automated alerts
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Zap className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Threat Response</h3>
              <p className="text-gray-400 mb-6">
                Automated threat response with real-time incident management and emergency protocols.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Automated lockdown
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Emergency notifications
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Incident documentation
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <BarChart3 className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Analytics Dashboard</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive analytics dashboard with real-time insights and predictive intelligence.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Real-time monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Predictive analytics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Custom reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Data Center?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a comprehensive security assessment and custom solution proposal for your data center infrastructure.
          </p>
          <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25 inline-flex items-center">
            Schedule Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
