'use client'

import Link from 'next/link'
import { Home, Info, Phone } from 'lucide-react'
import Image from 'next/image'
import logo from '@/./assets/synergy-logo.png'

export function HeaderComponent() {
  return (
    <header className="bg-white shadow-md font-sans p-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
              alt='Synergy Logo'
              src={logo}
              width={80}
              height={80}
              />
            </Link>
          </div>
          <nav className="hidden sm:flex sm:space-x-6">
            <Link 
              href="/" 
              className="group flex items-center px-3 py-2 text-sm font-medium text-gray-800 transition duration-300 ease-in-out"
            >
              <Home className="h-5 w-5 mr-1 group-hover:text-blue-500" />
              <span className="relative">
                Home
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </span>
            </Link>
            <Link 
              href="/about" 
              className="group flex items-center px-3 py-2 text-sm font-medium text-gray-800 transition duration-300 ease-in-out"
            >
              <Info className="h-5 w-5 mr-1 group-hover:text-green-500" />
              <span className="relative">
                About
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </span>
            </Link>
            <Link 
              href="/contact" 
              className="group flex items-center px-3 py-2 text-sm font-medium text-gray-800 transition duration-300 ease-in-out"
            >
              <Phone className="h-5 w-5 mr-1 group-hover:text-purple-500" />
              <span className="relative">
                Contact Us
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </span>
            </Link>
          </nav>
          <div className="sm:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}