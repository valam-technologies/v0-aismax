import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import {
  DollarSign,
  Shield,
  Building2,
  Users,
  Eye,
  Lock,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Award,
} from "lucide-react"

export default function FinancialServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('/placeholder-jsjqb.png')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Financial Services AI Security
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Secure Financial Institutions with AI-Powered Protection
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Advanced artificial intelligence security solutions designed for banks, credit unions, and financial
              institutions, ensuring compliance and protecting valuable assets and customer data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                Schedule Risk Assessment
              </button>
              <button className="px-8 py-4 border border-gray-600 hover:border-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-emerald-500/10">
                View Compliance Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Stats */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">99.8%</div>
              <div className="text-gray-400">Fraud Prevention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">$2.5B</div>
              <div className="text-gray-400">Assets Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-gray-400">Threat Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">200+</div>
              <div className="text-gray-400">Financial Institutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Financial Security Solutions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced AI security systems designed specifically for financial institutions and banking environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Building2 className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Branch Security</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive branch protection with AI-powered surveillance, access control, and threat detection.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  ATM monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Vault security
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Customer area surveillance
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Shield className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Fraud Prevention</h3>
              <p className="text-gray-400 mb-6">
                Advanced fraud detection using AI behavioral analysis and real-time transaction monitoring.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Transaction analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Behavioral monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Risk scoring
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Users className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Customer Protection</h3>
              <p className="text-gray-400 mb-6">
                Protect customers with advanced identity verification and suspicious activity detection.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Identity verification
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Biometric authentication
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Privacy protection
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Eye className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Video Analytics</h3>
              <p className="text-gray-400 mb-6">
                Intelligent video surveillance with facial recognition, behavior analysis, and incident detection.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Facial recognition
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Suspicious behavior detection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Queue management
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Lock className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive cybersecurity protection for digital banking platforms and customer data.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Data encryption
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Network security
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Threat intelligence
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Compliance Monitoring</h3>
              <p className="text-gray-400 mb-6">
                Automated compliance monitoring ensuring adherence to financial regulations and standards.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Regulatory compliance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Audit trail management
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Risk assessment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Financial Compliance Standards</h2>
            <p className="text-gray-400">Meeting all major financial industry regulations</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="font-semibold text-white mb-2">PCI DSS</div>
              <div className="text-sm text-gray-400">Payment card security</div>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="font-semibold text-white mb-2">SOX Compliant</div>
              <div className="text-sm text-gray-400">Financial reporting</div>
            </div>
            <div className="text-center">
              <Lock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="font-semibold text-white mb-2">GLBA</div>
              <div className="text-sm text-gray-400">Privacy protection</div>
            </div>
            <div className="text-center">
              <Eye className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="font-semibold text-white mb-2">BSA/AML</div>
              <div className="text-sm text-gray-400">Anti-money laundering</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Financial Institution</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a comprehensive security assessment and compliance review tailored to your financial services needs.
          </p>
          <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25 inline-flex items-center">
            Schedule Risk Assessment
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
