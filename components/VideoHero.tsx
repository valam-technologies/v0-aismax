"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, ArrowRight, Award, Clock, CheckCircle, Sparkles } from "lucide-react"

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
  videoSrc = "https://videos.pexels.com/video-files/3196284/3196284-uhd_2560_1440_25fps.mp4",
  fallbackImage = "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
  headline = "Artificial Intelligence Systems Security Solutions That Evolve With Your Business",
  subheading = "Harness cutting-edge artificial intelligence technology that continuously learns, adapts, and safeguards your enterprise against emerging cyber threats with industry-leading precision and reliability.",
  primaryCTA = {
    text: "Get Free Security Assessment",
    href: "/contact",
  },
  secondaryCTA = {
    text: "Watch Demo",
    href: "#demo",
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
    <section className="relative min-h-screen bg-black overflow-hidden pt-16 md:pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-white/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 border border-white/30 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white/25 rounded-full animate-pulse-slow"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-balanced-grid">
            {/* Left Content */}
            <div className="hero-text-content">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-semibold">Enterprise AI Security Platform</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className="hero-headline text-white mb-6 text-shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="gradient-text bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Artificial Intelligence Systems
                </span>
                <br />
                Security Solutions That Evolve With Your Business
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="hero-subheadline text-gray-200 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Harness cutting-edge artificial intelligence technology that continuously learns, adapts, and safeguards
                your enterprise against emerging cyber threats with industry-leading precision and reliability.
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                className="flex flex-wrap items-center gap-6 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 text-sm font-medium">SOC 2 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 text-sm font-medium">99.9% Accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 text-sm font-medium">24/7 Protection</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <Link
                  href={primaryCTA.href}
                  className="cta-primary px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <span>{primaryCTA.text}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href={secondaryCTA.href}
                  className="cta-secondary bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <Play className="w-5 h-5" />
                  <span>{secondaryCTA.text}</span>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-gray-400 text-sm">Protected Assets</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-gray-400 text-sm">Detection Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">&lt;30s</div>
                  <div className="text-gray-400 text-sm">Response Time</div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Enhanced Video */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-white/20 rounded-2xl"></div>

              {/* Main Video Container */}
              <div
                className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
              >
                {/* Video Element */}
                {isVideoLoaded ? (
                  <video
                    ref={videoRef}
                    className="w-full h-64 md:h-80 lg:h-96 object-cover"
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
                    className="w-full h-64 md:h-80 lg:h-96 bg-cover bg-center"
                    style={{ backgroundImage: `url(${fallbackImage})` }}
                  />
                )}

                {/* Enhanced Video Overlay */}
                <div className="absolute inset-0 video-hero-overlay">
                  {/* Live Indicator */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-bold">LIVE AI</span>
                  </div>

                  {/* AI Features Overlay */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-green-400 text-xs font-semibold">DETECTING</span>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-blue-400 text-xs font-semibold">ANALYZING</span>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-white font-semibold mb-1">AI Security Platform</h4>
                    <p className="text-gray-300 text-sm">Live Threat Detection & Response</p>
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

                {/* Floating Stats Cards */}
                <div className="absolute -bottom-6 -right-6 space-y-3">
                  <div className="bg-white rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <div className="text-black font-bold text-sm">99.9%</div>
                        <div className="text-gray-600 text-xs">Threat Detection</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="text-black font-bold text-sm">&lt;30s</div>
                        <div className="text-gray-600 text-xs">Response Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

export default VideoHero
