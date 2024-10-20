'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import tradingrl from '@/./assets/Stock-rl.jpeg'
import visionImg from '@/./assets/vision.jpg'
import thirdImg from '@/./assets/b.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'

const slides = [
  {
    image: tradingrl,
    title: 'About Us',
    description: `At Synergy Incorporation, we are pioneers in the proprietary trading space, offering aspiring and professional traders access to a world-class platform specialized in Indian futures contracts. Our mission is to equip traders with the tools, strategies, and real-time insights to excel in the dynamic Indian futures markets. With Synergy, you don't just trade; you learn, grow, and succeed with confidence, backed by a secure and robust trading ecosystem that adheres to the latest SEBI and RBI regulations.`,
    buttonText: 'Start Trading',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    image: visionImg,
    title: 'Our Vision',
    description: `To revolutionize futures trading in India by providing a platform where traders can hone their skills, access real-time analytics, and execute trades with confidence, thus creating a new generation of financially empowered traders.`,
    buttonText: 'Learn More',
    buttonColor: 'bg-green-500 hover:bg-green-600',
  },
  {
    image: thirdImg,
    title: 'Our Mission',
    description: `To create an accessible, transparent, and profitable trading environment where Indian futures traders can explore their full potential by offering cutting-edge technology, a seamless user experience, and continuous educational support. Our mission is to democratize trading for all and help shape the future of financial markets in India.`,
    buttonText: 'Explore Tools',
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
  },
]

export function TradingCarouselComponent() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 15000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const variants = {
    hidden: { opacity: 0, y: 50 },  // Animation for entering the slide
    visible: { opacity: 1, y: 0 },  // Animation for being fully visible
    exit: { opacity: 0, y: -50 },   // Animation for leaving the slide
  }

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            transform: `translateX(${(index - currentSlide) * 100}%)`,
          }}
        >
          <Image
            width={0}
            height={650}
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8 md:p-16">
            <motion.h2
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.6, ease: 'easeInOut' }} // Title animation
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {slide.title}
            </motion.h2>

            <motion.p
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }} // Description animation
              className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl"
            >
              {slide.description}
            </motion.p>

            <motion.button
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }} // Button animation
              className={`${slide.buttonColor} text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105`}
            >
              {slide.buttonText}
            </motion.button>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      <div className="absolute bottom-4 right-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
