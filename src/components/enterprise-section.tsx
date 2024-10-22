'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import buildingSVG from '@/./assets/building.svg'
import Image from "next/image"

export function EnterpriseSection() {
  return (
    <div className="glassmorphism p-8 md:p-12 lg:p-16 rounded-3xl m-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">How can we help you?</h2>
          <p className="text-lg text-gray-700">
           
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg">
            Contact Us
          </Button>
        </div>
        <div className="lg:w-1/2 relative bg-red-400">
          <Image
          
            src={buildingSVG}
            alt="Team collaboration"
            className="rounded-2xl shadow-lg hover:scale-105 overflow-hidden"
            width={500}
            height={200}
          />
          <div className="absolute -top-4 right-[4rem] bg-blue-500 w-24 h-24 rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 bg-teal-500 w-16 h-16 rounded-full"></div>
          {/* <Badge className="absolute top-4 left-4 bg-white text-blue-500">Charlie</Badge>
          <Badge className="absolute bottom-4 right-4 bg-white text-teal-500">Sonja</Badge>
          <Badge className="absolute top-1/2 right-[6rem] transform translate-x-1/2 -translate-y-1/2 bg-white text-pink-500">
            WHa
          </Badge> */}
          <div className="absolute bottom-8 left-8 bg-blue-600 p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M3 7V5c0-1.1.9-2 2-2h2"></path>
              <path d="M17 3h2c1.1 0 2 .9 2 2v2"></path>
              <path d="M21 17v2c0 1.1-.9 2-2 2h-2"></path>
              <path d="M7 21H5c-1.1 0-2-.9-2-2v-2"></path>
              <rect width="7" height="5" x="7" y="7" rx="1"></rect>
              <rect width="7" height="5" x="10" y="12" rx="1"></rect>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}