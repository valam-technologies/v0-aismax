"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open")
    } else {
      document.body.classList.remove("menu-open")
    }

    return () => {
      document.body.classList.remove("menu-open")
    }
  }, [isOpen])

  const navigation = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "All Services", path: "/services" },
        { name: "Consulting", path: "/services/consulting" },
        { name: "Technology Integration", path: "/services/technology-integration" },
        { name: "Surveillance", path: "/services/surveillance" },
        { name: "Data Technology & Analytics", path: "/services/data-technology-analytics" },
        { name: "Hardware", path: "/services/hardware" },
        { name: "Software Solutions", path: "/services/software-solutions" },
        { name: "Deep Learning", path: "/services/deep-learning" },
        { name: "Cybersecurity", path: "/services/cybersecurity" },
      ],
    },
    {
      name: "Solutions",
      path: "/solutions",
      dropdown: [
        { name: "All Solutions", path: "/solutions" },
        { name: "Enterprise AI Security", path: "/solutions/enterprise-ai-security" },
        { name: "Retail Security Solutions", path: "/solutions/retail-security" },
        { name: "Healthcare AI Security", path: "/solutions/healthcare-security" },
        { name: "Manufacturing Security", path: "/solutions/manufacturing-security" },
        { name: "Education Security", path: "/solutions/education-security" },
        { name: "Government Security", path: "/solutions/government-security" },
        { name: "Financial Services", path: "/solutions/financial-services" },
        { name: "Transportation Security", path: "/solutions/transportation-security" },
        { name: "Residential Communities", path: "/solutions/residential-communities" },
        { name: "Critical Infrastructure", path: "/solutions/critical-infrastructure" },
        { name: "Data Center Security", path: "/solutions/data-center-security" },
        { name: "Smart City Solutions", path: "/solutions/smart-city" },
      ],
    },
    { name: "Products", path: "/products" },
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "Company Overview", path: "/about" },
        { name: "Environmental, Social & Governance", path: "/about/esg" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-2xl border-b border-gray-800"
          : "bg-black/90 backdrop-blur-sm border-b border-gray-700"
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/50 via-gray-500/30 to-emerald-500/50"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="/logoback.svg"
                alt="AI Powered Solutions Logo"
                width={40}
                height={40}
                className="relative w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-lg md:text-xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300 truncate">
                Artificial Intelligence Systems
              </span>
              <span className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">
                AI powered solutions
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-3 mr-4">
            {navigation.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      if (item.name === "Services") setServicesOpen(true)
                      if (item.name === "Solutions") setSolutionsOpen(true)
                      if (item.name === "About") setAboutOpen(true)
                    }}
                    onMouseLeave={() => {
                      if (item.name === "Services") setServicesOpen(false)
                      if (item.name === "Solutions") setSolutionsOpen(false)
                      if (item.name === "About") setAboutOpen(false)
                    }}
                  >
                    <button
                      className={`relative flex items-center px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 group ${
                        pathname.startsWith(item.path)
                          ? "text-white bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg border border-gray-600"
                          : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-900/70 hover:to-gray-800/70"
                      }`}
                    >
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-3/4 transition-all duration-300"></div>
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    <AnimatePresence>
                      {((item.name === "Services" && servicesOpen) ||
                        (item.name === "Solutions" && solutionsOpen) ||
                        (item.name === "About" && aboutOpen)) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-3 w-72 bg-gray-900/98 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl py-3 overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/50 via-gray-500/30 to-emerald-500/50"></div>
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              href={dropdownItem.path}
                              className={`block px-5 py-3 text-sm transition-all duration-200 relative group ${
                                pathname === dropdownItem.path
                                  ? "text-white bg-gradient-to-r from-gray-800/80 to-gray-700/80"
                                  : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/50"
                              }`}
                            >
                              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-1 transition-all duration-200"></div>
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`relative px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 group ${
                      pathname === item.path
                        ? "text-white bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg border border-gray-600"
                        : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-900/70 hover:to-gray-800/70"
                    }`}
                  >
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-3/4 transition-all duration-300"></div>
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="lg:hidden flex items-center pr-2">
            <button
              onClick={() => {
                console.log("[v0] Mobile menu toggle clicked, current state:", isOpen)
                setIsOpen(!isOpen)
              }}
              className="relative p-3 rounded-xl text-gray-300 hover:bg-gradient-to-r hover:from-gray-900/70 hover:to-gray-800/70 hover:text-white transition-all duration-300 group"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="absolute inset-0 bg-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-x-0 top-16 md:top-20 bg-gray-900/98 backdrop-blur-md border-t border-gray-700 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "fixed",
              zIndex: 40,
              width: "100%",
              left: 0,
              right: 0,
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/50 via-gray-500/30 to-emerald-500/50"></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 space-y-3">
              {navigation.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <div>
                      <Link
                        href={item.path}
                        className={`block px-5 py-4 text-sm font-medium rounded-xl transition-all duration-200 relative group ${
                          pathname === item.path
                            ? "text-white bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg border border-gray-600"
                            : "text-gray-300 hover:bg-gradient-to-r hover:from-gray-800/70 hover:to-gray-700/70 hover:text-white"
                        }`}
                        onClick={() => {
                          console.log("[v0] Mobile menu link clicked, closing menu")
                          setIsOpen(false)
                        }}
                      >
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-1 transition-all duration-200"></div>
                        {item.name}
                      </Link>
                      <div className="ml-6 mt-3 space-y-2">
                        {item.dropdown.slice(1).map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            href={dropdownItem.path}
                            className={`block px-4 py-3 text-xs font-medium rounded-lg transition-all duration-200 relative group ${
                              pathname === dropdownItem.path
                                ? "text-white bg-gradient-to-r from-gray-700/80 to-gray-600/80"
                                : "text-gray-400 hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/50 hover:text-gray-300"
                            }`}
                            onClick={() => {
                              console.log("[v0] Mobile dropdown link clicked, closing menu")
                              setIsOpen(false)
                            }}
                          >
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-0.5 transition-all duration-200"></div>
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className={`block px-5 py-4 text-sm font-medium rounded-xl transition-all duration-200 relative group ${
                        pathname === item.path
                          ? "text-white bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg border border-gray-600"
                          : "text-gray-300 hover:bg-gradient-to-r hover:from-gray-800/70 hover:to-gray-700/70 hover:text-white"
                      }`}
                      onClick={() => {
                        console.log("[v0] Mobile menu item clicked, closing menu")
                        setIsOpen(false)
                      }}
                    >
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-1 transition-all duration-200"></div>
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export { Header }
export default Header
