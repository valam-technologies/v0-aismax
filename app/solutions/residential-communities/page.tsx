import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Home, Shield, Users, Eye, Lock, Bell, CheckCircle, ArrowRight, MapPin } from "lucide-react"

export default function ResidentialCommunitiesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('/placeholder-555zz.png')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
              <Home className="w-4 h-4 mr-2" />
              Residential Community AI Security
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Protect Residential Communities with Smart AI Security
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Advanced artificial intelligence security solutions for residential communities, gated neighborhoods, and
              apartment complexes, ensuring safety and peace of mind for residents and families.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                Get Community Assessment
              </button>
              <button className="px-8 py-4 border border-gray-600 hover:border-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-emerald-500/10">
                View Resident Benefits
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
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">95%</div>
              <div className="text-gray-400">Crime Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">10K+</div>
              <div className="text-gray-400">Homes Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-gray-400">Smart Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">300+</div>
              <div className="text-gray-400">Communities Secured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Smart Community Security Solutions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI security systems designed specifically for residential communities and neighborhoods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Shield className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Perimeter Security</h3>
              <p className="text-gray-400 mb-6">
                Advanced perimeter monitoring with AI-powered intrusion detection and automated gate control systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Smart gate access
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Fence line monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Visitor management
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Eye className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Video Surveillance</h3>
              <p className="text-gray-400 mb-6">
                Intelligent video surveillance with facial recognition, license plate reading, and behavior analysis.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Facial recognition
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  License plate recognition
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Night vision capability
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Users className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Resident Safety</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive resident safety with emergency response, panic buttons, and family protection systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Emergency alerts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Panic button integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Child safety monitoring
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Lock className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Access Control</h3>
              <p className="text-gray-400 mb-6">
                Smart access control with mobile app integration, temporary access codes, and visitor tracking.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Mobile app control
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Temporary access codes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Delivery management
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <Bell className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Smart Alerts</h3>
              <p className="text-gray-400 mb-6">
                Intelligent alert system with customizable notifications, community updates, and emergency broadcasts.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Custom notifications
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Community announcements
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Emergency broadcasts
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <MapPin className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Common Area Monitoring</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive monitoring of common areas including playgrounds, pools, and recreational facilities.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Playground safety
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Pool area monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Parking lot security
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Types */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Community Types We Serve</h2>
            <p className="text-gray-400">Tailored security solutions for every residential community</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Home className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="font-semibold text-white mb-2">Gated Communities</div>
              <div className="text-sm text-gray-400">Luxury neighborhoods</div>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="font-semibold text-white mb-2">Apartment Complexes</div>
              <div className="text-sm text-gray-400">Multi-family housing</div>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="font-semibold text-white mb-2">Senior Living</div>
              <div className="text-sm text-gray-400">Assisted living facilities</div>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="font-semibold text-white mb-2">HOA Communities</div>
              <div className="text-sm text-gray-400">Homeowner associations</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Residential Community</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a comprehensive security assessment and custom solution proposal for your residential community.
          </p>
          <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25 inline-flex items-center">
            Get Community Assessment
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
