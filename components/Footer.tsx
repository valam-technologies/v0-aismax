"use client"
import Link from "next/link"
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Shield className="w-10 h-10 text-white" />
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Artificial Intelligence Systems</span>
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  AI POWERED SECURITY
                </span>
              </div>
            </Link>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Advanced artificial intelligence security solutions that adapt and evolve. Protecting your digital assets
              and infrastructure with intelligent technology that learns from emerging threats.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                />
                <button className="px-6 py-2 bg-white text-black rounded-r-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "Services", path: "/services" },
                { name: "Solutions", path: "/solutions" },
                { name: "Products", path: "/products" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>

            {/* North America */}
            <div className="mb-8">
              <h4 className="text-md font-semibold mb-4 text-gray-200">North America Office</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">canada@artificialintelligence.ai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">+1 (778) 668-9399</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <div className="text-gray-300">
                    <div>153 Sackville Dr</div>
                    <div>Lower Sackville, NS</div>
                    <div>B4C 2S9, Canada</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Asia-Pacific */}
            <div className="mb-8">
              <h4 className="text-md font-semibold mb-4 text-gray-200">APAC Office</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">malaysia@artificialintellegence.ai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">+60-38679 3990</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <div className="text-gray-300">
                    <div>41-2, Jalan PJU 5/20E</div>
                    <div>Kota Damansara</div>
                    <div>47810 Petaling Jaya</div>
                    <div>Selangor, Malaysia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Artificial Intelligence Systems. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
export default Footer
