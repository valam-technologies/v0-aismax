import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Factory, Cog, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"

export default function ManufacturingSecurityPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-black"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Manufacturing Security Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Industrial-grade AI security systems for manufacturing facilities. Protect your operations, equipment, and
            workforce with intelligent monitoring and safety systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4">
              Get Industrial Assessment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 bg-transparent"
            >
              View Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">85%</div>
              <div className="text-gray-300">Incident Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-gray-300">Equipment Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">99.5%</div>
              <div className="text-gray-300">Safety Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">150+</div>
              <div className="text-gray-300">Manufacturing Sites</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Industrial Security & Safety</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <Factory className="w-12 h-12 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Perimeter Security</h3>
                <p className="text-gray-300 mb-6">
                  Advanced perimeter monitoring with thermal imaging, intrusion detection, and automated response
                  systems to protect your manufacturing facility.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Thermal imaging
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Intrusion detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Automated alerts
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <AlertTriangle className="w-12 h-12 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Safety Monitoring</h3>
                <p className="text-gray-300 mb-6">
                  AI-powered safety compliance monitoring, PPE detection, and hazard identification to maintain
                  workplace safety standards and prevent accidents.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    PPE compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Hazard detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Safety analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <Cog className="w-12 h-12 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Equipment Protection</h3>
                <p className="text-gray-300 mb-6">
                  Intelligent equipment monitoring, predictive maintenance alerts, and theft prevention to protect
                  valuable manufacturing assets and minimize downtime.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Asset tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Theft prevention
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Maintenance alerts
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
          <h2 className="text-4xl font-bold mb-6">Secure Your Manufacturing Operations</h2>
          <p className="text-xl text-gray-300 mb-8">
            Protect your facility, equipment, and workforce with our industrial-grade AI security solutions.
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4">
            Schedule Site Assessment <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
