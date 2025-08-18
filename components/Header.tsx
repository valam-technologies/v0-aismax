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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex-shrink-0">
              <Image
                src="/logoback.svg"
                alt="AI Powered Solutions Logo"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300"
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

          <nav className="hidden lg:flex items-center space-x-1">
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
                      className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                        pathname.startsWith(item.path)
                          ? "text-white bg-gray-800 shadow-lg border border-gray-700"
                          : "text-gray-300 hover:text-white hover:bg-gray-900/70"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>

                    <AnimatePresence>
                      {((item.name === "Services" && servicesOpen) ||
                        (item.name === "Solutions" && solutionsOpen) ||
                        (item.name === "About" && aboutOpen)) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-gray-900/98 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl py-2"
                        >
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              href={dropdownItem.path}
                              className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                                pathname === dropdownItem.path
                                  ? "text-white bg-gray-800"
                                  : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                              }`}
                            >
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
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      pathname === item.path
                        ? "text-white bg-gray-800 shadow-lg border border-gray-700"
                        : "text-gray-300 hover:text-white hover:bg-gray-900/70"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <button
            onClick={() => {
              console.log("[v0] Mobile menu toggle clicked, current state:", isOpen)
              setIsOpen(!isOpen)
            }}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-900/70 hover:text-white transition-all duration-300 relative z-50"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-2">
              {navigation.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <div>
                      <Link
                        href={item.path}
                        className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                          pathname === item.path
                            ? "text-white bg-gray-800 shadow-lg border border-gray-700"
                            : "text-gray-300 hover:bg-gray-800/70 hover:text-white"
                        }`}
                        onClick={() => {
                          console.log("[v0] Mobile menu link clicked, closing menu")
                          setIsOpen(false)
                        }}
                      >
                        {item.name}
                      </Link>
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdown.slice(1).map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            href={dropdownItem.path}
                            className={`block px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                              pathname === dropdownItem.path
                                ? "text-white bg-gray-700"
                                : "text-gray-400 hover:bg-gray-800/50 hover:text-gray-300"
                            }`}
                            onClick={() => {
                              console.log("[v0] Mobile dropdown link clicked, closing menu")
                              setIsOpen(false)
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                        pathname === item.path
                          ? "text-white bg-gray-800 shadow-lg border border-gray-700"
                          : "text-gray-300 hover:bg-gray-800/70 hover:text-white"
                      }`}
                      onClick={() => {
                        console.log("[v0] Mobile menu item clicked, closing menu")
                        setIsOpen(false)
                      }}
                    >
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
