import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Shield, Cpu, Camera, Server, Zap, TrendingUp, CheckCircle } from "lucide-react"

export default function HardwarePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              AI Hardware Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Enterprise-grade AI hardware infrastructure designed for maximum performance, reliability, and scalability
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>24/7 Hardware Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Enterprise Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">500+</div>
              <div className="text-gray-400">Hardware Deployments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">99.9%</div>
              <div className="text-gray-400">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">24/7</div>
              <div className="text-gray-400">Technical Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">5yr</div>
              <div className="text-gray-400">Warranty Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Hardware Portfolio</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive hardware solutions optimized for artificial intelligence workloads
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Cpu className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">AI Processing Units</h3>
              <p className="text-gray-400 mb-6">
                High-performance GPUs and TPUs optimized for machine learning inference and training workloads.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• NVIDIA A100/H100 GPU Clusters</li>
                <li>• Google TPU v4 Integration</li>
                <li>• Custom ASIC Solutions</li>
                <li>• Edge AI Processors</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Camera className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Smart Cameras</h3>
              <p className="text-gray-400 mb-6">
                AI-powered surveillance cameras with built-in processing capabilities for real-time analysis.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 4K/8K Resolution Support</li>
                <li>• Edge AI Processing</li>
                <li>• Night Vision Technology</li>
                <li>• Weather-Resistant Design</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Server className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Edge Computing</h3>
              <p className="text-gray-400 mb-6">
                Distributed computing infrastructure for low-latency AI processing at the network edge.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• NVIDIA Jetson Platforms</li>
                <li>• Intel NUC Edge Systems</li>
                <li>• Custom Edge Appliances</li>
                <li>• 5G Integration Ready</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Shield className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Security Appliances</h3>
              <p className="text-gray-400 mb-6">
                Dedicated hardware for AI-powered cybersecurity and threat detection systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Network Security Appliances</li>
                <li>• Intrusion Detection Systems</li>
                <li>• Firewall Integration</li>
                <li>• Threat Intelligence Hardware</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Zap className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Power & Cooling</h3>
              <p className="text-gray-400 mb-6">
                Enterprise-grade power management and cooling solutions for AI infrastructure.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Uninterruptible Power Supply</li>
                <li>• Liquid Cooling Systems</li>
                <li>• Power Distribution Units</li>
                <li>• Environmental Monitoring</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Storage Solutions</h3>
              <p className="text-gray-400 mb-6">
                High-performance storage systems optimized for AI data processing and model training.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• NVMe SSD Arrays</li>
                <li>• Distributed File Systems</li>
                <li>• Data Lake Storage</li>
                <li>• Backup & Recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Deploy AI Hardware?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert consultation on the right hardware infrastructure for your AI initiatives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              Schedule Consultation
            </button>
            <button className="border border-gray-600 hover:border-emerald-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              Download Specs
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
