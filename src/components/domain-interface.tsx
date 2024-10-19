'use client'

import { Check, Globe, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function DomainInterfaceComponent() {
  const [textToShow, setTextToShow] = useState('') // State for typed text

  // Text to display in the <p> tag (animated)
  const fullText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aperiam. Iste sint labore, non error eligendi repudiandae distinctio est nostrum a nemo similique eos perspiciatis, itaque ad nihil ut eaque!'

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
        <div className="lg:w-2/3 bg-blue-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]">
          <h2 className="text-3xl font-bold mb-4">What You Get Here</h2>
          <p className="mb-4">Get started with the Funded Account.</p>
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              <Check className="text-green-500" />
            </div>
            <div className="text-gray-500 mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas labore, molestias debitis, rerum quibusdam </div>

          </div>
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              <Check className="text-green-500" />
            </div>
            <div className="text-gray-500 mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas labore, molestias debitis, rerum quibusdam </div>

          </div>
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              <Check className="text-green-500" />
            </div>
            <div className="text-gray-500 mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas labore, molestias debitis, rerum quibusdam </div>

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
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">Lorem Ipsum Title</h3>

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

              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Img"
                className="w-20 h-20 object-cover rounded-md"
              />
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
              Explore
            </button>
          </div>


          {/* Bottom Card */}
          <div className="bg-orange-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">Lorem Title</h3>
                <p className="text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, non. Animi architecto adipisci dolore soluta possimus voluptate vitae similique necessitatibus fuga facilis, provident mollitia, culpa voluptates, ex velit harum repellat?</p>
              </div>
              <img src="/placeholder.svg?height=80&width=80" alt="Img" className="w-20 h-20 object-cover rounded-md" />
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