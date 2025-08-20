import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Shield, Bell, CheckCircle, ArrowRight } from "lucide-react"

export default function EducationSecurityPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-black"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Education Security Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive AI security systems for educational institutions. Create safe learning environments with
            intelligent monitoring, access control, and emergency response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4">
              Get Campus Assessment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 bg-transparent"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">90%</div>
              <div className="text-gray-300">Incident Prevention</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-gray-300">Campus Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">99.7%</div>
              <div className="text-gray-300">System Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">300+</div>
              <div className="text-gray-300">Educational Institutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Comprehensive Campus Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <GraduationCap className="w-12 h-12 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Student Safety</h3>
                <p className="text-gray-300 mb-6">
                  AI-powered student monitoring, bullying detection, and emergency response systems to ensure a safe and
                  secure learning environment for all students.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Behavior analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Emergency alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Incident tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Access Control</h3>
                <p className="text-gray-300 mb-6">
                  Secure campus access with smart card systems, visitor management, and restricted area monitoring to
                  control who enters your facilities.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Smart card access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Visitor tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Zone restrictions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <Bell className="w-12 h-12 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Emergency Response</h3>
                <p className="text-gray-300 mb-6">
                  Integrated emergency communication systems, lockdown procedures, and real-time coordination with local
                  law enforcement and first responders.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Mass notification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Lockdown systems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    First responder alerts
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Educational Community</h2>
          <p className="text-xl text-gray-300 mb-8">
            Create a safe learning environment with our comprehensive AI security solutions for schools and
            universities.
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4">
            Schedule Campus Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
