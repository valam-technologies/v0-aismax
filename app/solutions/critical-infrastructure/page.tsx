import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Zap, Shield, Factory, Wifi, Eye, AlertTriangle, CheckCircle, ArrowRight, Lock } from "lucide-react"

export default function CriticalInfrastructurePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('/critical-infrastructure-security.png')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Critical Infrastructure AI Security
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Protect Critical Infrastructure with Advanced AI Security
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Mission-critical artificial intelligence security solutions for power plants, water facilities,
              telecommunications, and essential infrastructure that keeps society functioning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                Request Critical Assessment
              </button>
              <button className="px-8 py-4 border border-gray-600 hover:border-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-emerald-500/10">
                View Infrastructure Solutions
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
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">99.99%</div>
              <div className="text-gray-400">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">&lt;100ms</div>
              <div className="text-gray-400">Threat Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-gray-400">Critical Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">100+</div>
              <div className="text-gray-400">Facilities Protected</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mission-Critical Security Solutions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced AI security systems designed for the most critical infrastructure that society depends on
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Zap className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Power Grid Security</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive power grid protection with AI-powered monitoring, threat detection, and automated response
                systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Substation monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Transmission line security
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Control system protection
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Factory className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Water Treatment Facilities</h3>
              <p className="text-gray-400 mb-6">
                Advanced security for water treatment and distribution systems with contamination detection and facility
                protection.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Water quality monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Facility perimeter security
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Pipeline monitoring
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Wifi className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Telecommunications</h3>
              <p className="text-gray-400 mb-6">
                Critical telecommunications infrastructure security with network monitoring and communication system
                protection.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Cell tower security
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Data center protection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Network infrastructure
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Shield className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Industrial Control Systems</h3>
              <p className="text-gray-400 mb-6">
                SCADA and industrial control system security with real-time monitoring and cyber-physical threat
                protection.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  SCADA monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  PLC protection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  HMI security
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Eye className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Perimeter Protection</h3>
              <p className="text-gray-400 mb-6">
                Advanced perimeter security with AI-powered intrusion detection, thermal imaging, and automated response
                systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Thermal imaging
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Motion detection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Automated barriers
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <AlertTriangle className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Threat Intelligence</h3>
              <p className="text-gray-400 mb-6">
                Advanced threat intelligence with predictive analytics, risk assessment, and coordinated response
                protocols.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Predictive analytics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Risk modeling
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Emergency coordination
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Types */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Critical Infrastructure Sectors</h2>
            <p className="text-gray-400">Protecting the backbone of modern society</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Zap className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="font-semibold text-white mb-2">Energy</div>
              <div className="text-sm text-gray-400">Power generation & distribution</div>
            </div>
            <div className="text-center">
              <Factory className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="font-semibold text-white mb-2">Water Systems</div>
              <div className="text-sm text-gray-400">Treatment & distribution</div>
            </div>
            <div className="text-center">
              <Wifi className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="font-semibold text-white mb-2">Communications</div>
              <div className="text-sm text-gray-400">Telecom & internet</div>
            </div>
            <div className="text-center">
              <Lock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="font-semibold text-white mb-2">Industrial</div>
              <div className="text-sm text-gray-400">Manufacturing & processing</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Critical Infrastructure</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a comprehensive security assessment for your mission-critical infrastructure with our specialized team.
          </p>
          <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25 inline-flex items-center">
            Request Critical Assessment
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
