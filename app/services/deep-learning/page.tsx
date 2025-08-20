import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Brain, Layers, Target, Zap, TrendingUp, CheckCircle, Eye } from "lucide-react"

export default function DeepLearningPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Deep Learning Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced neural networks and deep learning models that unlock insights from complex data patterns
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>99.2% Model Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Real-time Inference</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Scalable Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Learning Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Deep Learning Applications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge neural network solutions for complex pattern recognition and prediction tasks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Eye className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Computer Vision</h3>
              <p className="text-gray-400 mb-6">
                Advanced image and video analysis using convolutional neural networks for object detection and
                recognition.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Object Detection & Classification</li>
                <li>• Facial Recognition Systems</li>
                <li>• Medical Image Analysis</li>
                <li>• Quality Control Inspection</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Brain className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Natural Language Processing</h3>
              <p className="text-gray-400 mb-6">
                Transformer-based models for understanding and generating human language at enterprise scale.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Sentiment Analysis</li>
                <li>• Document Classification</li>
                <li>• Chatbot Development</li>
                <li>• Language Translation</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
              <p className="text-gray-400 mb-6">
                Deep neural networks for forecasting and predictive modeling across various business domains.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Time Series Forecasting</li>
                <li>• Risk Assessment Models</li>
                <li>• Demand Prediction</li>
                <li>• Anomaly Detection</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Target className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Recommendation Systems</h3>
              <p className="text-gray-400 mb-6">
                Deep learning-powered recommendation engines that personalize user experiences and drive engagement.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Collaborative Filtering</li>
                <li>• Content-Based Recommendations</li>
                <li>• Hybrid Approaches</li>
                <li>• Real-time Personalization</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Layers className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Generative AI</h3>
              <p className="text-gray-400 mb-6">
                Advanced generative models for creating synthetic data, images, and content for various applications.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Generative Adversarial Networks</li>
                <li>• Variational Autoencoders</li>
                <li>• Synthetic Data Generation</li>
                <li>• Content Creation</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <Zap className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Reinforcement Learning</h3>
              <p className="text-gray-400 mb-6">
                Intelligent agents that learn optimal strategies through interaction with complex environments.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Autonomous Decision Making</li>
                <li>• Resource Optimization</li>
                <li>• Game Theory Applications</li>
                <li>• Robotics Control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Deep Learning Performance</h2>
            <p className="text-gray-400">Industry-leading accuracy and performance metrics</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">99.2%</div>
              <div className="text-gray-400">Model Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">&lt;50ms</div>
              <div className="text-gray-400">Inference Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">1M+</div>
              <div className="text-gray-400">Daily Predictions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">95%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Implement Deep Learning?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your data into actionable insights with our advanced deep learning solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              Discuss Your Project
            </button>
            <button className="border border-gray-600 hover:border-emerald-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
