import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Clock } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Scale className="w-16 h-16 text-emerald-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional terms governing our AI systems and enterprise security services.
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
              {/* Service Agreement */}
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-500 mr-4" />
                  <h2 className="text-2xl font-bold">AI Service Agreement</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>By using our artificial intelligence systems, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use our AI services for legitimate business purposes only</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Maintain confidentiality of system access credentials</li>
                    <li>Report security incidents and vulnerabilities promptly</li>
                    <li>Allow our AI systems to process data for threat detection</li>
                  </ul>
                </div>
              </div>

              {/* Service Levels */}
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-emerald-500 mr-4" />
                  <h2 className="text-2xl font-bold">Service Level Commitments</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>Our AI systems provide enterprise-grade performance:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>99.9% uptime guarantee for critical AI services</li>
                    <li>Sub-10ms response time for threat detection</li>
                    <li>24/7 monitoring and automated incident response</li>
                    <li>Real-time threat intelligence and updates</li>
                    <li>Enterprise support with dedicated AI specialists</li>
                  </ul>
                </div>
              </div>

              {/* Limitations */}
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-amber-500 mr-4" />
                  <h2 className="text-2xl font-bold">Service Limitations</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>Please note the following limitations:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>AI predictions are based on available data and patterns</li>
                    <li>No system can guarantee 100% threat prevention</li>
                    <li>Service availability may be affected by maintenance</li>
                    <li>Custom AI models require training and optimization time</li>
                    <li>Integration complexity varies by existing infrastructure</li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-emerald-500 mr-4" />
                  <h2 className="text-2xl font-bold">Intellectual Property</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>Regarding AI technology and intellectual property:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Our AI algorithms and models remain our proprietary technology</li>
                    <li>Client data and insights generated remain client property</li>
                    <li>Custom AI solutions developed become joint intellectual property</li>
                    <li>Third-party integrations subject to respective licenses</li>
                    <li>Open-source components governed by their respective licenses</li>
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-r from-emerald-900/20 to-gray-900/20 rounded-2xl p-8 border border-emerald-800/30">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
                  <p className="text-gray-300 mb-6">Contact our legal team for clarification on AI service terms.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:legal@artificialintelligence.ai"
                      className="text-emerald-400 hover:text-emerald-300"
                    >
                      legal@artificialintelligence.ai
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
