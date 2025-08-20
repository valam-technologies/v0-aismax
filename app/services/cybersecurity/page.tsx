import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Shield, Lock, Eye, Zap, AlertTriangle, CheckCircle, Activity } from "lucide-react"
import Link from "next/link"

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              AI-Powered Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced artificial intelligence solutions that protect your digital assets from evolving cyber threats
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>99.8% Threat Detection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Real-time Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Zero-Day Protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cybersecurity Solutions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI-driven security solutions that adapt and evolve with emerging threats
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <AlertTriangle className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Threat Detection</h3>
              <p className="text-gray-400 mb-6">
                AI-powered threat detection systems that identify and respond to security incidents in real-time.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Behavioral Anomaly Detection</li>
                <li>• Machine Learning Threat Analysis</li>
                <li>• Zero-Day Attack Prevention</li>
                <li>• Advanced Persistent Threat Detection</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Eye className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Security Monitoring</h3>
              <p className="text-gray-400 mb-6">
                24/7 intelligent monitoring and surveillance of your digital infrastructure and assets.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Network Traffic Analysis</li>
                <li>• Endpoint Detection & Response</li>
                <li>• Security Information & Event Management</li>
                <li>• Continuous Compliance Monitoring</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Zap className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Incident Response</h3>
              <p className="text-gray-400 mb-6">
                Automated incident response systems that contain and mitigate security threats instantly.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Automated Threat Containment</li>
                <li>• Security Orchestration</li>
                <li>• Forensic Analysis</li>
                <li>• Recovery Automation</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Lock className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Identity & Access Management</h3>
              <p className="text-gray-400 mb-6">
                AI-enhanced identity verification and access control systems for secure authentication.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Biometric Authentication</li>
                <li>• Risk-Based Access Control</li>
                <li>• Privileged Access Management</li>
                <li>• Single Sign-On Integration</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Shield className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Data Protection</h3>
              <p className="text-gray-400 mb-6">
                Advanced encryption and data loss prevention solutions powered by artificial intelligence.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• End-to-End Encryption</li>
                <li>• Data Loss Prevention</li>
                <li>• Privacy Protection</li>
                <li>• Secure Data Backup</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Activity className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Vulnerability Management</h3>
              <p className="text-gray-400 mb-6">
                Proactive vulnerability assessment and management using AI-driven security analysis.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Automated Vulnerability Scanning</li>
                <li>• Risk Prioritization</li>
                <li>• Patch Management</li>
                <li>• Security Assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Metrics */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Security Performance</h2>
            <p className="text-gray-400">Industry-leading cybersecurity metrics and protection rates</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">99.8%</div>
              <div className="text-gray-400">Threat Detection Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">&lt;1s</div>
              <div className="text-gray-400">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">0.01%</div>
              <div className="text-gray-400">False Positive Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">24/7</div>
              <div className="text-gray-400">Security Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Digital Future</h2>
          <p className="text-xl text-gray-300 mb-8">
            Protect your organization with our advanced AI-powered cybersecurity solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              <Link href="/contact">Security Assessment</Link>
            </button>
            <button className="border border-gray-600 hover:border-emerald-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              <Link href="/contact">Connect with us</Link>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
