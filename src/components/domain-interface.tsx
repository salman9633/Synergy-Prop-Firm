'use client'

import { Check, Globe, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import shakeHand from '@/./assets/shake.jpg'

export function DomainInterfaceComponent() {
  const [textToShow, setTextToShow] = useState('') // State for typed text

  // Text to display in the <p> tag (animated)
  const fullText =
    `At Synergy Incorporation, we provide traders with a revolutionary platform to master futures trading in India. Whether you're a beginner or a seasoned expert, our platform combines real-time insights and cutting-edge technology to help you trade smarter.
Explore tools, strategies, and real-time analytics to elevate your trading journey.`

  // Typing effect logic
  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      setTextToShow((prev) => prev + fullText[index])
      index++
      if (index === fullText.length) {
        clearInterval(typingInterval) // Stop when the text is fully typed
      }
    }, 50) // Adjust speed here (50ms for each character)

    return () => clearInterval(typingInterval)
  }, [fullText])
  return (
    <div className="container mx-auto p-10 font-sans">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left Section */}
        <div className="glassmorphism lg:w-2/3 bg-blue-50 p-6 !rounded-[10px] shadow-md transition-transform duration-300 hover:scale-[1.02]">
          <h2 className="text-3xl font-bold mb-4">What You Get Here</h2>
          <p className="mb-4">Get started with the Funded Account.</p>
          <div className="bg-fuchsia-50 rounded-xl p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Access to Virtual Trading Accounts</span>
              <Check className="text-green-500" />
            </div>
            <div className="text-gray-500 mb-2">Begin trading with virtual accounts designed to simulate real-world futures trading. Test strategies and hone your skills before committing real capital. </div>

          </div>
          <div className="bg-fuchsia-50 rounded-xl p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Real-Time Insights & Charts</span>
              <Check className="text-green-500" />
            </div>
            <div className="text-gray-500 mb-2">Stay ahead in the market with real-time data, detailed charts, and performance analytics, giving you an edge in the fast-paced Indian futures market.</div>

          </div>
          <div className="bg-fuchsia-50 rounded-xl p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Market Strategy Insights and Trends</span>
              <Check className="text-green-500" />
            </div>
            <div className="text-gray-500 mb-2">Get exclusive access to expert analysis and forecasts. We provide market trend reports and insights to help you identify opportunities and stay ahead in the dynamic world of futures trading.</div>

          </div>

          {/* <button className="mt-2 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
            Search Domains
          </button> */}
        </div>
        {/*   <div className="lg:w-1/3 space-y-4 pl-3">   
 <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">Lorem Ipsum Title</h3>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aperiam. Iste sint labore, non error eligendi repudiandae distinctio est nostrum a nemo similique eos perspiciatis, itaque ad nihil ut eaque!</p>
              </div>
              <img src="/placeholder.svg?height=80&width=80" alt="Img" className="w-20 h-20 object-cover rounded-md" />
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
              Explore
            </button>
          </div> */}
        {/* Right Section */}
        <div className="lg:w-1/3 space-y-4 pl-3">
          {/* Top Card */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">Synergy Incorporation - Empowering Traders</h3>

                {/* Animate <p> Tag */}
                <motion.p
                  className="text-sm mt-2"
                  // Optional: You can add initial, animate props for fade-in
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {textToShow} {/* Text will update over time */}
                </motion.p>
              </div>

              {/* <img
                src="/placeholder.svg?height=80&width=80"
                alt="Img"
                className="w-20 h-20 object-cover rounded-md"
              /> */}
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
              <a href="https://wa.me/+918078340665" target='_blank'>
                Explore
              </a>
            </button>
          </div>


          {/* Bottom Card */}
          <div className="bg-orange-50 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">Connect with Us</h3>
                <p className="text-sm mb-4">Have questions or looking for business collaboration? Synergy Incorporation is here to assist you. Whether you need help with your trading journey or want to explore business options, we're just a message away. Let’s shape the future of trading together.</p>
              </div>
              <Image src={shakeHand} alt="Img" width={20} height={20} className="w-20 h-20 object-cover rounded-full shadow-lg" />
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300" >
              <a href="mailto:synergyincorporationllc@gmail.com">
                Contact Us
              </a>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}