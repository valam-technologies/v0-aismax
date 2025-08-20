"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, ArrowRight, Zap, Brain, Shield } from "lucide-react"

interface VideoHeroProps {
  videoSrc?: string
  fallbackImage?: string
  headline?: string
  subheading?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

const VideoHero: React.FC<VideoHeroProps> = ({
  videoSrc = "/futuristic-ai-interface.png",
  fallbackImage = "/ai-neural-network-holographic.png",
  headline = "Next-Generation AI Technology That Powers Tomorrow's Enterprise",
  subheading = "Experience cutting-edge artificial intelligence systems with holographic interfaces, neural network processing, and real-time data analysis that revolutionizes how enterprises operate in the digital age.",
  primaryCTA = {
    text: "Discover AI Solutions",
    href: "/contact",
  },
  secondaryCTA = {
    text: "Watch Demo",
    href: "/contact",
  },
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [showControls, setShowControls] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener("loadeddata", () => setIsVideoLoaded(true))
      video.addEventListener("error", () => setIsVideoLoaded(false))
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (video) {
      video.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative min-h-[65vh] bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden pt-2 md:pt-4">
      <div className="holographic-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 border border-orange-500/30 rounded-full animate-pulse-slow cinematic-glow"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 border border-orange-400/40 rounded-full animate-float cinematic-glow"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-orange-600/35 rounded-full animate-pulse-slow cinematic-glow"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 border border-orange-500/25 rounded-full animate-float cinematic-glow"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ea580c 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #f97316 1px, transparent 1px),
                           linear-gradient(45deg, transparent 48%, rgba(234, 88, 12, 0.1) 49%, rgba(234, 88, 12, 0.1) 51%, transparent 52%)`,
            backgroundSize: "50px 50px, 30px 30px, 80px 80px",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-[65vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center min-h-[calc(65vh-1rem)] py-4 lg:py-6">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-3 lg:space-y-4 lg:pr-6 order-2 lg:order-1">
              <motion.div
                className="inline-flex items-center space-x-2 marvel-hologram rounded-full px-4 py-2 shadow-lg w-fit ai-pulse"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <Brain className="w-4 h-4 text-orange-400 animate-pulse" />
                  <div className="absolute inset-0 w-4 h-4 bg-orange-400/20 rounded-full animate-ping"></div>
                </div>
                <span className="text-white text-xs font-bold tracking-wide">
                  Advanced Neural Intelligence Platform
                </span>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              </motion.div>

              <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white text-shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
                  {headline?.split(" ").slice(0, 3).join(" ") || "Next-Generation AI"}
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent">
                  {headline?.split(" ").slice(3).join(" ") || "Technology Platform"}
                </span>
              </motion.h1>

              {/* Enhanced Subheading */}
              <motion.p
                className="text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {subheading}
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-4 mb-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300 text-sm font-medium">Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300 text-sm font-medium">99.9% Accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300 text-sm font-medium">Neural Processing</span>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-2 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <Link
                  href={primaryCTA.href}
                  className="cta-primary-orange px-5 py-2.5 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <span>{primaryCTA.text}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href={secondaryCTA.href}
                  className="cta-secondary-orange marvel-hologram text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <Play className="w-5 h-5" />
                  <span>{secondaryCTA.text}</span>
                </Link>
              </motion.div>

              {/* Enhanced Stats */}
              <motion.div
                className="grid grid-cols-3 gap-2 sm:gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
              >
                <div className="text-center lg:text-left">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-orange-400 mb-1">
                    1000+
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">AI Models</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-orange-400 mb-1">
                    99.9%
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">Precision Rate</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-orange-400 mb-1">
                    &lt;5ms
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">Neural Response</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="absolute -top-4 -left-4 w-full h-full border border-orange-500/30 rounded-2xl animate-pulse cinematic-glow"></div>
                <div
                  className="absolute -top-6 -right-6 w-full h-full border border-orange-400/20 rounded-2xl animate-pulse cinematic-glow"
                  style={{ animationDelay: "1s" }}
                ></div>

                {/* Main Video Container */}
                <div
                  className="relative marvel-hologram rounded-2xl overflow-hidden shadow-2xl w-full transform hover:scale-[1.02] transition-transform duration-500 ai-pulse"
                  onMouseEnter={() => setShowControls(true)}
                  onMouseLeave={() => setShowControls(false)}
                >
                  {isVideoLoaded ? (
                    <video
                      ref={videoRef}
                      className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px] object-cover"
                      autoPlay
                      muted={isMuted}
                      loop
                      playsInline
                      onLoadedData={() => setIsVideoLoaded(true)}
                      onError={() => setIsVideoLoaded(false)}
                    >
                      <source src={videoSrc} type="video/mp4" />
                    </video>
                  ) : (
                    <div
                      className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${fallbackImage})` }}
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-orange-900/30">
                    {/* AI Status Indicator */}
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse cinematic-glow"></div>
                      <span className="text-white text-sm font-bold">AI ACTIVE</span>
                    </div>

                    {/* Neural Processing Indicators */}
                    <div className="absolute top-4 right-4 space-y-2">
                      <div className="marvel-hologram rounded-lg px-3 py-1">
                        <span className="text-orange-300 text-xs font-semibold">NEURAL NET</span>
                      </div>
                      <div className="marvel-hologram rounded-lg px-3 py-1">
                        <span className="text-orange-400 text-xs font-semibold">PROCESSING</span>
                      </div>
                    </div>

                    {/* Enhanced Video Info */}
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-white font-semibold mb-1 text-shadow-lg">Advanced AI Neural Networks</h4>
                      <p className="text-orange-200 text-sm">Real-time Intelligence & Holographic Processing</p>
                    </div>

                    {/* Enhanced Video Controls */}
                    {isVideoLoaded && (
                      <div
                        className={`absolute bottom-4 right-4 flex items-center space-x-2 transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0"}`}
                      >
                        <button
                          onClick={togglePlay}
                          className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors duration-200"
                          aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={toggleMute}
                          className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors duration-200"
                          aria-label={isMuted ? "Unmute video" : "Mute video"}
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="absolute -bottom-6 -right-6 space-y-3 hidden lg:block">
                    <div className="marvel-hologram rounded-xl p-4 shadow-2xl min-w-[160px] transform hover:scale-105 transition-transform duration-300 ai-pulse">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse cinematic-glow"></div>
                        <div>
                          <div className="text-white font-bold text-lg">99.9%</div>
                          <div className="text-orange-200 text-xs font-medium">Neural Accuracy</div>
                        </div>
                      </div>
                    </div>
                    <div className="marvel-hologram rounded-xl p-4 shadow-2xl min-w-[160px] transform hover:scale-105 transition-transform duration-300 ai-pulse">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse cinematic-glow"></div>
                        <div>
                          <div className="text-white font-bold text-lg">&lt;5ms</div>
                          <div className="text-orange-200 text-xs font-medium">AI Response</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 sm:hidden">
                    <div className="flex justify-between space-x-2">
                      <div className="marvel-hologram rounded-lg p-2 shadow-lg flex-1">
                        <div className="flex items-center justify-center space-x-1">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full cinematic-glow"></div>
                          <div className="text-center">
                            <div className="text-white font-bold text-xs">99.9%</div>
                            <div className="text-orange-200 text-[10px]">Neural</div>
                          </div>
                        </div>
                      </div>
                      <div className="marvel-hologram rounded-lg p-2 shadow-lg flex-1">
                        <div className="flex items-center justify-center space-x-1">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full cinematic-glow"></div>
                          <div className="text-center">
                            <div className="text-white font-bold text-xs">&lt;5ms</div>
                            <div className="text-orange-200 text-[10px]">Response</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-orange-900/20 to-transparent"></div>
    </section>
  )
}

export default VideoHero
