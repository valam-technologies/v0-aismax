import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Shield, Building, Users, Eye, Lock, AlertTriangle, CheckCircle, ArrowRight, Award, Clock } from "lucide-react"

export default function GovernmentSecurityPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('/placeholder-nirhi.png')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
              <Building className="w-4 h-4 mr-2" />
              Government AI Security Solutions
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Protect Government Facilities with Advanced AI Security
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive artificial intelligence security solutions designed for government facilities, ensuring the
              highest levels of protection for critical infrastructure and personnel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                Request Security Briefing
              </button>
              <button className="px-8 py-4 border border-gray-600 hover:border-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-emerald-500/10">
                View Compliance Standards
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Security Clearance & Compliance</h2>
            <p className="text-gray-400">Meeting the highest government security standards</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="font-semibold text-white mb-2">FISMA Compliant</div>
              <div className="text-sm text-gray-400">Federal security standards</div>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="font-semibold text-white mb-2">FedRAMP Authorized</div>
              <div className="text-sm text-gray-400">Cloud security program</div>
            </div>
            <div className="text-center">
              <Lock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="font-semibold text-white mb-2">NIST Framework</div>
              <div className="text-sm text-gray-400">Cybersecurity standards</div>
            </div>
            <div className="text-center">
              <Eye className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="font-semibold text-white mb-2">CJIS Compliant</div>
              <div className="text-sm text-gray-400">Criminal justice standards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Government-Grade Security Solutions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced AI security systems designed specifically for government facilities and critical infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Building className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Facility Protection</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive facility security with AI-powered perimeter monitoring and access control systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Perimeter intrusion detection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Vehicle screening systems
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Visitor management
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Users className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Personnel Security</h3>
              <p className="text-gray-400 mb-6">
                Advanced personnel screening and monitoring with behavioral analysis and threat assessment.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Biometric authentication
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Behavioral analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Insider threat detection
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <AlertTriangle className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Threat Intelligence</h3>
              <p className="text-gray-400 mb-6">
                Real-time threat intelligence with predictive analytics and automated response protocols.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Threat assessment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Risk analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Emergency response
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Eye className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Surveillance Systems</h3>
              <p className="text-gray-400 mb-6">
                Advanced video surveillance with AI-powered analytics and automated incident detection.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Facial recognition
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Object detection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Crowd monitoring
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Lock className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Cybersecurity Integration</h3>
              <p className="text-gray-400 mb-6">
                Integrated cybersecurity solutions protecting both physical and digital government assets.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Network security
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Data protection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Incident response
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Clock className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">24/7 Monitoring</h3>
              <p className="text-gray-400 mb-6">
                Round-the-clock monitoring with dedicated security operations center and rapid response teams.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  SOC monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Rapid response
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Incident management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Government Facility</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our government security specialists for a confidential consultation and custom security assessment.
          </p>
          <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25 inline-flex items-center">
            Request Security Briefing
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
